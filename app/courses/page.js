"use client";
​import { useState } from "react";
import { useRouter } from "next/navigation";
​export default function CoursesPage() {
const router = useRouter();
const [selectedSubject, setSelectedSubject] = useState("Physics");
​const subjects = [
{ name: "Physics", icon: "⚛️", chapters: 12, completed: 8 },
{ name: "Chemistry", icon: "🧪", chapters: 10, completed: 5 },
{ name: "Mathematics", icon: "📐", chapters: 15, completed: 11 },
{ name: "Biology", icon: "🧬", chapters: 9, completed: 3 },
];
​const chaptersList = {
Physics: [
{ id: 1, name: "Kinematics & Motion", status: "Completed", score: "92%" },
{ id: 2, name: "Laws of Motion", status: "Completed", score: "88%" },
{ id: 3, name: "Work, Energy & Power", status: "In Progress", score: "60%" },
{ id: 4, name: "Rotational Motion", status: "Pending", score: "-" },
],
Chemistry: [
{ id: 1, name: "Atomic Structure", status: "Completed", score: "95%" },
{ id: 2, name: "Chemical Bonding", status: "In Progress", score: "70%" },
{ id: 3, name: "Thermodynamics", status: "Pending", score: "-" },
],
Mathematics: [
{ id: 1, name: "Calculus & Limits", status: "Completed", score: "98%" },
{ id: 2, name: "Matrices & Determinants", status: "Completed", score: "90%" },
{ id: 3, name: "Coordinate Geometry", status: "In Progress", score: "45%" },
],
Biology: [
{ id: 1, name: "Cell Structure & Function", status: "Completed", score: "85%" },
{ id: 2, name: "Plant Physiology", status: "Pending", score: "-" },
]
};
​return (
<div className="max-w-[480px] mx-auto min-h-screen bg-[#f4f7fb] pb-28 font-sans text-slate-900">
​{/* TOP BAR */}
<div className="flex items-center justify-between px-5 pt-6 pb-4 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100">
<div className="flex items-center gap-3">
<button onClick={() => router.push("/dashboard")} className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-black">
←
</button>
<div>
<h1 className="text-xl font-black">📖 Study Hub</h1>
<p className="text-[10px] font-bold text-blue-600 uppercase">Interactive Syllabus</p>
</div>
</div>
<button className="bg-blue-50 text-blue-600 font-extrabold text-xs px-3 py-1.5 rounded-xl">
🤖 AI Tutor
</button>
</div>
​{/* SUBJECT SELECTOR HORIZONTAL */}
<div className="flex gap-3 px-5 py-4 overflow-x-auto no-scrollbar">
{subjects.map((sub) => (
<div
key={sub.name}
onClick={() => setSelectedSubject(sub.name)}
className={min-w-[120px] p-3.5 rounded-[22px] border cursor-pointer transition-all ${ selectedSubject === sub.name ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105" : "bg-white text-slate-800 border-slate-100" }}
>
<div className="text-xl mb-1">{sub.icon}</div>
<h3 className="font-black text-xs">{sub.name}</h3>
<p className={text-[10px] font-bold mt-1 ${selectedSubject === sub.name ? "text-blue-100" : "text-slate-400"}}>
{sub.completed}/{sub.chapters} Ch. Done
</p>
</div>
))}
</div>
​{/* CHAPTERS LIST */}
<div className="px-5 mt-2">
<div className="flex justify-between items-center mb-3">
<h2 className="font-black text-sm text-slate-800">{selectedSubject} Chapters</h2>
<span className="text-[10px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md">
Batch 2026
</span>
</div>
​<div className="flex flex-col gap-3">
{chaptersList[selectedSubject]?.map((ch) => (
<div 
key={ch.id} 
className="bg-white p-4 rounded-[22px] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex justify-between items-center"
>
<div>
<span className="text-[10px] font-black text-blue-600 uppercase">Chapter {ch.id}</span>
<h4 className="font-bold text-xs text-slate-900 mt-0.5">{ch.name}</h4>
<div className="flex gap-2 mt-1">
<span className={text-[9px] font-extrabold px-2 py-0.5 rounded-md ${ ch.status === "Completed" ? "bg-green-100 text-green-700" : ch.status === "In Progress" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500" }}>
{ch.status}
</span>
{ch.score !== "-" && (
<span className="text-[9px] font-extrabold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md">
Score: {ch.score}
</span>
)}
</div>
</div>
​<button className="bg-slate-900 text-white font-black text-xs px-3 py-2 rounded-xl active:scale-95 transition-transform">
Start →
</button>
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
<button onClick={() => router.push("/courses")} className="flex flex-col items-center gap-1 text-blue-600 font-black">
<span className="text-lg">📖</span>
<span className="text-[9px] font-black tracking-wider">COURSES</span>
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
