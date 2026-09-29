import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Opportunity, JobType, WorkModel, CareerCategory } from '../types';
import {
  Search,
  Bookmark,
  Building,
  MapPin,
  Clock,
  DollarSign,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Filter,
  X,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const InternshipsView: React.FC = () => {
  const {
    opportunities,
    toggleSaveOpportunity,
    isOpportunitySaved,
    setQuickApplyModalOpportunity,
    hasAppliedToOpportunity,
    profile
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedWorkModel, setSelectedWorkModel] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<CareerCategory>('All');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const categories: CareerCategory[] = [
    'All',
    'Technology',
    'Data & AI',
    'Design & Creative',
    'Business & Product',
    'Finance & Fintech',
    'Cybersecurity & Cloud'
  ];

  // Helper to compute skill match
  const getSkillMatch = (reqSkills: string[]) => {
    const studentSkillsLower = profile.skills.map((s) => s.toLowerCase());
    const matched = reqSkills.filter((sk) =>
      studentSkillsLower.includes(sk.toLowerCase())
    );
    const score = Math.round((matched.length / reqSkills.length) * 100);
    return { score, matchedCount: matched.length, total: reqSkills.length };
  };

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opp) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        opp.title.toLowerCase().includes(q) ||
        opp.company.toLowerCase().includes(q) ||
        opp.location.toLowerCase().includes(q) ||
        opp.skillsRequired.some((s) => s.toLowerCase().includes(q));

      const matchesType = selectedType === 'All' || opp.type === selectedType;
      const matchesWorkModel =
        selectedWorkModel === 'All' || opp.workModel === selectedWorkModel;
      const matchesCategory =
        selectedCategory === 'All' || opp.category === selectedCategory;

      return matchesSearch && matchesType && matchesWorkModel && matchesCategory;
    });
  }, [opportunities, searchQuery, selectedType, selectedWorkModel, selectedCategory]);

  const toggleExpand = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Opportunities & Co-ops
        </span>
        <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Internships & Entry-Level Jobs
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-2xl">
          Apply directly with your Career Connect verified student profile and resume. Explore paid summer internships, university co-ops, and new graduate roles.
        </p>
      </div>

      {/* Filter and Search Panel */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
        {/* Search Row */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by role title, company (e.g. Stripe, Google), tech stack, or city..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:outline-none"
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

        {/* Filter dropdowns/pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {/* Role Type Filter */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Employment Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white p-2 text-xs text-slate-800 focus:border-indigo-500 focus:outline-none"
            >
              <option value="All">All Types (Internship, Full-time, Co-op)</option>
              <option value="Internship">Internship Only</option>
              <option value="Full-time">Full-time Entry Level</option>
              <option value="Co-op">Co-op (6 Months)</option>
            </select>
          </div>

          {/* Work Model Filter */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Work Location Model
            </label>
            <select
              value={selectedWorkModel}
              onChange={(e) => setSelectedWorkModel(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white p-2 text-xs text-slate-800 focus:border-indigo-500 focus:outline-none"
            >
              <option value="All">All Models (Remote, Hybrid, On-site)</option>
              <option value="Remote">Work From Home (Remote)</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
            </select>
          </div>

          {/* Discipline Category Filter */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Discipline Track
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as CareerCategory)}
              className="w-full rounded-xl border border-slate-200 bg-white p-2 text-xs text-slate-800 focus:border-indigo-500 focus:outline-none"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filter Clear indicator */}
        {(selectedType !== 'All' || selectedWorkModel !== 'All' || selectedCategory !== 'All' || searchQuery) && (
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
            <span>Filters active</span>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('All');
                setSelectedWorkModel('All');
                setSelectedCategory('All');
              }}
              className="font-semibold text-indigo-600 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>
          Showing <span className="font-semibold text-slate-800 font-mono tabular-nums">{filteredOpportunities.length}</span> positions available
        </span>
        <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
          <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
          Ranked by match against your profile skills
        </span>
      </div>

      {/* Opportunities List */}
      {filteredOpportunities.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
          <Building className="mx-auto h-8 w-8 text-slate-300 mb-2" />
          <h3 className="text-sm font-bold text-slate-800">No matching opportunities</h3>
          <p className="mt-1 text-xs text-slate-500">
            Try loosening your filters or clearing your search term.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedType('All');
              setSelectedWorkModel('All');
              setSelectedCategory('All');
            }}
            className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOpportunities.map((opp) => {
            const saved = isOpportunitySaved(opp.id);
            const applied = hasAppliedToOpportunity(opp.id);
            const isExpanded = expandedCardId === opp.id;
            const match = getSkillMatch(opp.skillsRequired);

            return (
              <div
                key={opp.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-slate-300 transition-all"
              >
                {/* Main Card View */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  {/* Left: Company & Role Details */}
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white font-bold text-sm shadow-2xs ${opp.companyLogoBg}`}
                    >
                      {opp.companyInitials}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">{opp.company}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-xs text-slate-500">{opp.type}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-xs font-semibold text-indigo-600">{opp.category}</span>
                      </div>

                      <h3 className="mt-1 text-base font-bold text-slate-900">
                        {opp.title}
                      </h3>

                      {/* Location & Pay info */}
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-slate-400" />
                          <span>{opp.workModel}</span>
                          <span className="text-slate-400">({opp.location})</span>
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1 font-semibold text-slate-900">
                          <DollarSign className="h-3.5 w-3.5 text-slate-400" />
                          <span>{opp.stipendOrSalary}</span>
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <Clock className="h-3.5 w-3.5 text-slate-400" />
                          <span>{opp.duration}</span>
                        </span>
                      </div>

                      {/* Skills Tags */}
                      <div className="mt-3 flex flex-wrap items-center gap-1.5">
                        {opp.skillsRequired.map((sk) => {
                          const isLearned = profile.skills.some(
                            (s) => s.toLowerCase() === sk.toLowerCase()
                          );
                          return (
                            <span
                              key={sk}
                              className={`rounded-md px-2 py-0.5 text-[11px] font-medium transition-colors ${
                                isLearned
                                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/70 font-semibold'
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {sk} {isLearned && '✓'}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions & Match */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700 tabular-nums">
                        {match.score}% Skill Match
                      </div>

                      <button
                        onClick={() => toggleSaveOpportunity(opp.id)}
                        className={`rounded-lg p-2 transition-colors ${
                          saved
                            ? 'bg-amber-50 text-amber-600'
                            : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                        }`}
                        aria-label="Save opportunity"
                      >
                        <Bookmark className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleExpand(opp.id)}
                        className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        <span>{isExpanded ? 'Less' : 'Details'}</span>
                        {isExpanded ? (
                          <ChevronUp className="h-3.5 w-3.5" />
                        ) : (
                          <ChevronDown className="h-3.5 w-3.5" />
                        )}
                      </button>

                      <button
                        onClick={() => setQuickApplyModalOpportunity(opp)}
                        disabled={applied}
                        className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-colors ${
                          applied
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                        }`}
                      >
                        {applied ? 'Applied' : '1-Click Apply'}
                      </button>
                    </div>

                    <span className="text-[11px] text-slate-400">
                      Deadline: {opp.deadline}
                    </span>
                  </div>
                </div>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-4 text-xs text-slate-600">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">About the Role</h4>
                      <p className="leading-relaxed">{opp.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1.5">
                        Key Responsibilities
                      </h4>
                      <ul className="list-disc pl-4 space-y-1">
                        {opp.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1.5">Perks & Benefits</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {opp.perks.map((p, i) => (
                          <span
                            key={i}
                            className="rounded-md bg-indigo-50/70 border border-indigo-100 px-2 py-1 text-xs text-indigo-700 font-medium"
                          >
                            ✓ {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-slate-400">
                        {opp.applicantsCount} student applicants · Posted {opp.postedDate}
                      </span>
                      <button
                        onClick={() => setQuickApplyModalOpportunity(opp)}
                        disabled={applied}
                        className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition-colors"
                      >
                        {applied ? 'Already Applied' : 'Submit Application Now'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
