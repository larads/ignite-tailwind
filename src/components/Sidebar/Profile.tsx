import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile flex-row items-center gap-3">
      <img
        src="https://github.com/larads.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-300">
          Mariana da Silva
        </span>
        <span className="truncate text-sm text-zinc-400">
          mariana@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-red-600" />
      </button>
    </div>
  )
}
