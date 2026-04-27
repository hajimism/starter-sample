import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from ".";

const meta = {
	component: Badge,
	title: "common/Badge",
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { children: "Badge" },
};

export const Secondary: Story = {
	args: { children: "Secondary", variant: "secondary" },
};

export const Destructive: Story = {
	args: { children: "Error", variant: "destructive" },
};

export const Outline: Story = {
	args: { children: "Outline", variant: "outline" },
};
