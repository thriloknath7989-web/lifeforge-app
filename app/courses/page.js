"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CoursesPage() {
  const router = useRouter();
  const [selectedSubject, setSelectedSubject] = useState("Physics");
  const [userAnswer, setUserAnswer] = useState("");
  const [aiFeedback, setAiFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const chapters = {
    Physics: ["Electromagnetism", "Refraction of Light", "Human Eye & Colorful World"],
    Chemistry: ["Chemical Reactions", "Acids, Bases & Salts", "Carbon & Its Compounds"],
    Maths: ["Real Numbers", "Polynomials", "Quadratic Equations"],
  };

  const handleEvaluateAnswer = () => {
    if (!userAnswer.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setAiFeedback(
        "✨ AI Evaluation: Excellent explanation! Your concepts on magnetic flux are accurate. Score: 9/10"
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-[#f4f7fb] pb-28 font-sans text-slate-900">
      <div className="flex items-center gap-3 px-5 pt-6 pb-4 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100">
        <button
          onClick={() => router.push("/dashboard")}
          className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-700 active:scale-95 transition-transform"
        >
          ←
        </button>
        <div>
          <h1 className="text-xl font-black">📖 Study Hub</h1>
          <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
            Class 10th & Intermediate Syllabus
          </p>
        </div>
      </div>

      <div className="px-5 mt-5 mb-4 flex gap-2">
        {["Physics", "Chemistry", "Maths"].map((sub) => (
          <button
            key={sub}
            onClick={() => setSelectedSubject(sub)}
            className={`flex-1 py-2.5 rounded-2xl text-xs font-black shadow-sm transition-all ${
              selectedSubject === sub
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 border border-slate-100"
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      <div className="px-5 mb-6">
        <h3 className="text-sm font-black mb-3 text-slate-800">
          {selectedSubject} Chapters
        </h3>
        <div className="flex flex-col gap-3">
          {chapters[selectedSubject].map((ch, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-[22px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex justify-between items-center"
            >
              <div>
                <span className="text-[10px] font-extrabold text-blue-600 uppercase">
                  Chapter {idx + 1}
                </span>
                <h4 className="text-xs font-black text-slate-800">{ch}</h4>
              </div>
              <button className="bg-blue-50 text-blue-600 font-black text-[10px] px-3 py-1.5 rounded-xl">
                NOTES & PDF
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 mb-6">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-5 rounded-[28px] text-white shadow-xl">
          <h3 className="font-black text-sm mb-1">🤖 AI Practical Exam Evaluator</h3>
          <p className="text-[10px] font-medium text-indigo-200 mb-3">
            Q: Explain Faraday's Law of Electromagnetic Induction.
          </p>
          <textarea
            rows={3}
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-indigo-300 outline-none resize-none mb-3"
          />
          <button
            onClick={handleEvaluateAnswer}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 font-black py-3 rounded-xl text-xs shadow-md transition-all active:scale-95"
          >
            {loading ? "EVALUATING WITH AI..." : "SUBMIT FOR AI EVALUATION"}
          </button>
          {aiFeedback && (
            <div className="mt-3 bg-white/10 p-3 rounded-xl text-xs font-semibold text-green-300">
              {aiFeedback}
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[440px] bg-white/70 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/50 px-5 py-3.5 flex justify-between items-center z-50">
        <button onClick={() => router.push("/dashboard")} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="text-lg">🏠</span>
          <span className="text-[9px] font-bold">HOME</span>
        </button>
        <button onClick={() => router.push("/courses")} className="flex flex-col items-center gap-1 text-blue-600 font-black">
          <span className="text-lg">📖</span>
          <span className="text-[9px] font-black">COURSES</span>
        </button>
        <button onClick={() => router.push("/workouts")} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="text-lg">🏋️</span>
          <span className="text-[9px] font-bold">WORKOUTS</span>
        </button>
        <button onClick={() => router.push("/habits")} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="text-lg">🛡️</span>
          <span className="text-[9px] font-bold">HABITS</span>
        </button>
        <button onClick={() => router.push("/admin")} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="text-lg">⚙️</span>
          <span className="text-[9px] font-bold">ADMIN</span>
        </button>
      </div>
    </div>
  );
}
