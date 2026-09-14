import React from 'react';
import { ViewState, UserProfile } from '../types';
import {
  LayoutDashboard,
  Target,
  Sparkles,
  FileQuestion,
  TrendingUp,
  BookOpen,
  User,
  LogOut,
  X,
  ShieldCheck
} from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  user: UserProfile;
  onLogout: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onNavigate,
  user,
  onLogout,
  isOpenMobile,
  onCloseMobile,
}) => {
  const navItems: {
    id: ViewState;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    matchViews?: ViewState[];
  }[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      matchViews: ['dashboard', 'updated-dashboard'],
    },
    {
      id: 'gap-analysis',
      label: 'Competency',
      icon: Target,
      matchViews: ['gap-analysis', 'assessment'],
    },
    {
      id: 'recommendations',
      label: 'Recommendations',
      icon: Sparkles,
      matchViews: ['recommendations'],
    },
    {
      id: 'learning',
      label: 'Learning',
      icon: BookOpen,
      matchViews: ['learning', 'learning-catalog'],
    },
    {
      id: 'quiz-generator',
      label: 'AI Quiz Generator',
      icon: FileQuestion,
      matchViews: ['quiz-generator', 'processing', 'quiz', 'quiz-result'],
    },
    {
      id: 'progress',
      label: 'Progress',
      icon: TrendingUp,
      matchViews: ['progress'],
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      matchViews: ['profile'],
    },
  ];

  const handleNav = (viewId: ViewState) => {
    onNavigate(viewId);
    onCloseMobile();
  };

  const sidebarContent = (
    <aside className="w-64 bg-[#0F172A] flex flex-col h-full select-none text-slate-200 border-r border-slate-800">
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-800 flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav('dashboard')}>
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold text-white shadow-xs">
              S
            </div>
            <span className="text-lg font-bold text-white tracking-tight">StatLearn AI</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-1.5 uppercase tracking-widest font-semibold">
            Official Statistical System
          </p>
        </div>

        {/* Mobile close button */}
        <button
          onClick={onCloseMobile}
          className="lg:hidden text-slate-400 hover:text-white p-1 rounded-md"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* MoSPI Cadre Tag */}
      <div className="px-6 py-2.5 bg-slate-900/60 border-b border-slate-800/80 flex items-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span className="text-[11px] text-slate-400 font-medium truncate">
          MoSPI • iGOT Karmayogi Hub
        </span>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive =
            item.id === currentView ||
            (item.matchViews && item.matchViews.includes(currentView));
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
                isActive
                  ? 'bg-blue-600/10 text-blue-400 font-semibold border-l-4 border-blue-500 shadow-2xs'
                  : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200 font-medium'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
              <span className="text-sm">{item.label}</span>
            </div>
          );
        })}
      </nav>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-slate-800 bg-slate-950/40">
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
          <div
            className="flex items-center space-x-3 cursor-pointer flex-1 min-w-0"
            onClick={() => handleNav('profile')}
          >
            <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
              R
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                {user.name} Kumar
              </p>
              <p className="text-[11px] text-slate-500 truncate">
                {user.role}
              </p>
            </div>
          </div>

          <button
            onClick={onLogout}
            title="Sign Out"
            className="text-slate-500 hover:text-rose-400 p-1.5 rounded transition-colors ml-1"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <div className="hidden lg:block h-screen sticky top-0 shrink-0">
        {sidebarContent}
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpenMobile && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={onCloseMobile}
          />
          <div className="relative z-10 h-full">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
