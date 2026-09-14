import React from 'react';
import { UserProfile, ViewState } from '../types';
import {
  Building2,
  MapPin,
  RotateCcw
} from 'lucide-react';

interface OfficerProfileViewProps {
  user: UserProfile;
  onNavigate: (view: ViewState) => void;
  onResetJourney: () => void;
}

export const OfficerProfileView: React.FC<OfficerProfileViewProps> = ({
  user,
  onNavigate,
  onResetJourney,
}) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Card Header */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          {/* Avatar matching Design HTML (#0F172A user avatar R) */}
          <div className="w-16 h-16 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-xs">
            R
          </div>

          <div className="space-y-1 text-center sm:text-left flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h1 className="text-xl font-bold text-slate-900">
                {user.name} Kumar
              </h1>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100 uppercase">
                Verified Statistical Officer
              </span>
            </div>

            <p className="text-xs font-medium text-slate-600">
              {user.role} • {user.cadre}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-500 pt-0.5">
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                {user.organization}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {user.posting}
              </span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('dashboard')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-xs transition-colors shrink-0"
          >
            Dashboard
          </button>
        </div>

        {/* Details Grid */}
        <div className="grid sm:grid-cols-3 gap-3 pt-5 mt-5 border-t border-slate-100 text-xs">
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-100">
            <span className="text-slate-400 font-semibold block mb-0.5 text-[10px] uppercase">
              Employee ID
            </span>
            <span className="text-xs font-bold text-slate-900">{user.employeeId}</span>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-100">
            <span className="text-slate-400 font-semibold block mb-0.5 text-[10px] uppercase">
              Official Email
            </span>
            <span className="text-xs font-bold text-slate-900">ravi.kumar@mospi.gov.in</span>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-100">
            <span className="text-slate-400 font-semibold block mb-0.5 text-[10px] uppercase">
              iGOT Karmayogi ID
            </span>
            <span className="text-xs font-bold text-blue-600">KMY-GOI-99824</span>
          </div>
        </div>
      </div>

      {/* Cadre Competencies Summary */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-3">
        <h3 className="text-sm font-bold text-slate-900">
          Capacity Building Commission (CBC) Accreditation
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          StatLearn AI maintains a verifiable ledger of officer competencies across NSS rounds, PLFS surveys, ASI economic censuses, and National Accounts tabulations.
        </p>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Hackathon Demonstration Reset:
          </span>
          <button
            onClick={onResetJourney}
            className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Demo to Step 1 (Login)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
