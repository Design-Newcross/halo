import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#28e9c6] text-[#002858] hover:bg-[#20d4b1] active:bg-[#1bc4a6]",
        destructive: "bg-[#c80809] text-white hover:bg-[#b00708] active:bg-[#9a0607]",
        outline: "border border-[#28e9c6] bg-transparent text-[#002858] hover:bg-[#28e9c6] hover:text-[#002858]",
        secondary: "bg-[#f5f5f5] text-[#002858] hover:bg-[#e8e8e9] active:bg-[#d0d0d2]",
        ghost: "hover:bg-[#f5f5f5] hover:text-[#002858]",
        link: "text-[#002858] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-5 py-2 text-base font-semibold",
        sm: "h-8 px-4 py-1 text-sm font-medium",
        lg: "h-14 px-6 py-3 text-lg font-semibold",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Handle disabled state styling
    const disabledClasses = disabled ? 
      variant === "outline" 
        ? "border-[#d0d0d2] bg-transparent text-[#898b8f] hover:bg-transparent hover:text-[#898b8f]"
        : "bg-[#e8e8e9] text-[#898b8f] hover:bg-[#e8e8e9]"
      : ""

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          disabled && disabledClasses
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }