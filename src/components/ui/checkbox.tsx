import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"
import { cn } from "../../lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const checkboxVariants = cva(
  "peer h-6 w-6 shrink-0 border-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-[#002858] data-[state=checked]:bg-[#28e9c6] data-[state=checked]:border-[#28e9c6] data-[state=checked]:text-[#002858] data-[state=indeterminate]:bg-[#28e9c6] data-[state=indeterminate]:border-[#28e9c6] data-[state=indeterminate]:text-[#002858] hover:border-[#28e9c6]",
        error: "border-[#c80809] data-[state=checked]:bg-[#c80809] data-[state=checked]:border-[#c80809] data-[state=checked]:text-white data-[state=indeterminate]:bg-[#c80809] data-[state=indeterminate]:border-[#c80809] data-[state=indeterminate]:text-white hover:border-[#ff4444]"
      },
      size: {
        default: "h-6 w-6",
        sm: "h-5 w-5",
        lg: "h-7 w-7"
      },
      shape: {
        square: "rounded-md",
        rounded: "rounded-lg",
        circle: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "rounded"
    }
  }
)

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, size, shape, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ variant, size, shape, className }))}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      {props.checked === "indeterminate" || props.indeterminate ? (
        <Minus className="h-4 w-4" />
      ) : (
        <Check className="h-4 w-4" />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox, checkboxVariants }