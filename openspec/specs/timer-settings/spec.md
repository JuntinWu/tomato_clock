### Requirement: Timer Settings Dialog
The application MUST provide a settings dialog where users can customize the duration of Focus, Short Break, and Long Break sessions using slider controls.

#### Scenario: User opens the settings dialog
- **WHEN** the user clicks the gear (⚙️) button in the header
- **THEN** a centered modal dialog appears with a semi-transparent backdrop overlay.

#### Scenario: User adjusts Focus duration via slider
- **WHEN** the user drags the Focus slider to 50 minutes and clicks Save
- **THEN** the Focus timer duration is updated to 50 minutes
- **THEN** the timer resets and pauses to reflect the new duration.

#### Scenario: User closes settings without saving
- **WHEN** the user clicks the backdrop or the close button without clicking Save
- **THEN** the dialog closes and no changes are applied to the timer durations.
