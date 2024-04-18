import { SettingsTabs } from '@/components/SettingsTabs'

export default function Home() {
  return (
    <div className="-mt-16 flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <SettingsTabs />
      <div className="max-w-app">
        <h1 className="flex items-center gap-3 text-3xl font-bold before:flex before:h-8 before:w-0.5 before:bg-sky-500 sm:text-5xl lg:text-6xl">
          Hello Tailwind
        </h1>
        <p className="mt-4 text-xl dark:text-slate-400">Treinando...</p>
        <button className="mt-4 rounded-md bg-sky-500 px-4 py-2 font-medium text-white enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-sky-400 dark:text-sky-950">
          Sign In
        </button>
      </div>
    </div>
  )
}
