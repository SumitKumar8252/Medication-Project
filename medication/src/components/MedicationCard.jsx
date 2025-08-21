import React, { useState } from 'react';
import { Clock, Bell, CheckCircle, RefreshCw, Pill } from 'lucide-react';
import { useMedications } from '../hooks/useMedications.jsx';
import { getDaysUntilRenewal } from '../utils/dateUtils';

const MedicationCard = ({ medication }) => {
  const { customLayout, markAsTaken, requestRenewal, reorderMedications } = useMedications();
  const [isDragging, setIsDragging] = useState(false);

  const daysUntilRenewal = getDaysUntilRenewal(medication.renewalDate);
  const isUrgent = daysUntilRenewal <= 7;

  const handleDragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.setData('text/plain', medication.id.toString());
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedId = parseInt(e.dataTransfer.getData('text/plain'));
    if (draggedId !== medication.id) {
      reorderMedications(draggedId, medication.id);
    }
  };

  return (
    <div
      draggable={customLayout}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-lg animate-slide-up ${
        customLayout ? 'cursor-move hover:scale-105' : ''
      } ${isDragging ? 'opacity-50' : ''}`}
    >
      {/* Card Header */}
      <div className={`${medication.color} h-2`}></div>
      
      <div className="p-6">
        {/* Medication Name & Dosage */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{medication.name}</h3>
            <p className="text-gray-600">{medication.dosage}</p>
            <p className="text-sm text-gray-500">{medication.frequency}</p>
          </div>
          <div className={`p-2 rounded-full ${medication.color} bg-opacity-10`}>
            <Pill className={`h-5 w-5 ${medication.color.replace('bg-', 'text-')}`} />
          </div>
        </div>

        {/* Next Dose Info */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Next Dose</span>
          </div>
          <p className="text-sm font-medium text-gray-900">{medication.nextDose}</p>
          <p className="text-xs text-gray-500">in {medication.timeUntilNext}</p>
        </div>

        {/* Renewal Warning */}
        {isUrgent && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg animate-pulse-slow">
            <div className="flex items-center space-x-2">
              <Bell className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium text-red-800">
                Renewal due in {daysUntilRenewal} days
              </span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={() => markAsTaken(medication.id)}
            className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 active:scale-95 ${
              medication.taken
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            <CheckCircle className="h-4 w-4" />
            <span>{medication.taken ? 'Taken ✓' : 'Mark as Taken'}</span>
          </button>
          
          <button
            onClick={() => requestRenewal(medication.name)}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Request Renewal</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicationCard;