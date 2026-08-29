"use client";
​import { useRouter } from "next/navigation";
​export default function AnalyticsPage() {
const router = useRouter();
​return (
<div className="max-w-[480px] mx-auto min-h-screen bg-[#f4f7fb] pb-28 font-sans text-slate-900">
​{/* HEADER */}
<div className="flex items-center justify-between px-5 pt-6 pb-4 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100">
<div className="flex items-center gap-3">
<button onClick={() => router.push("/dashboard")} className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-black">
←
</button>
<div>
<h1 className="text-xl font-black">📊 Analytics</h1>
<p className="text-[10px] font-bold text-purple-600 uppercase">AI Productivity Report</p>
</div>
</div>
<span className="bg-purple-100 text-purple-700 text-[10px] font-extrabold px-2.5 py-1 rounded-full">
TOP 5% USER
</span>
</div>
​{/* OVERALL PERFORMANCE SCORE */}
<div className="px-5 my-4">
<div className="bg-gradient-to-br from-purple-700 to-indigo-900 p-5 rounded-[28px] text-white shadow-lg">
<span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full">
WEEKLY PROGRESS
</span>
<div className="flex justify-between items-end mt-4">
<div>
<h2 className="text-4xl font-black">88/100</h2>
<p className="text-xs text-purple-200 mt-1">Excellent Productivity Index</p>
</div>
<span className="text-2xl font-black text-green-400">↑ +14%</span>
</div>
</div>
</div>
​{/* DETAILED STATS */}
<div className="px-5">
<h3 className="font-black text-sm text-slate-800 mb-3">Activity Breakdown</h3>
​<div className="grid grid-cols-2 gap-3 mb-4">
<div className="bg-white p-4 rounded-[22px] border border-slate-100 shadow-sm">
<span className="text-lg">⏱️</span>
<h4 className="text-xl font-black text-slate-900 mt-1">32.5 Hrs</h4>
<p className="text-[10px] font-bold text-slate-400">Total Study Time</p>
</div>
​<div className="bg-white p-4 rounded-[22px] border border-slate-100 shadow-sm">
<span className="text-lg">🔥</span>
<h4 className="text-xl font-black text-slate-900 mt-1">2,850 kcal</h4>
<p className="text-[10px] font-bold text-slate-400">Burned in Gym</p>
</div>
</div>
​{/* WEAK POINTS AI ANALYSIS */}
<div className="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm">
<h4 className="font-black text-xs text-slate-900 mb-2">🤖 AI Subject Feedback</h4>
<p className="text-xs text-slate-600 leading-relaxed font-medium">
You scored high in <span className="font-bold text-blue-600">Calculus & Physics</span>, but need focus on <span className="font-bold text-amber-600">Thermodynamics</span> this week.
</p>
</div>
</div>
​{/* GLASS BOTTOM NAV */}
<div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[440px] bg-white/70 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/50 px-5 py-3.5 flex justify-between items-center z-50">
<button onClick={() => router.push("/dashboard")} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900">
<span className="text-lg">🏠</span>
<span className="text-[9px] font-bold tracking-wider">HOME</span>
</button>
<button onClick={() => router.push("/courses")} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900">
<span className="text-lg">📖</span>
<span className="text-[9px] font-bold tracking-wider">COURSES</span>
</button>
<button onClick={() => router.push("/workouts")} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900">
<span className="text-lg">🏋️</span>
<span className="text-[9px] font-bold tracking-wider">WORKOUTS</span>
</button>
<button onClick={() => router.push("/habits")} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900">
<span className="text-lg">🛡️</span>
<span className="text-[9px] font-bold tracking-wider">HABITS</span>
</button>
<button onClick={() => router.push("/admin")} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900">
<span className="text-lg">⚙️</span>
<span className="text-[9px] font-bold tracking-wider">ADMIN</span>
</button>
</div>
​</div>
);
  }
