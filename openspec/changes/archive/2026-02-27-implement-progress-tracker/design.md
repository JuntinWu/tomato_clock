## Context

The `ProgressTracker` component currently holds static mockup values. To provide functional value, it must track and display the number of `Focus` sessions the user has completed. A standard Pomodoro cycle involves 4 focus sessions before a longer break.

## Goals / Non-Goals

**Goals:**
- Add state to `App.tsx` that increments when a focus timer hits `0`.
- Pass this state to `ProgressTracker.tsx`.
- Update `ProgressTracker` to dynamically render the "X/4" text and highlight the corresponding number of dots.

**Non-Goals:**
- Automatically switching modes when the timer hits zero (this depends on another implementation/feature, this design strictly covers tracking the count and updating the visualization).
- Persisting this data beyond a page reload (out of scope for now, keep it in React state).

## Decisions

- **State Management**: `completedCycles` (number) managed in `App.tsx`.
- **Increment Logic**: In the `useEffect` handling the interval, when `timeRemaining` reaches `0` AND `activeMode === 'focus'`, we increment `completedCycles`. (If `completedCycles` reaches 4, we might reset it to 0, or just evaluate `completedCycles % 4`. For simplicity, we'll track indefinitely and use `completedCycles % 4` for display, or reset it after a long break.)
  - *Decision*: We will increment indefinitely and let the components derive `cyclesThisRound = (completedCycles % 4)` to show progress towards the next long break.

## Risks / Trade-offs

- **Risk**: Overcomplicating the reset logic.
  - **Mitigation**: We will explicitly manage `completedCycles` by adding a handler to reset it, or just use modular arithmetic. To keep it simple, we'll pass `completedCycles` down and let `ProgressTracker` worry about visualizing it modulo 4.
