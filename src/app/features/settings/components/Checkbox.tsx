"use client"

import { Checkbox } from "@/components/ui/checkbox"

type props = {
  head: string;
  sub: string;
}


export function CheckboxWithText({ head, sub }: props) {
  return (
    <div className="items-top flex space-x-2 py-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {head}
        </label>
        <p className="text-sm text-muted-foreground">
          {sub}
        </p>
      </div>
    </div>
  )
}
