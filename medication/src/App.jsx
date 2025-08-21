import React from 'react';
import Header from './components/Header';
import QuickStats from './components/QuickStats';
import MedicationGrid from './components/MedicationGrid';
import RecentActivity from './components/RecentActivity';
import { MedicationProvider } from './hooks/useMedications.jsx';

function App() {
  return (
    <MedicationProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto p-6">
          <Header />
          <QuickStats />
          <MedicationGrid />
          <RecentActivity />
        </div>
      </div>
    </MedicationProvider>
  );
}

export default App;