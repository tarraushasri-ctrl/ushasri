import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CAREERS, ROADMAPS } from '../data/mockData';
import {
  Briefcase,
  Bookmark,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  Plus,
  Trash2,
  ExternalLink,
  Sparkles,
  MapPin,
  DollarSign,
  Layers,
  CheckSquare,
  Square,
  AlertCircle
} from 'lucide-react';
import { StudentTask } from '../types';

export const DashboardView: React.FC = () => {
  const {
    profile,
    opportunities,
    toggleSaveOpportunity,
    setQuickApplyModalOpportunity,
    hasAppliedToOpportunity,
    setActiveTab,
    setSelectedCareerForRoadmap,
    addTask,
    toggleTask,
    deleteTask,
    selectedCareerForRoadmap
  } = useApp();

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDue, setNewTaskDue] = useState('In 3 days');
  const [newTaskCategory, setNewTaskCategory] = useState<StudentTask['category']>('Application');
  const [isAddingTask, setIsAddingTask] = useState(false);

  // Filter saved opportunities
  const savedOpportunitiesList = opportunities.filter((o) =>
    profile.savedOpportunityIds.includes(o.id)
  );

  // Recommended careers based on skills
  const recommendedCareers = CAREERS.map((c) => {
    const studentSkillsLower = profile.skills.map((s) => s.toLowerCase());
    const matched = c.requiredSkills.filter((sk) =>
      studentSkillsLower.includes(sk.toLowerCase())
    );
    const matchScore = Math.round((matched.length / c.requiredSkills.length) * 100);
    return { ...c, matchScore, matchedSkills: matched };
  })
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);

  // Recommended internships matching skills
  const recommendedInternships = opportunities
    .map((opp) => {
      const studentSkillsLower = profile.skills.map((s) => s.toLowerCase());
      const matched = opp.skillsRequired.filter((sk) =>
        studentSkillsLower.includes(sk.toLowerCase())
      );
      const matchScore = Math.round((matched.length / opp.skillsRequired.length) * 100);
      return { ...opp, matchScore, matchedSkills: matched };
    })
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);

  // Roadmap progress
  const activeRoadmap = ROADMAPS[selectedCareerForRoadmap] || ROADMAPS['roadmap-full-stack'];
  const allConcepts = activeRoadmap.phases.flatMap((p) => p.concepts);
  const completedConcepts = allConcepts.filter((c) =>
    profile.completedRoadmapConceptIds.includes(c.id)
  );
  const nextMilestone = allConcepts.find(
    (c) => !profile.completedRoadmapConceptIds.includes(c.id)
  );
  const roadmapPercent = Math.round(
    (completedConcepts.length / (allConcepts.length || 1)) * 100
  );

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    addTask({
      title: newTaskTitle.trim(),
      dueDate: newTaskDue,
      category: newTaskCategory
    });

    setNewTaskTitle('');
    setIsAddingTask(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Welcome & Overview Banner */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
              <Sparkles className="h-4 w-4" />
              <span>Student Command Center</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Welcome back, {profile.name}!
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-2xl">
              Track your summer internship applications, active roadmap milestones, upcoming mentor calls, and curated recommendations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setActiveTab('internships');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-indigo-700 transition-colors"
            >
              Browse Internships
            </button>
            <button
              onClick={() => {
                setActiveTab('profile');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* 4 Metric Tiles */}
        <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Applications Sent</span>
              <Briefcase className="h-4 w-4 text-indigo-600" />
            </div>
            <p className="mt-2 text-2xl font-bold text-slate-900 font-mono tabular-nums">
              {profile.appliedOpportunities.length}
            </p>
            <span className="text-[11px] text-emerald-600 font-medium">1 Under Review</span>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Saved Roles</span>
              <Bookmark className="h-4 w-4 text-amber-500" />
            </div>
            <p className="mt-2 text-2xl font-bold text-slate-900 font-mono tabular-nums">
              {profile.savedOpportunityIds.length}
            </p>
            <span className="text-[11px] text-slate-400">Ready to apply</span>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Milestones Done</span>
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            </div>
            <p className="mt-2 text-2xl font-bold text-slate-900 font-mono tabular-nums">
              {profile.completedRoadmapConceptIds.length}
            </p>
            <span className="text-[11px] text-slate-400">Across roadmaps</span>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Booked Sessions</span>
              <Calendar className="h-4 w-4 text-purple-600" />
            </div>
            <p className="mt-2 text-2xl font-bold text-slate-900 font-mono tabular-nums">
              {profile.bookedSessions.length}
            </p>
            <span className="text-[11px] text-purple-600 font-medium">Next: Tomorrow</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Left = Recommendations & Saved, Right = Skill Progress & Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (7 cols): Recommended Careers & Internships */}
        <div className="lg:col-span-7 space-y-8">
          {/* Recommended Careers Based on Skills */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Recommended Career Matches
                </h3>
                <p className="text-xs text-slate-500">
                  Based on your {profile.skills.length} listed technical skills.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab('explorer');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
              >
                All Careers →
              </button>
            </div>

            <div className="space-y-3">
              {recommendedCareers.map((c) => (
                <div
                  key={c.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-4 hover:border-slate-300 transition-colors gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">{c.title}</span>
                      <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 tabular-nums">
                        {c.matchScore}% Match
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      Entry: <span className="font-semibold text-slate-800">{c.avgSalaryEntry}</span> · {c.growthRate}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {c.matchedSkills.map((sk) => (
                        <span
                          key={sk}
                          className="rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-1.5 py-0.5 text-[10px] font-semibold"
                        >
                          ✓ {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCareerForRoadmap(c.roadmapId);
                      setActiveTab('roadmap');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-1 rounded-xl bg-white border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shrink-0 self-start sm:self-center"
                  >
                    <span>Roadmap</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Internships Matching Skills */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Recommended Internships For You
                </h3>
                <p className="text-xs text-slate-500">
                  High keyword synergy with your resume & projects.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab('internships');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
              >
                View All →
              </button>
            </div>

            <div className="space-y-3">
              {recommendedInternships.map((opp) => {
                const applied = hasAppliedToOpportunity(opp.id);

                return (
                  <div
                    key={opp.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl border border-slate-200 p-4 hover:border-slate-300 transition-colors gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">{opp.company}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-xs text-slate-500">{opp.location}</span>
                        <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 tabular-nums">
                          {opp.matchScore}% Match
                        </span>
                      </div>
                      <h4 className="mt-1 text-sm font-bold text-slate-900">{opp.title}</h4>
                      <p className="mt-0.5 text-xs font-medium text-slate-600">
                        {opp.stipendOrSalary} · {opp.workModel}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                      <button
                        onClick={() => toggleSaveOpportunity(opp.id)}
                        className={`rounded-lg p-2 transition-colors ${
                          profile.savedOpportunityIds.includes(opp.id)
                            ? 'text-amber-500 bg-amber-50'
                            : 'text-slate-400 hover:bg-slate-100'
                        }`}
                        aria-label="Save opportunity"
                      >
                        <Bookmark
                          className={`h-4 w-4 ${
                            profile.savedOpportunityIds.includes(opp.id) ? 'fill-current' : ''
                          }`}
                        />
                      </button>
                      <button
                        onClick={() => setQuickApplyModalOpportunity(opp)}
                        disabled={applied}
                        className={`rounded-xl px-4 py-1.5 text-xs font-semibold transition-colors ${
                          applied
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                        }`}
                      >
                        {applied ? 'Applied' : 'Apply'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Saved Opportunities Section */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Bookmarked Opportunities ({savedOpportunitiesList.length})
                </h3>
                <p className="text-xs text-slate-500">
                  Positions you saved to review or apply for later.
                </p>
              </div>
            </div>

            {savedOpportunitiesList.length === 0 ? (
              <div className="text-center py-6 text-slate-400 text-xs">
                No bookmarked opportunities yet. Click the bookmark icon on any job card to save it here.
              </div>
            ) : (
              <div className="space-y-3">
                {savedOpportunitiesList.map((opp) => (
                  <div
                    key={opp.id}
                    className="flex items-center justify-between rounded-xl border border-slate-200 p-3.5"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{opp.title}</h4>
                      <p className="text-[11px] text-slate-500">
                        {opp.company} · {opp.location} · Deadline: {opp.deadline}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setQuickApplyModalOpportunity(opp)}
                        className="rounded-lg bg-indigo-600 px-3 py-1 text-xs font-semibold text-white hover:bg-indigo-700"
                      >
                        Apply
                      </button>
                      <button
                        onClick={() => toggleSaveOpportunity(opp.id)}
                        className="text-slate-400 hover:text-red-600 p-1"
                        aria-label="Remove bookmark"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column (5 cols): Roadmap Tracker & Upcoming Tasks */}
        <div className="lg:col-span-5 space-y-8">
          {/* Active Roadmap Progress Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                  Active Roadmap
                </span>
                <h3 className="text-base font-bold text-slate-900">{activeRoadmap.careerTitle}</h3>
              </div>
              <span className="text-sm font-bold text-indigo-600 font-mono tabular-nums">
                {roadmapPercent}%
              </span>
            </div>

            {/* Progress bar */}
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full bg-indigo-600 transition-all duration-300"
                style={{ width: `${roadmapPercent}%` }}
              />
            </div>

            {/* Next Recommended Concept Milestone */}
            {nextMilestone ? (
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 block">
                  Next Milestone to Complete:
                </span>
                <p className="text-xs font-bold text-slate-900">{nextMilestone.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {nextMilestone.description}
                </p>
                <button
                  onClick={() => {
                    setActiveTab('roadmap');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="mt-1 flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:underline"
                >
                  <span>Open in Roadmap Timeline</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            ) : (
              <div className="rounded-2xl bg-emerald-50 p-4 text-xs text-emerald-800 font-medium">
                🎉 Congratulations! You have completed all milestones in this roadmap track.
              </div>
            )}
          </div>

          {/* Booked Mentorship Sessions */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">Upcoming Mentor Sessions</h3>
              <button
                onClick={() => {
                  setActiveTab('mentors');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Find Mentors →
              </button>
            </div>

            {profile.bookedSessions.length === 0 ? (
              <div className="text-center py-6 text-slate-400 text-xs">
                No sessions booked. Connect with an alumni mentor for a free 30-min call!
              </div>
            ) : (
              <div className="space-y-3">
                {profile.bookedSessions.map((session) => (
                  <div
                    key={session.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">
                          {session.mentorName} ({session.mentorCompany})
                        </h4>
                        <p className="text-[11px] text-slate-600">{session.topic}</p>
                      </div>
                      <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                        {session.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs text-slate-500">
                      <span className="flex items-center gap-1 font-mono">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        {session.date} · {session.time}
                      </span>
                      <a
                        href={session.meetingLink}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-indigo-600 hover:underline"
                      >
                        Join Call
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Upcoming Tasks & Deadlines */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Upcoming Tasks</h3>
                <p className="text-xs text-slate-500">Action items, deadlines & study goals</p>
              </div>

              <button
                onClick={() => setIsAddingTask(!isAddingTask)}
                className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Task</span>
              </button>
            </div>

            {/* Add task inline form */}
            {isAddingTask && (
              <form onSubmit={handleCreateTask} className="rounded-2xl border border-indigo-200 bg-indigo-50/30 p-3.5 space-y-2.5 text-xs">
                <input
                  type="text"
                  required
                  placeholder="Task title (e.g. Polish Stripe cover letter)"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white p-2 text-slate-800 focus:outline-none"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Due date (e.g. Oct 04, 2026)"
                    value={newTaskDue}
                    onChange={(e) => setNewTaskDue(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white p-2 text-slate-800 focus:outline-none"
                  />
                  <select
                    value={newTaskCategory}
                    onChange={(e) => setNewTaskCategory(e.target.value as any)}
                    className="rounded-xl border border-slate-200 bg-white p-2 text-slate-800 focus:outline-none"
                  >
                    <option value="Application">Application</option>
                    <option value="Learning">Learning</option>
                    <option value="Mentorship">Mentorship</option>
                    <option value="General">General</option>
                  </select>
                </div>
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsAddingTask(false)}
                    className="rounded-lg px-3 py-1 text-slate-500 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-indigo-600 px-3 py-1 font-semibold text-white hover:bg-indigo-700"
                  >
                    Save Task
                  </button>
                </div>
              </form>
            )}

            {/* Tasks checklist */}
            <div className="space-y-2">
              {profile.tasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex items-start justify-between rounded-xl border p-3 transition-colors ${
                    task.completed
                      ? 'border-slate-100 bg-slate-50/40 text-slate-400'
                      : 'border-slate-200 bg-white text-slate-800'
                  }`}
                >
                  <div
                    onClick={() => toggleTask(task.id)}
                    className="flex items-start gap-2.5 cursor-pointer flex-1 min-w-0"
                  >
                    <button
                      type="button"
                      className="mt-0.5 shrink-0 text-slate-400 hover:text-indigo-600"
                      aria-label={task.completed ? 'Mark incomplete' : 'Mark complete'}
                    >
                      {task.completed ? (
                        <CheckSquare className="h-4 w-4 text-emerald-600" />
                      ) : (
                        <Square className="h-4 w-4 text-slate-300" />
                      )}
                    </button>
                    <div>
                      <p
                        className={`text-xs font-medium leading-snug ${
                          task.completed ? 'line-through text-slate-400' : 'text-slate-900'
                        }`}
                      >
                        {task.title}
                      </p>
                      <span className="text-[11px] text-slate-400 font-mono">
                        Due: {task.dueDate} · {task.category}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-slate-300 hover:text-red-500 p-1 shrink-0 ml-2"
                    aria-label="Delete task"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
