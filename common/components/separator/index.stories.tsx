import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Separator } from ".";

const meta = {
	component: Separator,
	title: "common/Separator",
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};

export const Vertical: Story = {
	args: { orientation: "vertical" },
	decorators: [
		(Story) => (
			<div className="h-10">
				<Story />
			</div>
		),
	],
};
