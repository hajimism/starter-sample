<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Rules

## Directory structure

```
app/          # Next.js App Router (pages, layouts, globals.css)
common/       # Shared utilities and components
  components/ # Reusable UI components
  hooks/      # Custom React hooks
  lib/        # Pure utility functions (re-exports from libraries)
model/        # Domain layer (types, schemas, business logic)
```

## Code style

- Prefer functional, expression-oriented style. Use `const` + arrow functions over `function` declarations.
- Favor immutable data. Use `map`, `filter`, `pipe` (from remeda) instead of imperative loops.
- Avoid `class`. Use plain objects, types, and functions.
- Use `ts-pattern` `match` for complex conditionals instead of if/else chains.
- Use `Result` (from `@praha/byethrow`) for operations that can fail. Do not throw exceptions for expected errors.
- Use `valibot` for runtime validation schemas.

## Code organization

- Generic, reusable functions belong in `common/lib/`. Do not scatter utility logic across feature directories.
- `common/lib/` files re-export from third-party libraries (remeda, date-fns, ts-pattern, etc.) to centralize dependencies and keep imports consistent.
- Domain-specific types and schemas belong in `model/`, not in `common/`.
- React components use named exports. No default exports except for Next.js pages/layouts.

## Testing

- Tests live next to their source file: `foo.ts` → `foo.test.ts`.
- Most tests should be in `common/` since that is where testable pure logic lives. Feature-level tests are acceptable but keep them minimal.
- Use `test.concurrent` by default for stateless tests.
- See `.cursor/skills/testing/SKILL.md` for detailed testing conventions.

## Logging

- Use `createLogger` / `createScopedLogger` from `@/common/lib/logger`. Never use `console.log` or raw `getLogger`.
- Always pass structured context as the second argument. Include identifiers (userId, requestId, etc.).
- Add logging at system boundaries: API handlers, job runners, external calls. Avoid logging in pure functions.
- See `.cursor/skills/logging/SKILL.md` for detailed conventions.

## Tooling

- Package manager: `bun`. Run scripts via `bun run` or `mr` alias.
- Linting/formatting: `biome`. Run `bun run check` to verify, `bun run fix` to auto-fix.
- Always run `bun run check` and `tsc --noEmit` before committing.

## Agent instructions

- All agent-facing documents (SKILL.md, AGENTS.md, rule files) must be written in simple English.
- Keep instructions concise and actionable. Do not explain things the agent already knows.
