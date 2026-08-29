"use client";
​import { useState } from "react";
import { useRouter } from "next/navigation";
​export default function AdminPage() {
const router = useRouter();
​const [notifTitle, setNotifTitle] = useState("");
const [notifBody, setNotifBody] = useState("");
const [broadcastStatus, setBroadcastStatus] = useState("");
​const [chapterTitle, setChapterTitle] = useState("");
const [subject, setSubject] = useState("Physics");
const [contentStatus, setContentStatus] = useState("");
​const handleBroadcast = (e) => {
e.preventDefault();
if (!notifTitle || !notifBody) return;
setBroadcastStatus("Sending...");
​if ("Notification" in window && Notification.permission === "granted") {
new Notification(📢 ${notifTitle}, { body: notifBody });
}
​setTimeout(() => {
setBroadcastStatus("✅ Broadcast Push Sent Successfully!");
setNotifTitle("");
setNotifBody("");
setTimeout(() => setBroadcastStatus(""), 3000);
}, 800);
};
​const handleAddChapter = (e) => {
e.preventDefault();
if (!chapterTitle) return;
setContentStatus("Adding...");
setTimeout(() => {
setContentStatus(✅ "${chapterTitle}" added to ${subject}!);
setChapterTitle("");
setTimeout(() => setContentStatus(""), 3000);
}, 600);
};
​return (
<div className="max-w-[480px] mx-auto min-h-screen bg-[#f4f7fb] pb-28 font-sans text-slate-900">
​{/* 1. TOP HEADER */}
<div className="flex items-center justify-between px-5 pt-6 pb-4 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100">
<div className="flex items-center gap-3">
<button
onClick={() => router.push("/dashboard")}
className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-700 active:scale-95 transition-transform"
>
←
</button>
<div>
<h1 className="text-xl font-black">⚙️ Admin Control</h1>
<p className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">Super Admin Console</p>
</div>
</div>
<span className="bg-purple-100 text-purple-700 text-[10px] font-black px-2.5 py-1 rounded-full uppercase">
LIVE
</span>
</div>
​{/* 2. SYSTEM ANALYTICS METRICS */}
<div className="px-5 mt-5 mb-6">
<h2 className="text-sm font-black mb-3 text-slate-800">System Performance</h2>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white p-4 rounded-[22px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
<span className="text-xl">👥</span>
<h3 className="text-2xl font-black text-slate-900 mt-1">1,248</h3>
<p className="text-[10px] font-bold text-slate-400">Total Active Users</p>
</div>
​<div className="bg-white p-4 rounded-[22px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
<span className="text-xl">🤖</span>
<h3 className="text-2xl font-black text-slate-900 mt-1">3,890</h3>
<p className="text-[10px] font-bold text-slate-400">AI Exams Evaluated</p>
</div>
</div>
</div>
​{/* 3. PUSH NOTIFICATION BROADCASTER */}
<div className="px-5 mb-6">
<div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 p-5 rounded-[28px] text-white shadow-xl">
<h3 className="font-black text-sm flex items-center gap-2 mb-3">
<span>📢</span> Broadcast Push Notification
</h3>
​<form onSubmit={handleBroadcast} className="flex flex-col gap-3">
<input
type="text"
placeholder="Notification Title..."
value={notifTitle}
onChange={(e) => setNotifTitle(e.target.value)}
className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-xs font-semibold text-white placeholder-slate-400 outline-none"
/>
​<textarea
rows={2}
placeholder="Notification Message Body..."
value={notifBody}
onChange={(e) => setNotifBody(e.target.value)}
className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-xs font-medium text-white placeholder-slate-400 outline-none resize-none"
/>
​<button 
type="submit"
className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-3 rounded-xl text-xs active:scale-95 transition-all"
>
🚀 SEND PUSH NOW
</button>
</form>
​{broadcastStatus && (
<p className="text-xs font-bold text-green-400 mt-3 text-center bg-green-900/40 py-1.5 rounded-lg">
{broadcastStatus}
</p>
)}
</div>
</div>
​{/* 4. CONTENT MANAGER */}
<div className="px-5 mb-6">
<div className="bg-white p-5 rounded-[28px] shadow-md border border-slate-100">
<h3 className="font-black text-sm mb-3 text-slate-900">📚 Add Study Hub Chapter</h3>
​<form onSubmit={handleAddChapter} className="flex flex-col gap-3">
<div className="flex gap-2">
{["Physics", "Chemistry", "Maths"].map((sub) => (
<button
key={sub}
type="button"
onClick={() => setSubject(sub)}
className={flex-1 py-2 rounded-xl text-xs font-bold transition-all ${ subject === sub ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600" }}
>
{sub}
</button>
))}
</div>
​<input
type="text"
placeholder="Chapter Title..."
value={chapterTitle}
onChange={(e) => setChapterTitle(e.target.value)}
className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold text-slate-800 outline-none"
/>
​<button 
type="submit"
className="w-full bg-slate-900 text-white font-black py-3 rounded-xl text-xs active:scale-95 transition-transform"
>
➕ ADD TO SYLLABUS
</button>
</form>
​{contentStatus && (
<p className="text-xs font-bold text-blue-600 mt-3 text-center bg-blue-50 py-1.5 rounded-lg">
{contentStatus}
</p>
)}
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
<button onClick={() => router.push("/admin")} className="flex flex-col items-center gap-1 text-purple-600 font-black">
<span className="text-lg">⚙️</span>
<span className="text-[9px] font-black tracking-wider">ADMIN</span>
</button>
</div>
​</div>
);
                }
