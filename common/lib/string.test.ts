import { expect, test } from "vitest";

import { capitalize, join } from "./string";

test.concurrent("capitalizes a string", () => {
	expect(capitalize("hello")).toBe("Hello");
});

test.concurrent("joins strings", () => {
	expect(join(["a", "b", "c"], "-")).toBe("a-b-c");
});
