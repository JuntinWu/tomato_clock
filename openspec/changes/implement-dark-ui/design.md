## Context

The UI design for the "Dark Clean Mobile Dashboard" Pomodoro Timer is provided via `clock_dark.pen`. We have set up a React/Vite/TS/Tailwind frontend, and now need to implement the visual components. The goal is to perfectly transcribe the visual design into React components using shadcn ui primitives where appropriate, before building out state management logic.

## Goals / Non-Goals

**Goals:**
- Faithfully implement the `clock_dark.pen` layout and typography in React and Tailwind.
- Break down the UI into logical, reusable presentation components (e.g., `ModeSelector`, `TimerDisplay`, `Controls`, `ProgressTracker`).
- Enable responsive design (mobile-first rendering, adjusting appropriately on larger screens).

**Non-Goals:**
- Implementing the countdown timer logic, state management, audio notifications, or actual Pomodoro cycle tracking in this phase. This phase is purely visual ("切版").

## Decisions

- **Architecture Strategy**: We will build stateless "dumb" components that accept props for their visual state (e.g., `activeMode="focus"`, `isPlaying=false`). This makes them easier to test and visually verify in isolation before adding complex state logic later.
- **Component Styling**: We will use standard Tailwind utility classes mapping to the custom variables established in `index.css` (e.g., `bg-card`, `text-primary`).
- **Icons**: We will use `lucide-react` icons (standard for shadcn) to match the iconography in the design file.

## Risks / Trade-offs

- **Risk: Perfect pixel mapping** from a design tool to the DOM can be tedious with flexbox. → Mitigation: We will leverage the `batch_get` and `get_screenshot` tools of the Pencil MCP server inside the `.pen` file to extract exact gaps, paddings, and font sizes.
