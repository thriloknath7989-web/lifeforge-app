"use client";
​import { useState } from "react";
import { useRouter } from "next/navigation";
​export default function Dashboard() {
const router = useRouter();
const [activeTab, setActiveTab] = useState("ALL");
const [searchQuery, setSearchQuery] = useState("");
​const categories = ["ALL", "10th Class", "Inter 1st", "Inter 2nd", "Fitness"];
​return (
<div className="max-w-[480px] mx-auto min-h-screen bg-[#f4f7fb] pb-28 font-sans text-slate-900 relative">
​{/* 1. TOP HEADER BAR */}
<div className="flex items-center justify-between px-5 pt-6 pb-3 bg-[#f4f7fb]/80 backdrop-blur-md sticky top-0 z-40">
<div>
<h1 className="text-2xl font-black tracking-tight text-slate-900">LifeForge</h1>
<p className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest">
Level 12 • 840 XP
</p>
</div>
<div className="flex items-center gap-2">
<button
onClick={() => router.push("/notifications")}
className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 active:scale-95 transition-transform"
>
🔔
</button>
<div
onClick={() => router.push("/admin")}
className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 border-2 border-white shadow-md flex items-center justify-center font-bold text-white cursor-pointer active:scale-95 transition-transform"
>
A
</div>
</div>
</div>
​{/* 2. SEARCH BAR */}
<div className="px-5 my-2">
<div className="bg-white rounded-2xl p-2.5 px-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-3">
<span className="text-slate-400 text-sm">🔍</span>
<input
type="text"
placeholder="Search subjects, workouts, habits..."
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
className="w-full bg-transparent text-xs font-semibold text-slate-800 outline-none placeholder-slate-400"
/>
</div>
</div>
​{/* 3. SCROLLABLE FILTER PILLS */}
<div className="flex gap-2 px-5 py-3 overflow-x-auto no-scrollbar">
{categories.map((cat) => (
<button
key={cat}
onClick={() => setActiveTab(cat)}
className={whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${ activeTab === cat ? "bg-slate-900 text-white shadow-md" : "bg-white text-slate-600 border border-slate-100" }}
>
{cat}
</button>
))}
</div>
​{/* 4. HERO BANNER */}
<div className="px-5 my-3">
<div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 rounded-[28px] p-6 text-white shadow-xl relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
<span className="inline-block bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-purple-200 mb-2 border border-white/10">
AI STUDY HUB BATCH 2026
</span>
<h2 className="text-xl font-black leading-tight mb-1">
Master Intermediate & Class 10
</h2>
<p className="text-xs text-purple-200/80 mb-4 font-medium">
AI Instant Evaluation & Personalized Study Schedule.
</p>
<button
onClick={() => router.push("/courses")}
className="bg-white text-slate-900 font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-lg active:scale-95 transition-transform"
>
START NOW →
</button>
</div>
</div>
​{/* 5. POPULAR MODULES GRID */}
<div className="px-5 mt-5">
<div className="flex justify-between items-center mb-3">
<h3 className="font-black text-sm text-slate-900">Popular Modules</h3>
<span className="text-xs font-bold text-indigo-600">View All</span>
</div>
​<div className="grid grid-cols-2 gap-3.5">
{/* Card 1: Study Hub */}
<div
onClick={() => router.push("/courses")}
className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-[24px] text-white shadow-lg cursor-pointer active:scale-95 transition-transform flex flex-col justify-between min-h-[140px]"
>
<div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-lg">
📚
</div>
<div>
<h4 className="font-black text-sm">Study Hub</h4>
<p className="text-[10px] text-blue-100 font-medium">PCM & Board Prep</p>
</div>
</div>
​{/* Card 2: Workouts */}
<div
onClick={() => router.push("/workouts")}
className="bg-gradient-to-br from-amber-500 to-orange-600 p-4 rounded-[24px] text-white shadow-lg cursor-pointer active:scale-95 transition-transform flex flex-col justify-between min-h-[140px]"
>
<div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-lg">
🏋️
</div>
<div>
<h4 className="font-black text-sm">Workouts</h4>
<p className="text-[10px] text-amber-100 font-medium">Calisthenics & Gym</p>
</div>
</div>
​{/* Card 3: Habit Breaker */}
<div
onClick={() => router.push("/habits")}
className="bg-gradient-to-br from-emerald-500 to-teal-700 p-4 rounded-[24px] text-white shadow-lg cursor-pointer active:scale-95 transition-transform flex flex-col justify-between min-h-[140px]"
>
<div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-lg">
🛡️
</div>
<div>
<h4 className="font-black text-sm">Habit Breaker</h4>
<p className="text-[10px] text-emerald-100 font-medium">No-Fap & Discipline</p>
</div>
</div>
​{/* Card 4: Analytics */}
<div
onClick={() => router.push("/analytics")}
className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-[24px] text-white shadow-lg cursor-pointer active:scale-95 transition-transform flex flex-col justify-between min-h-[140px]"
>
<div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-lg">
📊
</div>
<div>
<h4 className="font-black text-sm">Analytics</h4>
<p className="text-[10px] text-purple-100 font-medium">Progress AI Report</p>
</div>
</div>
</div>
</div>
​{/* GLASS BOTTOM NAV BAR */}
<div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[440px] bg-white/70 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/50 px-5 py-3.5 flex justify-between items-center z-50">
<button onClick={() => router.push("/dashboard")} className="flex flex-col items-center gap-1 text-indigo-600 font-black">
<span className="text-lg">🏠</span>
<span className="text-[9px] font-black tracking-wider">HOME</span>
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
