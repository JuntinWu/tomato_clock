## Why

Currently, the Pomodoro UI is a static visual representation. When a user clicks on different modes (Focus, Short Break, Long Break), the 'active' state changes visually within the `ModeSelector`, but the actual countdown time displayed in the `TimerDisplay` remains statically "25:00". We need to implement state management so that the active mode controls the current timer value smoothly.

## What Changes

- Lift the `activeMode` state out of `ModeSelector` and into a shared parent (e.g., `App.tsx`).
- Define the duration for each mode (Focus = 25m, Short Break = 5m, Long Break = 15m).
- Pass the appropriate formatted time down to the `TimerDisplay` component based on the selected mode.

## Capabilities

### New Capabilities
- `timer-state`: Manages the active mode selection and coordinates the initial time values displayed in the timer.

### Modified Capabilities
- `pomodoro-ui`: The UI components now accept props for state rather than managing it internally or hardcoding it.

## Impact

- Modifies `App.tsx` to hold the application state.
- Modifies `ModeSelector.tsx` to accept the current mode and an `onChange` handler via props.
- Modifies `TimerDisplay.tsx` to accept the current time string via props.
