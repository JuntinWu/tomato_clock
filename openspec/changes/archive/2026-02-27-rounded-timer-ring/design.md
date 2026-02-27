## Context

The circular progress ring (`TimerDisplay.tsx`) currently uses the default SVG stroke caps, which are flat (`butt`). The user wants these ends to be rounded to better fit the modern visual style.

## Goals / Non-Goals

**Goals:**
- Apply `strokeLinecap="round"` to the active progress indicator (`<circle>`).

**Non-Goals:**
- Any mathematical tweaks to the existing `progress` calculations.

## Decisions

- **SVG Attributes**: Simply adding `strokeLinecap="round"` to the animating `<circle>` element in `TimerDisplay.tsx`. This tells the browser to draw rounded caps at the start and end of the stroke.

## Risks / Trade-offs

- **Risk**: Adding rounded caps visually extends the line slightly beyond the exact mathematical `strokeDashoffset` (by a distance of `strokeWidth / 2`). 
  - **Mitigation**: For a pomodoro timer, this tiny visual delta is acceptable. If perfection was required, we would subtract the cap radius from the dash array, but it's unnecessary for this scale.
