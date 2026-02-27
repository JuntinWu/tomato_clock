## MODIFIED Requirements

### Requirement: Mode Selector Component
The application MUST display a row of buttons allowing the user to switch between "Focus 25m", "Short Break 5m", and "Long Break 15m". The component receives the active mode and handles changes via props instead of managing its own internal state.

#### Scenario: User views the mode selector
- **WHEN** the application loads
- **THEN** the mode selector is visible at the top of the interface.

### Requirement: Circular Timer Component
The application MUST display a large circular progress ring with a countdown timer text in the center, and a status subtitle below it. The component receives the dynamic formatted time text via props, reflecting the current state of the application.

#### Scenario: User views the timer
- **WHEN** the application loads
- **THEN** a circular timer displaying "25:00" and an active status subtitle (e.g., "目前階段：專注中") is shown.
