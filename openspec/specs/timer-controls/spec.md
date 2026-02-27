### Requirement: Start Countdown
The application MUST allow the user to start the timer countdown from the currently selected mode's full duration.

#### Scenario: User starts the timer
- **WHEN** the user clicks the "Start" button
- **THEN** the timer begins counting down by 1 second every second
- **THEN** the progress ring updates visually to reflect the remaining time

### Requirement: Pause Countdown
The application MUST allow the user to pause a running timer, holding its current remaining time until resumed.

#### Scenario: User pauses the timer
- **WHEN** the user clicks the "Pause" button while the timer is running
- **THEN** the countdown stops
- **THEN** the current remaining time is preserved on the display

### Requirement: Reset Timer
The application MUST allow the user to reset the timer back to its initial value for the currently selected mode.

#### Scenario: User resets the timer
- **WHEN** the user clicks the "Reset" button
- **THEN** the timer stops running
- **THEN** the timer display reverts to the full duration of the active mode (e.g. 25:00)
