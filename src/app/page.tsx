export default function Home() {
  return (
    <div className="p-8 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 h-screen flex flex-col items-center text-center">
      <div className="max-w-app">
        <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl flex items-center gap-3 before:w-0.5 before:h-8 before:bg-sky-500 before:flex">
          Hello Tailwind
        </h1>
        <p className="mt-4 dark:text-slate-400 text-xl">Treinando...</p>
        <button className="bg-sky-500 dark:bg-sky-400 dark:text-sky-950 text-white px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed">
          Sign In
        </button>
      </div>
    </div>
  );
}
