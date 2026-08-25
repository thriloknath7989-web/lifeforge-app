import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between p-6 md:p-12">
      <nav className="flex justify-between items-center max-w-6xl mx-auto w-full mb-12">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-indigo-500/30">
            LF
          </div>
          <span className="text-xl font-bold tracking-wide text-white">LifeForge</span>
        </div>
        <Link 
          href="/login" 
          className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-500/25"
        >
          Get Started
        </Link>
      </nav>

      <section className="max-w-4xl mx-auto text-center my-auto py-12">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 inline-block mb-6">
          🚀 Next-Gen All-in-One Platform
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Master Skills, Break Habits & Build Your <span className="text-indigo-400">Public Portfolio</span>
        </h1>
        <p className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Self-paced courses, instant AI exams, habit breaker trackers, workouts, and a shareable digital portfolio link.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/login" 
            className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-white transition-all shadow-xl shadow-indigo-500/20"
          >
            Start Now
          </Link>
        </div>
      </section>

      <footer className="text-center text-xs text-slate-500 py-6">
        © 2026 LifeForge Multi-SaaS Platform. All rights reserved.
      </footer>
    </main>
  );
}
