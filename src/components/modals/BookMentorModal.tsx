import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Calendar, Clock, Star, CheckCircle, Video } from 'lucide-react';

export const BookMentorModal: React.FC = () => {
  const { quickBookMentor, setQuickBookMentor, bookMentorSession } = useApp();

  const [topic, setTopic] = useState('Technical Interview Prep & System Design');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [notes, setNotes] = useState('');

  if (!quickBookMentor) return null;

  const mentor = quickBookMentor;

  const availableDays = mentor.availableDays || ['Tomorrow, Oct 02', 'Friday, Oct 04', 'Saturday, Oct 05'];
  const availableSlots = mentor.availableSlots || ['04:00 PM EST', '05:30 PM EST', '07:00 PM EST'];

  const effectiveDay = selectedDay || availableDays[0];
  const effectiveSlot = selectedSlot || availableSlots[0];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    bookMentorSession({
      mentorId: mentor.id,
      mentorName: mentor.name,
      mentorRole: mentor.role,
      mentorCompany: mentor.company,
      topic,
      date: effectiveDay,
      time: effectiveSlot
    });
    setQuickBookMentor(null);
  };

  const topicsList = [
    'Technical Interview Prep & System Design',
    'Resume & Portfolio Deep-Dive',
    'Transitioning from College to Big Tech',
    'Finding & Applying to Internships',
    'Open Source Contribution Strategy'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl transition-all">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <img
              src={mentor.photo}
              alt={mentor.name}
              referrerPolicy="no-referrer"
              className="h-12 w-12 rounded-full object-cover border border-slate-200"
            />
            <div>
              <h3 className="text-base font-bold text-slate-900">{mentor.name}</h3>
              <p className="text-xs text-slate-500">
                {mentor.role} at <span className="font-semibold text-slate-700">{mentor.company}</span>
              </p>
              <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                <span className="flex items-center text-amber-500 font-medium">
                  <Star className="h-3 w-3 fill-current mr-0.5" />
                  {mentor.rating}
                </span>
                <span>·</span>
                <span>{mentor.sessionCount}+ sessions completed</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setQuickBookMentor(null)}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Free Student Mentorship Badge */}
        <div className="my-3.5 flex items-center justify-between rounded-xl bg-emerald-50 px-3.5 py-2.5 text-xs text-emerald-800 border border-emerald-200/60">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
            <span className="font-medium">100% Free College Mentorship Session</span>
          </div>
          <span className="font-semibold">30 Mins · Video</span>
        </div>

        <form onSubmit={handleBook} className="space-y-4">
          {/* Topic Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Select Focus Topic
            </label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs text-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
            >
              {topicsList.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Date Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-slate-400" /> Available Date
            </label>
            <div className="grid grid-cols-3 gap-2">
              {availableDays.map((day) => (
                <button
                  type="button"
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`rounded-xl border p-2 text-xs font-medium text-center transition-all ${
                    effectiveDay === day
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Time Slot */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-slate-400" /> Select Time Slot
            </label>
            <div className="grid grid-cols-3 gap-2">
              {availableSlots.map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-xl border p-2 text-xs font-medium text-center transition-all ${
                    effectiveSlot === slot
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Notes for Mentor */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              What specific questions do you want answered? (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Can you review my resume bullet points for Stripe and suggest full-stack project ideas?"
              className="w-full rounded-xl border border-slate-200 p-2 text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setQuickBookMentor(null)}
              className="rounded-lg px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
            >
              <Video className="h-3.5 w-3.5" />
              <span>Confirm 1:1 Booking</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
