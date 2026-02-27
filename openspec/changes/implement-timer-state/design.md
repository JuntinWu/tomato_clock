## Context

Currently, the `ModeSelector` and `TimerDisplay` are static UI components that hardcode their own displays. To make the timer functional, we need to lift the state up so that selecting a different mode updates the `TimerDisplay` with the appropriate countdown value.

## Goals / Non-Goals

**Goals:**
- Centralize the `activeMode` state in `App.tsx` (or a Context provider).
- Pass `activeMode` and `setActiveMode` to `ModeSelector` via props.
- Store map of mode durations (Focus=25m, Short=5m, Long=15m).
- Pass the appropriate formatted time string to `TimerDisplay` via props.

**Non-Goals:**
- Implementing the actual ticking countdown timer logic (e.g., `setInterval()`). This design only concerns the state management of initial time values and mode selection.

## Decisions

- **State Location**: The state will be lifted to `App.tsx` using `useState`. Rationale: The application is simple enough that React Context or external libraries (Zustand/Redux) are overkill for now. `App.tsx` can act as the controller.
- **Mode Durations**: We will define a constant map `MODE_DURATIONS: Record<Mode, number>` representing the durations in seconds, to ensure robust handling later when the countdown logic is built.
- **Props Interface**: 
  - `ModeSelector` will take `activeMode` and `onModeChange` props.
  - `TimerDisplay` will take `timeFormatted` (e.g., `"25:00"`) and `currentStatus` (e.g., `"目前階段：專注中"`) props.

## Risks / Trade-offs

- **Risk: Prop drilling**: If the component tree gets deep, passing props from `App.tsx` might become messy. → Mitigation: Currently the component tree is flat (all children of App), so prop drilling is not an issue. We can introduce Context later if needed.
