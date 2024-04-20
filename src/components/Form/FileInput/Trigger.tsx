'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-400 shadow-sm hover:border-blue-200 hover:bg-blue-200 hover:text-blue-500
      dark:border-zinc-600 dark:hover:border-blue-700 dark:hover:bg-slate-900 dark:hover:text-blue-700"
    >
      <div className="rounded-full border-6 border-slate-900 bg-white p-2 group-hover:border-blue-500 group-hover:bg-zinc-100">
        <UploadCloud className="h-5 w-5 text-slate-900 group-hover:text-slate-900 dark:text-slate-900 dark:group-hover:text-blue-800" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-blue-700 dark:text-blue-500">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
