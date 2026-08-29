"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [showPwaPopup, setShowPwaPopup] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between p-4 md:p-6">
      
      {/* HEADER */}
      <header className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-6">
        <h1 className="text-2xl font-black text-blue-600 tracking-wide">LifeForge</h1>

        {showPwaPopup && (
          <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1.5 rounded-xl border border-yellow-300">
            <span>📥 Install App</span>
            <button onClick={() => setShowPwaPopup(false)} className="ml-1 text-slate-500">✕</button>
          </div>
        )}

        <button 
          onClick={() => router.push("/portfolio")}
          className="p-2.5 bg-blue-50 text-blue-600 font-bold text-xs rounded-full"
        >
          👤 Profile
        </button>
      </header>

      {/* 4 MAIN GRID CARDS */}
      <main className="flex-1 flex flex-col gap-4">

        {/* 1. STUDY HUB */}
        <div 
          onClick={() => router.push("/courses")}
          className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:scale-[1.01] p-5 rounded-2xl shadow-md text-white cursor-pointer transition-all flex items-center justify-between"
        >
          <div>
            <h2 className="text-xl font-extrabold">📖 Study Hub</h2>
            <p className="text-xs text-amber-100 mt-0.5">School & College Gamified AI Learning</p>
          </div>
          <span className="text-2xl">✨</span>
        </div>

        {/* 2. WORKOUTS */}
        <div 
          onClick={() => alert("Workouts Hub Opening...")}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-[1.01] p-5 rounded-2xl shadow-md text-white cursor-pointer transition-all flex items-center justify-between"
        >
          <div>
            <h2 className="text-xl font-extrabold">🏋️ Workouts</h2>
            <p className="text-xs text-blue-100 mt-0.5">AI Guided Animated Exercise Trainer</p>
          </div>
          <span className="text-2xl">⚡</span>
        </div>

        {/* 3. HABIT BREAKER */}
        <div 
          onClick={() => alert("Habit Breaker Module Opening...")}
          className="bg-gradient-to-r from-rose-500 to-red-600 hover:scale-[1.01] p-5 rounded-2xl shadow-md text-white cursor-pointer transition-all flex items-center justify-between"
        >
          <div>
            <h2 className="text-xl font-extrabold">🛡️ Habit Breaker</h2>
            <p className="text-xs text-rose-100 mt-0.5">Quit Bad Habits with AI Visual Guides</p>
          </div>
          <span className="text-2xl">🔥</span>
        </div>

        {/* 4. ANALYTICS */}
        <div 
          onClick={() => alert("Analytics Section Opening...")}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:scale-[1.01] p-5 rounded-2xl shadow-md text-white cursor-pointer transition-all flex items-center justify-between"
        >
          <div>
            <h2 className="text-xl font-extrabold">📈 Analytics</h2>
            <p className="text-xs text-emerald-100 mt-0.5">Track Your Daily Growth & Progress</p>
          </div>
          <span className="text-2xl">📊</span>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="mt-8 text-center py-4 border-t border-slate-200">
        <p className="text-xs font-bold text-slate-500">LifeForge - Change your Life</p>
      </footer>

    </div>
  );
}
