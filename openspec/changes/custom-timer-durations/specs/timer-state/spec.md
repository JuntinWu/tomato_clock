## MODIFIED Requirements

### Requirement: Timer Mode State
The application MUST maintain the currently active timer mode (Focus, Short Break, Long Break) and update the active time display according to the user's custom timer duration settings. When no custom settings have been applied, the default durations (Focus: 25m, Short Break: 5m, Long Break: 15m) MUST be used.

#### Scenario: User switches to Short Break mode
- **WHEN** the user clicks the "Short Break" button
- **THEN** the active mode is updated to "Short Break"
- **THEN** the timer display updates to show the currently configured Short Break duration.

#### Scenario: User switches to Long Break mode
- **WHEN** the user clicks the "Long Break" button
- **THEN** the active mode is updated to "Long Break"
- **THEN** the timer display updates to show the currently configured Long Break duration.

#### Scenario: User switches to Focus mode
- **WHEN** the user clicks the "Focus" button
- **THEN** the active mode is updated to "Focus"
- **THEN** the timer display updates to show the currently configured Focus duration.
