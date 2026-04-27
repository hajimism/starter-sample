import { configure, getConsoleSink } from "@logtape/logtape";
import { afterEach, beforeEach, expect, test, vi } from "vitest";

import { createLogger, createScopedLogger } from "./logger";

beforeEach(async () => {
	await configure({
		loggers: [{ category: "app", lowestLevel: "debug", sinks: ["console"] }],
		reset: true,
		sinks: { console: getConsoleSink() },
	});
});

afterEach(async () => {
	await configure({ loggers: [], reset: true, sinks: {} });
});

test.concurrent("createLogger returns a logger with correct category", () => {
	const log = createLogger("api");
	expect(log).toBeDefined();
	expect(log.category).toEqual(["app", "api"]);
});

test.concurrent("createScopedLogger returns a scoped logger", () => {
	const log = createScopedLogger("db", "users");
	expect(log).toBeDefined();
	expect(log.category).toEqual(["app", "db", "users"]);
});

test("logger outputs structured data", () => {
	const spy = vi.spyOn(console, "info").mockImplementation(() => {});
	const log = createLogger("api");

	log.info("Request received", { method: "GET", path: "/users" });

	expect(spy).toHaveBeenCalled();
	spy.mockRestore();
});
