import { getLogger } from "@logtape/logtape";

export { configure, getConsoleSink, getStreamSink } from "@logtape/logtape";

const APP_CATEGORY = "app" as const;

type Category = "api" | "auth" | "db" | "job" | "ui";

/**
 * Get a structured logger for a specific domain.
 *
 * @example
 * ```ts
 * const log = createLogger("api");
 * log.info("Request received", { method: "GET", path: "/users", requestId: "abc-123" });
 * log.error("Request failed", { status: 500, error: "Internal Server Error" });
 * ```
 */
export const createLogger = (category: Category) =>
	getLogger([APP_CATEGORY, category]);

/**
 * Get a child logger scoped to a specific module within a domain.
 *
 * @example
 * ```ts
 * const log = createScopedLogger("api", "users");
 * log.info("User created", { userId: "u_123" });
 * ```
 */
export const createScopedLogger = (category: Category, scope: string) =>
	getLogger([APP_CATEGORY, category, scope]);
