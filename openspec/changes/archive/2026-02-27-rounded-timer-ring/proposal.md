## Why

The circular progress ring in the `TimerDisplay` currently has flat, squared-off stroke caps. Applying rounded stroke caps (`stroke-linecap="round"`) will give the app a more polished, modern, and friendly aesthetic that aligns better with premium UI designs.

## What Changes

- Add the `strokeLinecap="round"` property to the `<circle>` SVG element used for the progress ring in `TimerDisplay.tsx`.

## Capabilities

### New Capabilities
None needed; this is a tiny visual enhancement.

### Modified Capabilities
- `pomodoro-ui`: Update the `TimerDisplay` visual requirements to specify that the progress ring should have rounded edges.

## Impact

- `TimerDisplay.tsx`: Will receive a single HTML property update on its SVG `<circle>`.
