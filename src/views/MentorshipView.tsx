import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { CareerCategory, Mentor } from '../types';
import {
  Search,
  Star,
  Calendar,
  Briefcase,
  GraduationCap,
  Video,
  CheckCircle,
  HelpCircle,
  X,
  Users
} from 'lucide-react';

export const MentorshipView: React.FC = () => {
  const { mentors, setQuickBookMentor } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<CareerCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: CareerCategory[] = [
    'All',
    'Technology',
    'Data & AI',
    'Design & Creative',
    'Business & Product',
    'Finance & Fintech',
    'Cybersecurity & Cloud'
  ];

  const filteredMentors = useMemo(() => {
    return mentors.filter((mentor) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        mentor.name.toLowerCase().includes(q) ||
        mentor.company.toLowerCase().includes(q) ||
        mentor.role.toLowerCase().includes(q) ||
        mentor.expertise.some((e) => e.toLowerCase().includes(q)) ||
        mentor.alumniOf.toLowerCase().includes(q);

      const matchesCat =
        selectedCategory === 'All' || mentor.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [mentors, searchQuery, selectedCategory]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          1-on-1 Guidance
        </span>
        <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Connect with Alumni Mentors
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-2xl">
          Book free 30-minute video sessions with alumni working at top tech firms. Get your resume reviewed, conduct mock technical interviews, and receive honest career advice.
        </p>
      </div>

      {/* Free Student Mentorship Policy Strip */}
      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">
            <CheckCircle className="h-4 w-4" />
          </div>
          <div>
            <p className="font-bold text-slate-900">100% Free College Student Mentorship</p>
            <p className="text-slate-500">All sessions are volunteer alumni consultations. Zero fees or subscriptions.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 font-medium text-indigo-700">
          <span>✓ Video Calls</span>
          <span aria-hidden="true">·</span>
          <span>✓ Code & Portfolio Reviews</span>
          <span aria-hidden="true">·</span>
          <span>✓ Mock Interviews</span>
        </div>
      </div>

      {/* Search and Category Filter */}
      <div className="space-y-4">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by mentor name, company (Stripe, Google, Figma), or skill..."
            className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
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

        {/* Category Filter Pills */}
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

      {/* Results Count */}
      <div className="text-xs text-slate-500">
        Showing <span className="font-semibold text-slate-800 font-mono tabular-nums">{filteredMentors.length}</span> verified alumni mentors
      </div>

      {/* Mentors Grid */}
      {filteredMentors.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
          <Users className="mx-auto h-8 w-8 text-slate-300 mb-2" />
          <h3 className="text-sm font-bold text-slate-800">No mentors match your search</h3>
          <p className="mt-1 text-xs text-slate-500">
            Try searching for broader keywords like "Engineering", "Design", or "Product".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-slate-300 transition-all"
            >
              <div>
                {/* Top Profile Lockup */}
                <div className="flex items-start gap-3.5 mb-3.5">
                  <img
                    src={mentor.photo}
                    alt={mentor.name}
                    referrerPolicy="no-referrer"
                    className="h-14 w-14 rounded-2xl object-cover border border-slate-200 shrink-0"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{mentor.name}</h3>
                    <p className="text-xs font-medium text-slate-700">{mentor.role}</p>
                    <p className="text-xs font-semibold text-indigo-600">{mentor.company}</p>
                  </div>
                </div>

                {/* Rating & Stats */}
                <div className="flex items-center gap-3 py-2 border-y border-slate-100 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1 font-bold text-slate-800">
                    <Star className="h-3.5 w-3.5 text-amber-500 fill-current" />
                    <span>{mentor.rating}</span>
                    <span className="font-normal text-slate-400 font-mono tabular-nums">
                      ({mentor.reviewsCount})
                    </span>
                  </div>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{mentor.experienceYears}y exp</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{mentor.sessionCount} sessions</span>
                </div>

                {/* College Alumni tag */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-3">
                  <GraduationCap className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{mentor.alumniOf}</span>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {mentor.bio}
                </p>

                {/* Expertise Badges */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-700 block mb-1.5">
                    Areas of Mentorship:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.expertise.map((exp) => (
                      <span
                        key={exp}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setQuickBookMentor(mentor)}
                  className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-indigo-700 transition-colors"
                >
                  <Video className="h-3.5 w-3.5" />
                  <span>Book 1:1 Video Session</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Student Mentorship Tips & FAQ */}
      <section className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 space-y-4">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-indigo-600" />
          <span>How to Get the Most Out of Your 30-Minute Mentorship Session</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-slate-600">
          <div className="rounded-2xl bg-white p-4 border border-slate-200/80">
            <h4 className="font-bold text-slate-900 mb-1">1. Come with 2–3 Clear Goals</h4>
            <p className="leading-relaxed">
              Have specific questions ready instead of "tell me how to get hired." Ask: "Can we review my project bullet points for Stripe?" or "How did you prep for system design?"
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-slate-200/80">
            <h4 className="font-bold text-slate-900 mb-1">2. Send Your Links in Advance</h4>
            <p className="leading-relaxed">
              Share your resume PDF link or GitHub portfolio so your mentor can review your code structure and commit history before the video call starts.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-slate-200/80">
            <h4 className="font-bold text-slate-900 mb-1">3. Follow Up with Action Items</h4>
            <p className="leading-relaxed">
              Send a quick thank-you note recapping the advice. Keep them updated when you ship the project you discussed or land your interview.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
