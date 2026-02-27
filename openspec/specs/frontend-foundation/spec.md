## ADDED Requirements

### Requirement: React and Vite Setup
The project MUST be initialized using Vite with the React and TypeScript template.

#### Scenario: Developer starts the project
- **WHEN** the developer runs `npm run dev`
- **THEN** the Vite development server starts successfully and renders the default React app.

### Requirement: Code Quality Tools
The project MUST include ESLint for code formatting and linting.

#### Scenario: Developer lints code
- **WHEN** the developer runs `npm run lint`
- **THEN** ESLint checks the codebase and reports any programmatic or stylistic errors.

### Requirement: UI Foundation
The project MUST include Tailwind CSS and shadcn ui initialized for building components.

#### Scenario: Developer uses shadcn components
- **WHEN** the developer imports a shadcn component
- **THEN** the component renders correctly with the default shadcn styling and Tailwind utility classes.
