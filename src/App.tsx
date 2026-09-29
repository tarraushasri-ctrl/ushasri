/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomeView } from './views/HomeView';
import { CareerExplorerView } from './views/CareerExplorerView';
import { InternshipsView } from './views/InternshipsView';
import { SkillRoadmapView } from './views/SkillRoadmapView';
import { MentorshipView } from './views/MentorshipView';
import { StudentProfileView } from './views/StudentProfileView';
import { DashboardView } from './views/DashboardView';
import { ApplyModal } from './components/modals/ApplyModal';
import { BookMentorModal } from './components/modals/BookMentorModal';
import { AuthModal } from './components/modals/AuthModal';
import { NotificationsDrawer } from './components/modals/NotificationsDrawer';
import { CheckCircle2 } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeTab, toastMessage } = useApp();

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'explorer':
        return <CareerExplorerView />;
      case 'internships':
        return <InternshipsView />;
      case 'roadmap':
        return <SkillRoadmapView />;
      case 'mentors':
        return <MentorshipView />;
      case 'dashboard':
        return <DashboardView />;
      case 'profile':
        return <StudentProfileView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />

      <main className="flex-1">
        {renderActiveView()}
      </main>

      <Footer />

      {/* Global Modals & Drawers */}
      <ApplyModal />
      <BookMentorModal />
      <AuthModal />
      <NotificationsDrawer />

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-xs font-semibold text-white shadow-xl animate-fade-in transition-all">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
