"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const [usersCount, setUsersCount] = useState(1240);
  const [activeCourses, setActiveCourses] = useState(12);
  const [notice, setNotice] = useState("");
  const [noticeList, setNoticeList] = useState([
    "Welcome to LifeForge 2026 Batch!",
    "Physics Practice Papers released for Class 10."
  ]);

  const handleAddNotice = (e) => {
    e.preventDefault();
    if (!notice.trim()) return;
    setNoticeList([notice, ...noticeList]);
    setNotice("");
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
          <h1 className="text-xl font-black">⚙️ Admin Control Panel</h1>
          <p className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">Manage Users & Announcements</p>
        </div>
      </div>

      {/* STATS OVERVIEW */}
      <div className="px-5 mt-5 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-[22px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
            <span className="text-2xl mb-1 block">👥</span>
            <h3 className="text-2xl font-black text-slate-900">{usersCount}</h3>
            <p className="text-[10px] font-bold text-slate-400">Total Active Users</p>
          </div>
          <div className="bg-white p-4 rounded-[22px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
            <span className="text-2xl mb-1 block">📚</span>
            <h3 className="text-2xl font-black text-slate-900">{activeCourses}</h3>
            <p className="text-[10px] font-bold text-slate-400">Active Syllabus Modules</p>
          </div>
        </div>
      </div>

      {/* ANNOUNCEMENT MANAGER */}
      <div className="px-5 mb-6">
        <div className="bg-white p-5 rounded-[28px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
          <h3 className="font-black text-sm mb-3">Broadcast New Announcement</h3>
          <form onSubmit={handleAddNotice} className="flex flex-col gap-3">
            <input 
              type="text" 
              placeholder="Type notification text..." 
              value={notice}
              onChange={(e) => setNotice(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs font-semibold outline-none focus:border-purple-500 transition-all"
            />
            <button 
              type="submit"
              className="bg-purple-600 hover:bg-purple-500 text-white font-black py-3 rounded-2xl text-xs shadow-md active:scale-95 transition-all"
            >
              PUBLISH ANNOUNCEMENT 🚀
            </button>
          </form>
        </div>
      </div>

      {/* RECENT ANNOUNCEMENTS LIST */}
      <div className="px-5 mb-6">
        <h3 className="text-sm font-black mb-3 text-slate-800">Recent Notices</h3>
        <div className="flex flex-col gap-2">
          {noticeList.map((item, index) => (
            <div key={index} className="bg-white p-3.5 rounded-2xl border border-slate-100 text-xs font-medium text-slate-700 flex justify-between items-center">
              <span>📌 {item}</span>
              <span className="text-[9px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md">LIVE</span>
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
        <button onClick={() => router.push("/workouts")} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900">
          <span className="text-lg">🏋️</span>
          <span className="text-[9px] font-bold tracking-wider">WORKOUTS</span>
        </button>
        <button onClick={() => router.push("/habits")} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900">
          <span className="text-lg">🛡️</span>
          <span className="text-[9px] font-bold tracking-wider">HABITS</span>
        </button>
        <button onClick={() => router.push("/admin")} className="flex flex-col items-center gap-1 text-purple-600 font-black">
          <span className="text-lg">⚙️</span>
          <span className="text-[9px] font-black tracking-wider">ADMIN</span>
        </button>
      </div>

    </div>
  );
}
