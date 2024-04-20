'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelectItemProps = Select.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-blue-500 dark:data-[highlighted]:bg-slate-300"
      {...props}
    >
      <Select.ItemText className="text-black dark:text-zinc-100">
        {text}
      </Select.ItemText>

      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-blue-500 dark:text-blue-700" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
