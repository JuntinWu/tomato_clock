## Purpose
建立 React + Vite + TypeScript 的專案基礎，包含程式碼品質工具與 UI 元件框架的初始設定。

## Requirements

### Requirement: React 與 Vite 基礎設置
專案 MUST 使用 Vite 搭配 React 與 TypeScript 範本進行初始化。

#### Scenario: 開發者啟動專案
- **WHEN** 開發者執行 `npm run dev`
- **THEN** Vite 開發伺服器成功啟動，並渲染預設的 React 應用程式。

### Requirement: 程式碼品質工具
專案 MUST 包含 ESLint，用於程式碼格式化與靜態分析。

#### Scenario: 開發者執行程式碼檢查
- **WHEN** 開發者執行 `npm run lint`
- **THEN** ESLint 掃描整個程式碼庫，並回報任何程式邏輯或風格上的錯誤。

### Requirement: UI 基礎框架
專案 MUST 包含 Tailwind CSS，並完成 shadcn/ui 的初始化設定，以供元件開發使用。

#### Scenario: 開發者使用 shadcn 元件
- **WHEN** 開發者匯入 shadcn 元件
- **THEN** 該元件以預設的 shadcn 樣式及 Tailwind 工具類別正確渲染。
