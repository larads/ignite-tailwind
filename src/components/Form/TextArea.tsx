import { ComponentProps } from 'react'

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 bg-slate-900 px-3 py-2 shadow-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100
       dark:border-zinc-500 dark:bg-slate-900 dark:text-white dark:placeholder-zinc-300 dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
      {...props}
    />
  )
}
