"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WorkoutsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("ALL");
  const [timer, setTimer] = useState(45);
  const [isRunning, setIsRunning] = useState(false);

  const workoutsList = [
    { id: 1, name: "Chest & Pushups", duration: "15 Mins", level: "Beginner", icon: "🏋️‍♂️", category: "Chest" },
    { id: 2, name: "Core & Plank Hold", duration: "10 Mins", level: "Intermediate", icon: "🧘‍♂️", category: "Core" },
    { id: 3, name: "Squats & Lower Body", duration: "20 Mins", level: "Advanced", icon: "🦵", category: "Legs" },
    { id: 4, name: "Cardio & HIIT Jump", duration: "12 Mins", level: "All Levels", icon: "⚡", category: "Cardio" }
  ];

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-[#f4f7fb] pb-28 font-sans text-slate-900">
      
      {/* HEADER */}
      <div className="flex items-center gap-3 px-5 pt-6 pb-4 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100">
        <button 
          onClick={() => router.push("/dashboard")} 
          className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-700 active:scale-95 transition-transform"
        >
          ←
        </button>
        <div>
          <h1 className="text-xl font-black">🏋️ Workouts Hub</h1>
          <p className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">3D Animated Trainer & Timer</p>
        </div>
      </div>

      {/* TIMER BANNER */}
      <div className="px-5 mt-5 mb-6">
        <div 
          className="w-full rounded-[28px] p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between"
          style={{ background: "linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%)" }}
        >
          <div>
            <span className="text-xs font-bold text-orange-100 uppercase tracking-widest block mb-1">
              Interactive Workout Timer
            </span>
            <h2 className="text-4xl font-black">{timer}s</h2>
          </div>

          <div className="flex gap-3 mt-5">
            <button 
              onClick={() => setIsRunning(!isRunning)}
              className="flex-1 bg-white text-orange-900 font-black py-3 rounded-2xl text-xs shadow-md active:scale-95 transition-transform"
            >
              {isRunning ? "PAUSE ⏸️" : "START WORKOUT 🚀"}
            </button>
            <button 
              onClick={() => { setTimer(45); setIsRunning(false); }}
              className="bg-white/20 text-white font-bold px-4 py-3 rounded-2xl text-xs backdrop-blur-md active:scale-95"
            >
              RESET
            </button>
          </div>
        </div>
      </div>

      {/* WORKOUT LIST */}
      <div className="px-5 mb-6">
        <h3 className="text-sm font-black mb-3 text-slate-800">Daily Routines</h3>

        <div className="flex flex-col gap-3">
          {workoutsList.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-4 rounded-[22px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 bg-orange-50 rounded-2xl">{item.icon}</span>
                <div>
                  <h4 className="text-xs font-black text-slate-800">{item.name}</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">{item.duration} • {item.level}</p>
                </div>
              </div>

              <button 
                onClick={() => alert(`Starting ${item.name}!`)}
                className="bg-slate-900 text-white font-bold text-[10px] px-3.5 py-2 rounded-xl active:scale-95 transition-transform"
              >
                DO IT
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* GLASS BOTTOM NAV BAR */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[440px] bg-white/70 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/50 px-5 py-3.5 flex justify-between items-center z-50">
        <button onClick={() => router.push("/dashboard")} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900">
          <span className="text-lg">🏠</span>
          <span className="text-[9px] font-bold tracking-wider">HOME</span>
        </button>
        <button onClick={() => router.push("/courses")} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900">
          <span className="text-lg">📖</span>
          <span className="text-[9px] font-bold tracking-wider">COURSES</span>
        </button>
        <button onClick={() => router.push("/workouts")} className="flex flex-col items-center gap-1 text-orange-600 font-black">
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

    </div>
  );
}
