## Why

The current timer implementation accurately counts down the numbers in the center of the `TimerDisplay` component, but the circular progress ring remains static. We need to complete the visual experience by animating the SVG circle's stroke, providing a clear visual indicator of the remaining time.

## What Changes

- Modify `TimerDisplay.tsx` to calculate the `strokeDashoffset` dynamically based on a new `progress` prop (percentage of time remaining).
- Pass the necessary calculations (either passing the current time / total time down from `App.tsx`, or passing the raw `progress` float directly) to the `TimerDisplay` component.

## Capabilities

### New Capabilities
None needed; this is an enhancement of existing UI capabilities.

### Modified Capabilities
- `pomodoro-ui`: The `TimerDisplay` component needs a requirement specifying that the visual ring accurately reflects the countdown progress.

## Impact

- `App.tsx`: Needs to compute the current progress percentage based on `timeRemaining` and the total duration for the current mode, then pass this value to `TimerDisplay`.
- `TimerDisplay.tsx`: Will receive a `progress` prop (e.g., `0` to `1` or `0` to `100`) and use it to calculate the correct `strokeDashoffset` for the SVG circle element.
