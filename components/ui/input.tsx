import * as React from "react"

import { cn } from "@/lib/utils"
import { notoFont } from "@/app/(root)/font"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-neutral-900 placeholder:text-neutral-500 bg-neutral-50 border-input !border-neutral-200 flex h-10 w-full min-w-0 rounded-md border px-[0.8125rem] py-[0.5625rem] text-sm transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:!border-[#444CE7] focus-visible:ring-2 focus-visible:ring-[rgba(68,76,231,0.12)]",
        "aria-invalid:ring-[rgba(217, 45, 32, 0.12) ] aria-invalid:border-red-600",
        notoFont.className,
        className
      )}
      {...props}
    />
  )
}

export { Input }
