"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveLocalData } from "../lib/db";

export default function AuthPage() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [step, setStep] = useState("phone"); // 'phone' | 'otp' | 'password'

  const [firstName, setFirstName] = useState("");
  const [mobile, setMobile] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSendOtp = (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (!mobile || mobile.length < 10) {
      setErrorMsg("Valid 10-digit Mobile Number enter cheyandi.");
      return;
    }
    if (isRegister && !firstName) {
      setErrorMsg("First Name enter cheyandi.");
      return;
    }
    setStep("otp");
    setSuccessMsg("OTP sent! (Use test OTP: 123456)");
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (otpInput === "123456") {
      setSuccessMsg("OTP Verified!");
      setStep("password");
    } else {
      setErrorMsg("Incorrect OTP! Try 123456.");
    }
  };

  const validatePassword = (pass) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(pass);
  };

  const handleSetPassword = (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (!validatePassword(password)) {
      setErrorMsg("Password rule mismatch! Must contain: 1 Capital, 1 Small, 1 Special Char (@$!%*?&), 1 Number (Ex: Thrilok@7989)");
      return;
    }

    saveLocalData("user_profile", { firstName, mobile, registered: true });
    saveLocalData("user_password", password);

    alert("Registration completed! Login to continue.");
    setIsRegister(false);
    setStep("phone");
    setPassword("");
    setOtpInput("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const storedPass = typeof window !== "undefined" && localStorage.getItem("lifeforge_user_password") 
      ? JSON.parse(localStorage.getItem("lifeforge_user_password")) 
      : "Thrilok@7989";

    if (password === storedPass) {
      saveLocalData("is_logged_in", true);
      router.push("/dashboard");
    } else {
      setErrorMsg("Incorrect Mobile or Password!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center p-4">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-blue-600 tracking-wider">LifeForge</h1>
        <p className="text-slate-600 font-medium text-sm mt-1">Change your Life</p>
      </div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
        {errorMsg && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold">
            ⚠️ {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-xl text-xs font-semibold">
            ✅ {successMsg}
          </div>
        )}

        {!isRegister ? (
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-slate-800 text-center mb-2">Welcome Back</h2>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-700">Mobile Number</label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg mt-2 transition-all"
            >
              Login →
            </button>

            <div className="text-center mt-4">
              <p className="text-xs text-slate-600">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => { setIsRegister(true); setStep("phone"); setErrorMsg(""); setSuccessMsg(""); }}
                  className="text-blue-600 font-bold hover:underline ml-1"
                >
                  Register
                </button>
              </p>
            </div>
          </form>
        ) : (
          <div>
            <h2 className="text-xl font-bold text-slate-800 text-center mb-4">Create Account</h2>

            {step === "phone" && (
              <form onSubmit={handleSendOtp} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-700">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-medium outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-700">Mobile Number</label>
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-medium outline-none"
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl shadow mt-2">
                  Send OTP
                </button>
              </form>
            )}

            {step === "otp" && (
              <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-700">Enter OTP (123456)</label>
                  <input
                    type="text"
                    placeholder="123456"
                    value={otpInput}
                    onChange={(e) => setOtpInput(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 text-center tracking-widest font-extrabold text-xl rounded-xl py-3 outline-none"
                    maxLength={6}
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl shadow">
                  Verify OTP
                </button>
              </form>
            )}

            {step === "password" && (
              <form onSubmit={handleSetPassword} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-700">Set Password</label>
                  <input
                    type="password"
                    placeholder="Ex: Thrilok@7989"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-medium outline-none"
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow">
                  Register & Login
                </button>
              </form>
            )}

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => { setIsRegister(false); setStep("phone"); setErrorMsg(""); setSuccessMsg(""); }}
                className="text-xs text-slate-500 font-semibold hover:underline"
              >
                Back to Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
