import React from 'react';
import { Clock, CheckCircle, Pill, Bell } from 'lucide-react';
import { useMedications } from '../hooks/useMedications.jsx';
import { getDaysUntilRenewal } from '../utils/dateUtils';

const QuickStats = () => {
  const { medications } = useMedications();

  const urgentRenewals = medications.filter(med => getDaysUntilRenewal(med.renewalDate) <= 7);
  const upcomingDoses = medications.filter(med => !med.taken).length;
  const todaysTaken = medications.filter(med => med.taken).length;

  const stats = [
    {
      label: 'Upcoming Doses',
      value: upcomingDoses,
      icon: Clock,
      color: 'text-blue-500'
    },
    {
      label: 'Taken Today',
      value: todaysTaken,
      icon: CheckCircle,
      color: 'text-green-500'
    },
    {
      label: 'Total Medications',
      value: medications.length,
      icon: Pill,
      color: 'text-purple-500'
    },
    {
      label: 'Urgent Renewals',
      value: urgentRenewals.length,
      icon: Bell,
      color: 'text-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div 
          key={stat.label}
          className="bg-white rounded-xl p-6 shadow-md border border-gray-100 animate-slide-up hover:shadow-lg transition-all duration-200"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className={`text-2xl font-bold ${
                stat.label === 'Taken Today' ? 'text-green-600' : 
                stat.label === 'Urgent Renewals' ? 'text-red-600' : 'text-gray-900'
              }`}>
                {stat.value}
              </p>
            </div>
            <stat.icon className={`h-8 w-8 ${stat.color}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;