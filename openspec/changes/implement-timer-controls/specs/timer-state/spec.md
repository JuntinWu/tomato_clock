## MODIFIED Requirements

### Requirement: Timer Mode State
The application MUST maintain the currently active timer mode (Focus, Short Break, Long Break) and update the active time display accordingly. Switching modes MUST reset any currently running or paused timer to the new mode's full duration.

#### Scenario: User switches to Short Break mode
- **WHEN** the user clicks the "Short Break 5m" button
- **THEN** the active mode is updated to "Short Break"
- **THEN** the timer stops running, and the display updates to show "05:00"

#### Scenario: User switches to Long Break mode
- **WHEN** the user clicks the "Long Break 15m" button
- **THEN** the active mode is updated to "Long Break"
- **THEN** the timer stops running, and the display updates to show "15:00"

#### Scenario: User switches to Focus mode
- **WHEN** the user clicks the "Focus 25m" button
- **THEN** the active mode is updated to "Focus"
- **THEN** the timer stops running, and the display updates to show "25:00"
