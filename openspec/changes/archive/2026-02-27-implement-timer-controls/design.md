## Context

We have the basic `TimerDisplay` and `Controls` UI built, and `activeMode` is maintained in `App.tsx`. However, the timer is static. We need to implement the actual countdown logic (tick every second) and wire up the `Controls` buttons (Start, Pause, Reset).

## Goals / Non-Goals

**Goals:**
- Maintain `timeRemaining` (in seconds) in `App.tsx` state.
- Maintain `isRunning` (boolean) in `App.tsx` state.
- Implement a `useEffect` hook with `setInterval` to decrement `timeRemaining` when `isRunning` is true.
- Pass `onStart`, `onPause`, and `onReset` handlers to `Controls` component.
- Calculate circular progress `strokeDashoffset` dynamically in `TimerDisplay`.

**Non-Goals:**
- Sound notifications/alarms.
- Background sync or service workers (relying on basic `setInterval` for this iteration).
- Auto-transition between modes.

## Decisions

- **Interval Handling**: We will use a standard React `useEffect` with `setInterval` of 1000ms. Rationale: It represents the simplest, most idiomatic React way to handle a 1-second tick for a timer. While `setInterval` can drift slightly over long periods or when the tab is inactive, it's sufficient for this iteration of a Pomodoro timer.
- **Progress Calculation**: `TimerDisplay` will receive a `progressPercentage` prop (0 to 100) or total duration prop to compute the ring's offset. Given we have `timeRemaining` and `totalTime` (from `MODE_DURATIONS[activeMode]`), we can compute `progress = (timeRemaining / totalTime) * 100`. The SVG circle offset will be calculated inside `TimerDisplay`.

## Risks / Trade-offs

- **Risk: Timer drift due to `setInterval`** -> Mitigation: If drift becomes a significant issue later, we can refactor to compare against `Date.now()` on every tick. For now, `setInterval` is acceptable.
