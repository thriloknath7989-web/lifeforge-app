"use client";
​import { useState } from "react";
import { useRouter } from "next/navigation";
​export default function HabitsPage() {
const router = useRouter();
const [streak, setStreak] = useState(18);
const [checkedHabits, setCheckedHabits] = useState([true, true, false, false]);
​const toggleHabit = (id) => {
const updated = [...checkedHabits];
updated[id] = !updated[id];
setCheckedHabits(updated);
};
​const habits = [
{ title: "No Social Media Doomscrolling", time: "All Day", points: "+50 XP" },
{ title: "8 Hours Deep Sleep", time: "Night Routine", points: "+30 XP" },
{ title: "4 Hours Focused Study", time: "By 8:00 PM", points: "+100 XP" },
{ title: "Drink 3 Liters Water", time: "All Day", points: "+20 XP" },
];
​return (
<div className="max-w-[480px] mx-auto min-h-screen bg-[#f4f7fb] pb-28 font-sans text-slate-900">
​{/* HEADER */}
<div className="flex items-center justify-between px-5 pt-6 pb-4 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100">
<div className="flex items-center gap-3">
<button onClick={() => router.push("/dashboard")} className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-black">
←
</button>
<div>
<h1 className="text-xl font-black">🛡️ Habit Breaker</h1>
<p className="text-[10px] font-bold text-emerald-600 uppercase">Self Discipline Shield</p>
</div>
</div>
<span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full">
🔥 {streak} DAYS STREAK
</span>
</div>
​{/* STREAK CARD */}
<div className="px-5 my-4">
<div className="bg-gradient-to-br from-emerald-600 to-teal-800 p-5 rounded-[28px] text-white shadow-lg text-center">
<span className="text-4xl block mb-2">🔥</span>
<h2 className="text-3xl font-black">{streak} Days Strong</h2>
<p className="text-xs text-emerald-100 mt-1">Consistency build champions. Stay focused today!</p>
​<button
onClick={() => setStreak(0)}
className="mt-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-[10px] px-3 py-1.5 rounded-xl"
>
⚠️ Relapse (Reset Counter)
</button>
</div>
</div>
​{/* DAILY HABIT CHECKLIST */}
<div className="px-5">
<h3 className="font-black text-sm text-slate-800 mb-3">Daily Discipline Targets</h3>
​<div className="flex flex-col gap-3">
{habits.map((habit, idx) => (
<div
key={idx}
onClick={() => toggleHabit(idx)}
className={p-4 rounded-[22px] border cursor-pointer transition-all flex justify-between items-center ${ checkedHabits[idx] ? "bg-emerald-50 border-emerald-200" : "bg-white border-slate-100 shadow-sm" }}
>
<div>
<h4 className={font-bold text-xs ${checkedHabits[idx] ? "line-through text-slate-400" : "text-slate-900"}}>
{habit.title}
</h4>
<p className="text-[10px] font-medium text-slate-400">{habit.time} • {habit.points}</p>
</div>
​<div className={w-6 h-6 rounded-full border-2 flex items-center justify-center font-black text-xs ${ checkedHabits[idx] ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-300" }}>
{checkedHabits[idx] ? "✓" : ""}
</div>
</div>
))}
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
<button onClick={() => router.push("/habits")} className="flex flex-col items-center gap-1 text-emerald-600 font-black">
<span className="text-lg">🛡️</span>
<span className="text-[9px] font-black tracking-wider">HABITS</span>
</button>
<button onClick={() => router.push("/admin")} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900">
<span className="text-lg">⚙️</span>
<span className="text-[9px] font-bold tracking-wider">ADMIN</span>
</button>
</div>
​</div>
);
  }
