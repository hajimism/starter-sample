import { expect, test } from "vitest";

import { cn } from "./cn";

test.concurrent("merges class names", () => {
	expect(cn("px-2", "px-4")).toBe("px-4");
});

test.concurrent("handles conditional classes", () => {
	expect(cn("text-red-500", false && "hidden", "font-bold")).toBe(
		"text-red-500 font-bold",
	);
});
