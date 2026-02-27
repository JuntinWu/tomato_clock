## Why

We have successfully set up the foundational React/Vite/Tailwind project. The next step is to implement the Pomodoro timer UI exactly matching the provided high-fidelity design in `clock_dark.pen`. We need to build out the React components (Modes, Timer, Controls, Progress Tracking) to make it ready for future functionality binding.

## What Changes

- Create the `Modes` component to switch between Focus, Short Break, and Long Break.
- Create the `Timer` component featuring the circular ring and the large countdown text.
- Create the `Controls` component with Start, Pause, Reset, and the Auto/Manual toggle switch.
- Create the `ProgressTracking` component providing visual feedback on elapsed Pomodoros.
- Assemble all components into the main App layout.

## Capabilities

### New Capabilities
- `pomodoro-ui`: Implements the visual hierarchy and structure of the Pomodoro application, utilizing shadcn/ui and custom Tailwind classes.

### Modified Capabilities

## Impact

- Populates the empty Vite application with the actual visual interface.
- Establishes the exact component structure required to bind the timer's state logic in subsequent tasks.
