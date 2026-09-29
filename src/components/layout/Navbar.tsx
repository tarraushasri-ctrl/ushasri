import React, { useState } from 'react';
import { useApp, NavTab } from '../../context/AppContext';
import { Bell, Menu, X, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    notifications,
    setShowNotificationsDrawer,
    setShowAuthModal,
    isLoggedIn,
    profile
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const navLinks: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'explorer', label: 'Career Explorer' },
    { id: 'internships', label: 'Internships' },
    { id: 'roadmap', label: 'Skill Roadmap' },
    { id: 'mentors', label: 'Mentors' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'profile', label: 'Profile' }
  ];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-lg font-bold tracking-tight text-slate-900 hover:text-indigo-600 transition-colors whitespace-nowrap"
        >
          Career Connect
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs font-semibold whitespace-nowrap transition-colors py-1 relative ${
                  isActive
                    ? 'text-indigo-600'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Notifications Button */}
          <button
            onClick={() => setShowNotificationsDrawer(true)}
            className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            aria-label="Open notifications"
          >
            <Bell className="h-4 w-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white tabular-nums">
                {unreadCount}
              </span>
            )}
          </button>

          {/* User Auth / Profile Button */}
          {isLoggedIn ? (
            <button
              onClick={() => handleNavClick('profile')}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors whitespace-nowrap"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white text-[11px] font-bold">
                {profile.name.charAt(0) || 'A'}
              </div>
              <span className="hidden sm:inline max-w-28 truncate">{profile.name}</span>
            </button>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-indigo-700 transition-colors whitespace-nowrap"
            >
              Sign In
            </button>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="h-1.5 w-1.5 rounded-full bg-indigo-600" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
