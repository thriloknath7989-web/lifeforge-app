"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState("login"); // login, register, password, dashboard
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // Form States
  const [userName, setUserName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [loginMobile, setLoginMobile] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Study Hub States
  const [activeTab, setActiveTab] = useState("dashboard"); // dashboard, study, profile
  const [selectedClass, setSelectedClass] = useState("10th");
  const [learningMode, setLearningMode] = useState("beginner"); // beginner, normal, expert
  const [searchTopic, setSearchTopic] = useState("");
  const [aiExplanation, setAiExplanation] = useState(null);
  const [examCompleted, setExamCompleted] = useState(false);
  const [timerCount, setTimerCount] = useState(1800); // 30 minutes in seconds
  const [showCertNotification, setShowCertNotification] = useState(false);

  // 1. Splash Screen & PWA Prompt Event
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  // 2. 30-Minute Certificate Timer Logic
  useEffect(() => {
    let interval = null;
    if (examCompleted && timerCount > 0) {
      interval = setInterval(() => {
        setTimerCount((prev) => prev - 1);
      }, 1000);
    } else if (examCompleted && timerCount === 0) {
      setShowCertNotification(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [examCompleted, timerCount]);

  // Handlers
  const handleRegisterOtp = (e) => {
    e.preventDefault();
    if (mobileNumber.length === 10) setScreen("password");
  };

  const handleCreatePassword = (e) => {
    e.preventDefault();
    const hasCap = /[A-Z]/.test(password);
    const hasSpec = /[!@#$%^&*]/.test(password);
    const hasNum = /[0-9]/.test(password);

    if (hasCap && hasSpec && hasNum && password.length >= 8) {
      alert("Registration Successful! Please Login.");
      setScreen("login");
    } else {
      alert("Password must contain at least 1 Capital letter, 1 Special character, and Numbers (e.g. thrilok@7989)");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginMobile.length === 10 && loginPassword) {
      setScreen("dashboard");
    }
  };

  const handleSearchTopic = (e) => {
    e.preventDefault();
    if (!searchTopic) return;

    if (learningMode === "beginner") {
      setAiExplanation({
        mode: "Beginner",
        title: searchTopic,
        type: "Comic & Fun Analogy",
        text: `Hey Kids! Imagine ${searchTopic} like a superhero adventure!`,
        hasAudio: true,
        hasComic: true,
      });
    } else if (learningMode === "normal") {
      setAiExplanation({
        mode: "Normal",
        title: searchTopic,
        type: "School/College Standard",
        text: `Standard academic explanation for ${searchTopic} with diagrams and formulas.`,
        hasDiagrams: true,
        hasMath: true,
      });
    } else {
      setAiExplanation({
        mode: "Expert",
        title: searchTopic,
        type: "Deep Technical & Applied",
        text: `Advanced analytical breakdown of ${searchTopic} with flowcharts and complex problem solving.`,
        hasFlowchart: true,
        hasEquations: true,
      });
    }
  };

  const triggerExamFinish = () => {
    setExamCompleted(true);
    setTimerCount(1800);
    alert("Exam Completed! Your Certificate will be generated in 30 minutes. You will receive a notification!");
  };

  const installPWA = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      setDeferredPrompt(null);
    }
  };

  // --- RENDER SPLASH SCREEN ---
  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white">
        <div className="w-20 h-20 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/50 animate-bounce">
          <span className="text-3xl font-black">LF</span>
        </div>
        <h1 className="mt-5 text-2xl font-black tracking-widest bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          LIFEFORGE
        </h1>
      </div>
    );
  }

  // --- RENDER AUTH SCREENS ---
  if (screen !== "dashboard") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950 text-white">
        <div className="w-full max-w-md p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl space-y-6">
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-500/30 mb-2">
              LF
            </div>
            <h2 className="text-xl font-bold">
              {screen === "login" && "Login to LifeForge"}
              {screen === "register" && "Create Account"}
              {screen === "password" && "Set Secure Password"}
            </h2>
          </div>

          {screen === "login" && (
            <form onSubmit={handleLogin} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Mobile Number</label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="10 digit number"
                  className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl outline-none focus:border-purple-500"
                  value={loginMobile}
                  onChange={(e) => setLoginMobile(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Password</label>
                <input
                  type="password"
                  required
                  placeholder="Enter Password"
                  className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl outline-none focus:border-purple-500"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="w-full py-3.5 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition">
                Login
              </button>
              <p className="text-center text-slate-400 mt-2">
                Don't have an account?{" "}
                <span onClick={() => setScreen("register")} className="text-purple-400 cursor-pointer underline">
                  Register
                </span>
              </p>
            </form>
          )}

          {screen === "register" && (
            <form onSubmit={handleRegisterOtp} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">User Name</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl outline-none focus:border-purple-500"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Mobile Number</label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="10 digit mobile number"
                  className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl outline-none focus:border-purple-500"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              <button type="submit" className="w-full py-3.5 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition">
                Send OTP
              </button>
              <p className="text-center text-slate-400 mt-2">
                Already registered?{" "}
                <span onClick={() => setScreen("login")} className="text-purple-400 cursor-pointer underline">
                  Login
                </span>
              </p>
            </form>
          )}

          {screen === "password" && (
            <form onSubmit={handleCreatePassword} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Enter OTP (Demo: Any 6 digits)</label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  placeholder="123456"
                  className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl outline-none text-center font-mono text-lg"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">
                  Create Password (1 Capital, 1 Special, Number)
                </label>
                <input
                  type="password"
                  required
                  placeholder="e.g. thrilok@7989"
                  className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl outline-none focus:border-purple-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold transition">
                Proceed & Complete Registration
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // --- RENDER MAIN DASHBOARD ---
  return (
    <div className="min-h-screen pb-20 bg-slate-950 text-white font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-xl flex items-center justify-center font-bold">
            LF
          </div>
          <span className="font-bold text-base">LifeForge</span>
        </div>

        <div className="flex items-center gap-3">
          {deferredPrompt && (
            <button onClick={installPWA} className="text-xs bg-purple-600 px-3 py-1.5 rounded-lg font-bold">
              Install App
            </button>
          )}
          <button onClick={() => setActiveTab("profile")} className="text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
            👤 Profile
          </button>
          <button onClick={() => setScreen("login")} className="text-xs bg-red-500/10 text-red-400 px-3 py-1.5 rounded-lg">
            Logout
          </button>
        </div>
      </header>

      {/* Certificate Ready Notification Banner */}
      {showCertNotification && (
        <div className="bg-emerald-500 text-black px-6 py-3 font-bold text-xs flex items-center justify-between shadow-lg">
          <span>🎉 Your Course Certificate is Ready! Download it now from your Profile Gallery.</span>
          <button onClick={() => setActiveTab("profile")} className="underline bg-black text-white px-2 py-1 rounded">
            View Profile
          </button>
        </div>
      )}

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 mt-6 space-y-6">
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-black">Welcome Back, {userName || "User"}</h1>

            <div className="grid md:grid-cols-4 gap-4">
              <div onClick={() => setActiveTab("study")} className="p-5 bg-slate-900 border border-slate-800 hover:border-purple-500 rounded-2xl cursor-pointer transition">
                <span className="text-2xl">📚</span>
                <h3 className="font-bold text-base mt-2">Study Hub</h3>
                <p className="text-xs text-slate-400 mt-1">AI Syllabi, Comics & 3 Modes</p>
              </div>

              <div onClick={() => alert("Launching Adaptive Fitness Routine...")} className="p-5 bg-slate-900 border border-slate-800 hover:border-cyan-500 rounded-2xl cursor-pointer transition">
                <span className="text-2xl">⚡</span>
                <h3 className="font-bold text-base mt-2">Workout</h3>
                <p className="text-xs text-slate-400 mt-1">Dynamic Form Guides & Timers</p>
              </div>

              <div onClick={() => alert("Emergency Urge Protocol Activated!")} className="p-5 bg-slate-900 border border-slate-800 hover:border-emerald-500 rounded-2xl cursor-pointer transition">
                <span className="text-2xl">🛡️</span>
                <h3 className="font-bold text-base mt-2">Habit Breaker</h3>
                <p className="text-xs text-slate-400 mt-1">90-sec Urge Interceptor</p>
              </div>

              <div onClick={() => alert("Opening Life Analytics...")} className="p-5 bg-slate-900 border border-slate-800 hover:border-amber-500 rounded-2xl cursor-pointer transition">
                <span className="text-2xl">📊</span>
                <h3 className="font-bold text-base mt-2">Analytics</h3>
                <p className="text-xs text-slate-400 mt-1">Brain, Body & Discipline Score</p>
              </div>
            </div>
          </div>
        )}

        {/* STUDY HUB VIEW */}
        {activeTab === "study" && (
          <div className="space-y-6">
            <button onClick={() => setActiveTab("dashboard")} className="text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
              ← Back to Dashboard
            </button>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-5">
              <h2 className="text-xl font-bold">AI Curriculum & Search Engine</h2>

              {/* Course Selection */}
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1 font-bold">Select Class / Level</label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl outline-none"
                  >
                    <option value="1st-10th">1st Class to 10th Class</option>
                    <option value="intermediate">Intermediate (11th & 12th)</option>
                    <option value="diploma">Diploma Courses</option>
                    <option value="btech">B.Tech / Degree</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-bold">Select Learning Explanation Mode</label>
                  <select
                    value={learningMode}
                    onChange={(e) => setLearningMode(e.target.value)}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl outline-none"
                  >
                    <option value="beginner">👶 Beginner Mode (Comics, Stories, Real Examples)</option>
                    <option value="normal">🎓 Normal Mode (School/College Classroom Style)</option>
                    <option value="expert">⚡ Expert Mode (Deep Applied Concepts & Formulas)</option>
                  </select>
                </div>
              </div>

              {/* Search Bar */}
              <form onSubmit={handleSearchTopic} className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="Type topic name (e.g. Cellular Respiration, Newton's Laws)"
                  className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-xs outline-none"
                  value={searchTopic}
                  onChange={(e) => setSearchTopic(e.target.value)}
                />
                <button type="submit" className="px-5 py-3.5 bg-purple-600 rounded-xl text-xs font-bold whitespace-nowrap">
                  Explain Topic
                </button>
              </form>

              {/* AI Explanation Output */}
              {aiExplanation && (
                <div className="p-5 bg-slate-950 border border-purple-500/30 rounded-2xl space-y-3 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-purple-400 uppercase">{aiExplanation.mode} Mode Explanation</span>
                    <span className="px-2 py-0.5 bg-purple-500/10 text-purple-300 rounded border border-purple-500/30 text-[10px]">
                      {aiExplanation.type}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">{aiExplanation.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{aiExplanation.text}</p>
                  
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <button onClick={triggerExamFinish} className="px-4 py-2 bg-emerald-600 rounded-xl font-bold">
                      Take Chapter Exam & Get Certificate
                    </button>
                    {examCompleted && (
                      <span className="text-amber-400 text-[11px]">
                        ⏳ Certificate Generating in: {Math.floor(timerCount / 60)}m {timerCount % 60}s
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* PROFILE & REWARDS VIEW */}
        {activeTab === "profile" && (
          <div className="space-y-6 text-xs">
            <button onClick={() => setActiveTab("dashboard")} className="text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
              ← Back to Dashboard
            </button>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
              <h2 className="text-xl font-bold text-white">User Profile & Rewards Vault</h2>
              <div className="space-y-1 text-slate-400">
                <p>User Name: <span className="text-white font-bold">{userName || "Thrilok"}</span></p>
                <p>Mobile Number: <span className="text-white font-bold">{mobileNumber || "9989XXXXXX"}</span></p>
                <p>Profile ID: <span className="text-purple-400 font-mono">LF-9924-ACC</span></p>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white">Earned Credits Balance</h4>
                  <p className="text-slate-500 text-[10px]">Use credits for in-game skins, cars, and outfits</p>
                </div>
                <span className="text-lg font-bold text-amber-400">⚡ 2,500 Credits</span>
              </div>

              {/* Gallery Certificate Download */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
                <h4 className="font-bold text-white">Downloaded Certificates & Gallery Sync</h4>
                {showCertNotification ? (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="font-bold text-emerald-400">Cellular Respiration Mastery Certificate</p>
                      <p className="text-[10px] text-slate-400">Verified ID: #LF-CERT-8819</p>
                    </div>
                    <button onClick={() => alert("Downloading Certificate directly to phone Gallery...")} className="px-3 py-1.5 bg-emerald-600 font-bold rounded-lg text-white">
                      Download to Gallery
                    </button>
                  </div>
                ) : (
                  <p className="text-slate-500 text-[11px]">No active certificates ready yet. Complete exams in Study Hub.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
