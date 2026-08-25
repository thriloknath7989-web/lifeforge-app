"use client";
import React, { useState } from "react";

export default function AdminDashboard() {
  const [curriculumTitle, setCurriculumTitle] = useState("");
  const [targetAudience, setTargetAudience] = useState("kids");
  const [strictMode, setStrictMode] = useState(true);
  const [file, setFile] = useState(null);
  const [curriculumList, setCurriculumList] = useState([
    {
      id: 1,
      title: "Class 10 Physics - Motion & Force",
      audience: "Kids / High School",
      fileName: "physics_ch1.pdf",
      guardrail: "Strict (Syllabus Only)",
      aiStatus: "AI Vector Indexed",
      date: "2026-08-25",
    },
  ]);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!curriculumTitle || !file) {
      alert("Please enter title and attach a syllabus file!");
      return;
    }

    const newItem = {
      id: Date.now(),
      title: curriculumTitle,
      audience: targetAudience === "kids" ? "Kids Mode" : "Adults Mode",
      fileName: file.name,
      guardrail: strictMode ? "Strict (Syllabus Only)" : "Flexible AI",
      aiStatus: "AI Processed & Guardrail Active",
      date: new Date().toISOString().split("T")[0],
    };

    setCurriculumList([newItem, ...curriculumList]);
    setCurriculumTitle("");
    setFile(null);
    alert("Curriculum Uploaded Successfully! AI will now answer queries only within this document.");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-purple-500/20">
              LF
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-wide">LifeForge Admin Console</h1>
              <p className="text-xs text-slate-400 mt-0.5">Syllabus Upload & Strict Guardrail Manager</p>
            </div>
          </div>
          <span className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Strict AI Scope Active
          </span>
        </div>

        {/* Curriculum Upload & Strict Rules */}
        <div className="p-8 bg-slate-900/80 border border-slate-800 rounded-3xl backdrop-blur-xl shadow-2xl space-y-6">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <span>📤</span> Upload Syllabus / Curriculum Document
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Upload course material (PDF / Text). The AI will automatically ignore waste/extra topics and ONLY answer queries directly present in this file.
          </p>

          <form onSubmit={handleUpload} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                Syllabus Title
              </label>
              <input
                type="text"
                required
                placeholder="e.g. CBSE Class 10 Biology - Cellular Respiration"
                className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white outline-none focus:border-purple-500 transition"
                value={curriculumTitle}
                onChange={(e) => setCurriculumTitle(e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                  Target Learning Mode
                </label>
                <select
                  className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white outline-none focus:border-purple-500 transition"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                >
                  <option value="kids">👶 Kids Mode (Comics & Games Only)</option>
                  <option value="adults">🎓 Adult Mode (Concept Modules & Analytics)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                  Attach Curriculum File (PDF / TXT)
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.txt,.docx"
                  className="w-full text-xs text-slate-400 file:mr-4 file:py-3 file:px-5 file:rounded-xl file:border-0 file:bg-purple-600 file:text-white file:font-semibold hover:file:bg-purple-500 cursor-pointer bg-slate-950 border border-slate-800 rounded-xl p-2"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>

            {/* Guardrail Toggle */}
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-200">Strict Syllabus Scope (Ignore Waste Topics)</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">When ENABLED, AI rejects questions outside this syllabus file.</p>
              </div>
              <button
                type="button"
                onClick={() => setStrictMode(!strictMode)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  strictMode
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {strictMode ? "ENABLED (Strict Scope)" : "DISABLED (Open Search)"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 font-bold text-sm rounded-xl transition shadow-lg shadow-purple-600/30 active:scale-98"
            >
              Upload & Activate Guardrail Scope
            </button>
          </form>
        </div>

        {/* Uploaded Vault */}
        <div className="p-8 bg-slate-900/80 border border-slate-800 rounded-3xl space-y-5">
          <h2 className="text-lg font-bold text-slate-100">Active Curriculum Vault</h2>
          <div className="space-y-3">
            {curriculumList.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between text-xs"
              >
                <div>
                  <h4 className="font-bold text-slate-200 text-sm">{item.title}</h4>
                  <p className="text-slate-500 mt-1 text-[11px]">
                    File: <span className="text-cyan-400">{item.fileName}</span> | Rules:{" "}
                    <span className="text-emerald-400">{item.guardrail}</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded-lg text-[10px] block w-fit ml-auto">
                    {item.aiStatus}
                  </span>
                  <span className="text-slate-500 text-[10px] mt-1 block">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
