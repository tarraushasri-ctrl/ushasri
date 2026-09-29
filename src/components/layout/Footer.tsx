import React from 'react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { setActiveTab } = useApp();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <div className="md:col-span-1">
            <span className="text-base font-bold text-slate-900">Career Connect</span>
            <p className="mt-2 text-xs text-slate-500 leading-relaxed">
              Empowering college students to discover suitable careers, master required industry skills, and secure high-impact internships.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('explorer');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-indigo-600 transition-colors"
                >
                  Career Options
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('internships');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-indigo-600 transition-colors"
                >
                  Internships & Co-ops
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('roadmap');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-indigo-600 transition-colors"
                >
                  Learning Roadmaps
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('mentors');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-indigo-600 transition-colors"
                >
                  Find a Mentor
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Tracks */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
              Popular Tracks
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>Software Engineering</li>
              <li>Data Science & AI</li>
              <li>Product Management</li>
              <li>UI/UX & Product Design</li>
              <li>Cloud & DevOps</li>
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
              Student Hub
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('profile');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-indigo-600 transition-colors"
                >
                  Resume ATS Scanner
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('dashboard');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-indigo-600 transition-colors"
                >
                  My Student Dashboard
                </button>
              </li>
              <li>Campus Ambassador Program</li>
              <li>Alumni Mentorship Guidelines</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Career Connect. Built for student career exploration.</p>
          <div className="flex items-center gap-4">
            <span>Student Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Service</span>
            <span aria-hidden="true">·</span>
            <span>University Partners</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
