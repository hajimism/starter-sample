import path from "node:path";
import { fileURLToPath } from "node:url";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

const dirname =
	typeof __dirname !== "undefined"
		? __dirname
		: path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(dirname, "."),
		},
	},
	test: {
		projects: [
			{
				extends: true,
				test: {
					include: ["**/*.test.ts", "**/*.test.tsx"],
					name: "unit",
				},
			},
			{
				extends: true,
				plugins: [
					storybookTest({
						configDir: path.join(dirname, ".storybook"),
					}),
				],
				test: {
					browser: {
						enabled: true,
						headless: true,
						instances: [{ browser: "chromium" }],
						provider: playwright({}),
					},
					name: "storybook",
				},
			},
		],
	},
});
