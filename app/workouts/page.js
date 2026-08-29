"use client";
​import { useState } from "react";
import { useRouter } from "next/navigation";
​export default function WorkoutsPage() {
const router = useRouter();
const [completed, setCompleted] = useState([false, false, false, false]);
​const toggleWorkout = (index) => {
const updated = [...completed];
updated[index] = !updated[index];
setCompleted(updated);
};
​const workoutList = [
{ title: "Pushups (Upper Body)", reps: "3 Sets x 15 Reps", calories: "120 kcal", icon: "💪" },
{ title: "Bodyweight Squats", reps: "4 Sets x 20 Reps", calories: "180 kcal", icon: "🦵" },
{ title: "Plank Hold", reps: "3 Sets x 60 Secs", calories: "90 kcal", icon: "⏱️" },
{ title: "Jumping Jacks (Cardio)", reps: "3 Sets x 45 Secs", calories: "150 kcal", icon: "🏃" },
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
<h1 className="text-xl font-black">🏋️ Workouts</h1>
<p className="text-[10px] font-bold text-amber-600 uppercase">Fitness & Calisthenics</p>
</div>
</div>
<span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full">
BURN 540 kcal
</span>
</div>
​{/* DAILY CALORIE BANNER */}
<div className="px-5 my-4">
<div className="bg-gradient-to-r from-amber-500 to-orange-600 p-5 rounded-[28px] text-white shadow-lg">
<div className="flex justify-between items-center mb-2">
<h3 className="font-black text-sm">Today's Workout Target</h3>
<span className="text-xs bg-white/20 px-2 py-0.5 rounded-md font-bold">Day 14</span>
</div>
<p className="text-xs text-amber-100 mb-3">No equipment required. High intensity home workout routine.</p>
<div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
<div className="bg-white h-full" style={{ width: ${(completed.filter(Boolean).length / 4) * 100}% }}></div>
</div>
</div>
</div>
​{/* ROUTINE LIST */}
<div className="px-5">
<h3 className="font-black text-sm text-slate-800 mb-3">Daily Exercise Plan</h3>
<div className="flex flex-col gap-3">
{workoutList.map((item, index) => (
<div
key={index}
onClick={() => toggleWorkout(index)}
className={p-4 rounded-[22px] border cursor-pointer transition-all flex justify-between items-center ${ completed[index]  ? "bg-amber-50 border-amber-200"  : "bg-white border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]" }}
>
<div className="flex items-center gap-3">
<div className="text-2xl">{item.icon}</div>
<div>
<h4 className={font-bold text-xs ${completed[index] ? "line-through text-slate-400" : "text-slate-900"}}>
{item.title}
</h4>
<p className="text-[10px] font-medium text-slate-400">{item.reps} • {item.calories}</p>
</div>
</div>
​<div className={w-6 h-6 rounded-full border-2 flex items-center justify-center font-black text-xs ${ completed[index] ? "bg-amber-500 border-amber-500 text-white" : "border-slate-300" }}>
{completed[index] ? "✓" : ""}
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
<button onClick={() => router.push("/workouts")} className="flex flex-col items-center gap-1 text-amber-600 font-black">
<span className="text-lg">🏋️</span>
<span className="text-[9px] font-black tracking-wider">WORKOUTS</span>
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
