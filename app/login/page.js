"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {},
        }
      );
    }
  }, []);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");

    if (phoneNumber.length < 10) {
      setError("సరైన 10 అంకెల చరవాణి సంఖ్యను ఎంటర్ చేయండి.");
      return;
    }

    setLoading(true);
    const formatPhone = phoneNumber.startsWith("+") ? phoneNumber : `+91${phoneNumber}`;

    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, formatPhone, appVerifier);
      setConfirmationResult(confirmation);
    } catch (err) {
      console.error(err);
      setError("OTP పంపడంలో సమస్య వచ్చింది. నంబర్ ని సరిచూసుకోండి.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");

    if (otp.length !== 6) {
      setError("6 అంకెల OTP ని టైప్ చేయండి.");
      return;
    }

    setLoading(true);

    try {
      await confirmationResult.confirm(otp);
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError("తప్పు OTP లేదా సెషన్ ముగిసింది.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-[#f4f7fb] flex flex-col justify-center px-6 font-sans text-slate-900">
      <div id="recaptcha-container"></div>

      <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-1">LifeForge</h1>
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Phone Authentication</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 text-xs font-bold p-3.5 rounded-2xl mb-5 text-center border border-red-100">
            {error}
          </div>
        )}

        {!confirmationResult ? (
          <form onSubmit={handleSendOtp} className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-black text-slate-700 block mb-2 uppercase">
                Mobile Number
              </label>
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 focus-within:border-blue-500 transition-all">
                <span className="text-sm font-bold text-slate-500 mr-2">+91</span>
                <input 
                  type="tel" 
                  placeholder="Enter 10-digit number"
                  maxLength={10}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-transparent text-sm font-bold text-slate-800 outline-none"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black py-4 rounded-2xl text-xs shadow-lg active:scale-95 transition-all mt-2"
            >
              {loading ? "SENDING SMS..." : "GET OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-black text-slate-700 block mb-2 uppercase">
                Enter 6-Digit SMS OTP
              </label>
              <input 
                type="text" 
                placeholder="• • • • • •"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-center text-lg font-black tracking-widest text-slate-900 outline-none focus:border-blue-500 transition-all"
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-2xl text-xs shadow-lg active:scale-95 transition-all mt-2"
            >
              {loading ? "VERIFYING..." : "VERIFY & LOGIN"}
            </button>

            <button 
              type="button" 
              onClick={() => setConfirmationResult(null)}
              className="text-xs font-bold text-slate-400 hover:text-slate-700 text-center mt-1"
            >
              Change Phone Number
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
