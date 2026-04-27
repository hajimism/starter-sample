import * as v from "valibot";

const schema = v.object({
	NEXT_PUBLIC_API_BASE_URL: v.pipe(v.string(), v.url()),
	NEXT_PUBLIC_APP_URL: v.pipe(v.string(), v.url()),
});

export type ClientEnv = v.InferOutput<typeof schema>;

export const clientEnv: ClientEnv = v.parse(schema, {
	NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
	NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});
