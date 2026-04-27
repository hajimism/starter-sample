import type { ComponentProps } from "react";

import { cn } from "@/common/lib/cn";

export const Skeleton = ({ className, ...props }: ComponentProps<"div">) => (
	<div
		className={cn(
			"animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800",
			className,
		)}
		{...props}
	/>
);
