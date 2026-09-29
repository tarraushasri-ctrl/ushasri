import React from 'react';
import { useApp } from '../context/AppContext';
import { ROADMAPS } from '../data/mockData';
import {
  CheckCircle2,
  Circle,
  BookOpen,
  FolderGit2,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  ChevronRight
} from 'lucide-react';

export const SkillRoadmapView: React.FC = () => {
  const {
    selectedCareerForRoadmap,
    setSelectedCareerForRoadmap,
    toggleRoadmapConcept,
    isRoadmapConceptCompleted,
    setActiveTab
  } = useApp();

  const availableRoadmapKeys = Object.keys(ROADMAPS);
  const activeRoadmap = ROADMAPS[selectedCareerForRoadmap] || ROADMAPS['roadmap-full-stack'];

  // Compute total milestones and completed count for this roadmap
  const allConcepts = activeRoadmap.phases.flatMap((p) => p.concepts);
  const completedConceptsCount = allConcepts.filter((c) =>
    isRoadmapConceptCompleted(c.id)
  ).length;
  const progressPercent = Math.round(
    (completedConceptsCount / (allConcepts.length || 1)) * 100
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Interactive Curricula
          </span>
          <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Skill Roadmaps
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-2xl">
            Step-by-step career blueprints curated by industry mentors. Check off concepts as you learn, build recommended portfolio projects, and monitor your progress.
          </p>
        </div>

        {/* Quick progress indicator */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs min-w-56 shrink-0">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-semibold text-slate-700">Track Mastery</span>
            <span className="font-bold text-indigo-600 font-mono tabular-nums">
              {progressPercent}%
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full bg-indigo-600 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="mt-1.5 text-[11px] text-slate-400">
            {completedConceptsCount} of {allConcepts.length} milestones checked
          </p>
        </div>
      </div>

      {/* Career Track Selector Pills */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-2">
          Select Career Discipline:
        </label>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {availableRoadmapKeys.map((key) => {
            const r = ROADMAPS[key];
            const isSelected = selectedCareerForRoadmap === key;

            return (
              <button
                key={key}
                onClick={() => setSelectedCareerForRoadmap(key)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span>{r.careerTitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Roadmap Overview Banner */}
      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 mb-1">
            <Layers className="h-4 w-4" />
            <span>{activeRoadmap.category} Track</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900">{activeRoadmap.careerTitle}</h2>
          <p className="mt-1 text-xs text-slate-600 max-w-3xl leading-relaxed">
            {activeRoadmap.overview}
          </p>
        </div>

        <button
          onClick={() => {
            setActiveTab('internships');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="shrink-0 flex items-center gap-1.5 rounded-xl bg-white border border-indigo-200 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-2xs hover:bg-indigo-50 transition-colors"
        >
          <span>Matching Jobs</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Step-by-Step Learning Stages: Beginner -> Intermediate -> Advanced */}
      <div className="space-y-8">
        {activeRoadmap.phases.map((phase) => {
          const phaseConcepts = phase.concepts;
          const phaseCompleted = phaseConcepts.filter((c) =>
            isRoadmapConceptCompleted(c.id)
          ).length;
          const phasePercent = Math.round(
            (phaseCompleted / (phaseConcepts.length || 1)) * 100
          );

          const getBadgeColor = (level: string) => {
            switch (level) {
              case 'Beginner':
                return 'bg-emerald-50 text-emerald-800 border-emerald-200';
              case 'Intermediate':
                return 'bg-blue-50 text-blue-800 border-blue-200';
              case 'Advanced':
                return 'bg-purple-50 text-purple-800 border-purple-200';
              default:
                return 'bg-slate-50 text-slate-800 border-slate-200';
            }
          };

          return (
            <div
              key={phase.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs"
            >
              {/* Phase Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`rounded-md border px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${getBadgeColor(
                        phase.level
                      )}`}
                    >
                      {phase.level} Stage
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Est. {phase.estimatedWeeks}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{phase.title}</h3>
                  <p className="mt-1 text-xs text-slate-500 max-w-2xl leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs font-semibold text-slate-600 block">
                    {phaseCompleted} / {phaseConcepts.length} Completed
                  </span>
                  <span className="text-xs font-bold text-indigo-600 font-mono tabular-nums">
                    {phasePercent}% Complete
                  </span>
                </div>
              </div>

              {/* Grid: Left = Concepts Checklist, Right = Recommended Courses & Projects */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Concepts Milestones Checklist (7 cols) */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Core Concept Milestones
                    </h4>
                    <span className="text-[11px] text-slate-400">Click circle to mark completed</span>
                  </div>

                  <div className="space-y-2.5">
                    {phase.concepts.map((concept) => {
                      const completed = isRoadmapConceptCompleted(concept.id);

                      return (
                        <div
                          key={concept.id}
                          onClick={() => toggleRoadmapConcept(concept.id)}
                          className={`flex items-start gap-3 rounded-2xl border p-3.5 cursor-pointer transition-all ${
                            completed
                              ? 'bg-emerald-50/40 border-emerald-200'
                              : 'bg-slate-50/60 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <button
                            type="button"
                            className="mt-0.5 text-slate-400 hover:text-emerald-600 transition-colors shrink-0"
                            aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
                          >
                            {completed ? (
                              <CheckCircle2 className="h-5 w-5 text-emerald-600 fill-emerald-100" />
                            ) : (
                              <Circle className="h-5 w-5 text-slate-300" />
                            )}
                          </button>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span
                                className={`text-xs font-bold leading-tight ${
                                  completed
                                    ? 'text-emerald-950 line-through decoration-emerald-600/40'
                                    : 'text-slate-900'
                                }`}
                              >
                                {concept.title}
                              </span>
                              <span className="text-[10px] text-slate-400 shrink-0 tabular-nums">
                                {concept.timeEstimate}
                              </span>
                            </div>
                            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                              {concept.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Recommended Skills Tag Strip */}
                  <div className="pt-3">
                    <span className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                      Target Skills to Acquire in this Stage:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {phase.recommendedSkills.map((sk) => (
                        <span
                          key={sk}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Curated Courses & Portfolio Projects (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Curated Courses */}
                  <div>
                    <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                      <BookOpen className="h-4 w-4 text-indigo-600" />
                      <span>Recommended Curated Courses</span>
                    </h4>
                    <div className="space-y-2.5">
                      {phase.courses.map((course, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-2xs hover:border-indigo-300 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h5 className="text-xs font-bold text-slate-900 leading-snug">
                              {course.title}
                            </h5>
                            <span
                              className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold shrink-0 ${
                                course.isFree
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              {course.isFree ? 'Free' : 'Audit'}
                            </span>
                          </div>
                          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                            <span>{course.provider}</span>
                            <span>{course.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Portfolio Projects to Build */}
                  <div>
                    <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                      <FolderGit2 className="h-4 w-4 text-emerald-600" />
                      <span>Hands-On Portfolio Blueprint</span>
                    </h4>
                    <div className="space-y-3">
                      {phase.projects.map((proj, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 space-y-2 hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h5 className="text-xs font-bold text-slate-900">{proj.title}</h5>
                            <span className="rounded-md bg-white border border-slate-200 px-1.5 py-0.5 text-[10px] font-semibold text-slate-700">
                              {proj.difficulty}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {proj.description}
                          </p>
                          <div className="flex flex-wrap gap-1 pt-1">
                            {proj.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md bg-white px-2 py-0.5 text-[10px] font-medium text-slate-600 border border-slate-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
