import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Avatar, AvatarFallback, AvatarImage } from ".";

const meta = {
	component: Avatar,
	title: "common/Avatar",
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
	render: () => (
		<Avatar>
			<AvatarImage alt="User" src="https://github.com/hajimism.png" />
			<AvatarFallback>HN</AvatarFallback>
		</Avatar>
	),
};

export const Fallback: Story = {
	render: () => (
		<Avatar>
			<AvatarFallback>HN</AvatarFallback>
		</Avatar>
	),
};
