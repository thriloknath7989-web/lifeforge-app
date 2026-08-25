'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'No Sugar Day', streak: 5 },
    { id: 2, name: '30 Min Reading', streak: 12 },
  ]);
  const [newHabit, setNewHabit] = useState('');

  const addHabit = () => {
    if (!newHabit) return;
    setHabits([...habits, { id: Date.now(), name: newHabit, streak: 1 }]);
    setNewHabit('');
  };

  return (
    <div className="min-h-screen p-6 max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center glass-card p-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Welcome Back! 👋</h1>
          <p className="text-sm text-slate-400">Track your daily progress, workouts, and courses.</p>
        </div>
        <Link href="/courses" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white text-sm font-semibold transition-all">
          Go to Courses 📚
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-6 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">🔥 Habit Tracker</h2>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="New habit / Addiction to break..." 
              value={newHabit}
              onChange={(e) => setNewHabit(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
            <button onClick={addHabit} className="bg-indigo-600 px-4 py-2 rounded-xl text-sm font-semibold text-white">Add</button>
          </div>
          <div className="space-y-3">
            {habits.map((h) => (
              <div key={h.id} className="flex justify-between items-center p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <span className="text-sm text-slate-200 font-medium">{h.name}</span>
                <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full font-bold">
                  {h.streak} Days Streak 🔥
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">🏋️ Daily Workouts</h2>
          <div className="space-y-3">
            <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-white">Morning Push-ups & Core</p>
                <p className="text-xs text-slate-400">3 Sets x 15 Reps</p>
              </div>
              <span className="text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-lg">Completed</span>
            </div>
            <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-white">Evening Cardio / Run</p>
                <p className="text-xs text-slate-400">20 Minutes</p>
              </div>
              <button className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-lg font-medium">Start Workout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
