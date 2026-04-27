import type { ComponentProps } from "react";
import { forwardRef } from "react";

import { cn } from "@/common/lib/cn";

export const Card = forwardRef<HTMLDivElement, ComponentProps<"div">>(
	({ className, ...props }, ref) => (
		<div
			className={cn(
				"rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",
				className,
			)}
			ref={ref}
			{...props}
		/>
	),
);
Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, ComponentProps<"div">>(
	({ className, ...props }, ref) => (
		<div
			className={cn("flex flex-col space-y-1.5 p-6", className)}
			ref={ref}
			{...props}
		/>
	),
);
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLHeadingElement, ComponentProps<"h3">>(
	({ className, ...props }, ref) => (
		<h3
			className={cn(
				"text-2xl font-semibold leading-none tracking-tight",
				className,
			)}
			ref={ref}
			{...props}
		/>
	),
);
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<
	HTMLParagraphElement,
	ComponentProps<"p">
>(({ className, ...props }, ref) => (
	<p
		className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)}
		ref={ref}
		{...props}
	/>
));
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
	({ className, ...props }, ref) => (
		<div className={cn("p-6 pt-0", className)} ref={ref} {...props} />
	),
);
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, ComponentProps<"div">>(
	({ className, ...props }, ref) => (
		<div
			className={cn("flex items-center p-6 pt-0", className)}
			ref={ref}
			{...props}
		/>
	),
);
CardFooter.displayName = "CardFooter";
