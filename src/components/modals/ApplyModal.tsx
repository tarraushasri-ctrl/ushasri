import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, CheckCircle, FileText, Building, MapPin, DollarSign, Send } from 'lucide-react';

export const ApplyModal: React.FC = () => {
  const {
    quickApplyModalOpportunity,
    setQuickApplyModalOpportunity,
    applyToOpportunity,
    profile
  } = useApp();

  const [notes, setNotes] = useState('');
  const [selectedResume, setSelectedResume] = useState(profile.resumeFileName || 'Default_Resume.pdf');
  const [confirmedInfo, setConfirmedInfo] = useState(true);

  if (!quickApplyModalOpportunity) return null;

  const opp = quickApplyModalOpportunity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyToOpportunity(opp.id, notes);
    setQuickApplyModalOpportunity(null);
    setNotes('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl transition-all">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Quick Application
            </span>
            <h3 className="mt-1 text-lg font-bold text-slate-900">{opp.title}</h3>
            <p className="mt-0.5 text-xs text-slate-500">
              {opp.company} · {opp.location} · {opp.workModel}
            </p>
          </div>
          <button
            onClick={() => setQuickApplyModalOpportunity(null)}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            aria-label="Close application dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Opportunity quick snapshot */}
        <div className="my-4 rounded-xl bg-slate-50 p-3.5 text-xs text-slate-600 flex flex-wrap gap-4 border border-slate-200/70">
          <div className="flex items-center gap-1.5">
            <Building className="h-3.5 w-3.5 text-slate-400" />
            <span>{opp.company}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DollarSign className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-medium text-slate-800">{opp.stipendOrSalary}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-slate-400" />
            <span>{opp.workModel} ({opp.location})</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Applicant Info (Pre-filled) */}
          <div className="rounded-xl border border-slate-200 p-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700">Applicant Details</span>
              <span className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                <CheckCircle className="h-3.5 w-3.5" /> Synced from Profile
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400">Full Name:</span>
                <p className="font-medium text-slate-800">{profile.name}</p>
              </div>
              <div>
                <span className="text-slate-400">Email:</span>
                <p className="font-medium text-slate-800">{profile.email}</p>
              </div>
              <div>
                <span className="text-slate-400">University:</span>
                <p className="font-medium text-slate-800">{profile.college}</p>
              </div>
              <div>
                <span className="text-slate-400">Degree & Year:</span>
                <p className="font-medium text-slate-800">{profile.graduationYear}</p>
              </div>
            </div>
          </div>

          {/* Resume Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Resume Attachment
            </label>
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">{profile.resumeFileName || 'Default_Resume.pdf'}</p>
                  <p className="text-slate-400">Updated {profile.resumeLastUpdated || 'recently'}</p>
                </div>
              </div>
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                Verified
              </span>
            </div>
          </div>

          {/* Cover Note / Message to Recruiter */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Quick Cover Note (Optional)
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Highlight why you are excited for this specific role and your relevant projects..."
              className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Confirmation Checkbox */}
          <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600">
            <input
              type="checkbox"
              checked={confirmedInfo}
              onChange={(e) => setConfirmedInfo(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>I confirm my profile information and projects are up-to-date and accurate.</span>
          </label>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setQuickApplyModalOpportunity(null)}
              className="rounded-lg px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!confirmedInfo}
              className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50 transition-colors"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Submit Application</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
