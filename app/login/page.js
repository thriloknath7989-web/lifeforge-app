'use client';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../lib/firebase';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/dashboard');
    } catch (err) {
      setError('Google Sign-In Failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center font-bold text-2xl text-white mx-auto mb-6 shadow-lg shadow-indigo-500/30">
          LF
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Welcome to LifeForge</h2>
        <p className="text-sm text-slate-400 mb-8">Sign in to access your courses, habit tracker, and portfolio.</p>
        
        {error && <p className="text-red-400 text-xs mb-4">{error}</p>}

        <button 
          onClick={handleGoogleLogin}
          className="w-full py-3 px-4 rounded-xl bg-white text-slate-900 font-semibold flex items-center justify-center gap-3 hover:bg-slate-100 transition-all shadow-md"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
