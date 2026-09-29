import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, GraduationCap, Briefcase, Mail, Lock, User, ArrowRight } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { showAuthModal, setShowAuthModal, setIsLoggedIn, showToast, updateProfile } = useApp();
  const [isRegister, setIsRegister] = useState(false);
  const [role, setRole] = useState<'student' | 'mentor'>('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!showAuthModal) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister && name) {
      updateProfile({ name });
    }
    setIsLoggedIn(true);
    setShowAuthModal(false);
    showToast(isRegister ? `Welcome to Career Connect, ${name || 'Student'}!` : 'Signed in successfully!');
  };

  const handleDemoLogin = (roleType: 'student' | 'mentor') => {
    if (roleType === 'student') {
      updateProfile({ name: 'Alex Morgan', college: 'State University' });
    }
    setIsLoggedIn(true);
    setShowAuthModal(false);
    showToast(`Logged in as demo ${roleType}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all">
        {/* Close Button */}
        <button
          onClick={() => setShowAuthModal(false)}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Brand & Header */}
        <div className="mb-5 text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            {isRegister ? 'Create Your Account' : 'Welcome Back'}
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            {isRegister
              ? 'Join 15,000+ university students accelerating their careers'
              : 'Sign in to access your saved internships, roadmaps, and mentors'}
          </p>
        </div>

        {/* Role Toggle */}
        <div className="mb-5 grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-all ${
              role === 'student'
                ? 'bg-white text-indigo-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            <span>Student</span>
          </button>
          <button
            type="button"
            onClick={() => setRole('mentor')}
            className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-all ${
              role === 'mentor'
                ? 'bg-white text-indigo-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Briefcase className="h-4 w-4" />
            <span>Alumni Mentor</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {isRegister && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              University Email / Email
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@university.edu"
                className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
          >
            <span>{isRegister ? 'Complete Registration' : 'Sign In to Account'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Demo Fast Login */}
        <div className="mt-4 pt-4 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400 mb-2">Instant demo access</p>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => handleDemoLogin('student')}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Demo Student Login
            </button>
            <button
              onClick={() => handleDemoLogin('mentor')}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Demo Mentor Login
            </button>
          </div>
        </div>

        {/* Switch mode */}
        <div className="mt-4 text-center text-xs text-slate-500">
          {isRegister ? (
            <span>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className="font-semibold text-indigo-600 hover:underline"
              >
                Sign In
              </button>
            </span>
          ) : (
            <span>
              New to Career Connect?{' '}
              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className="font-semibold text-indigo-600 hover:underline"
              >
                Create Free Student Account
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
