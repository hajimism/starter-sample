import { expect, test } from "vitest";

import { formatDate } from "./date";

test.concurrent("formats YYYY-MM-DD", () => {
	const date = new Date(2026, 0, 15);
	expect(formatDate(date, "YYYY-MM-DD")).toBe("2026-01-15");
});

test.concurrent("formats YYYY/MM/DD HH:mm", () => {
	const date = new Date(2026, 3, 8, 9, 5);
	expect(formatDate(date, "YYYY/MM/DD HH:mm")).toBe("2026/04/08 09:05");
});

test.concurrent("formats YYYY年M月D日", () => {
	const date = new Date(2026, 3, 8);
	expect(formatDate(date, "YYYY年M月D日")).toBe("2026年4月8日");
});

test.concurrent("formats HH:mm:ss", () => {
	const date = new Date(2026, 0, 1, 14, 30, 45);
	expect(formatDate(date, "HH:mm:ss")).toBe("14:30:45");
});
