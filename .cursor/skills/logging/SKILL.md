---
name: logging
description: Add structured logging using logtape. Use when adding log statements, creating loggers, setting up logging, or when the user mentions logging, observability, or diagnostics.
---

# Logging

## Setup

- **Library**: `@logtape/logtape` (structured, hierarchical, zero-dependency)
- **Wrapper**: `@/common/lib/logger.ts` (creates pre-scoped loggers)
- **Init**: `@/common/lib/logger.setup.ts` (call `setupLogger()` once at app entry)

## Creating loggers

Always use `createLogger` or `createScopedLogger` from `@/common/lib/logger.ts`. Never call `getLogger` from logtape directly.

```typescript
import { createLogger } from "@/common/lib/logger";

const log = createLogger("api");
```

Available categories: `"api"`, `"auth"`, `"db"`, `"job"`, `"ui"`.

For narrower scope within a category:

```typescript
import { createScopedLogger } from "@/common/lib/logger";

const log = createScopedLogger("api", "users");
// category: ["app", "api", "users"]
```

## Structured log messages

Always pass context as the second argument. Use `{placeholder}` syntax for key fields:

```typescript
log.info("User {userId} logged in", { userId, loginMethod: "oauth" });
log.error("Payment failed", { orderId, amount, error: err.message });
```

## What to log

| Level     | When to use |
|-----------|-------------|
| `debug`   | Verbose info for local dev (query params, intermediate state) |
| `info`    | Key business events (user signup, order placed, job started) |
| `warning` | Recoverable issues (retry, fallback used, deprecated path hit) |
| `error`   | Failures requiring attention (unhandled error, external service down) |

## Rules

1. **One logger per module.** Declare `const log = createLogger(...)` at module top level.
2. **Always include identifiers.** Log `userId`, `requestId`, `orderId`, etc. Logs without identifiers are hard to trace.
3. **Never log sensitive data.** No passwords, tokens, PII, or secrets.
4. **Use structured props, not string interpolation.** `log.info("Created", { id })` not `log.info(\`Created \${id}\`)`.
5. **Log at boundaries.** API handlers, job runners, and external calls are good places. Avoid logging inside tight loops or pure functions.

## Initialization

Call `setupLogger()` once in the app entry point:

```typescript
import { setupLogger } from "@/common/lib/logger.setup";

await setupLogger({ level: "debug" }); // or "info" for production
```

For Next.js, use `instrumentation.ts`:

```typescript
export async function register() {
  const { setupLogger } = await import("@/common/lib/logger.setup");
  await setupLogger({ level: process.env.NODE_ENV === "production" ? "info" : "debug" });
}
```
