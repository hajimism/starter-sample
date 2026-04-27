import type { ComponentProps } from "react";
import { forwardRef } from "react";

import { cn } from "@/common/lib/cn";

const variants = {
	default:
		"bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200",
	destructive:
		"bg-red-500 text-white hover:bg-red-600 dark:bg-red-900 dark:hover:bg-red-800",
	ghost: "hover:bg-zinc-100 dark:hover:bg-zinc-800",
	outline:
		"border border-zinc-200 bg-white hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800",
	secondary:
		"bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700",
} as const;

const sizes = {
	default: "h-10 px-4 py-2",
	icon: "h-10 w-10",
	lg: "h-11 px-8",
	sm: "h-9 px-3 text-sm",
} as const;

type ButtonProps = ComponentProps<"button"> & {
	variant?: keyof typeof variants;
	size?: keyof typeof sizes;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = "default", size = "default", ...props }, ref) => (
		<button
			className={cn(
				"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",
				variants[variant],
				sizes[size],
				className,
			)}
			ref={ref}
			{...props}
		/>
	),
);

Button.displayName = "Button";
