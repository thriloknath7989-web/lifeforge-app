"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HabitsPage() {
  const router = useRouter();
  const [streak, setStreak] = useState(12);
  const [markedToday, setMarkedToday] = useState(false);

  const [habits, setHabits] = useState([
    { id: 1, name: "Social Media Overuse", icon: "📱", avoided: true },
    { id: 2, name: "Junk Food & Sugar", icon: "🍔", avoided: false },
    { id: 3, name: "Late Night Sleeping", icon: "🌙", avoided: true },
    { id: 4, name: "Procrastination", icon: "⏰", avoided: false },
  ]);

  const toggleHabit = (id) => {
    setHabits(
      habits.map((h) => (h.id === id ? { ...h, avoided: !h.avoided } : h))
    );
  };

  const handleLogStreak = () => {
    if (!markedToday) {
      setStreak(streak + 1);
      setMarkedToday(true);
    }
  };

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
          <h1 className="text-xl font-black">🛡️ Habit Breaker</h1>
          <p className="text-[10px] font-bold text-green-600 uppercase tracking-wider">
            Break Bad Habits & Stay Focused
          </p>
        </div>
      </div>

      {/* STREAK COUNTER BANNER */}
      <div className="px-5 mt-5 mb-6">
        <div
          className="w-full rounded-[28px] p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between"
          style={{
            background:
              "linear-gradient(135deg, #15803d 0%, #16a34a 50%, #22c55e 100%)",
          }}
        >
          <div>
            <span className="text-3xl mb-2 block">🔥</span>
            <p className="text-xs font-bold text-green-100 uppercase tracking-widest">
              Current Clean Streak
            </p>
            <h2 className="text-4xl font-black mt-1">{streak} Days</h2>
          </div>

          <button
            onClick={handleLogStreak}
            disabled={markedToday}
            className={`mt-6 w-full py-3.5 rounded-2xl font-black text-xs shadow-md transition-all active:scale-95 ${
              markedToday
                ? "bg-white/20 text-white cursor-default"
                : "bg-white text-green-900"
            }`}
          >
            {markedToday ? "✅ TODAY'S STREAK LOGGED!" : "⚡ MARK TODAY AS CLEAN"}
          </button>
        </div>
      </div>

      {/* BAD HABITS CHECKLIST */}
      <div className="px-5 mb-6">
        <h3 className="text-sm font-black mb-3 text-slate-800">
          Habits You Are Avoiding Today
        </h3>

        <div className="flex flex-col gap-3">
          {habits.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleHabit(item.id)}
              className="bg-white p-4 rounded-[22px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex justify-between items-center cursor-pointer active:scale-98 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="text-xs font-black text-slate-800">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-semibold">
                    {item.avoided ? "Successfully Avoided" : "Need Focus"}
                  </p>
                </div>
              </div>

              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                  item.avoided
                    ? "bg-green-500 text-white shadow-md shadow-green-200"
                    : "border-2 border-slate-200"
                }`}
              >
                {item.avoided && "✓"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GLASS BOTTOM NAV BAR */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[440px] bg-white/70 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/50 px-5 py-3.5 flex justify-between items-center z-50">
        <button
          onClick={() => router.push("/dashboard")}
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900"
        >
          <span className="text-lg">🏠</span>
          <span className="text-[9px] font-bold tracking-wider">HOME</span>
        </button>
        <button
          onClick={() => router.push("/courses")}
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900"
        >
          <span className="text-lg">📖</span>
          <span className="text-[9px] font-bold tracking-wider">COURSES</span>
        </button>
        <button
          onClick={() => router.push("/workouts")}
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900"
        >
          <span className="text-lg">🏋️</span>
          <span className="text-[9px] font-bold tracking-wider">WORKOUTS</span>
        </button>
        <button
          onClick={() => router.push("/habits")}
          className="flex flex-col items-center gap-1 text-green-600 font-black"
        >
          <span className="text-lg">🛡️</span>
          <span className="text-[9px] font-black tracking-wider">HABITS</span>
        </button>
        <button
          onClick={() => router.push("/admin")}
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900"
        >
          <span className="text-lg">⚙️</span>
          <span className="text-[9px] font-bold tracking-wider">ADMIN</span>
        </button>
      </div>
    </div>
  );
}
