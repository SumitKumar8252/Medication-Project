import React, { createContext, useContext, useState, useCallback } from 'react';
import { initialMedications, initialActivities } from '../data/mockData';

const MedicationContext = createContext();

export const useMedications = () => {
  const context = useContext(MedicationContext);
  if (!context) {
    throw new Error('useMedications must be used within a MedicationProvider');
  }
  return context;
};

export const MedicationProvider = ({ children }) => {
  const [medications, setMedications] = useState(initialMedications);
  const [activities, setActivities] = useState(initialActivities);
  const [customLayout, setCustomLayout] = useState(false);

  const markAsTaken = useCallback((id) => {
    setMedications(prev => 
      prev.map(med => 
        med.id === id ? { ...med, taken: !med.taken } : med
      )
    );

    // Add activity
    const medication = medications.find(med => med.id === id);
    if (medication) {
      const newActivity = {
        id: Date.now(),
        type: 'taken',
        message: `${medication.name} ${medication.dosage} taken`,
        timestamp: 'Just now',
        color: 'green'
      };
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    }
  }, [medications]);

  const requestRenewal = useCallback((medicationName) => {
    const newActivity = {
      id: Date.now(),
      type: 'renewal',
      message: `Renewal request sent for ${medicationName}`,
      timestamp: 'Just now',
      color: 'blue'
    };
    setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    
    alert(`Renewal request sent for ${medicationName}! Your doctor will be notified.`);
  }, []);

  const reorderMedications = useCallback((draggedId, targetId) => {
    const draggedIndex = medications.findIndex(med => med.id === draggedId);
    const targetIndex = medications.findIndex(med => med.id === targetId);
    
    const newMedications = [...medications];
    const [removed] = newMedications.splice(draggedIndex, 1);
    newMedications.splice(targetIndex, 0, removed);
    
    setMedications(newMedications);
  }, [medications]);

  const value = {
    medications,
    activities,
    customLayout,
    setCustomLayout,
    markAsTaken,
    requestRenewal,
    reorderMedications
  };

  return (
    <MedicationContext.Provider value={value}>
      {children}
    </MedicationContext.Provider>
  );
};