## 1. Implement Timer State logic
- [x] 1.1 Add `timeRemaining` (number) and `isRunning` (boolean) to `App.tsx` state.
- [x] 1.2 Initialize `timeRemaining` to the full duration of the initially selected mode.
- [x] 1.3 Add a `useEffect` hook in `App.tsx` that sets up a 1-second `setInterval` when `isRunning` is true, decrementing `timeRemaining` until it reaches 0. Clear the interval on unmount or when `isRunning` becomes false.

## 2. Refactor Core Actions
- [x] 2.1 Implement `handleStart`, `handlePause`, and `handleReset` functions in `App.tsx` to manipulate `isRunning` and `timeRemaining` state appropriately.
- [x] 2.2 Update the `setActiveMode` handler to also reset `timeRemaining` to the new mode's full duration and pause the timer (`isRunning = false`).

## 3. Wire Up Components
- [x] 3.1 Update `src/components/Controls.tsx` to accept `onStart`, `onPause`, `onReset`, and `isRunning` props.
- [x] 3.2 Wire the Start, Pause, and Reset buttons in `Controls.tsx` to call their respective functions. Conditionally disable or distinguish standard actions based on `isRunning` if necessary (e.g. swap Start/Pause display or disabled states).
- [x] 3.3 Update `src/components/TimerDisplay.tsx` to accept `progressPercentage` and visually adjust the secondary SVG circle's `stroke-dashoffset` based on progress.

## 4. Final Polish
- [x] 4.1 Verify visually that the progress ring animates smoothly down as the time counts down.
- [x] 4.2 Verify that switching modes correctly resets and pauses the timer to the new mode's duration.
