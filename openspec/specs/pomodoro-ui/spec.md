### Requirement: Circular Timer Component
The application MUST display a large circular progress ring with a countdown timer text in the center, and a status subtitle below it. The component receives the dynamic formatted time text and a `progress` value (between 0 and 1) via props. The SVG progress ring MUST visually animate its `stroke-dashoffset` to accurately reflect the `progress` value over time. The progress ring MUST feature rounded stroke caps for a polished appearance.

#### Scenario: User views the timer counting down
- **WHEN** the timer is running and the `progress` prop updates
- **THEN** the circular timer's ring smoothly animates to show the correct proportion of elapsed time.
- **THEN** the progress indicator stroke has visually rounded ends.

### Requirement: Control Buttons Component
The application MUST display a row of primary action buttons (Start, Pause, Reset) and an Auto/Manual toggle switch below them. The component receives callback functions via props (`onStart`, `onPause`, `onReset`) to trigger the respective actions.

#### Scenario: User views the controls
- **WHEN** the application loads
- **THEN** the Start, Pause, and Reset buttons are displayed within a card container, alongside the auto/manual toggle.

### Requirement: Settings Gear Button
The application MUST display a gear icon button (⚙️) in the header area that opens the timer settings dialog when clicked.

#### Scenario: User sees the settings button
- **WHEN** the application loads
- **THEN** a gear icon button is visible in the top-right area of the header.

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
