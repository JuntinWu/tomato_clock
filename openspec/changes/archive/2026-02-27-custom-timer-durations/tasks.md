## 1. State Management

- [x] 1.1 In `App.tsx`, replace the `MODE_DURATIONS` constant with a `durations` state: `useState({ focus: 25 * 60, shortBreak: 5 * 60, longBreak: 15 * 60 })`.
- [x] 1.2 Update all references of `MODE_DURATIONS` in `App.tsx` to use the new `durations` state (in `setActiveMode`, `handleReset`, and `progress` calculation).
- [x] 1.3 Add a `handleSaveSettings(newDurations)` function that updates `durations`, resets `timeRemaining` to the new value for the current `activeMode`, and sets `isRunning` to `false`.

## 2. Settings Dialog Component

- [x] 2.1 Create `src/components/SettingsDialog.tsx` with props: `isOpen`, `onClose`, `currentDurations`, `onSave`.
- [x] 2.2 Implement a centered modal with a semi-transparent dark backdrop (`bg-black/50`). Clicking the backdrop calls `onClose`.
- [x] 2.3 Add three labeled sliders (`<input type="range">`) for Focus (1–60 min), Short Break (1–30 min), Long Break (1–60 min). Display the current value in minutes next to each slider.
- [x] 2.4 Style the sliders and modal to match the existing dark theme (`bg-[#16161A]`, coral accents `#E85A4F`, text `#FAFAF9`).
- [x] 2.5 Add a「儲存」(Save) button that calls `onSave` with the new durations, and a「取消」(Cancel) button that calls `onClose`.

## 3. Header Integration

- [x] 3.1 In `App.tsx`, add a `showSettings` boolean state to control the modal visibility.
- [x] 3.2 Add a gear icon button (⚙️) to the right side of the header. Clicking it sets `showSettings` to `true`.
- [x] 3.3 Render `<SettingsDialog>` in `App.tsx`, passing `showSettings`, `setShowSettings(false)`, `durations`, and `handleSaveSettings`.

## 4. Verification

- [x] 4.1 Verify in the browser: clicking the gear opens the modal, adjusting sliders and saving updates the timer display correctly.
