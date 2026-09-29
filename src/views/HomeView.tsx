import React from 'react';
import { useApp } from '../context/AppContext';
import { HERO_IMAGE, CAREERS, OPPORTUNITIES, SUCCESS_STORIES } from '../data/mockData';
import {
  ArrowRight,
  Sparkles,
  Code2,
  BrainCircuit,
  Palette,
  Compass,
  Cloud,
  TrendingUp,
  Bookmark,
  CheckCircle,
  Briefcase,
  Users,
  Award,
  ChevronRight,
  MapPin,
  Clock
} from 'lucide-react';
import { CareerCategory } from '../types';

export const HomeView: React.FC = () => {
  const {
    setActiveTab,
    setSelectedCareerForRoadmap,
    toggleSaveOpportunity,
    isOpportunitySaved,
    setQuickApplyModalOpportunity,
    hasAppliedToOpportunity
  } = useApp();

  const categories: { name: Exclude<CareerCategory, 'All'>; icon: React.ReactNode; count: number; desc: string }[] = [
    {
      name: 'Technology',
      icon: <Code2 className="h-5 w-5 text-indigo-600" />,
      count: 42,
      desc: 'Software Engineering, Mobile, Frontend, and Systems'
    },
    {
      name: 'Data & AI',
      icon: <BrainCircuit className="h-5 w-5 text-purple-600" />,
      count: 28,
      desc: 'Machine Learning, NLP, Big Data, and Analytics'
    },
    {
      name: 'Design & Creative',
      icon: <Palette className="h-5 w-5 text-pink-600" />,
      count: 19,
      desc: 'Product Design, UI/UX, Design Systems, and Interaction'
    },
    {
      name: 'Business & Product',
      icon: <Compass className="h-5 w-5 text-blue-600" />,
      count: 24,
      desc: 'Product Management, APM Rotations, and Tech Strategy'
    },
    {
      name: 'Cybersecurity & Cloud',
      icon: <Cloud className="h-5 w-5 text-emerald-600" />,
      count: 22,
      desc: 'DevOps, SRE, Cloud Infrastructure, and Cyber Defense'
    },
    {
      name: 'Finance & Fintech',
      icon: <TrendingUp className="h-5 w-5 text-amber-600" />,
      count: 16,
      desc: 'Quantitative Analysis, Algorithmic Tech, and Crypto'
    }
  ];

  const featuredOpportunities = OPPORTUNITIES.slice(0, 4);

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/70 px-3.5 py-1 text-xs font-semibold text-indigo-700">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
              <span>Built for College Students & New Grads</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]" style={{ textWrap: 'balance' }}>
              Connect Your Skills to Your Career
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Discover in-demand career paths suited to your strengths, follow step-by-step skill roadmaps, land paid internships, and connect 1:1 with verified alumni mentors.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setActiveTab('explorer');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-all active:scale-[0.98]"
              >
                <span>Explore Careers</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('internships');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                <span>Find Internships</span>
                <Briefcase className="h-4 w-4 text-slate-500" />
              </button>
            </div>

            {/* Trust metrics */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 font-mono tabular-nums">15,000+</p>
                <p className="text-slate-500">Students Guided</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 font-mono tabular-nums">450+</p>
                <p className="text-slate-500">Partner Companies</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 font-mono tabular-nums">94%</p>
                <p className="text-slate-500">Placement Rate</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 font-mono tabular-nums">120+</p>
                <p className="text-slate-500">Verified Mentors</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-slate-100">
              <img
                src={HERO_IMAGE}
                alt="University students collaborating in tech lab"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-3.5 backdrop-blur-md shadow-md border border-white/40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 font-bold text-xs">
                      CC
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Summer 2027 Cohort Open</p>
                      <p className="text-[11px] text-slate-500">Internship matches based on student projects</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('internships')}
                    className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 transition-colors"
                  >
                    View Matches
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Categories Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Explore Disciplines
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Popular Career Categories
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Find detailed entry-level expectations, required skills, and roadmap stages for each field.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('explorer')}
            className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors shrink-0"
          >
            <span>View All Careers</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => {
                setActiveTab('explorer');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-indigo-50 transition-colors">
                  {cat.icon}
                </div>
                <span className="text-xs text-slate-400 font-medium font-mono tabular-nums">
                  {cat.count} Roles
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {cat.name}
              </h3>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                <span>Explore Track</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Opportunities Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Hand-Picked Openings
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Featured Opportunities
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Top internships and new-grad roles accepting student applications right now.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('internships')}
            className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors shrink-0"
          >
            <span>See All {OPPORTUNITIES.length} Opportunities</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredOpportunities.map((opp) => {
            const saved = isOpportunitySaved(opp.id);
            const applied = hasAppliedToOpportunity(opp.id);

            return (
              <div
                key={opp.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-slate-300 transition-all"
              >
                <div>
                  {/* Top line: company info + save button */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white font-bold text-xs ${opp.companyLogoBg}`}
                      >
                        {opp.companyInitials}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 leading-snug">
                          {opp.title}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {opp.company} · {opp.location}
                        </p>
                      </div>
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

                  {/* Metadata bar */}
                  <div className="mt-3.5 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">{opp.stipendOrSalary}</span>
                    <span aria-hidden="true">·</span>
                    <span>{opp.workModel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="h-3 w-3" /> Deadline: {opp.deadline}
                    </span>
                  </div>

                  {/* Skills tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {opp.skillsRequired.slice(0, 4).map((sk) => (
                      <span
                        key={sk}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                      >
                        {sk}
                      </span>
                    ))}
                    {opp.skillsRequired.length > 4 && (
                      <span className="text-[11px] text-slate-400 self-center">
                        +{opp.skillsRequired.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {opp.applicantsCount} applicants · {opp.postedDate}
                  </span>
                  <div className="flex items-center gap-2">
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
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How Career Connect Works Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
              The Framework
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How Career Connect Works
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              A proven 3-phase journey from university student to placed engineer or designer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-sm">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">01. Discover & Map</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Explore in-depth market data, compare salaries, day-in-the-life expectations, and pick career tracks matching your intrinsic curiosity.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-sm">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">02. Master the Roadmap</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Follow beginner-to-advanced learning phases, construct production portfolio projects, and track checklist milestones on your personal dashboard.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-sm">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">03. Mentorship & Land Offers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Schedule 1:1 sessions with verified alumni at Stripe, Figma, and Google for resume reviews and interview mocks, then apply with 1 click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Student Outcomes
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Student Success Stories
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Real undergraduates who transformed their careers using Career Connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={story.avatar}
                    alt={story.studentName}
                    referrerPolicy="no-referrer"
                    className="h-11 w-11 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{story.studentName}</h4>
                    <p className="text-[11px] text-slate-500">{story.college}</p>
                    <p className="text-[11px] font-semibold text-indigo-600">
                      Placed at {story.company} · {story.rolePlaced}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[11px] text-slate-400 block font-medium">Outcome:</span>
                <span className="text-xs font-semibold text-slate-800">
                  {story.keyTakeaway}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-indigo-600 px-6 py-10 sm:px-12 sm:py-14 text-white text-center shadow-lg relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              Create your profile today, access curated learning roadmaps, and apply to top internships designed for ambitious university students.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setActiveTab('profile');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="rounded-xl bg-white px-6 py-3 text-xs sm:text-sm font-bold text-indigo-600 shadow-sm hover:bg-indigo-50 transition-colors"
              >
                Set Up Student Profile
              </button>
              <button
                onClick={() => {
                  setActiveTab('roadmap');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="rounded-xl border border-indigo-400 bg-indigo-700/50 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
              >
                Explore Roadmaps
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
