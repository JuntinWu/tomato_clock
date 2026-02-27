## 1. Setup Data Structures
- [x] 1.1 Define the `Mode` type and a `MODE_DURATIONS` constant mapping modes to their default times in seconds (e.g., Focus=1500, ShortBreak=300, LongBreak=900) in `App.tsx` or a shared types file.

## 2. Refactoring Components
- [x] 2.1 Refactor `src/components/ModeSelector.tsx` to remove its internal state and instead accept `activeMode` and an `onChange(mode: Mode)` callback as props.
- [x] 2.2 Refactor `src/components/TimerDisplay.tsx` to accept `timeFormatted` (string) and `statusText` (string) as props instead of hardcoding "25:00" and "目前階段：專注中".

## 3. State Integration in App
- [x] 3.1 Introduce `useState` in `src/App.tsx` to hold the currently `activeMode` (defaulting to 'focus').
- [x] 3.2 Create derived values in `src/App.tsx` to compute the `timeFormatted` string (e.g., "25:00" or "05:00") and the `statusText` based on the `activeMode`.
- [x] 3.3 Pass the state, derived values, and the `setActiveMode` setter down to the `ModeSelector` and `TimerDisplay` components in the `App.tsx` render function.
- [x] 3.4 Verify that clicking the modes in the UI updates the timer display matching the requirements.
