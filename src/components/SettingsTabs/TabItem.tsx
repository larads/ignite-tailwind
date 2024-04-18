'use client'

import * as Tabs from '@radix-ui/react-tabs'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 align-top text-sm font-medium text-zinc-500 hover:text-blue-500 data-[state=active]:text-blue-500"
    >
      <span>{title}</span>

      {isSelected && (
        <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-blue-500" />
      )}
    </Tabs.Trigger>
  )
}
