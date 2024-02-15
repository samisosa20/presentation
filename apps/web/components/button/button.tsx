import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
  "flex gap-2 items-center w-max px-4 py-3",
  {
    variants: {
      variant: {
        default: "bg-primary-100 text-body-100 hover:bg-primary-200 font-bold text-base",
      },
      rounded: {
        none: "rounded-none",
        default: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      rounded: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, rounded, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, className, rounded }),
          props.disabled &&
            "bg-muted text-muted-foreground pointer-events-none",
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
