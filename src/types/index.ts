export type CareerCategory =
  | 'All'
  | 'Technology'
  | 'Data & AI'
  | 'Design & Creative'
  | 'Business & Product'
  | 'Finance & Fintech'
  | 'Cybersecurity & Cloud';

export interface Career {
  id: string;
  title: string;
  category: Exclude<CareerCategory, 'All'>;
  icon: string;
  tagline: string;
  description: string;
  avgSalaryEntry: string;
  growthRate: string;
  requiredSkills: string[];
  popularRoles: string[];
  roadmapId: string;
  dayInLife: string;
  educationRequirement: string;
  topHiringCompanies: string[];
}

export type JobType = 'Internship' | 'Full-time' | 'Co-op';
export type WorkModel = 'Remote' | 'On-site' | 'Hybrid';

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  companyInitials: string;
  companyLogoBg: string;
  location: string;
  workModel: WorkModel;
  type: JobType;
  stipendOrSalary: string;
  duration: string;
  deadline: string;
  skillsRequired: string[];
  category: Exclude<CareerCategory, 'All'>;
  description: string;
  responsibilities: string[];
  perks: string[];
  applicantsCount: number;
  postedDate: string;
}

export interface RoadmapConcept {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
}

export interface CourseRecommendation {
  title: string;
  provider: string;
  duration: string;
  isFree: boolean;
  level: string;
  linkText: string;
}

export interface ProjectRecommendation {
  title: string;
  description: string;
  techStack: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface RoadmapPhase {
  id: string;
  phaseNumber: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  title: string;
  estimatedWeeks: string;
  description: string;
  concepts: RoadmapConcept[];
  recommendedSkills: string[];
  courses: CourseRecommendation[];
  projects: ProjectRecommendation[];
}

export interface CareerRoadmap {
  id: string;
  careerId: string;
  careerTitle: string;
  category: Exclude<CareerCategory, 'All'>;
  overview: string;
  phases: RoadmapPhase[];
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  category: Exclude<CareerCategory, 'All'>;
  expertise: string[];
  experienceYears: number;
  alumniOf: string;
  bio: string;
  rating: number;
  reviewsCount: number;
  sessionCount: number;
  availableDays: string[];
  availableSlots: string[];
}

export interface StudentProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
}

export interface StudentCertification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
}

export interface AppliedOpportunity {
  id: string;
  opportunityId: string;
  appliedDate: string;
  status: 'Under Review' | 'Shortlisted' | 'Interview Scheduled' | 'Offer Received';
  notes?: string;
}

export interface BookedMentorSession {
  id: string;
  mentorId: string;
  mentorName: string;
  mentorRole: string;
  mentorCompany: string;
  topic: string;
  date: string;
  time: string;
  status: 'Upcoming' | 'Completed' | 'Rescheduled';
  meetingLink?: string;
}

export interface StudentTask {
  id: string;
  title: string;
  dueDate: string;
  category: 'Application' | 'Learning' | 'Mentorship' | 'General';
  completed: boolean;
}

export interface StudentProfile {
  name: string;
  headline: string;
  email: string;
  phone: string;
  college: string;
  degree: string;
  graduationYear: string;
  cgpa: string;
  location: string;
  bio: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
  skills: string[];
  projects: StudentProject[];
  certifications: StudentCertification[];
  resumeFileName?: string;
  resumeFileSize?: string;
  resumeLastUpdated?: string;
  savedOpportunityIds: string[];
  appliedOpportunities: AppliedOpportunity[];
  bookedSessions: BookedMentorSession[];
  completedRoadmapConceptIds: string[];
  tasks: StudentTask[];
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'application' | 'mentor' | 'opportunity' | 'system';
  read: boolean;
}
