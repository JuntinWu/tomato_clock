## Why

The `ProgressTracker` component is currently hardcoded to display "已完成 1/4 個專注時段" and a static set of four dots. To make the Pomodoro clock fully functional, this component needs to reflect the actual number of completed focus sessions and dynamically update the visual dots.

## What Changes

- Add state to `App.tsx` to track the number of completed focus cycles (`completedCycles`).
- Update the timer completion logic to increment `completedCycles` when a "Focus" session ends.
- Pass `completedCycles` down to the `ProgressTracker` component.
- Update `ProgressTracker.tsx` to dynamically render the text and the four indicator dots based on the active cycle count.

## Capabilities

### New Capabilities
None.

### Modified Capabilities
- `pomodoro-ui`: Update the `Progress Tracker Component` requirements to specify dynamic tracking of completed pomodoros.

## Impact

- `App.tsx`: New state `completedCycles` and logic to update it when timer hits `0` during a Focus mode.
- `ProgressTracker.tsx`: Accept `completedCycles` as a prop and use it to render the text and indicator dots dynamically.
