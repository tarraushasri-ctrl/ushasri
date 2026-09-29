import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ResumeUploadModal } from '../components/modals/ResumeUploadModal';
import {
  User,
  GraduationCap,
  Briefcase,
  FileText,
  Award,
  Plus,
  Trash2,
  Edit2,
  Check,
  X,
  ExternalLink,
  Github,
  Globe,
  UploadCloud,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const StudentProfileView: React.FC = () => {
  const {
    profile,
    updateProfile,
    addSkill,
    removeSkill,
    addProject,
    deleteProject,
    addCertification,
    deleteCertification,
    profileCompletionScore,
    missingProfileItems,
    showToast
  } = useApp();

  const [isEditingHeader, setIsEditingHeader] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [newSkillInput, setNewSkillInput] = useState('');

  // Edit Header Form State
  const [editName, setEditName] = useState(profile.name);
  const [editHeadline, setEditHeadline] = useState(profile.headline);
  const [editCollege, setEditCollege] = useState(profile.college);
  const [editDegree, setEditDegree] = useState(profile.degree);
  const [editGradYear, setEditGradYear] = useState(profile.graduationYear);
  const [editCgpa, setEditCgpa] = useState(profile.cgpa);
  const [editBio, setEditBio] = useState(profile.bio);

  // New Project Form Modal
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [projectTech, setProjectTech] = useState('');
  const [projectGithub, setProjectGithub] = useState('');
  const [projectLive, setProjectLive] = useState('');

  // New Certification Form Modal
  const [isAddingCert, setIsAddingCert] = useState(false);
  const [certName, setCertName] = useState('');
  const [certIssuer, setCertIssuer] = useState('');
  const [certDate, setCertDate] = useState('');

  const handleSaveHeader = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name: editName,
      headline: editHeadline,
      college: editCollege,
      degree: editDegree,
      graduationYear: editGradYear,
      cgpa: editCgpa,
      bio: editBio
    });
    setIsEditingHeader(false);
    showToast('Profile header updated!');
  };

  const handleAddSkillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkillInput.trim()) {
      addSkill(newSkillInput.trim());
      setNewSkillInput('');
    }
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectTitle || !projectDesc) return;

    const techArray = projectTech
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    addProject({
      title: projectTitle,
      description: projectDesc,
      techStack: techArray.length ? techArray : ['React', 'TypeScript'],
      githubUrl: projectGithub || undefined,
      liveUrl: projectLive || undefined,
      date: 'Recent'
    });

    setProjectTitle('');
    setProjectDesc('');
    setProjectTech('');
    setProjectGithub('');
    setProjectLive('');
    setIsAddingProject(false);
  };

  const handleCreateCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certName || !certIssuer) return;

    addCertification({
      name: certName,
      issuer: certIssuer,
      issueDate: certDate || '2026'
    });

    setCertName('');
    setCertIssuer('');
    setCertDate('');
    setIsAddingCert(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header & Breadcrumb */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Student Portal
        </span>
        <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Student Profile & Portfolio
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-2xl">
          Keep your skills, verified projects, and resume updated to qualify for 1-click recruiter applications and automated recommendations.
        </p>
      </div>

      {/* Profile Completion Bar Banner */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-900">Profile Readiness</span>
              <span
                className={`rounded-md px-2 py-0.5 text-xs font-bold font-mono tabular-nums ${
                  profileCompletionScore >= 80
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {profileCompletionScore}% Complete
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Profiles with 85%+ completion receive 3.4x more interview requests from recruiters.
            </p>
          </div>

          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-2xs hover:bg-indigo-700 transition-colors shrink-0"
          >
            <UploadCloud className="h-4 w-4" />
            <span>Upload Resume</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className={`h-full transition-all duration-500 ${
              profileCompletionScore >= 80 ? 'bg-emerald-600' : 'bg-indigo-600'
            }`}
            style={{ width: `${profileCompletionScore}%` }}
          />
        </div>

        {/* Missing items list */}
        {missingProfileItems.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-100">
            <span className="text-[11px] font-semibold text-slate-600 block mb-1">
              Complete these steps to reach 100%:
            </span>
            <ul className="flex flex-wrap gap-2 text-xs text-slate-600">
              {missingProfileItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-amber-800 border border-amber-200/60 text-[11px]"
                >
                  <AlertCircle className="h-3 w-3 text-amber-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Main Profile Info Card */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs relative">
        {!isEditingHeader ? (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white text-2xl font-extrabold shadow-sm">
                  {profile.name.charAt(0) || 'A'}
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {profile.name}
                  </h2>
                  <p className="mt-0.5 text-xs sm:text-sm font-medium text-slate-600">
                    {profile.headline}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <GraduationCap className="h-3.5 w-3.5 text-slate-400" />
                      <span>{profile.college}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{profile.degree}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">Graduating {profile.graduationYear}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-slate-800 font-mono tabular-nums">
                      CGPA: {profile.cgpa}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsEditingHeader(true)}
                className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shrink-0"
              >
                <Edit2 className="h-3.5 w-3.5" />
                <span>Edit Profile</span>
              </button>
            </div>

            {/* Bio */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-700 block mb-1">
                Student Biography
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                {profile.bio}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSaveHeader} className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">Edit Personal Information</h3>
              <button
                type="button"
                onClick={() => setIsEditingHeader(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-2 text-slate-800 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Professional Headline</label>
                <input
                  type="text"
                  value={editHeadline}
                  onChange={(e) => setEditHeadline(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-2 text-slate-800 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">University / College</label>
                <input
                  type="text"
                  value={editCollege}
                  onChange={(e) => setEditCollege(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-2 text-slate-800 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Degree Program</label>
                <input
                  type="text"
                  value={editDegree}
                  onChange={(e) => setEditDegree(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-2 text-slate-800 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Graduation Year</label>
                <input
                  type="text"
                  value={editGradYear}
                  onChange={(e) => setEditGradYear(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-2 text-slate-800 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">CGPA / GPA</label>
                <input
                  type="text"
                  value={editCgpa}
                  onChange={(e) => setEditCgpa(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-2 text-slate-800 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1 text-xs">Bio</label>
              <textarea
                rows={3}
                value={editBio}
                onChange={(e) => setEditBio(e.target.value)}
                className="w-full rounded-xl border border-slate-200 p-2 text-xs text-slate-800 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsEditingHeader(false)}
                className="rounded-lg px-4 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1 rounded-lg bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700"
              >
                <Check className="h-3.5 w-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Skills Management Section */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-slate-900">Technical & Professional Skills</h3>
            <p className="text-xs text-slate-500">
              Skills directly determine your match score on the Career Explorer and Internships pages.
            </p>
          </div>

          <form onSubmit={handleAddSkillSubmit} className="flex items-center gap-2">
            <input
              type="text"
              value={newSkillInput}
              onChange={(e) => setNewSkillInput(e.target.value)}
              placeholder="e.g. Next.js, Figma, SQL"
              className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center gap-1 rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add</span>
            </button>
          </form>
        </div>

        {/* Skills Tag Pills */}
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="group flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-800 hover:border-slate-300"
            >
              <span>{skill}</span>
              <button
                type="button"
                onClick={() => removeSkill(skill)}
                className="text-slate-400 hover:text-red-600 transition-colors"
                aria-label={`Remove skill ${skill}`}
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>

        {/* In-demand recommendations */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400">Quick-add popular skills:</span>
          {['GraphQL', 'Tailwind CSS', 'AWS', 'PyTorch', 'Jest', 'Kubernetes'].map((sk) => {
            if (profile.skills.includes(sk)) return null;
            return (
              <button
                key={sk}
                onClick={() => addSkill(sk)}
                className="rounded-md border border-indigo-200 bg-indigo-50/60 px-2 py-0.5 text-[11px] font-semibold text-indigo-700 hover:bg-indigo-100 transition-colors"
              >
                + {sk}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Showcase Section */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">Featured Student Projects</h3>
            <p className="text-xs text-slate-500">
              Demonstrate proof-of-work with live URLs, GitHub repositories, and architectural summaries.
            </p>
          </div>

          <button
            onClick={() => setIsAddingProject(true)}
            className="flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/60 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 transition-colors"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Add Project</span>
          </button>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.projects.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 p-4 hover:border-slate-300 transition-all bg-slate-50/40"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-bold text-slate-900">{proj.title}</h4>
                  <button
                    onClick={() => deleteProject(proj.id)}
                    className="text-slate-400 hover:text-red-600 transition-colors p-1"
                    aria-label="Delete project"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">{proj.description}</p>

                {/* Tech tags */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white border border-slate-200 px-2 py-0.5 text-[10px] font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono tabular-nums">{proj.date}</span>
                <div className="flex items-center gap-3">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-slate-700 hover:text-indigo-600 font-medium"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-indigo-600 hover:underline font-semibold"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Project Sub-Modal / Form */}
        {isAddingProject && (
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50/30 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-900">Add New Project Blueprint</h4>
              <button
                onClick={() => setIsAddingProject(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <form onSubmit={handleCreateProject} className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Project Name (e.g. Real-Time Chat Engine)"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white p-2 text-slate-800 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Technologies (comma separated, e.g. React, Node, WebSockets)"
                  value={projectTech}
                  onChange={(e) => setProjectTech(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white p-2 text-slate-800 focus:outline-none"
                />
              </div>

              <textarea
                rows={2}
                required
                placeholder="Brief description of what you built, architecture choices, and impact..."
                value={projectDesc}
                onChange={(e) => setProjectDesc(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white p-2 text-slate-800 focus:outline-none"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="url"
                  placeholder="GitHub Repository URL (Optional)"
                  value={projectGithub}
                  onChange={(e) => setProjectGithub(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white p-2 text-slate-800 focus:outline-none"
                />
                <input
                  type="url"
                  placeholder="Live Production URL (Optional)"
                  value={projectLive}
                  onChange={(e) => setProjectLive(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white p-2 text-slate-800 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsAddingProject(false)}
                  className="rounded-lg px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-200/50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Certifications & Resume Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Certifications Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">Certifications & Courses</h3>
            <button
              onClick={() => setIsAddingCert(true)}
              className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add</span>
            </button>
          </div>

          <div className="space-y-2.5">
            {profile.certifications.map((cert) => (
              <div
                key={cert.id}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-3"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700 shrink-0">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{cert.name}</h4>
                    <p className="text-[11px] text-slate-500">
                      {cert.issuer} · Issued {cert.issueDate}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => deleteCertification(cert.id)}
                  className="text-slate-400 hover:text-red-600 p-1"
                  aria-label="Delete certification"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>

          {isAddingCert && (
            <form onSubmit={handleCreateCert} className="space-y-2.5 pt-2 border-t border-slate-100 text-xs">
              <input
                type="text"
                required
                placeholder="Certificate Name (e.g. AWS Cloud Practitioner)"
                value={certName}
                onChange={(e) => setCertName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 p-2 text-slate-800"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Issuer (e.g. Amazon, Coursera)"
                  value={certIssuer}
                  onChange={(e) => setCertIssuer(e.target.value)}
                  className="rounded-xl border border-slate-200 p-2 text-slate-800"
                />
                <input
                  type="text"
                  placeholder="Date (e.g. Oct 2026)"
                  value={certDate}
                  onChange={(e) => setCertDate(e.target.value)}
                  className="rounded-xl border border-slate-200 p-2 text-slate-800"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddingCert(false)}
                  className="rounded-lg px-3 py-1 text-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-indigo-600 px-3 py-1 text-white font-semibold"
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Resume Document Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">Current Resume Document</h3>
            <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
              Active in Applications
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{profile.resumeFileName}</p>
                <p className="text-[11px] text-slate-500">
                  {profile.resumeFileSize} · Last updated {profile.resumeLastUpdated}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  showToast(`Downloading ${profile.resumeFileName}...`);
                }}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Download
              </button>
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 transition-colors"
              >
                Replace
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-3.5 text-xs text-indigo-950 flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              When applying via Career Connect 1-Click Apply, recruiters directly receive this verified PDF along with your validated profile skills and GitHub repositories.
            </p>
          </div>
        </div>
      </div>

      {/* Resume Upload Modal */}
      <ResumeUploadModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};
