import React from 'react';
import { CheckCircle, RefreshCw, Plus, Clock } from 'lucide-react';
import { useMedications } from '../hooks/useMedications.jsx';

const RecentActivity = () => {
  const { activities } = useMedications();

  const getIcon = (type) => {
    switch (type) {
      case 'taken':
        return CheckCircle;
      case 'renewal':
        return RefreshCw;
      case 'added':
        return Plus;
      default:
        return Clock;
    }
  };

  const getColorClasses = (color) => {
    switch (color) {
      case 'green':
        return 'bg-green-50 text-green-500';
      case 'blue':
        return 'bg-blue-50 text-blue-500';
      case 'orange':
        return 'bg-orange-50 text-orange-500';
      default:
        return 'bg-gray-50 text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 animate-slide-up">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {activities.map((activity, index) => {
          const Icon = getIcon(activity.type);
          const colorClasses = getColorClasses(activity.color);
          
          return (
            <div 
              key={activity.id}
              className={`flex items-center space-x-3 p-3 ${colorClasses.split(' ')[0]} rounded-lg animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon className={`h-5 w-5 ${colorClasses.split(' ')[1]}`} />
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500">{activity.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;