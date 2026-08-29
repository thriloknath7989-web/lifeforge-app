"use client";

import { useRouter } from "next/navigation";

export default function AnalyticsPage() {
  const router = useRouter();

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-[#f4f7fb] pb-28 font-sans text-slate-900">
      <div className="flex items-center gap-3 px-5 pt-6 pb-4 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100">
        <button
          onClick={() => router.push("/dashboard")}
          className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-700 active:scale-95 transition-transform"
        >
          ←
        </button>
        <div>
          <h1 className="text-xl font-black">📊 Analytics & Growth</h1>
          <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
            Your Performance Metrics
          </p>
        </div>
      </div>

      <div className="px-5 mt-5 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-[22px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
            <span className="text-2xl mb-1 block">⏱️</span>
            <h3 className="text-2xl font-black text-slate-900">18.5 hrs</h3>
            <p className="text-[10px] font-bold text-slate-400">Weekly Study Time</p>
          </div>
          <div className="bg-white p-4 rounded-[22px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
            <span className="text-2xl mb-1 block">🎯</span>
            <h3 className="text-2xl font-black text-slate-900">92%</h3>
            <p className="text-[10px] font-bold text-slate-400">AI Exam Accuracy</p>
          </div>
        </div>
      </div>

      <div className="px-5 mb-6">
        <div className="bg-white p-5 rounded-[28px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
          <h3 className="font-black text-sm mb-4">Subject Progress</h3>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex justify-between text-xs font-black mb-1">
                <span>Physics</span>
                <span className="text-blue-600">85%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full w-[85%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-black mb-1">
                <span>Chemistry</span>
                <span className="text-purple-600">70%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full w-[70%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-black mb-1">
                <span>Mathematics</span>
                <span className="text-amber-600">90%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[440px] bg-white/70 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/50 px-5 py-3.5 flex justify-between items-center z-50">
        <button onClick={() => router.push("/dashboard")} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="text-lg">🏠</span>
          <span className="text-[9px] font-bold">HOME</span>
        </button>
        <button onClick={() => router.push("/courses")} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="text-lg">📖</span>
          <span className="text-[9px] font-bold">COURSES</span>
        </button>
        <button onClick={() => router.push("/workouts")} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="text-lg">🏋️</span>
          <span className="text-[9px] font-bold">WORKOUTS</span>
        </button>
        <button onClick={() => router.push("/analytics")} className="flex flex-col items-center gap-1 text-amber-500 font-black">
          <span className="text-lg">📊</span>
          <span className="text-[9px] font-black">STATS</span>
        </button>
        <button onClick={() => router.push("/admin")} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="text-lg">⚙️</span>
          <span className="text-[9px] font-bold">ADMIN</span>
        </button>
      </div>
    </div>
  );
}
