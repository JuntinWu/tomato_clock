## Why

Currently, the Timer display updates statically when selecting a mode, but it does not actually count down. We need to implement the core Pomodoro timer functionality—allowing users to start, pause, and reset the countdown timer, utilizing the control buttons provided in the UI.

## What Changes

- Implement a ticking interval mechanism that decrements the timer every second when in the "running" state.
- Wire up the "開始" (Start) button to begin the countdown.
- Wire up the "暫停" (Pause) button to stop the countdown without losing current progress.
- Wire up the "重置" (Reset) button to revert the timer back to its initial value based on the selected mode.
- Update the progress SVG ring to visually reflect the time remaining.

## Capabilities

### New Capabilities
- `timer-controls`: Managing the active ticking state, tracking time remaining dynamically, and providing the start/pause/reset actions.

### Modified Capabilities
- `pomodoro-ui`: The `Controls` and `TimerDisplay` components will be modified to accept props that reflect and drive the ticking state.

## Impact

- `App.tsx`: Will handle the timer interval logic, `isRunning` state, and `timeRemaining` state.
- `Controls.tsx`: Will receive callbacks for `onStart`, `onPause`, `onReset` and potentially state to disable buttons appropriately.
- `TimerDisplay.tsx`: Will need to calculate the SVG circle's `stroke-dashoffset` dynamically based on the percentage of time remaining.
