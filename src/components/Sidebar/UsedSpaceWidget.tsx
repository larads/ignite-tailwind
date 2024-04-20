export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-blue-200 px-4 py-5 dark:bg-slate-500">
      <div className="space-y-1">
        <span className="text-base font-semibold text-blue-800 dark:text-slate-200">
          Used space
        </span>
        <p className="text-sm/5 text-blue-700 dark:text-blue-800">
          Treinando Tailwind...
        </p>
      </div>

      <div className="h-2 rounded-full bg-zinc-300">
        <div className="h-2 w-4/5 rounded-full bg-blue-900" />
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-blue-700 hover:text-blue-900 dark:text-blue-800"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium text-blue-700 hover:text-blue-900 dark:text-blue-800"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
