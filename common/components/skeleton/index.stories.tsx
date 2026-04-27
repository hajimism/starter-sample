import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Skeleton } from ".";

const meta = {
	component: Skeleton,
	title: "common/Skeleton",
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { className: "h-4 w-48" },
};

export const Circle: Story = {
	args: { className: "h-12 w-12 rounded-full" },
};

export const Card: Story = {
	render: () => (
		<div className="flex flex-col space-y-3">
			<Skeleton className="h-[125px] w-[250px] rounded-xl" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	),
};
