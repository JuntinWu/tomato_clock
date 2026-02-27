## 1. Math and State Logic
- [x] 1.1 In `App.tsx`, calculate `progress` as a float between 0 and 1: `(timeRemaining / MODE_DURATIONS[activeMode])`.
- [x] 1.2 Pass `progress` down to `TimerDisplay` as a prop.

## 2. Refactor SVG Component
- [x] 2.1 Update `TimerDisplay.tsx` to add `progress` to its props interface `TimerDisplayProps`.
- [x] 2.2 Calculate `circumference` based on the SVG circle radius (`r=98`).
- [x] 2.3 Calculate `strokeDashoffset` dynamically: `circumference - progress * circumference`.
- [x] 2.4 Apply `strokeDasharray` and dynamic `strokeDashoffset` to the active `#E85A4F` SVG `<circle>` element.
- [x] 2.5 Add standard Tailwind transition classes (e.g., `transition-all duration-1000 ease-linear`) to the animating circle.

## 3. Verify Animation
- [x] 3.1 Verify that starting the timer correctly scales the ring down every second without visual glitching.
