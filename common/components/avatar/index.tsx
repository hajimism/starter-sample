import type { ComponentProps } from "react";
import { forwardRef } from "react";

import { cn } from "@/common/lib/cn";

export const Avatar = forwardRef<HTMLDivElement, ComponentProps<"div">>(
	({ className, ...props }, ref) => (
		<div
			className={cn(
				"relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
				className,
			)}
			ref={ref}
			{...props}
		/>
	),
);
Avatar.displayName = "Avatar";

export const AvatarImage = forwardRef<HTMLImageElement, ComponentProps<"img">>(
	({ className, ...props }, ref) => (
		// biome-ignore lint/a11y/useAltText: alt is passed via props
		// biome-ignore lint/performance/noImgElement: Next Image is unsuitable inside avatar containers
		<img
			className={cn("aspect-square h-full w-full", className)}
			ref={ref}
			{...props}
		/>
	),
);
AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = forwardRef<HTMLDivElement, ComponentProps<"div">>(
	({ className, ...props }, ref) => (
		<div
			className={cn(
				"flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800",
				className,
			)}
			ref={ref}
			{...props}
		/>
	),
);
AvatarFallback.displayName = "AvatarFallback";
