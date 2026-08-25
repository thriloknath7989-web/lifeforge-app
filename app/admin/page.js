'use client';
import { useState } from 'react';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [adminCreds, setAdminCreds] = useState({ user: 'admin', pass: 'admin@123' });
  const [newPass, setNewPass] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === adminCreds.user && password === adminCreds.pass) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid Admin Credentials!');
    }
  };

  const handleChangePassword = () => {
    if (!newPass) return;
    setAdminCreds({ ...adminCreds, pass: newPass });
    setNewPass('');
    alert('Admin Password Updated Successfully!');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="glass-card p-8 max-w-md w-full space-y-4">
          <h2 className="text-2xl font-bold text-white text-center">Admin Access</h2>
          {error && <p className="text-red-400 text-xs text-center">{error}</p>}
          <input 
            type="text" 
            placeholder="Username (Default: admin)" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none"
          />
          <input 
            type="password" 
            placeholder="Password (Default: admin@123)" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none"
          />
          <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500">
            Login as Admin
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-center glass-card p-6">
        <h1 className="text-2xl font-bold text-white">Admin Control Panel</h1>
        <button onClick={() => setIsLoggedIn(false)} className="px-4 py-2 bg-red-600/20 text-red-400 rounded-xl text-xs font-semibold">
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-6 space-y-4">
          <h2 className="text-lg font-bold text-white">🔐 Change Admin Password</h2>
          <input 
            type="password" 
            placeholder="Enter New Admin Password" 
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none"
          />
          <button onClick={handleChangePassword} className="w-full py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl">
            Update Password
          </button>
        </div>

        <div className="glass-card p-6 space-y-4">
          <h2 className="text-lg font-bold text-white">📊 System Metrics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900/50 rounded-xl text-center">
              <p className="text-2xl font-bold text-indigo-400">12</p>
              <p className="text-xs text-slate-400">Active Users</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-xl text-center">
              <p className="text-2xl font-bold text-green-400">5</p>
              <p className="text-xs text-slate-400">Certificates Issued</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
