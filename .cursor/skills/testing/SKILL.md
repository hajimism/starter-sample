---
name: testing
description: Write and run tests using vitest. Use when creating tests, writing test files, or when the user mentions testing, vitest, test coverage, or test patterns.
---

# Testing

## Setup

- **Runner**: vitest (config in `vitest.config.ts`)
- **Mock data**: falso (tree-shakable, use instead of faker)
- **Scripts**: `bun run test` (single run), `bun run test:watch` (watch mode)

## Rules

1. **Always use `test.concurrent`** for pure functions and stateless tests (especially in `common/`).
2. **Use `test` (non-concurrent)** only when tests share mutable state or depend on execution order.
3. **Use falso for mock data generation** instead of hardcoding arbitrary values. Import only what you need:
   ```typescript
   import { randFullName, randEmail, randNumber } from "falso";
   ```
4. **Import from vitest**, not from `bun:test`:
   ```typescript
   import { describe, expect, test } from "vitest";
   ```

## File conventions

- Test files live next to their source: `foo.ts` → `foo.test.ts`
- Use `describe` blocks only when grouping related scenarios; flat `test.concurrent` calls are preferred for simple modules.

## Example

```typescript
import { randFullName } from "falso";
import { expect, test } from "vitest";

import { formatName } from "./name";

test.concurrent("formats a full name", () => {
  const name = randFullName();
  const result = formatName(name);
  expect(result).toBe(name.toUpperCase());
});
```

## Import order

Imports in test files follow biome organizeImports groups:

1. Node builtins (`node:*`)
2. Packages (`vitest`, `falso`, etc.)
3. Project aliases (`@/common/**`, `@/model/**`, `@/app/**`)
4. Relative paths (`./foo`)
