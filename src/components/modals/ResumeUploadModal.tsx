import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, UploadCloud, FileCheck, CheckCircle2, AlertCircle, FileText } from 'lucide-react';

interface ResumeUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeUploadModal: React.FC<ResumeUploadModalProps> = ({ isOpen, onClose }) => {
  const { updateResume, addSkill, profile } = useApp();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [parsedData, setParsedData] = useState<{
    score: number;
    extractedSkills: string[];
    summary: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setParsedData(null);
    }
  };

  const handleUploadAndAnalyze = () => {
    if (!file) return;
    setIsUploading(true);
    setUploadProgress(20);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 25;
      });
    }, 250);

    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);
      setIsUploading(false);

      const sizeStr = `${(file.size / 1024).toFixed(1)} KB`;
      updateResume(file.name, sizeStr);

      // Simulated ATS parser results
      const detectedSkills = ['Docker', 'REST APIs', 'PostgreSQL', 'Git & GitHub', 'Agile'];
      setParsedData({
        score: 92,
        extractedSkills: detectedSkills,
        summary:
          'Excellent ATS format compatibility. High keyword density for Software Engineering roles. Strong quantifiable metric bullet points found.'
      });

      // Auto-enrich any detected skills not yet in profile
      detectedSkills.forEach((s) => {
        if (!profile.skills.includes(s)) {
          addSkill(s);
        }
      });
    }, 1200);
  };

  const handleClose = () => {
    setFile(null);
    setIsUploading(false);
    setUploadProgress(0);
    setParsedData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl transition-all">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Resume Intelligence
            </span>
            <h3 className="mt-1 text-base font-bold text-slate-900">Upload & Parse Resume</h3>
            <p className="mt-0.5 text-xs text-slate-500">
              Upload your PDF resume to auto-sync skills and optimize for recruiter ATS scans.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Upload Box */}
        <div className="my-5">
          {!parsedData ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-6 text-center hover:border-indigo-400 transition-colors">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <UploadCloud className="h-6 w-6" />
              </div>
              <p className="text-xs font-semibold text-slate-800">
                {file ? file.name : 'Click to select or drag and drop your resume'}
              </p>
              <p className="mt-1 text-xs text-slate-400">PDF or DOCX (Max 5MB)</p>

              <label className="mt-4 cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-indigo-700 transition-colors">
                <span>{file ? 'Choose Different File' : 'Browse Computer'}</span>
                <input
                  type="file"
                  accept=".pdf,.docx,.doc"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              {file && (
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-600">
                  <FileText className="h-4 w-4 text-slate-400" />
                  <span>Size: {(file.size / 1024).toFixed(1)} KB</span>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-900">
                    Resume Parsed & Profile Updated!
                  </span>
                </div>
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800 tabular-nums">
                  ATS Score: {parsedData.score}/100
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{parsedData.summary}</p>

              <div>
                <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Extracted Skills Added to Profile:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {parsedData.extractedSkills.map((sk) => (
                    <span
                      key={sk}
                      className="rounded-md bg-white border border-emerald-300 px-2 py-1 text-xs font-medium text-emerald-800"
                    >
                      +{sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {isUploading && (
            <div className="mt-4 space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-600">
                <span>Analyzing document keywords and structure...</span>
                <span className="tabular-nums">{uploadProgress}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full bg-indigo-600 transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {parsedData ? 'Done' : 'Cancel'}
          </button>
          {!parsedData && (
            <button
              type="button"
              disabled={!file || isUploading}
              onClick={handleUploadAndAnalyze}
              className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50 transition-colors"
            >
              <FileCheck className="h-4 w-4" />
              <span>{isUploading ? 'Parsing...' : 'Upload & Parse'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
