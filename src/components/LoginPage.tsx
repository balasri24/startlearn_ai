import React, { useState } from 'react';
import { Lock, Mail, ShieldCheck, ArrowRight, Award, CheckCircle2 } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [employeeId, setEmployeeId] = useState('ISS-SO-2023-8942');
  const [password, setPassword] = useState('••••••••••••');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 450);
  };

  const handleQuickDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 300);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        {/* Left Side: Government Portal Context & SIH Info */}
        <div className="md:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Smart India Hackathon 2024 / Capacity Building Commission</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
              Strengthening India's Official <span className="text-blue-600">Statistical System</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              StatLearn AI is a clean, utility-driven competency engine aligned with <strong>iGOT Karmayogi</strong> and the <strong>National Statistical Systems Training Academy (NSSTA)</strong> to evaluate statistical officers, diagnose technical gaps, and generate adaptive learning pathways.
            </p>
          </div>

          {/* Value Highlights in Clean Utility Cards */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-7 h-7 rounded bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 font-bold text-xs border border-blue-100">
                01
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">Automated Competency Mapping</h4>
                <p className="text-[11px] text-slate-500">Maps officers against MoSPI FRAC roles in Survey Design, Sampling &amp; Analysis.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-7 h-7 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs border border-emerald-100">
                02
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">iGOT Karmayogi Recommendation Loop</h4>
                <p className="text-[11px] text-slate-500">Direct integration recommendations bridging identified knowledge gaps.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-7 h-7 rounded bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 font-bold text-xs border border-indigo-100">
                03
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">AI MCQ &amp; Quiz Engine from Manuals</h4>
                <p className="text-[11px] text-slate-500">Extracts complex survey instructions from PDFs and generates rigorous MCQs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Clean Utility Login Card */}
        <div className="md:col-span-6">
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
            {/* Card Header matching #0F172A theme */}
            <div className="bg-[#0F172A] p-6 text-white text-center border-b border-slate-800">
              <div className="w-10 h-10 mx-auto rounded bg-blue-500 flex items-center justify-center mb-2.5 font-bold text-lg text-white shadow-xs">
                S
              </div>
              <h2 className="text-lg font-bold tracking-tight text-white">StatLearn AI</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                MoSPI Statistical Officer Assessment Portal
              </p>
              <div className="mt-2.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-semibold border border-slate-700">
                <Award className="w-3 h-3 text-amber-400" />
                <span>Cadre Competency &amp; Assessment v2.4</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-7 space-y-4">
              {/* Quick Demo Pilot Profile Banner */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Demo Profile: Ravi (Statistical Officer)</span>
                  </div>
                  <p className="text-[11px] text-blue-700 mt-0.5">
                    Subordinate Statistical Service • SSS Cadre
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleQuickDemoLogin}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded shadow-xs transition-colors shrink-0 flex items-center gap-1"
                >
                  <span>1-Click Demo</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email / Employee ID
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={employeeId}
                      onChange={(e) => setEmployeeId(e.target.value)}
                      required
                      placeholder="e.g. ISS-SO-2023-8942 or ravi.sharma@mospi.gov.in"
                      className="block w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:ring-1 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Password
                    </label>
                    <span className="text-[11px] text-blue-600 hover:underline cursor-pointer">
                      Forgot Password?
                    </span>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="block w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:ring-1 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Department & Role Fields */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Department
                    </label>
                    <select
                      defaultValue="National Sample Survey Office (NSSO)"
                      className="block w-full px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:ring-1 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
                    >
                      <option>National Sample Survey Office (NSSO)</option>
                      <option>Economic Statistics Division (ESD)</option>
                      <option>National Statistical Systems Training Academy (NSSTA)</option>
                      <option>Social Statistics Division (SSD)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Role
                    </label>
                    <select
                      defaultValue="Statistical Officer"
                      className="block w-full px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:ring-1 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
                    >
                      <option>Statistical Officer</option>
                      <option>Senior Statistical Officer</option>
                      <option>Assistant Director (ISS)</option>
                      <option>Field Survey Supervisor</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                    />
                    <span>Remember SSO session</span>
                  </label>
                  <span className="text-slate-400 text-[11px]">NIC Cloud 2FA Active</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-2.5 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>Login to Statistical Portal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              <div className="pt-2 border-t border-slate-100 text-center">
                <p className="text-[11px] text-slate-500">
                  Protected official portal for authorized Indian Statistical Service (ISS) &amp; SSS officers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
