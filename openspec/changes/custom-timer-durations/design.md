## Context

目前 `App.tsx` 使用一個 `MODE_DURATIONS` 常數物件來定義三種模式的時長。使用者希望能透過 UI 上的滑桿自訂這三段時間。此功能不需要 localStorage 持久化。

## Goals / Non-Goals

**Goals:**
- 將 `MODE_DURATIONS` 常數替換為 React 狀態 `durations`，初始值與現在相同。
- 建立 `SettingsDialog` 元件：中央彈出 Modal，包含三組標籤 + 滑桿（Focus: 1-60 分鐘, Short Break: 1-30 分鐘, Long Break: 1-60 分鐘）。
- Header 右側新增齒輪按鈕，控制 Modal 的 open/close。
- 儲存設定時：更新 `durations` 狀態，重置當前計時器為新值並暫停。

**Non-Goals:**
- 不做 localStorage 或後端持久化。
- 不做複雜的表單驗證（滑桿本身的 min/max 即為驗證）。

## Decisions

- **滑桿元件**：使用原生 HTML `<input type="range">`，搭配 Tailwind 自訂樣式，與現有深色主題一致。滑桿旁邊顯示目前數值（分鐘數）。
- **Modal 行為**：點擊背景遮罩或「關閉」按鈕可關閉 Modal（不儲存）。點擊「儲存」按鈕才會套用新設定。
- **計時器重置策略**：儲存設定時，無論計時器是否正在執行，都會暫停並重置為新的時長。這避免了使用者在計時中途改設定造成的混亂狀態。

## Risks / Trade-offs

- **Risk**：使用者可能在計時中途不小心改了設定，導致進度歸零。
  - **Mitigation**：儲存時暫停並重置，行為明確且可預期。使用者可以簡單地按下「開始」繼續。
