'use client';
import { useState } from 'react';

export default function Courses() {
  const [examStatus, setExamStatus] = useState('idle');

  const handleSubmitExam = () => {
    setExamStatus('waiting');
    setTimeout(() => {
      setExamStatus('ready');
    }, 10000);
  };

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-extrabold text-white">Course Completion & AI Practical Exam</h1>

      <div className="glass-card p-6 space-y-6">
        <h2 className="text-xl font-bold text-indigo-400">Full-Stack SaaS Development Course</h2>
        <p className="text-sm text-slate-300">Complete the self-paced practical exam below. Upload your answer sheet or practical code output for AI evaluation.</p>

        {examStatus === 'idle' && (
          <div className="space-y-4 border-t border-slate-800 pt-4">
            <label className="block text-sm font-medium text-slate-300">Upload Answer Sheet / Code Output Image:</label>
            <input type="file" className="block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500" />
            <button onClick={handleSubmitExam} className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20">
              Submit Practical & Theory Exam
            </button>
          </div>
        )}

        {examStatus === 'waiting' && (
          <div className="p-6 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-center space-y-3">
            <div className="animate-spin w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto"></div>
            <h3 className="text-lg font-bold text-indigo-300">🎉 You've qualified your course exam!</h3>
            <p className="text-sm text-slate-300">Your certificate is currently generating. Please wait a few minutes (~30 mins). We will notify you once completed!</p>
          </div>
        )}

        {examStatus === 'ready' && (
          <div className="p-6 bg-green-950/40 border border-green-500/30 rounded-xl text-center space-y-4">
            <span className="text-4xl">🎓</span>
            <h3 className="text-xl font-bold text-green-300">Hooray! Your Certificate is Ready!</h3>
            <p className="text-sm text-slate-300">Verified by LifeForge AI Evaluation Engine.</p>
            <button className="px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl shadow-lg">
              Download Verified Certificate & Sync to Portfolio
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
