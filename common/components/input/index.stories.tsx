import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from ".";

const meta = {
	component: Input,
	title: "common/Input",
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { placeholder: "Enter text..." },
};

export const Disabled: Story = {
	args: { disabled: true, placeholder: "Disabled" },
};

export const WithValue: Story = {
	args: { defaultValue: "Hello world" },
};

export const Password: Story = {
	args: { placeholder: "Password", type: "password" },
};
