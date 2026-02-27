## ADDED Requirements

### Requirement: Mode Selector Component
The application MUST display a row of buttons allowing the user to switch between "Focus 25m", "Short Break 5m", and "Long Break 15m".

#### Scenario: User views the mode selector
- **WHEN** the application loads
- **THEN** the mode selector is visible at the top of the interface.

### Requirement: Circular Timer Component
The application MUST display a large circular progress ring with a countdown timer text in the center, and a status subtitle below it.

#### Scenario: User views the timer
- **WHEN** the application loads
- **THEN** a circular timer displaying "25:00" and an active status subtitle (e.g., "目前階段：專注中") is shown.

### Requirement: Control Buttons Component
The application MUST display a row of primary action buttons (Start, Pause, Reset) and an Auto/Manual toggle switch below them.

#### Scenario: User views the controls
- **WHEN** the application loads
- **THEN** the Start, Pause, and Reset buttons are displayed within a card container, alongside the auto/manual toggle.

### Requirement: Progress Tracking Component
The application MUST display the user's progress through their Pomodoro sessions, showing completed rounds as dots and text information.

#### Scenario: User views session progress
- **WHEN** the application loads
- **THEN** a card displaying the current session completion status (e.g., "已完成 1/4 個專注時段") and visual indicator dots is visible.
