import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/old/lib/utils"

const buttonVariants = cva(
  `group cursor-pointer select-none relative  text-white font-semibold
  transition duration-300 ease-[cubic-bezier(0.25,1.5,0.5,1)] 
  hover:scale-[0.96] active:translate-y-1 focus:outline-none will-change-transform`,
  {
    variants: {
      variant: {
        default:
          "bg-[#FF8170] shadow-[0_6px_0_0_#994B4B] hover:shadow-[0_4px_0_0_#994B4B] active:shadow-[0_2px_0_0_#994B4B]",
        outline:
          "bg-[#FF8170] shadow-[0_6px_0_0_#994B4B] hover:shadow-[0_4px_0_0_#994B4B] active:shadow-[0_2px_0_0_#994B4B]",
        secondary:
          "bg-[#A0BF87] shadow-[0_6px_0_0_#527536] hover:shadow-[0_4px_0_0_#527536] active:shadow-[0_2px_0_0_#527536]",
        // "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2 rounded-2xl text-sm md:text-base ",
        sm: "rounded-xl gap-1.5 text-xs px-3 py-2 has-[>svg]:px-2.5",
        // lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "w-13 h-10 p-3 flex items-center justify-center rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
