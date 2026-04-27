import { configure, getConsoleSink } from "@logtape/logtape";

/**
 * Initialize logging for the application.
 * Call once at the app entry point (e.g. instrumentation.ts or layout.tsx).
 */
export const setupLogger = async (options?: {
	level?: "debug" | "info" | "warning" | "error";
}) => {
	await configure({
		loggers: [
			{
				category: "app",
				lowestLevel: options?.level ?? "info",
				sinks: ["console"],
			},
		],
		sinks: {
			console: getConsoleSink({
				formatter: (record) => {
					const ts = new Date(record.timestamp).toISOString();
					const level = record.level.toUpperCase().padEnd(5);
					const cat = record.category.join(".");
					const msg = record.message.join("");
					const props = record.properties;
					const propsStr =
						Object.keys(props).length > 0 ? ` ${JSON.stringify(props)}` : "";
					return `${ts} [${level}] ${cat}: ${msg}${propsStr}`;
				},
			}),
		},
	});
};
