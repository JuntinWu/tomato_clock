## MODIFIED Requirements

### Requirement: Circular Timer Component
The application MUST display a large circular progress ring with a countdown timer text in the center, and a status subtitle below it. The component receives the dynamic formatted time text and a `progress` value (between 0 and 1) via props. The SVG progress ring MUST visually animate its `stroke-dashoffset` to accurately reflect the `progress` value over time.

#### Scenario: User views the timer counting down
- **WHEN** the timer is running and the `progress` prop updates
- **THEN** the circular timer's ring smoothly animates to show the correct proportion of elapsed time.
