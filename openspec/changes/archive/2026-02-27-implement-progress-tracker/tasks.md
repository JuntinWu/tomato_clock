## 1. Track Completed Cycles
- [x] 1.1 In `App.tsx`, add `completedCycles` to the state, initialized to `0`.
- [x] 1.2 In the timer `setInterval` effect, add logic: if `prev === 0` AND the `activeMode` is `"focus"`, increment `completedCycles` by 1. Keep the existing interval clearing logic.

## 2. Update ProgressTracker Component
- [x] 2.1 Update `ProgressTracker.tsx` to accept a `completedCycles` prop (number).
- [x] 2.2 Calculate `cyclesThisRound = completedCycles % 4`.
- [x] 2.3 Calculate `longBreakRound = Math.floor(completedCycles / 4) * 4 + 4`.
- [x] 2.4 Update the text to display: \`已完成 ${cyclesThisRound}/4 個專注時段，下一次長休息在第 ${longBreakRound} 回合\`.
- [x] 2.5 Update the four progress dots to dynamically render active (`#E85A4F`) or inactive (`#2A2A2E`) colors based on `cyclesThisRound`.

## 3. Wire Up and Verify
- [x] 3.1 In `App.tsx`, pass `completedCycles` down to the `ProgressTracker` element.
- [x] 3.2 Verify in the browser that finishing a "Focus" session correctly updates the text and highlights the dots.
