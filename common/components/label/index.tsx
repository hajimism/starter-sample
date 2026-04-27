import type { ComponentProps } from "react";
import { forwardRef } from "react";

import { cn } from "@/common/lib/cn";

type LabelProps = ComponentProps<"label">;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
	({ className, ...props }, ref) => (
		// biome-ignore lint/a11y/noLabelWithoutControl: htmlFor is passed via props
		<label
			className={cn(
				"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
				className,
			)}
			ref={ref}
			{...props}
		/>
	),
);

Label.displayName = "Label";
