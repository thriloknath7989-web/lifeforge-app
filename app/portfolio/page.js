'use client';

export default function Portfolio() {
  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto space-y-8">
      <div className="glass-card p-8 text-center space-y-4">
        <div className="w-24 h-24 rounded-full bg-indigo-600 mx-auto flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-indigo-500/30">
          JD
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">John Doe</h1>
          <p className="text-sm text-indigo-400 font-medium">Full-Stack SaaS Builder & Certified Developer</p>
        </div>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Passionate about building scalable web apps. Verified credentials powered by LifeForge Platform.
        </p>
        <button 
          onClick={() => { navigator.clipboard.writeText(window.location.href); alert("Public Portfolio Link Copied!"); }}
          className="px-4 py-2 bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 text-xs rounded-full font-medium hover:bg-indigo-600/30 transition-all"
        >
          🔗 Share Profile Link (LinkedIn / Resume)
        </button>
      </div>

      <div className="glass-card p-6 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">📜 Verified Certifications</h2>
        <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 flex justify-between items-center">
          <div>
            <h3 className="text-sm font-semibold text-white">Full-Stack SaaS Development</h3>
            <p className="text-xs text-slate-400">Issued by LifeForge • Verified AI Practical Pass</p>
          </div>
          <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full font-bold">
            Verified ✅
          </span>
        </div>
      </div>
    </div>
  );
}
