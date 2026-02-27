## Why

使用者目前只能使用預設的番茄鐘時間（專注 25 分鐘、短休 5 分鐘、長休 15 分鐘）。不同使用者有不同的專注節奏，例如有人偏好 50/10/30 的配置。提供自訂時段功能是番茄鐘 App 的核心需求之一。

## What Changes

- 在 Header 右側新增一個「⚙️」齒輪設定按鈕。
- 點擊齒輪按鈕後，畫面中央彈出一個 Modal（半透明背景遮罩 + 居中面板）。
- Modal 內包含三組**滑桿 (Slider)**，分別控制 Focus、Short Break、Long Break 的分鐘數。
- 儲存設定後，`App.tsx` 中的計時器時長狀態即時更新，計時器重置為新的時間。
- **不需要** localStorage 保留設定，每次重新載入回到預設值即可。

## Capabilities

### New Capabilities
- `timer-settings`: 使用者可透過滑桿調整三種模式的時間長度，並透過彈出視窗進行設定。

### Modified Capabilities
- `pomodoro-ui`: Header 區域新增設定齒輪按鈕。
- `timer-state`: 計時器初始化改為使用動態的使用者設定值，而非寫死的常數。

## Impact

- `App.tsx`：將 `MODE_DURATIONS` 常數改為 React 狀態，新增設定相關 handler。
- `SettingsDialog.tsx`（新元件）：包含三個滑桿與儲存/關閉按鈕的 Modal 元件。
- `Header`：調整 layout 以容納齒輪按鈕。
