import React from 'react';
import { Pill, Settings } from 'lucide-react';
import { useMedications } from '../hooks/useMedications.jsx';

const Header = () => {
  const { customLayout, setCustomLayout } = useMedications();

  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-white rounded-lg shadow-md">
            <Pill className="h-8 w-8 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Medication Dashboard</h1>
            <p className="text-gray-600">Manage your prescriptions and stay on track</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setCustomLayout(!customLayout)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
              customLayout 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } border border-gray-200`}
          >
            <Settings className="h-4 w-4" />
            <span>{customLayout ? 'Exit Customize' : 'Customize Layout'}</span>
          </button>
        </div>
      </div>

      {customLayout && (
        <div className="mt-4 bg-indigo-50 border border-indigo-200 rounded-lg p-4 animate-slide-up">
          <div className="flex items-center space-x-2">
            <Settings className="h-5 w-5 text-indigo-600" />
            <p className="text-indigo-800 font-medium">Customize Mode Active</p>
          </div>
          <p className="text-indigo-600 text-sm mt-1">
            Drag and drop medication cards to rearrange them according to your preference.
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;