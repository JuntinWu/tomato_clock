## Context

We have a high-fidelity "Dark Clean Mobile Dashboard" design for the Tomato Clock application in `clock_dark.pen`. We need a modern frontend stack to implement this design effectively, ensuring maintainability, type safety, and a premium aesthetic.

## Goals / Non-Goals

**Goals:**
- Establish a fast, modern build pipeline using Vite.
- Ensure type safety across the application using TypeScript.
- Enforce code quality standards with ESLint.
- Provide a robust UI component foundation using shadcn ui and Tailwind CSS to implement the dark aesthetic.

**Non-Goals:**
- Implementing the actual Pomodoro application logic or UI components in this phase.
- Setting up API integrations, backend, or a database.

## Decisions

- **Framework**: React with Vite. Vite offers significantly faster Hot Module Replacement (HMR) and build times compared to older tools.
- **Language**: TypeScript. Provides static typing, improving developer experience and catching errors early in the component hierarchy.
- **Styling**: Tailwind CSS. Required by shadcn ui. It allows for rapid utility-first styling to map directly to the `.pen` design system tokens, particularly the custom dark colors like `#0B0B0E`.
- **Component Library**: shadcn ui. Provides unstyled, accessible components that we can copy-paste and heavily customize using Tailwind. This allows us to perfectly match the design specifications without fighting default library styles.

## Risks / Trade-offs

- **Risk: Configuration Overhead** → Mitigation: Vite and the shadcn CLI handle most of the boilerplate configuration automatically. We will stick to standard initialization commands.
- **Trade-off: Verbose Markup** -> Tailwind's utility classes can lead to messy JSX. → Mitigation: We will leverage React components and `cn` utility functions to encapsulate complex styling and keep markup readable.
