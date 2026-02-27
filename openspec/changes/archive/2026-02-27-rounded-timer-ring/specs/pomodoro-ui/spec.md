## MODIFIED Requirements

### Requirement: Circular Timer Component
The application MUST display a large circular progress ring with a countdown timer text in the center, and a status subtitle below it. The component receives the dynamic formatted time text via props, reflecting the current state of the application. The progress ring MUST feature rounded stroke caps for a polished appearance.

#### Scenario: User views the timer
- **WHEN** the application loads
- **THEN** a circular timer displaying "25:00" and an active status subtitle (e.g., "目前階段：專注中") is shown.
- **THEN** the progress indicator stroke has visually rounded ends.
