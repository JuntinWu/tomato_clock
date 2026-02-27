## ADDED Requirements

### Requirement: Progress Tracker Component
The application MUST display a progress tracker component that visualizes the user's progress through a standard Pomodoro cycle (4 focus sessions followed by a long break). The component MUST dynamically display the number of completed focus sessions and highlight the corresponding number of progress dots.

#### Scenario: User views initial progress
- **WHEN** the user has completed 0 focus sessions
- **THEN** the text reads "已完成 0/4 個專注時段，下一次長休息在第 4 回合"
- **THEN** 0 out of 4 progress dots are highlighted (active color).

#### Scenario: User completes 2 focus sessions
- **WHEN** the user has completed 2 focus sessions
- **THEN** the text reads "已完成 2/4 個專注時段，下一次長休息在第 2 回合"
- **THEN** 2 out of 4 progress dots are highlighted (active color), and the remaining 2 are inactive.
