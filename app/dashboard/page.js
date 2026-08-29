"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("ALL");
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [notifStatus, setNotifStatus] = useState("Default");

  const pills = ["ALL", "10th Class", "Inter 1st", "Inter 2nd", "Fitness", "Focus"];

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    if (typeof window !== "undefined" && "Notification" in window) {
      setNotifStatus(Notification.permission);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowInstallBanner(false);
      }
      setDeferredPrompt(null);
    } else {
      alert("యాప్‌ని హోమ్ స్క్రీన్‌కి యాడ్ చేయడానికి మీ బ్రౌజర్ ఆప్షన్లలో 'Add to Home Screen' ఎంచుకోండి.");
    }
  };

  const requestNotification = async () => {
    if (typeof window === "undefined" || !("Notification" in window)) {
      alert("మీ బ్రౌజర్ పుష్ నోటిఫికేషన్లకు సపోర్ట్ చేయడం లేదు.");
      return;
    }

    const permission = await Notification.requestPermission();
    setNotifStatus(permission);

    if (permission === "granted") {
      new Notification("🚀 LifeForge Push Enabled!", {
        body: "మీకు రోజువారీ AI Study, Workouts & Streak రిమైండర్‌లు పంపబడతాయి.",
        icon: "https://api.dicebear.com/7.x/identicon/svg?seed=LifeForge",
      });
    } else {
      alert("నోటిఫికేషన్ పర్మిషన్ తిరస్కరించబడింది.");
    }
  };

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-[#f4f7fb] pb-28 font-sans text-slate-900 relative">
      {/* PWA INSTALL BANNER */}
      {showInstallBanner && (
        <div className="bg-slate-900 text-white p-4 mx-5 my-3 rounded-2xl flex justify-between items-center shadow-2xl animate-bounce">
          <div>
            <p className="text-xs font-black">📲 Install LifeForge App</p>
            <p className="text-[10px] text-slate-300">హోమ్ స్క్రీన్‌కి యాప్‌ని యాడ్ చేయండి</p>
          </div>
          <button
            onClick={handleInstallClick}
            className="bg-blue-600 text-white text-xs font-black px-4 py-2 rounded-xl shadow-md"
          >
            INSTALL
          </button>
        </div>
      )}

      {/* HEADER & PROFILE */}
      <div className="flex justify-between items-center px-5 pt-6 pb-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight">LifeForge</h1>
          <p className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest">
            PREMIUM PWA SUITE
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={requestNotification}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shadow-sm border border-white ${
              notifStatus === "granted" ? "bg-green-100 text-green-700" : "bg-white text-slate-700"
            }`}
            title="Enable Push Notifications"
          >
            🔔
          </button>

          <div
            className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden shadow-sm border-2 border-white cursor-pointer"
            onClick={() => router.push("/portfolio")}
          >
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="px-5 mb-5">
        <div className="relative">
          <span className="absolute left-4 top-3.5 text-slate-400">🔍</span>
          <input
            type="text"
            placeholder="Search subjects, workouts, habits..."
            className="w-full bg-white rounded-full py-3.5 pl-11 pr-4 text-sm font-medium shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      {/* CATEGORY PILLS */}
      <div className="px-5 mb-6 flex gap-2 overflow-x-auto scrollbar-none pb-2">
        {pills.map((pill) => (
          <button
            key={pill}
            onClick={() => setActiveTab(pill)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap shadow-sm transition-all ${
              activeTab === pill
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 border border-slate-100"
            }`}
          >
            {pill}
          </button>
        ))}
      </div>

      {/* MAIN BANNER */}
      <div className="px-5 mb-8">
        <div
          className="w-full rounded-[28px] p-6 shadow-lg relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)" }}
        >
          <h2 className="text-white font-black text-xl leading-tight w-3/4 mb-2">
            AI STUDY HUB BATCH 2026:
          </h2>
          <p className="text-indigo-200 text-sm font-medium mb-5 w-3/4">
            Prepare for Board Exams with AI
          </p>
          <button
            onClick={() => router.push("/courses")}
            className="bg-white text-indigo-900 font-black text-xs px-5 py-2.5 rounded-full shadow-md active:scale-95 transition-transform"
          >
            START NOW
          </button>
        </div>
      </div>

      {/* POPULAR MODULES GRID */}
      <div className="px-5 mb-6">
        <h3 className="text-lg font-black mb-4">Popular Modules</h3>

        <div className="grid grid-cols-2 gap-4">
          {/* Card 1: Study Hub */}
          <div
            onClick={() => router.push("/courses")}
            className="rounded-[24px] p-4 text-white shadow-lg cursor-pointer active:scale-95 transition-transform h-36 flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)" }}
          >
            <div>
              <span className="text-2xl drop-shadow-sm mb-1 block">📖</span>
              <h4 className="font-black text-sm">Study Hub</h4>
              <p className="text-[10px] font-semibold text-blue-100">Class 6-12 Syllabus</p>
            </div>
            <div className="text-[10px] font-bold bg-white/20 w-max px-2 py-0.5 rounded-md backdrop-blur-sm">
              ★ 4.9
            </div>
          </div>

          {/* Card 2: Workouts */}
          <div
            onClick={() => router.push("/workouts")}
            className="rounded-[24px] p-4 text-white shadow-lg cursor-pointer active:scale-95 transition-transform h-36 flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #fb923c 0%, #f97316 100%)" }}
          >
            <div>
              <span className="text-2xl drop-shadow-sm mb-1 block">🏋️</span>
              <h4 className="font-black text-sm">Workouts</h4>
              <p className="text-[10px] font-semibold text-orange-100">3D Animated Trainer</p>
            </div>
            <div className="text-[10px] font-bold bg-white/20 w-max px-2 py-0.5 rounded-md backdrop-blur-sm">
              ★ 4.8
            </div>
          </div>

          {/* Card 3: Habit Breaker */}
          <div
            onClick={() => router.push("/habits")}
            className="rounded-[24px] p-4 text-white shadow-lg cursor-pointer active:scale-95 transition-transform h-36 flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)" }}
          >
            <div>
              <span className="text-2xl drop-shadow-sm mb-1 block">🛡️</span>
              <h4 className="font-black text-sm">Habit Breaker</h4>
              <p className="text-[10px] font-semibold text-green-100">Track Bad Habits</p>
            </div>
            <div className="text-[10px] font-bold bg-white/20 w-max px-2 py-0.5 rounded-md backdrop-blur-sm">
              ★ 4.7
            </div>
          </div>

          {/* Card 4: Analytics */}
          <div
            onClick={() => router.push("/analytics")}
            className="rounded-[24px] p-4 text-white shadow-lg cursor-pointer active:scale-95 transition-transform h-36 flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #facc15 0%, #eab308 100%)" }}
          >
            <div>
              <span className="text-2xl drop-shadow-sm mb-1 block">📊</span>
              <h4 className="font-black text-sm">Analytics</h4>
              <p className="text-[10px] font-semibold text-yellow-100">Daily Growth Data</p>
            </div>
            <div className="text-[10px] font-bold bg-white/20 w-max px-2 py-0.5 rounded-md backdrop-blur-sm">
              ★ 4.9
            </div>
          </div>
        </div>
      </div>

      {/* GLASS BOTTOM NAV BAR */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[440px] bg-white/70 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/50 px-5 py-3.5 flex justify-between items-center z-50">
        <button
          onClick={() => router.push("/dashboard")}
          className="flex flex-col items-center gap-1 text-slate-900"
        >
          <span className="text-lg">🏠</span>
          <span className="text-[9px] font-black tracking-wider">HOME</span>
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
          onClick={() => router.push("/analytics")}
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900"
        >
          <span className="text-lg">📊</span>
          <span className="text-[9px] font-bold tracking-wider">STATS</span>
        </button>
        <button
          onClick={() => router.push("/admin")}
          className="flex flex-col items-center gap-1 text-purple-600 font-bold"
        >
          <span className="text-lg">⚙️</span>
          <span className="text-[9px] font-bold tracking-wider">ADMIN</span>
        </button>
      </div>
    </div>
  );
}
