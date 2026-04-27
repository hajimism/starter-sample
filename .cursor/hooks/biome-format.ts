export {};

const { file_path } = JSON.parse(await Bun.stdin.text()) as {
	file_path: string;
};

await Bun.spawn(["bunx", "@biomejs/biome", "check", "--write", file_path], {
	stderr: "ignore",
	stdout: "ignore",
}).exited;
