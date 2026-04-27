import * as v from "valibot";

const schema = v.object({
	API_SECRET_KEY: v.pipe(v.string(), v.minLength(1)),
	DATABASE_URL: v.pipe(v.string(), v.url()),
});

export type ServerEnv = v.InferOutput<typeof schema>;

export const serverEnv: ServerEnv = v.parse(schema, process.env);
