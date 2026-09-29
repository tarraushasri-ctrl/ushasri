import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Bell, Check, Trash2, Calendar, Briefcase, Award, Shield } from 'lucide-react';

export const NotificationsDrawer: React.FC = () => {
  const {
    showNotificationsDrawer,
    setShowNotificationsDrawer,
    notifications,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    clearNotifications
  } = useApp();

  if (!showNotificationsDrawer) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case 'mentor':
        return <Calendar className="h-4 w-4 text-emerald-600" />;
      case 'application':
        return <Briefcase className="h-4 w-4 text-indigo-600" />;
      case 'opportunity':
        return <Award className="h-4 w-4 text-amber-600" />;
      default:
        return <Shield className="h-4 w-4 text-sky-600" />;
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs">
      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Bell className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Notifications</h3>
                <p className="text-xs text-slate-500">
                  {unreadCount > 0 ? `${unreadCount} unread alert${unreadCount > 1 ? 's' : ''}` : 'All caught up'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowNotificationsDrawer(false)}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
              aria-label="Close notification drawer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Quick Actions */}
          {notifications.length > 0 && (
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-6 py-2.5 text-xs">
              <button
                onClick={markAllNotificationsAsRead}
                className="flex items-center gap-1 font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                <Check className="h-3.5 w-3.5" />
                <span>Mark all as read</span>
              </button>
              <button
                onClick={clearNotifications}
                className="flex items-center gap-1 font-medium text-slate-500 hover:text-red-600 transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Clear all</span>
              </button>
            </div>
          )}

          {/* List */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100 p-4">
            {notifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 text-slate-400">
                <Bell className="h-8 w-8 stroke-1 text-slate-300 mb-2" />
                <p className="text-sm font-medium text-slate-700">No new notifications</p>
                <p className="text-xs text-slate-400 mt-1 max-w-xs">
                  Updates on your applications, mentorship sessions, and matching opportunities will appear here.
                </p>
              </div>
            ) : (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  onClick={() => markNotificationAsRead(notif.id)}
                  className={`flex items-start gap-3 rounded-xl p-3 cursor-pointer transition-colors ${
                    notif.read ? 'hover:bg-slate-50' : 'bg-indigo-50/40 hover:bg-indigo-50/70'
                  }`}
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white shadow-xs border border-slate-200">
                    {getIcon(notif.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold text-slate-900 truncate">{notif.title}</p>
                      <span className="text-[11px] text-slate-400 shrink-0 tabular-nums">
                        {notif.timestamp}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-600 leading-relaxed">{notif.message}</p>
                  </div>
                  {!notif.read && (
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-600" />
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer note */}
          <div className="border-t border-slate-100 p-4 bg-slate-50/50 text-center">
            <p className="text-[11px] text-slate-400">
              Career Connect sends instant alerts for upcoming interviews & deadlines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
