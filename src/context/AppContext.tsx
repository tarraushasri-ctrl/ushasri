import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  StudentProfile,
  Opportunity,
  Mentor,
  AppNotification,
  StudentTask,
  StudentProject,
  StudentCertification,
  BookedMentorSession,
  AppliedOpportunity
} from '../types';
import {
  INITIAL_STUDENT_PROFILE,
  INITIAL_NOTIFICATIONS,
  OPPORTUNITIES,
  MENTORS
} from '../data/mockData';

export type NavTab =
  | 'home'
  | 'explorer'
  | 'internships'
  | 'roadmap'
  | 'mentors'
  | 'dashboard'
  | 'profile';

interface AppContextType {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  profile: StudentProfile;
  updateProfile: (updated: Partial<StudentProfile>) => void;
  selectedCareerForRoadmap: string;
  setSelectedCareerForRoadmap: (roadmapId: string) => void;
  
  // Opportunities & Applications
  opportunities: Opportunity[];
  toggleSaveOpportunity: (id: string) => void;
  isOpportunitySaved: (id: string) => boolean;
  applyToOpportunity: (id: string, notes?: string) => void;
  hasAppliedToOpportunity: (id: string) => boolean;
  quickApplyModalOpportunity: Opportunity | null;
  setQuickApplyModalOpportunity: (opp: Opportunity | null) => void;

  // Mentorship
  mentors: Mentor[];
  bookMentorSession: (data: Omit<BookedMentorSession, 'id' | 'status'>) => void;
  quickBookMentor: Mentor | null;
  setQuickBookMentor: (mentor: Mentor | null) => void;

  // Roadmaps
  toggleRoadmapConcept: (conceptId: string) => void;
  isRoadmapConceptCompleted: (conceptId: string) => boolean;

  // Skills, Projects, Certs
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
  addProject: (proj: Omit<StudentProject, 'id'>) => void;
  deleteProject: (id: string) => void;
  addCertification: (cert: Omit<StudentCertification, 'id'>) => void;
  deleteCertification: (id: string) => void;
  updateResume: (fileName: string, fileSize: string) => void;

  // Tasks
  addTask: (task: Omit<StudentTask, 'id' | 'completed'>) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;

  // Notifications & Modals
  notifications: AppNotification[];
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
  clearNotifications: () => void;
  showNotificationsDrawer: boolean;
  setShowNotificationsDrawer: (show: boolean) => void;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (logged: boolean) => void;
  
  // Profile Stats
  profileCompletionScore: number;
  missingProfileItems: string[];

  // Global search & toast
  globalSearch: string;
  setGlobalSearch: (s: string) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_PROFILE_KEY = 'career_connect_student_profile_v1';
const LOCAL_STORAGE_NOTIFS_KEY = 'career_connect_notifications_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedCareerForRoadmap, setSelectedCareerForRoadmap] = useState<string>('roadmap-full-stack');
  const [opportunities] = useState<Opportunity[]>(OPPORTUNITIES);
  const [mentors] = useState<Mentor[]>(MENTORS);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [showNotificationsDrawer, setShowNotificationsDrawer] = useState<boolean>(false);
  const [quickApplyModalOpportunity, setQuickApplyModalOpportunity] = useState<Opportunity | null>(null);
  const [quickBookMentor, setQuickBookMentor] = useState<Mentor | null>(null);
  const [globalSearch, setGlobalSearch] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load profile from localStorage
  const [profile, setProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_PROFILE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_STUDENT_PROFILE;
  });

  // Load notifications from localStorage
  const [notifications, setNotifications] = useState<AppNotification[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_NOTIFS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_NOTIFICATIONS;
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_PROFILE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.error('Failed to save profile state', e);
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_NOTIFS_KEY, JSON.stringify(notifications));
    } catch (e) {
      console.error('Failed to save notifications state', e);
    }
  }, [notifications]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 3200);
  };

  const updateProfile = (updated: Partial<StudentProfile>) => {
    setProfile((prev) => ({ ...prev, ...updated }));
  };

  const toggleSaveOpportunity = (id: string) => {
    setProfile((prev) => {
      const exists = prev.savedOpportunityIds.includes(id);
      const nextSaved = exists
        ? prev.savedOpportunityIds.filter((item) => item !== id)
        : [...prev.savedOpportunityIds, id];
      showToast(exists ? 'Opportunity removed from saved' : 'Opportunity saved to your dashboard');
      return { ...prev, savedOpportunityIds: nextSaved };
    });
  };

  const isOpportunitySaved = (id: string) => {
    return profile.savedOpportunityIds.includes(id);
  };

  const hasAppliedToOpportunity = (id: string) => {
    return profile.appliedOpportunities.some((app) => app.opportunityId === id);
  };

  const applyToOpportunity = (id: string, notes?: string) => {
    if (hasAppliedToOpportunity(id)) {
      showToast('You have already applied for this opportunity.');
      return;
    }
    const opp = opportunities.find((o) => o.id === id);
    const newApplication: AppliedOpportunity = {
      id: `app-${Date.now()}`,
      opportunityId: id,
      appliedDate: 'Just now',
      status: 'Under Review',
      notes: notes || 'Submitted through Career Connect 1-Click Application'
    };

    const newNotification: AppNotification = {
      id: `notif-${Date.now()}`,
      title: 'Application Submitted!',
      message: `Your application for ${opp?.title || 'the role'} at ${opp?.company || 'Company'} was successfully delivered.`,
      timestamp: 'Just now',
      type: 'application',
      read: false
    };

    setProfile((prev) => ({
      ...prev,
      appliedOpportunities: [newApplication, ...prev.appliedOpportunities]
    }));

    setNotifications((prev) => [newNotification, ...prev]);
    showToast(`Application successfully sent to ${opp?.company || 'recruiter'}!`);
  };

  const bookMentorSession = (data: Omit<BookedMentorSession, 'id' | 'status'>) => {
    const newSession: BookedMentorSession = {
      id: `session-${Date.now()}`,
      ...data,
      status: 'Upcoming',
      meetingLink: 'https://meet.google.com/connect-mentor'
    };

    // Auto-create an upcoming task on the dashboard
    const newTask: StudentTask = {
      id: `task-${Date.now()}`,
      title: `Attend 1:1 Session with ${data.mentorName} (${data.topic})`,
      dueDate: `${data.date} at ${data.time}`,
      category: 'Mentorship',
      completed: false
    };

    const newNotification: AppNotification = {
      id: `notif-${Date.now()}`,
      title: 'Mentorship Session Booked!',
      message: `Confirmed session with ${data.mentorName} on ${data.date} (${data.time}). Added to your calendar.`,
      timestamp: 'Just now',
      type: 'mentor',
      read: false
    };

    setProfile((prev) => ({
      ...prev,
      bookedSessions: [newSession, ...prev.bookedSessions],
      tasks: [newTask, ...prev.tasks]
    }));

    setNotifications((prev) => [newNotification, ...prev]);
    showToast(`Session booked with ${data.mentorName}!`);
  };

  const toggleRoadmapConcept = (conceptId: string) => {
    setProfile((prev) => {
      const isCompleted = prev.completedRoadmapConceptIds.includes(conceptId);
      const nextCompleted = isCompleted
        ? prev.completedRoadmapConceptIds.filter((c) => c !== conceptId)
        : [...prev.completedRoadmapConceptIds, conceptId];
      showToast(isCompleted ? 'Milestone marked incomplete' : 'Milestone completed! +10 XP');
      return { ...prev, completedRoadmapConceptIds: nextCompleted };
    });
  };

  const isRoadmapConceptCompleted = (conceptId: string) => {
    return profile.completedRoadmapConceptIds.includes(conceptId);
  };

  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (!trimmed) return;
    if (profile.skills.some((s) => s.toLowerCase() === trimmed.toLowerCase())) {
      showToast('Skill already exists in your profile');
      return;
    }
    setProfile((prev) => ({
      ...prev,
      skills: [...prev.skills, trimmed]
    }));
    showToast(`Added "${trimmed}" to your skills`);
  };

  const removeSkill = (skill: string) => {
    setProfile((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill)
    }));
    showToast(`Removed "${skill}" from skills`);
  };

  const addProject = (proj: Omit<StudentProject, 'id'>) => {
    const newProj: StudentProject = {
      id: `proj-${Date.now()}`,
      ...proj
    };
    setProfile((prev) => ({
      ...prev,
      projects: [newProj, ...prev.projects]
    }));
    showToast(`Project "${proj.title}" added to your portfolio`);
  };

  const deleteProject = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id)
    }));
    showToast('Project removed');
  };

  const addCertification = (cert: Omit<StudentCertification, 'id'>) => {
    const newCert: StudentCertification = {
      id: `cert-${Date.now()}`,
      ...cert
    };
    setProfile((prev) => ({
      ...prev,
      certifications: [newCert, ...prev.certifications]
    }));
    showToast(`Certification "${cert.name}" added`);
  };

  const deleteCertification = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((c) => c.id !== id)
    }));
    showToast('Certification removed');
  };

  const updateResume = (fileName: string, fileSize: string) => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    setProfile((prev) => ({
      ...prev,
      resumeFileName: fileName,
      resumeFileSize: fileSize,
      resumeLastUpdated: formattedDate
    }));
    showToast(`Resume "${fileName}" uploaded and parsed successfully!`);
  };

  const addTask = (task: Omit<StudentTask, 'id' | 'completed'>) => {
    const newTask: StudentTask = {
      id: `task-${Date.now()}`,
      ...task,
      completed: false
    };
    setProfile((prev) => ({
      ...prev,
      tasks: [newTask, ...prev.tasks]
    }));
    showToast('New task added to dashboard');
  };

  const toggleTask = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      tasks: prev.tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    }));
  };

  const deleteTask = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((t) => t.id !== id)
    }));
    showToast('Task deleted');
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    showToast('All notifications marked as read');
  };

  const clearNotifications = () => {
    setNotifications([]);
    showToast('Notifications cleared');
  };

  // Profile completion calculation
  const missingItems: string[] = [];
  let score = 0;

  if (profile.name && profile.headline) {
    score += 15;
  } else {
    missingItems.push('Add full name and professional headline');
  }

  if (profile.college && profile.degree && profile.graduationYear) {
    score += 15;
  } else {
    missingItems.push('Complete university education details');
  }

  if (profile.bio && profile.bio.length > 20) {
    score += 10;
  } else {
    missingItems.push('Write a short professional student bio');
  }

  if (profile.skills && profile.skills.length >= 5) {
    score += 20;
  } else {
    missingItems.push('List at least 5 technical or soft skills');
  }

  if (profile.projects && profile.projects.length >= 1) {
    score += 15;
  } else {
    missingItems.push('Showcase at least 1 academic or personal project');
  }

  if (profile.certifications && profile.certifications.length >= 1) {
    score += 10;
  } else {
    missingItems.push('Add verified course or certification');
  }

  if (profile.resumeFileName) {
    score += 15;
  } else {
    missingItems.push('Upload a PDF resume for 1-click recruiter applications');
  }

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        profile,
        updateProfile,
        selectedCareerForRoadmap,
        setSelectedCareerForRoadmap,
        opportunities,
        toggleSaveOpportunity,
        isOpportunitySaved,
        applyToOpportunity,
        hasAppliedToOpportunity,
        quickApplyModalOpportunity,
        setQuickApplyModalOpportunity,
        mentors,
        bookMentorSession,
        quickBookMentor,
        setQuickBookMentor,
        toggleRoadmapConcept,
        isRoadmapConceptCompleted,
        addSkill,
        removeSkill,
        addProject,
        deleteProject,
        addCertification,
        deleteCertification,
        updateResume,
        addTask,
        toggleTask,
        deleteTask,
        notifications,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        clearNotifications,
        showNotificationsDrawer,
        setShowNotificationsDrawer,
        showAuthModal,
        setShowAuthModal,
        isLoggedIn,
        setIsLoggedIn,
        profileCompletionScore: Math.min(100, score),
        missingProfileItems: missingItems,
        globalSearch,
        setGlobalSearch,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
