import type { ComponentProps } from "react";

import { cn } from "@/common/lib/cn";

const variants = {
	default: "bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900",
	destructive: "bg-red-500 text-white dark:bg-red-900",
	outline:
		"border border-zinc-200 text-zinc-950 dark:border-zinc-800 dark:text-zinc-50",
	secondary: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50",
} as const;

type BadgeProps = ComponentProps<"div"> & {
	variant?: keyof typeof variants;
};

export const Badge = ({
	className,
	variant = "default",
	...props
}: BadgeProps) => (
	<div
		className={cn(
			"inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors",
			variants[variant],
			className,
		)}
		{...props}
	/>
);
