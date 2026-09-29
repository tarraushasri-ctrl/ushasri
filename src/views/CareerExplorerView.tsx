import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { CAREERS } from '../data/mockData';
import { Career, CareerCategory } from '../types';
import {
  Search,
  Code2,
  BrainCircuit,
  Palette,
  Compass,
  Cloud,
  ShieldCheck,
  TrendingUp,
  Smartphone,
  ArrowRight,
  Briefcase,
  Layers,
  X,
  Building2,
  DollarSign
} from 'lucide-react';

export const CareerExplorerView: React.FC = () => {
  const { setActiveTab, setSelectedCareerForRoadmap, profile } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<CareerCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCareerModal, setActiveCareerModal] = useState<Career | null>(null);

  const categories: CareerCategory[] = [
    'All',
    'Technology',
    'Data & AI',
    'Design & Creative',
    'Business & Product',
    'Finance & Fintech',
    'Cybersecurity & Cloud'
  ];

  const getCareerIcon = (icon: string) => {
    switch (icon) {
      case 'Code2':
        return <Code2 className="h-5 w-5 text-indigo-600" />;
      case 'BrainCircuit':
        return <BrainCircuit className="h-5 w-5 text-purple-600" />;
      case 'Palette':
        return <Palette className="h-5 w-5 text-pink-600" />;
      case 'Compass':
        return <Compass className="h-5 w-5 text-blue-600" />;
      case 'Cloud':
        return <Cloud className="h-5 w-5 text-sky-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-5 w-5 text-rose-600" />;
      case 'TrendingUp':
        return <TrendingUp className="h-5 w-5 text-amber-600" />;
      case 'Smartphone':
        return <Smartphone className="h-5 w-5 text-emerald-600" />;
      default:
        return <Briefcase className="h-5 w-5 text-slate-600" />;
    }
  };

  const filteredCareers = useMemo(() => {
    return CAREERS.filter((career) => {
      const matchesCategory =
        selectedCategory === 'All' || career.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        career.title.toLowerCase().includes(q) ||
        career.description.toLowerCase().includes(q) ||
        career.requiredSkills.some((s) => s.toLowerCase().includes(q)) ||
        career.popularRoles.some((r) => r.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Skill match calculation helper
  const calculateSkillMatch = (requiredSkills: string[]) => {
    const studentSkillsLower = profile.skills.map((s) => s.toLowerCase());
    const matched = requiredSkills.filter((sk) =>
      studentSkillsLower.includes(sk.toLowerCase())
    );
    return Math.round((matched.length / requiredSkills.length) * 100);
  };

  const handleOpenRoadmap = (roadmapId: string) => {
    setSelectedCareerForRoadmap(roadmapId);
    setActiveTab('roadmap');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Career Discovery
        </span>
        <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Career Explorer
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-2xl">
          Discover modern high-growth tech careers, compare real entry-level salary benchmarks, review required skill sets, and navigate verified learning roadmaps.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by career, skill (e.g. React, Python), or role..."
            className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category Pills (Functional Filter Tabs) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Match helper */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>
          Showing <span className="font-semibold text-slate-800 font-mono tabular-nums">{filteredCareers.length}</span> career paths
        </span>
        <span className="hidden sm:inline">
          Skill match scores calculated based on your profile skills ({profile.skills.length} added)
        </span>
      </div>

      {/* Career Cards Grid */}
      {filteredCareers.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
          <Search className="mx-auto h-8 w-8 text-slate-300 mb-2" />
          <h3 className="text-sm font-bold text-slate-800">No careers found</h3>
          <p className="mt-1 text-xs text-slate-500">
            Try adjusting your search query or switching to "All" categories.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCareers.map((career) => {
            const matchScore = calculateSkillMatch(career.requiredSkills);

            return (
              <div
                key={career.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-slate-300 transition-all"
              >
                <div>
                  {/* Top Bar: Icon, Title, and Category */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100">
                        {getCareerIcon(career.icon)}
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-indigo-600 block">
                          {career.category}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 leading-tight">
                          {career.title}
                        </h3>
                      </div>
                    </div>

                    {/* Match Score Indicator */}
                    <div className="text-right shrink-0">
                      <div className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700 tabular-nums">
                        {matchScore}% Match
                      </div>
                    </div>
                  </div>

                  {/* Tagline & Description */}
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    {career.description}
                  </p>

                  {/* Benchmark Salary & Growth */}
                  <div className="mt-4 rounded-xl bg-slate-50/80 p-3 border border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">Avg Entry Salary</span>
                      <span className="font-bold text-slate-900 font-mono tabular-nums">
                        {career.avgSalaryEntry}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">Market Demand</span>
                      <span className="font-medium text-emerald-600">{career.growthRate}</span>
                    </div>
                  </div>

                  {/* Required Skills */}
                  <div className="mt-4">
                    <span className="text-[11px] font-semibold text-slate-700 block mb-1.5">
                      Required & High-Impact Skills:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {career.requiredSkills.map((sk) => {
                        const isLearned = profile.skills.some(
                          (ps) => ps.toLowerCase() === sk.toLowerCase()
                        );
                        return (
                          <span
                            key={sk}
                            className={`rounded-md px-2 py-0.5 text-[11px] font-medium transition-colors ${
                              isLearned
                                ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200/60'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {sk} {isLearned && '✓'}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Popular Job Roles */}
                  <div className="mt-3">
                    <span className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Popular Job Titles:
                    </span>
                    <p className="text-xs text-slate-500">
                      {career.popularRoles.join(' · ')}
                    </p>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveCareerModal(career)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Deep Dive Info
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setActiveTab('internships');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Find Jobs
                    </button>
                    <button
                      onClick={() => handleOpenRoadmap(career.roadmapId)}
                      className="flex items-center gap-1 rounded-lg bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-indigo-700 transition-colors"
                    >
                      <span>Roadmap</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Career Deep Dive Modal */}
      {activeCareerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl transition-all">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  {getCareerIcon(activeCareerModal.icon)}
                </div>
                <div>
                  <span className="text-xs font-semibold text-indigo-600">
                    {activeCareerModal.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {activeCareerModal.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveCareerModal(null)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="my-5 space-y-5 text-xs text-slate-600">
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Career Overview</h4>
                <p className="leading-relaxed">{activeCareerModal.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1">A Day in the Life</h4>
                <p className="leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {activeCareerModal.dayInLife}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-3">
                  <span className="text-[11px] text-slate-400 block font-medium">Entry-Level Salary</span>
                  <span className="text-sm font-bold text-slate-900 font-mono tabular-nums">
                    {activeCareerModal.avgSalaryEntry}
                  </span>
                  <p className="text-[11px] text-emerald-600 mt-0.5">{activeCareerModal.growthRate}</p>
                </div>

                <div className="rounded-xl border border-slate-200 p-3">
                  <span className="text-[11px] text-slate-400 block font-medium">Education Path</span>
                  <span className="text-xs font-medium text-slate-800 leading-snug block mt-0.5">
                    {activeCareerModal.educationRequirement}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1.5">Top Hiring Companies</h4>
                <div className="flex flex-wrap gap-2">
                  {activeCareerModal.topHiringCompanies.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-800"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1.5">Required Skills Checklist</h4>
                <div className="grid grid-cols-2 gap-2">
                  {activeCareerModal.requiredSkills.map((sk) => {
                    const hasSkill = profile.skills.some(
                      (ps) => ps.toLowerCase() === sk.toLowerCase()
                    );
                    return (
                      <div
                        key={sk}
                        className={`flex items-center gap-2 rounded-lg p-2 border ${
                          hasSkill
                            ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900 font-medium'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <span className="text-xs">{hasSkill ? '✓ In Profile' : '○ To Learn'}</span>
                        <span className="text-xs font-semibold">{sk}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveCareerModal(null)}
                className="rounded-lg px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  handleOpenRoadmap(activeCareerModal.roadmapId);
                  setActiveCareerModal(null);
                }}
                className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-indigo-700 transition-colors"
              >
                <span>Launch Learning Roadmap</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
