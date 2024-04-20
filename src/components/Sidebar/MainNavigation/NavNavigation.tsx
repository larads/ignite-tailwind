import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-blue-100 dark:hover:bg-zinc-200"
    >
      <Icon className="h-5 w-5 text-zinc-200 group-hover:text-blue-900" />
      <span className="font-medium text-zinc-300 group-hover:text-blue-900 dark:text-zinc-100 dark:group-hover:text-slate-900">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-500 group-hover:text-blue-900 dark:text-zinc-200" />
    </a>
  )
}
