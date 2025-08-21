export const initialMedications = [
  {
    id: 1,
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    nextDose: "8:00 AM",
    timeUntilNext: "2 hours",
    taken: false,
    renewalDate: "2025-09-15",
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    nextDose: "12:00 PM",
    timeUntilNext: "6 hours",
    taken: true,
    renewalDate: "2025-08-30",
    color: "bg-green-500"
  },
  {
    id: 3,
    name: "Vitamin D3",
    dosage: "2000 IU",
    frequency: "Once daily",
    nextDose: "9:00 AM",
    timeUntilNext: "3 hours",
    taken: false,
    renewalDate: "2025-10-01",
    color: "bg-orange-500"
  },
  {
    id: 4,
    name: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily (evening)",
    nextDose: "8:00 PM",
    timeUntilNext: "14 hours",
    taken: false,
    renewalDate: "2025-09-01",
    color: "bg-purple-500"
  }
];

export const initialActivities = [
  {
    id: 1,
    type: 'taken',
    message: 'Metformin 500mg taken',
    timestamp: '2 hours ago',
    color: 'green'
  },
  {
    id: 2,
    type: 'renewal',
    message: 'Renewal request sent for Atorvastatin',
    timestamp: 'Yesterday',
    color: 'blue'
  },
  {
    id: 3,
    type: 'added',
    message: 'New medication added: Vitamin D3',
    timestamp: '3 days ago',
    color: 'orange'
  }
];