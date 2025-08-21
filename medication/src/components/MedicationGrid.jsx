import React from 'react';
import { Plus } from 'lucide-react';
import { useMedications } from '../hooks/useMedications.jsx';
import MedicationCard from './MedicationCard';

const MedicationGrid = () => {
  const { medications } = useMedications();

  const handleAddMedication = () => {
    alert('Add new medication feature coming soon!');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
      {medications.map((medication, index) => (
        <div 
          key={medication.id} 
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <MedicationCard medication={medication} />
        </div>
      ))}
      
      {/* Add New Medication Card */}
      <div 
        onClick={handleAddMedication}
        className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-500 hover:border-indigo-400 hover:text-indigo-600 transition-all cursor-pointer min-h-[300px] transform hover:scale-105 animate-slide-up"
        style={{ animationDelay: `${medications.length * 0.1}s` }}
      >
        <Plus className="h-8 w-8 mb-3" />
        <p className="font-medium">Add New Medication</p>
        <p className="text-sm text-center mt-1">
          Click to add a new prescription to your dashboard
        </p>
      </div>
    </div>
  );
};

export default MedicationGrid;