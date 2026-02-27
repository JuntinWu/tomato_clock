## MODIFIED Requirements

### Requirement: Control Buttons Component
The application MUST display a row of primary action buttons (Start, Pause, Reset) and an Auto/Manual toggle switch below them. The component receives callback functions via props (`onStart`, `onPause`, `onReset`) to trigger the respective actions.

#### Scenario: User views the controls
- **WHEN** the application loads
- **THEN** the Start, Pause, and Reset buttons are displayed within a card container, alongside the auto/manual toggle.

### Requirement: Circular Timer Component
The application MUST display a large circular progress ring with a countdown timer text in the center, and a status subtitle below it. The component receives the dynamic formatted time text and a `progressPercentage` (or equivalent value) via props to accurately render the visual countdown.

#### Scenario: User views the timer
- **WHEN** the application loads
- **THEN** a circular timer displaying "25:00" and an active status subtitle (e.g., "目前階段：專注中") is shown.
