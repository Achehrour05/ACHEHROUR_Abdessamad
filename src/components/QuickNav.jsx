import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, FolderGit2, Info, Award } from 'lucide-react';

export default function QuickNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Profile', path: '/profile', icon: User },
    { label: 'Works', path: '/projects', icon: FolderGit2 },
    { label: 'Info', path: '/info', icon: Info },
    { label: 'Certs', path: '/certifications', icon: Award },
  ];

  if (location.pathname === '/') return null;

  return (
    <aside className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#12121a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-1 sm:gap-2">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = location.pathname === link.path;
        return (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              isActive
                ? 'bg-white text-black shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{link.label}</span>
          </button>
        );
      })}
    </aside>
  );
}
