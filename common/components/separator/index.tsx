import type { ComponentProps } from "react";
import { forwardRef } from "react";

import { cn } from "@/common/lib/cn";

type SeparatorProps = Omit<ComponentProps<"hr">, "children"> & {
	orientation?: "horizontal" | "vertical";
};

export const Separator = forwardRef<HTMLHRElement, SeparatorProps>(
	({ className, orientation = "horizontal", ...props }, ref) => (
		<hr
			className={cn(
				"shrink-0 border-none bg-zinc-200 dark:bg-zinc-800",
				orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
				className,
			)}
			ref={ref}
			{...props}
		/>
	),
);

Separator.displayName = "Separator";
