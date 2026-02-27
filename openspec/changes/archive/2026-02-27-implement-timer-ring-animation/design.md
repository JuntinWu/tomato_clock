## Context

The `TimerDisplay` currently has an SVG circular progress ring, but its `strokeDashoffset` is statically set to `0`, meaning it always shows a full ring. The user wants this ring to accurately animate downwards as the `timeRemaining` decreases.

## Goals / Non-Goals

**Goals:**
- Calculate the `strokeDasharray` (circumference) based on the circle's radius.
- Calculate the `strokeDashoffset` based on the percentage of time remaining.
- Pass the necessary values (either `progressPercentage` or `timeRemaining` and `totalTime`) to `TimerDisplay`.
- Add a smooth CSS transition to the `stroke` property so it animates fluidly between seconds.

**Non-Goals:**
- Changing the base SVG structure or layout of the ring.

## Decisions

- **Props**: Instead of just passing `progressPercentage`, we will pass `progress` as a float between 0 and 1 (or 0 and 100) to `TimerDisplay`. This keeps `TimerDisplay` decoupled from the concepts of 'time' and 'seconds'.
- **Calculation in App**: `App.tsx` has access to `timeRemaining` and `MODE_DURATIONS[activeMode]`. It will calculate `progress = timeRemaining / MODE_DURATIONS[activeMode]`.
- **SVG Math**:
  - `radius = 98` (from the existing `<circle r="98" />`)
  - `circumference = 2 * Math.PI * radius` (approx 615.75)
  - `strokeDasharray = circumference`
  - `strokeDashoffset = circumference - (progress * circumference)`
- **Animation**: Add `transition-all duration-1000 ease-linear` to the SVG circle's Tailwind classes so the line moves smoothly over the 1-second interval.

## Risks / Trade-offs

- **Risk: Jumpy animation**: If the `setInterval` in React isn't perfectly timed, the 1-second CSS transition might look slightly out of sync.
  - **Mitigation**: Using `ease-linear` with `duration-1000` usually looks acceptable for Pomodoro timers. If it's too jittery, we can reduce the duration to `500` or `700` so it visibly "ticks" rather than trying to look completely continuous.
