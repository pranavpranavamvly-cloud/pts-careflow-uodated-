/**
 * CAREFLOW — Core Application Logic & Prototype Simulation Engine
 * High-Usability Healthcare Availability, Cost Transparency & Emergency Coordination
 */

// ==========================================
// SIMULATED DATASETS
// ==========================================

const LOCATIONS = {
  indiranagar: { name: "Indiranagar, Metro Pillar 78", coords: [12.9784, 77.6408] },
  koramangala: { name: "Koramangala 4th Block", coords: [12.9352, 77.6245] },
  hsr: { name: "HSR Layout Sector 2", coords: [12.9121, 77.6446] },
  whitefield: { name: "Whitefield Main Road", coords: [12.9698, 77.7500] },
  jayanagar: { name: "Jayanagar 9th Block", coords: [12.9250, 77.5938] }
};

const FACILITIES = [
  {
    id: "fac-1",
    name: "CareFlow Metro Multi-Specialty",
    type: "Tertiary Hospital & Level-1 Trauma",
    status: "Open 24/7",
    isEmergencyReady: true,
    rating: 4.8,
    doctorFee: 400,
    registrationFee: 50,
    distances: { indiranagar: 2.4, koramangala: 4.8, hsr: 6.2, whitefield: 9.5, jayanagar: 7.1 },
    travelTimes: { indiranagar: 9, koramangala: 18, hsr: 22, whitefield: 32, jayanagar: 26 },
    crowdLevel: "Moderate",
    crowdPercentage: 54,
    patientsWaiting: 7,
    opWaitTime: 18,
    emergencyWaitTime: 0,
    emergencyBeds: 6,
    icuBeds: 4,
    hasBloodBank: true,
    hasPharmacy247: true,
    hasLab247: true,
    paymentMethods: ["UPI", "Cards", "Cash", "Cashless TPA"],
    supportsOnlinePay: true,
    supportsCashless: true,
    address: "100ft Road, HAL 2nd Stage, Indiranagar"
  },
  {
    id: "fac-2",
    name: "City Health Care & Diagnostics",
    type: "Day-Care Clinic & Advanced Lab",
    status: "Open till 10 PM",
    isEmergencyReady: false,
    rating: 4.6,
    doctorFee: 300,
    registrationFee: 30,
    distances: { indiranagar: 1.8, koramangala: 3.5, hsr: 5.1, whitefield: 11.2, jayanagar: 6.0 },
    travelTimes: { indiranagar: 7, koramangala: 14, hsr: 19, whitefield: 35, jayanagar: 22 },
    crowdLevel: "Low",
    crowdPercentage: 28,
    patientsWaiting: 3,
    opWaitTime: 8,
    emergencyWaitTime: null,
    emergencyBeds: 0,
    icuBeds: 0,
    hasBloodBank: false,
    hasPharmacy247: false,
    hasLab247: true,
    paymentMethods: ["UPI", "Cards", "Cash"],
    supportsOnlinePay: true,
    supportsCashless: false,
    address: "12th Main Road, Indiranagar"
  },
  {
    id: "fac-3",
    name: "Apollo Clinic & Day Surgery",
    type: "Super-Specialty PolyClinic",
    status: "Open till 9 PM",
    isEmergencyReady: false,
    rating: 4.7,
    doctorFee: 500,
    registrationFee: 100,
    distances: { indiranagar: 3.2, koramangala: 2.1, hsr: 4.0, whitefield: 12.0, jayanagar: 5.4 },
    travelTimes: { indiranagar: 12, koramangala: 8, hsr: 15, whitefield: 38, jayanagar: 20 },
    crowdLevel: "Moderate",
    crowdPercentage: 48,
    patientsWaiting: 5,
    opWaitTime: 14,
    emergencyWaitTime: null,
    emergencyBeds: 1,
    icuBeds: 0,
    hasBloodBank: false,
    hasPharmacy247: true,
    hasLab247: true,
    paymentMethods: ["UPI", "Cards", "Cash", "Cashless TPA"],
    supportsOnlinePay: true,
    supportsCashless: true,
    address: "80ft Road, Koramangala 4th Block"
  },
  {
    id: "fac-4",
    name: "St. Jude Community Hospital",
    type: "Charitable General Hospital",
    status: "Open 24/7",
    isEmergencyReady: true,
    rating: 4.3,
    doctorFee: 150,
    registrationFee: 20,
    distances: { indiranagar: 4.5, koramangala: 3.8, hsr: 3.2, whitefield: 14.5, jayanagar: 4.1 },
    travelTimes: { indiranagar: 18, koramangala: 15, hsr: 12, whitefield: 45, jayanagar: 16 },
    crowdLevel: "High",
    crowdPercentage: 86,
    patientsWaiting: 16,
    opWaitTime: 42,
    emergencyWaitTime: 4,
    emergencyBeds: 12,
    icuBeds: 8,
    hasBloodBank: true,
    hasPharmacy247: true,
    hasLab247: true,
    paymentMethods: ["UPI", "Cash", "Cards"],
    supportsOnlinePay: false,
    supportsCashless: true,
    address: "Sarjapur Main Road, Near St. John Gate"
  },
  {
    id: "fac-5",
    name: "MedPulse 24/7 Urgent PolyClinic",
    type: "Walk-in Urgent Care & Diagnostics",
    status: "Open 24/7",
    isEmergencyReady: true,
    rating: 4.5,
    doctorFee: 350,
    registrationFee: 40,
    distances: { indiranagar: 2.1, koramangala: 4.2, hsr: 5.6, whitefield: 8.8, jayanagar: 6.8 },
    travelTimes: { indiranagar: 8, koramangala: 16, hsr: 20, whitefield: 28, jayanagar: 25 },
    crowdLevel: "Low",
    crowdPercentage: 32,
    patientsWaiting: 2,
    opWaitTime: 6,
    emergencyWaitTime: 1,
    emergencyBeds: 3,
    icuBeds: 1,
    hasBloodBank: false,
    hasPharmacy247: true,
    hasLab247: true,
    paymentMethods: ["UPI", "Cards", "Cash"],
    supportsOnlinePay: true,
    supportsCashless: false,
    address: "CMH Road, Near Metro Station"
  }
];

const DOCTORS = [
  {
    id: "doc-1",
    name: "Dr. Ananya Sharma",
    specialty: "General Medicine",
    qualification: "MBBS, MD (Internal Med)",
    facilityId: "fac-2",
    facilityName: "City Health Care & Diagnostics",
    status: "Available",
    patientsWaiting: 3,
    waitTime: 8,
    nextSlot: "3:40 PM",
    fee: 300,
    experience: "12 Yrs",
    rating: 4.8
  },
  {
    id: "doc-2",
    name: "Dr. Rajesh Verma",
    specialty: "Cardiology",
    qualification: "MBBS, MD, DM (Cardiology)",
    facilityId: "fac-1",
    facilityName: "CareFlow Metro Multi-Specialty",
    status: "Busy",
    patientsWaiting: 6,
    waitTime: 25,
    nextSlot: "4:15 PM",
    fee: 650,
    experience: "18 Yrs",
    rating: 4.9
  },
  {
    id: "doc-3",
    name: "Dr. Priya Nair",
    specialty: "Pediatrics",
    qualification: "MBBS, DCH, DNB (Pediatrics)",
    facilityId: "fac-3",
    facilityName: "Apollo Clinic & Day Surgery",
    status: "Available",
    patientsWaiting: 4,
    waitTime: 12,
    nextSlot: "3:50 PM",
    fee: 450,
    experience: "9 Yrs",
    rating: 4.7
  },
  {
    id: "doc-4",
    name: "Dr. Vikram Sethi",
    specialty: "Orthopedics",
    qualification: "MBBS, MS (Ortho), Fellowship Joint Care",
    facilityId: "fac-1",
    facilityName: "CareFlow Metro Multi-Specialty",
    status: "Available",
    patientsWaiting: 2,
    waitTime: 6,
    nextSlot: "3:35 PM",
    fee: 500,
    experience: "15 Yrs",
    rating: 4.8
  },
  {
    id: "doc-5",
    name: "Dr. Sneha Kulkarni",
    specialty: "Dermatology",
    qualification: "MBBS, MD (Dermatology)",
    facilityId: "fac-5",
    facilityName: "MedPulse 24/7 Urgent PolyClinic",
    status: "Available",
    patientsWaiting: 5,
    waitTime: 18,
    nextSlot: "4:00 PM",
    fee: 450,
    experience: "8 Yrs",
    rating: 4.6
  },
  {
    id: "doc-6",
    name: "Dr. Arun Mathur",
    specialty: "ENT",
    qualification: "MBBS, MS (ENT)",
    facilityId: "fac-4",
    facilityName: "St. Jude Community Hospital",
    status: "Busy",
    patientsWaiting: 9,
    waitTime: 32,
    nextSlot: "4:30 PM",
    fee: 150,
    experience: "14 Yrs",
    rating: 4.4
  },
  {
    id: "doc-7",
    name: "Dr. Meera Nambiar",
    specialty: "General Medicine",
    qualification: "MBBS, DNB (Fam Med)",
    facilityId: "fac-5",
    facilityName: "MedPulse 24/7 Urgent PolyClinic",
    status: "Available",
    patientsWaiting: 1,
    waitTime: 4,
    nextSlot: "3:30 PM",
    fee: 350,
    experience: "10 Yrs",
    rating: 4.7
  },
  {
    id: "doc-8",
    name: "Dr. Farhan Ali",
    specialty: "General Medicine",
    qualification: "MBBS, MD (Internal Med)",
    facilityId: "fac-1",
    facilityName: "CareFlow Metro Multi-Specialty",
    status: "Available",
    patientsWaiting: 5,
    waitTime: 14,
    nextSlot: "3:45 PM",
    fee: 400,
    experience: "11 Yrs",
    rating: 4.8
  }
];

const LAB_TESTS = [
  {
    id: "test-cbc",
    name: "Complete Blood Count (CBC)",
    category: "Hematology",
    description: "Evaluates red blood cells, white blood cells, hemoglobin, and platelets.",
    options: [
      { facilityId: "fac-2", facilityName: "City Health Care & Diagnostics", price: 250, waiting: 3, waitTime: 8, slot: "3:30 PM" },
      { facilityId: "fac-1", facilityName: "CareFlow Metro Multi-Specialty", price: 300, waiting: 8, waitTime: 18, slot: "3:45 PM" },
      { facilityId: "fac-3", facilityName: "Apollo Clinic & Day Surgery", price: 350, waiting: 1, waitTime: 5, slot: "3:25 PM" },
      { facilityId: "fac-4", facilityName: "St. Jude Community Hospital", price: 180, waiting: 14, waitTime: 35, slot: "4:15 PM" }
    ]
  },
  {
    id: "test-sugar",
    name: "Blood Sugar (Fasting / Post-Prandial)",
    category: "Biochemistry",
    description: "Monitors blood glucose levels for diabetic assessment.",
    options: [
      { facilityId: "fac-2", facilityName: "City Health Care & Diagnostics", price: 120, waiting: 2, waitTime: 5, slot: "3:30 PM" },
      { facilityId: "fac-5", facilityName: "MedPulse 24/7 Urgent PolyClinic", price: 150, waiting: 1, waitTime: 4, slot: "3:20 PM" },
      { facilityId: "fac-1", facilityName: "CareFlow Metro Multi-Specialty", price: 180, waiting: 6, waitTime: 15, slot: "3:50 PM" },
      { facilityId: "fac-4", facilityName: "St. Jude Community Hospital", price: 80, waiting: 16, waitTime: 40, slot: "4:20 PM" }
    ]
  },
  {
    id: "test-lipid",
    name: "Lipid Profile (Cholesterol / Triglycerides)",
    category: "Cardiovascular",
    description: "Cholesterol, HDL, LDL, VLDL, and Triglycerides breakdown.",
    options: [
      { facilityId: "fac-2", facilityName: "City Health Care & Diagnostics", price: 550, waiting: 3, waitTime: 8, slot: "3:35 PM" },
      { facilityId: "fac-1", facilityName: "CareFlow Metro Multi-Specialty", price: 650, waiting: 5, waitTime: 14, slot: "3:50 PM" },
      { facilityId: "fac-3", facilityName: "Apollo Clinic & Day Surgery", price: 720, waiting: 2, waitTime: 6, slot: "3:30 PM" },
      { facilityId: "fac-4", facilityName: "St. Jude Community Hospital", price: 400, waiting: 12, waitTime: 30, slot: "4:10 PM" }
    ]
  },
  {
    id: "test-thyroid",
    name: "Thyroid Profile (Total T3, T4, TSH)",
    category: "Endocrinology",
    description: "Evaluates thyroid gland function and metabolism rate.",
    options: [
      { facilityId: "fac-2", facilityName: "City Health Care & Diagnostics", price: 450, waiting: 2, waitTime: 6, slot: "3:30 PM" },
      { facilityId: "fac-1", facilityName: "CareFlow Metro Multi-Specialty", price: 500, waiting: 6, waitTime: 16, slot: "3:45 PM" },
      { facilityId: "fac-3", facilityName: "Apollo Clinic & Day Surgery", price: 580, waiting: 1, waitTime: 4, slot: "3:20 PM" }
    ]
  },
  {
    id: "test-lft",
    name: "Liver Function Test (LFT)",
    category: "Biochemistry",
    description: "Bilirubin, SGOT, SGPT, Alkaline Phosphatase, Protein.",
    options: [
      { facilityId: "fac-2", facilityName: "City Health Care & Diagnostics", price: 600, waiting: 3, waitTime: 9, slot: "3:35 PM" },
      { facilityId: "fac-1", facilityName: "CareFlow Metro Multi-Specialty", price: 700, waiting: 4, waitTime: 12, slot: "3:40 PM" },
      { facilityId: "fac-4", facilityName: "St. Jude Community Hospital", price: 450, waiting: 10, waitTime: 28, slot: "4:00 PM" }
    ]
  },
  {
    id: "test-kft",
    name: "Kidney Function Test (KFT / RFT)",
    category: "Renal Panel",
    description: "Creatinine, Blood Urea Nitrogen, Uric Acid, Electrolytes.",
    options: [
      { facilityId: "fac-2", facilityName: "City Health Care & Diagnostics", price: 650, waiting: 2, waitTime: 7, slot: "3:30 PM" },
      { facilityId: "fac-1", facilityName: "CareFlow Metro Multi-Specialty", price: 750, waiting: 5, waitTime: 15, slot: "3:45 PM" }
    ]
  },
  {
    id: "test-xray",
    name: "Digital Chest X-Ray (PA View)",
    category: "Radiology & Scan",
    description: "High-resolution digital chest radiography with immediate film.",
    options: [
      { facilityId: "fac-1", facilityName: "CareFlow Metro Multi-Specialty", price: 450, waiting: 3, waitTime: 10, slot: "3:40 PM" },
      { facilityId: "fac-5", facilityName: "MedPulse 24/7 Urgent PolyClinic", price: 400, waiting: 1, waitTime: 5, slot: "3:25 PM" },
      { facilityId: "fac-4", facilityName: "St. Jude Community Hospital", price: 250, waiting: 8, waitTime: 22, slot: "4:00 PM" }
    ]
  }
];

const CHECKUP_PACKAGES = [
  {
    id: "pkg-1",
    name: "Basic Health Checkup",
    price: 699,
    timeRequired: "45 mins",
    availability: "Immediate Walk-In",
    nextSlot: "Today 3:30 PM",
    testsIncluded: ["Complete Blood Count (CBC)", "Fasting Blood Sugar", "Urine Routine", "Blood Pressure & BMI", "Doctor Consultation"]
  },
  {
    id: "pkg-2",
    name: "Comprehensive Full-Body Checkup",
    price: 1899,
    timeRequired: "2.5 hours",
    availability: "Available Tomorrow Morning",
    nextSlot: "Tomorrow 8:00 AM",
    testsIncluded: ["CBC + ESR", "Lipid Profile (Full)", "Liver Function (LFT)", "Kidney Function (KFT)", "Thyroid TSH", "Fasting Sugar & HbA1c", "Chest X-Ray Digital", "ECG", "Physician Review"]
  },
  {
    id: "pkg-3",
    name: "Diabetes Care & Vital Checkup",
    price: 999,
    timeRequired: "1 hour",
    availability: "Available Daily",
    nextSlot: "Tomorrow 8:30 AM",
    testsIncluded: ["Fasting Blood Sugar", "Post-Prandial Glucose", "HbA1c Glycated Hemoglobin", "Microalbuminuria", "Diabetic Foot & Eye Screen", "Dietician Consult"]
  },
  {
    id: "pkg-4",
    name: "Women's Wellness & Hormonal Checkup",
    price: 1499,
    timeRequired: "1.5 hours",
    availability: "Available Daily",
    nextSlot: "Tomorrow 9:00 AM",
    testsIncluded: ["Complete Hemogram", "Thyroid Profile (T3/T4/TSH)", "Serum Calcium & Vitamin D", "Iron Studies & Ferritin", "Pelvic Ultrasound Screening", "Gynecologist Consultation"]
  },
  {
    id: "pkg-5",
    name: "Senior Citizen Executive Care",
    price: 2499,
    timeRequired: "3 hours",
    availability: "Morning Slots",
    nextSlot: "Tomorrow 8:00 AM",
    testsIncluded: ["Complete Blood & Renal Panel", "Cardiology 2D-Echo Screening", "Bone Mineral Density (BMD)", "Prostate PSA / Pap Smear", "Chest Radiography", "Geriatric Specialist Consult"]
  }
];

const MEDICINES = [
  {
    id: "med-1",
    name: "Paracetamol 650mg (Dolo / Calpol)",
    category: "Antipyretic / Analgesic",
    isCritical: false,
    stockStatus: "Available",
    approxPrice: "₹32 (Strip of 15)",
    pharmacies: [
      { facilityName: "CareFlow Metro 24/7 Pharmacy", stock: "High Stock", price: "₹30", open247: true, distance: 2.4, travel: 9 },
      { facilityName: "City Health Care Pharmacy", stock: "High Stock", price: "₹32", open247: false, distance: 1.8, travel: 7 },
      { facilityName: "Apollo 24/7 Pharmacy", stock: "High Stock", price: "₹32", open247: true, distance: 3.2, travel: 12 }
    ]
  },
  {
    id: "med-2",
    name: "Epinephrine 1:1000 Auto-Injector",
    category: "Emergency Anaphylaxis",
    isCritical: true,
    stockStatus: "Available (Restricted)",
    approxPrice: "₹2,850",
    pharmacies: [
      { facilityName: "CareFlow Metro 24/7 Pharmacy", stock: "8 Units Available", price: "₹2,800", open247: true, distance: 2.4, travel: 9 },
      { facilityName: "St. Jude Hospital Pharmacy", stock: "4 Units Available", price: "₹2,650", open247: true, distance: 4.5, travel: 18 },
      { facilityName: "City Health Care Pharmacy", stock: "Out of Stock", price: "—", open247: false, distance: 1.8, travel: 7 }
    ]
  },
  {
    id: "med-3",
    name: "Nitroglycerin Sublingual 0.5mg (Sorbitrate)",
    category: "Emergency Cardiac Angina",
    isCritical: true,
    stockStatus: "Available",
    approxPrice: "₹85 (Bottle of 25)",
    pharmacies: [
      { facilityName: "CareFlow Metro 24/7 Pharmacy", stock: "High Stock", price: "₹85", open247: true, distance: 2.4, travel: 9 },
      { facilityName: "Apollo 24/7 Pharmacy", stock: "High Stock", price: "₹88", open247: true, distance: 3.2, travel: 12 },
      { facilityName: "MedPulse 24/7 Urgent Care", stock: "Available", price: "₹85", open247: true, distance: 2.1, travel: 8 }
    ]
  },
  {
    id: "med-4",
    name: "Insulin Glargine 100 IU/ml (Lantus Pen)",
    category: "Endocrine / Cold-Chain",
    isCritical: false,
    stockStatus: "Available",
    approxPrice: "₹670",
    pharmacies: [
      { facilityName: "CareFlow Metro 24/7 Pharmacy", stock: "Cold Chain Verified", price: "₹660", open247: true, distance: 2.4, travel: 9 },
      { facilityName: "Apollo 24/7 Pharmacy", stock: "Cold Chain Verified", price: "₹680", open247: true, distance: 3.2, travel: 12 },
      { facilityName: "City Health Care Pharmacy", stock: "Low Stock (2 pens)", price: "₹670", open247: false, distance: 1.8, travel: 7 }
    ]
  },
  {
    id: "med-5",
    name: "Remdesivir 100mg Lyophilized Vial",
    category: "Antiviral Critical Care",
    isCritical: true,
    stockStatus: "Low Stock / Hospital Only",
    approxPrice: "₹1,200",
    pharmacies: [
      { facilityName: "CareFlow Metro 24/7 Pharmacy", stock: "12 Vials (Inpatient Rx)", price: "₹1,200", open247: true, distance: 2.4, travel: 9 },
      { facilityName: "St. Jude Community Hospital", stock: "6 Vials", price: "₹1,100", open247: true, distance: 4.5, travel: 18 },
      { facilityName: "City Health Care", stock: "Unavailable", price: "—", open247: false, distance: 1.8, travel: 7 }
    ]
  },
  {
    id: "med-6",
    name: "Amoxicillin + Clavulanic Acid 625mg (Augmentin)",
    category: "Antibiotic",
    isCritical: false,
    stockStatus: "Available",
    approxPrice: "₹195 (Strip of 10)",
    pharmacies: [
      { facilityName: "CareFlow Metro 24/7 Pharmacy", stock: "High Stock", price: "₹190", open247: true, distance: 2.4, travel: 9 },
      { facilityName: "City Health Care Pharmacy", stock: "High Stock", price: "₹195", open247: false, distance: 1.8, travel: 7 },
      { facilityName: "MedPulse 24/7 Urgent Care", stock: "High Stock", price: "₹195", open247: true, distance: 2.1, travel: 8 }
    ]
  },
  {
    id: "med-7",
    name: "Atorvastatin 20mg (Lipitor / Atorva)",
    category: "Cardiovascular",
    isCritical: false,
    stockStatus: "Available",
    approxPrice: "₹140 (Strip of 15)",
    pharmacies: [
      { facilityName: "All 5 Partner Pharmacies", stock: "Full Stock", price: "₹135 – ₹145", open247: true, distance: 2.0, travel: 8 }
    ]
  }
];

const BLOOD_BANKS = [
  {
    id: "bb-1",
    name: "CareFlow Metro Regional Blood Center",
    facilityId: "fac-1",
    status: "Operating 24/7 (NABH Accredited)",
    processingCharge: "₹1,050 / unit (Govt Subsidized Rate)",
    stocks: {
      "O+": 16, "O-": 4, "A+": 12, "A-": 3, "B+": 18, "B-": 2, "AB+": 9, "AB-": 1
    }
  },
  {
    id: "bb-2",
    name: "Rotary Central Voluntary Blood Bank",
    facilityId: "fac-3",
    status: "Open 8 AM – 10 PM (Emergency Dispatch Active)",
    processingCharge: "₹950 / unit",
    stocks: {
      "O+": 22, "O-": 2, "A+": 15, "A-": 1, "B+": 25, "B-": 4, "AB+": 8, "AB-": 2
    }
  },
  {
    id: "bb-3",
    name: "St. Jude Charitable Blood Center",
    facilityId: "fac-4",
    status: "Operating 24/7",
    processingCharge: "₹750 / unit (Charity Trust)",
    stocks: {
      "O+": 8, "O-": 3, "A+": 6, "A-": 2, "B+": 11, "B-": 1, "AB+": 4, "AB-": 1
    }
  }
];

const AMBULANCES = [
  {
    id: "amb-1",
    name: "CareFlow ALS Unit 04",
    type: "Advanced Life Support (ALS)",
    features: "Ventilator + Defibrillator + Paramedic on board",
    status: "Available",
    distance: "1.4 km",
    eta: "4 mins",
    phone: "108"
  },
  {
    id: "amb-2",
    name: "Government 108 BLS Ambulance 19",
    type: "Basic Life Support (BLS)",
    features: "Oxygen Cylinder + Stretcher + First Aid",
    status: "Available",
    distance: "2.5 km",
    eta: "7 mins",
    phone: "108"
  },
  {
    id: "amb-3",
    name: "Apollo Rapid Cardiac ALS 02",
    type: "Cardiac Specialized ALS",
    features: "ECG Telemetry + Resuscitation Team",
    status: "Available",
    distance: "3.2 km",
    eta: "9 mins",
    phone: "1066"
  },
  {
    id: "amb-4",
    name: "City Rescue ALS 08",
    type: "Advanced Life Support",
    features: "Standard ALS Kit",
    status: "Busy (On Call)",
    distance: "4.8 km",
    eta: "18 mins",
    phone: "108"
  }
];

// ==========================================
// CORE APPLICATION CONTROLLER
// ==========================================

class CareFlowApp {
  constructor() {
    this.currentLocation = "indiranagar";
    this.isEmergencyMode = false;
    this.selectedBloodGroup = "O+";
    this.selectedBloodUnits = 1;
    this.currentRouteFacility = null;
    this.comparedFacilities = new Set(["fac-1", "fac-2"]);
    this.savedItems = this.loadSavedItems();
    this.tickerIndex = 0;
    this.ambulanceTimer = null;
    this.init();
  }

  init() {
    this.updateSavedBadge();
    this.renderHomeSmartRec();
    this.renderFacilities();
    this.renderDoctors();
    this.renderLabs();
    this.renderPackages();
    this.renderMedicines();
    this.renderBloodBanks();
    this.updateEstimator();
    this.renderEmergencyCenter();
    this.renderAiHub();
    this.updateFloatingCompareBar();
    this.startLiveSimulationTicks();

    // Close dropdown on outside click
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".dropdown-nav")) {
        this.closeMoreMenu();
      }
    });

    // ESC key closes any open modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll(".modal-overlay.active").forEach(m => m.classList.remove("active"));
      }
    });
  }

  // ----------------------------------------
  // UI Toast Messaging
  // ----------------------------------------
  showToast(message, icon = "✓") {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast-msg";
    toast.innerHTML = `<span style="color:#38bdf8;">${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.25s";
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  // ----------------------------------------
  // Location Management
  // ----------------------------------------
  changeLocation(locKey) {
    if (!LOCATIONS[locKey]) return;
    this.currentLocation = locKey;

    // Refresh calculations and UI across all modules
    this.renderHomeSmartRec();
    this.renderFacilities();
    this.renderDoctors();
    this.renderLabs();
    this.renderBloodBanks();
    this.renderEmergencyCenter();
    this.renderAiHub();
    this.updateFloatingCompareBar();

    this.showToast(`Location updated to ${LOCATIONS[locKey].name}`, "📍");

    // Update live ticker message
    const ticker = document.getElementById("tickerSlider");
    if (ticker) {
      ticker.innerHTML = `<span>Location updated to <strong>${LOCATIONS[locKey].name}</strong> — Distance & door-to-doctor times recalculated</span> • ` + ticker.innerHTML;
    }
  }

  highlightLocation() {
    const select = document.getElementById("userLocationSelect");
    if (select) {
      select.focus();
      this.showToast("Select your current area from the location dropdown", "📍");
    }
  }

  refreshGps() {
    const locKeys = Object.keys(LOCATIONS);
    const randomLoc = locKeys[Math.floor(Math.random() * locKeys.length)];
    const select = document.getElementById("userLocationSelect");
    if (select) {
      select.value = randomLoc;
      this.changeLocation(randomLoc);
    }
    this.showToast(`GPS coordinate locked! Auto-positioned to ${LOCATIONS[randomLoc].name}`, "📡");
  }

  // ----------------------------------------
  // Header Navigation & Dropdown
  // ----------------------------------------
  toggleMoreMenu(e) {
    e.stopPropagation();
    const menu = document.getElementById("moreDropdownMenu");
    if (menu) menu.classList.toggle("active");
  }

  closeMoreMenu() {
    const menu = document.getElementById("moreDropdownMenu");
    if (menu) menu.classList.remove("active");
  }

  switchView(viewName, filterParam = null) {
    this.closeMoreMenu();

    if (this.isEmergencyMode && viewName !== "emergency") {
      this.toggleEmergencyMode(false);
    }

    // Update desktop nav buttons
    document.querySelectorAll(".nav-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.view === viewName);
    });

    // Update mobile nav items
    document.querySelectorAll(".mobile-nav-item").forEach(btn => {
      const txt = btn.innerText.toLowerCase();
      btn.classList.toggle("active", txt.includes(viewName) || (viewName === "facilities" && txt.includes("hospitals")));
    });

    // Toggle view section
    document.querySelectorAll(".view-section").forEach(sec => {
      sec.classList.remove("active");
    });

    const targetSec = document.getElementById(`view-${viewName}`);
    if (targetSec) {
      targetSec.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Apply optional filter parameters
    if (viewName === "doctors" && filterParam) {
      const filterSelect = document.getElementById("doctorSpecialtyFilter");
      if (filterSelect) {
        filterSelect.value = filterParam;
        this.filterDoctors();
      }
    } else if (viewName === "labs" && filterParam) {
      this.quickFilterLab(filterParam);
    }
  }

  // ----------------------------------------
  // Emergency Mode Toggle (Requirement 9)
  // ----------------------------------------
  toggleEmergencyMode(forceState = null) {
    this.isEmergencyMode = forceState !== null ? forceState : !this.isEmergencyMode;
    const btn = document.getElementById("btnEmergencyTrigger");
    const emergencyView = document.getElementById("view-emergency");
    const otherViews = document.querySelectorAll(".view-section:not(#view-emergency)");

    if (this.isEmergencyMode) {
      document.body.classList.add("emergency-active");
      if (btn) btn.innerHTML = `<span>⚠️ EXIT SOS MODE</span>`;

      otherViews.forEach(v => v.classList.remove("active"));
      if (emergencyView) {
        emergencyView.classList.add("active");
        this.renderEmergencyCenter();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      this.showToast("🚨 Critical Care Mode Activated: Fastest trauma routing engaged", "⚠️");
    } else {
      document.body.classList.remove("emergency-active");
      if (btn) {
        btn.innerHTML = `
          <span class="emergency-icon-ring">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <span class="siren-dot"></span>
          </span>
          <span class="emergency-text">EMERGENCY SOS</span>
        `;
      }
      this.switchView("home");
    }
  }

  handleEmergencyCall(e) {
    if (e) e.preventDefault();
    alert("SIMULATED EMERGENCY CALL:\nConnecting directly to National 108 Emergency Medical Response...\n\nIn a real emergency, call 108 or 112 on your phone immediately.");
  }

  requestAmbulanceModal() {
    const modal = document.getElementById("ambulanceModal");
    const body = document.getElementById("ambulanceModalBody");
    const loc = LOCATIONS[this.currentLocation].name;
    const amb = AMBULANCES[0];

    body.innerHTML = `
      <div style="background:#fef2f2; border:1px solid #fecaca; padding:16px; border-radius:var(--radius-md); margin-bottom:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="color:#991b1b; font-size:1.1rem;">🚨 ${amb.name} DISPATCHED</strong>
          <span class="er-tag-urgent" style="font-size:0.75rem;">ETA: 4 MINS</span>
        </div>
        <div style="font-size:0.82rem; color:#7f1d1d; margin-top:4px;">
          Type: ${amb.type} • ${amb.features}
        </div>
      </div>

      <div style="background:#f8fafc; border:1px solid var(--border-light); padding:14px; border-radius:var(--radius-md); font-size:0.85rem; margin-bottom:14px;">
        <div><strong>Patient Pickup Location:</strong> ${loc}</div>
        <div style="margin-top:4px;"><strong>Assigned Paramedic:</strong> Officer R. Sharma (BLS/ALS Certified)</div>
        <div style="margin-top:4px;"><strong>Live GPS Telemetry:</strong> Unit moving via Inner Ring Rd corridor (1.4 km away)</div>
      </div>

      <div style="font-size:0.75rem; color:var(--text-muted); line-height:1.4;">
        * Note: Prototype simulation. No actual ambulance is dispatched. In real emergencies, always contact 108.
      </div>
    `;

    modal.classList.add("active");
  }

  closeAmbulanceModal(e) {
    if (e && e.target !== e.currentTarget && !e.target.classList.contains("modal-close")) return;
    document.getElementById("ambulanceModal").classList.remove("active");
  }

  navigateNearestEmergencyHospital() {
    const erHospital = FACILITIES.find(f => f.isEmergencyReady) || FACILITIES[0];
    this.openRouteModal(erHospital.id);
  }

  // ----------------------------------------
  // Recommendation Engine & Total Time (Req 5 & 6)
  // ----------------------------------------
  computeRecommendationScore(facility) {
    const dist = facility.distances[this.currentLocation] || 3.0;
    const travel = facility.travelTimes[this.currentLocation] || 12;
    const wait = facility.opWaitTime;
    const cost = facility.doctorFee;
    const ratingBonus = (facility.rating - 4.0) * 20;

    // Total estimated door-to-doctor time = Travel time + waiting time
    const totalTimeDelay = travel + wait;

    // Multi-criteria score: favors low total time, low cost, high rating, emergency readiness
    const score = 100 - (totalTimeDelay * 0.8) - (cost * 0.04) + ratingBonus + (facility.isEmergencyReady ? 5 : 0);
    return {
      score: Math.max(10, Math.round(score)),
      totalTimeDelay,
      dist,
      travel,
      wait,
      cost
    };
  }

  renderHomeSmartRec() {
    const container = document.getElementById("homeRecBody");
    if (!container) return;

    // Compute metrics for all facilities
    const evaluated = FACILITIES.map(fac => ({
      fac,
      metrics: this.computeRecommendationScore(fac)
    }));

    // Find highest scoring facility
    evaluated.sort((a, b) => b.metrics.score - a.metrics.score);
    const best = evaluated[0];
    const bestFac = best.fac;
    const bestMetrics = best.metrics;

    // Calculate dynamic explainability reasons (Requirement 6)
    const otherFacs = evaluated.slice(1);
    const avgTotalTime = Math.round(otherFacs.reduce((sum, item) => sum + item.metrics.totalTimeDelay, 0) / otherFacs.length);
    const timeSaved = Math.max(8, avgTotalTime - bestMetrics.totalTimeDelay);

    const avgCrowd = Math.round(otherFacs.reduce((sum, item) => sum + item.fac.crowdPercentage, 0) / otherFacs.length);
    const crowdSaved = Math.max(12, avgCrowd - bestFac.crowdPercentage);

    const lowestCostFac = [...FACILITIES].sort((a, b) => a.doctorFee - b.doctorFee)[0];
    const costDiff = bestFac.doctorFee - lowestCostFac.doctorFee;

    // Calculate explainable confidence percentage
    const confidence = Math.min(96, Math.max(88, 90 + Math.round((best.metrics.score - evaluated[1].metrics.score) * 0.5)));
    const confBadge = document.getElementById("aiConfidenceBadge");
    if (confBadge) confBadge.innerText = `AI Confidence: ${confidence}%`;

    const reasons = [
      `✓ <strong>${timeSaved} min faster</strong> door-to-doctor time than regional alternative average (${bestMetrics.totalTimeDelay} min total vs ~${avgTotalTime} min)`,
      `✓ <strong>${crowdSaved}% less crowded</strong> right now (${bestFac.patientsWaiting} in queue vs regional peak)`,
      `✓ <strong>₹${bestFac.doctorFee}</strong> transparent consultation tariff with no hidden registration surplus`,
      `✓ <strong>${bestFac.status}</strong> with on-site ${bestFac.hasLab247 ? '24/7 Diagnostics' : 'Lab'} & ${bestFac.hasPharmacy247 ? '24/7 Pharmacy' : 'Pharmacy'}`,
      bestFac.isEmergencyReady ? `✓ <strong>Emergency & ICU Capable</strong> with ${bestFac.icuBeds} ventilator beds active` : `✓ <strong>Rapid Outpatient Desk</strong> with express prescription counter`
    ];

    container.innerHTML = `
      <div class="rec-hospital-main">
        <div>
          <span class="rec-hospital-name">${bestFac.name}</span>
          <span class="rec-pill-verified">✓ TOP CAREFLOW AI MATCH</span>
          <div style="font-size:0.82rem; color:var(--text-muted); margin-top:2px;">
            ${bestFac.type} • ${bestFac.address}
          </div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Total Door-to-Doctor</div>
          <div style="font-family:var(--font-mono); font-size:1.6rem; font-weight:800; color:var(--primary); line-height:1;">
            ${bestMetrics.totalTimeDelay} mins
          </div>
        </div>
      </div>

      <div>
        <div class="rec-reasons-title">Explainable AI Analysis — Why CareFlow Recommends This:</div>
        <div class="rec-reasons-grid">
          ${reasons.map(r => `<div class="rec-reason-item">${r}</div>`).join("")}
        </div>
      </div>

      <div class="rec-stats-row">
        <span class="rec-chip">🚗 Travel: <strong>${bestMetrics.travel} min (${bestMetrics.dist} km)</strong></span>
        <span class="rec-chip">⏱️ Queue Wait: <strong>${bestFac.opWaitTime} min (${bestFac.patientsWaiting} waiting)</strong></span>
        <span class="rec-chip">💰 Doctor Fee: <strong>₹${bestFac.doctorFee}</strong></span>
        <span class="rec-chip">⭐ Rating: <strong>${bestFac.rating} / 5.0</strong></span>
      </div>

      <div class="rec-actions">
        <button class="btn-route" onclick="app.openRouteModal('${bestFac.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
          Navigate Route
        </button>
        <button class="btn-primary" onclick="app.quickSelectForBill('${bestFac.id}')">
          Estimate Out-of-Pocket Bill
        </button>
        <button class="btn-outline" onclick="app.toggleBookmarkFacility('${bestFac.id}')">
          ${this.isFacilitySaved(bestFac.id) ? '★ Saved' : '☆ Save Facility'}
        </button>
      </div>
    `;
  }

  // ----------------------------------------
  // Facilities View (Requirements 5 & 7)
  // ----------------------------------------
  renderFacilities() {
    const grid = document.getElementById("facilityGrid");
    if (!grid) return;

    const sortMode = document.getElementById("facilitySort")?.value || "fastest";
    const loc = this.currentLocation;

    // Filters
    const filterEr = document.getElementById("filterEmergency")?.checked;
    const filterIcu = document.getElementById("filterIcu")?.checked;
    const filterBlood = document.getElementById("filterBlood")?.checked;
    const filterPharm = document.getElementById("filterPharmacy")?.checked;
    const filterLab = document.getElementById("filterLab")?.checked;
    const filterOpen = document.getElementById("filterOpenNow")?.checked;

    let facList = FACILITIES.filter(fac => {
      if (filterEr && !fac.isEmergencyReady) return false;
      if (filterIcu && fac.icuBeds <= 0) return false;
      if (filterBlood && !fac.hasBloodBank) return false;
      if (filterPharm && !fac.hasPharmacy247) return false;
      if (filterLab && !fac.hasLab247) return false;
      if (filterOpen && !fac.status.toLowerCase().includes("open")) return false;
      return true;
    });

    // Sorting
    if (sortMode === "fastest") {
      facList.sort((a, b) => {
        const totalA = (a.travelTimes[loc] || 10) + a.opWaitTime;
        const totalB = (b.travelTimes[loc] || 10) + b.opWaitTime;
        return totalA - totalB;
      });
    } else if (sortMode === "smart") {
      facList.sort((a, b) => this.computeRecommendationScore(b).score - this.computeRecommendationScore(a).score);
    } else if (sortMode === "wait") {
      facList.sort((a, b) => a.opWaitTime - b.opWaitTime);
    } else if (sortMode === "distance") {
      facList.sort((a, b) => (a.distances[loc] || 0) - (b.distances[loc] || 0));
    } else if (sortMode === "cost") {
      facList.sort((a, b) => a.doctorFee - b.doctorFee);
    } else if (sortMode === "crowd") {
      facList.sort((a, b) => a.crowdPercentage - b.crowdPercentage);
    } else if (sortMode === "rating") {
      facList.sort((a, b) => b.rating - a.rating);
    }

    if (facList.length === 0) {
      grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:50px; color:var(--text-muted);">No facilities match all selected filters. Try unchecking some filters.</div>`;
      return;
    }

    const topFacId = facList[0].id;

    grid.innerHTML = facList.map(fac => {
      const dist = fac.distances[loc] || 2.5;
      const travel = fac.travelTimes[loc] || 10;
      const wait = fac.opWaitTime;
      const totalTime = travel + wait;
      const isTop = (fac.id === topFacId && (sortMode === "fastest" || sortMode === "smart"));
      const isCompared = this.comparedFacilities.has(fac.id);
      const isSaved = this.isFacilitySaved(fac.id);
      const crowdClass = fac.crowdPercentage > 70 ? "high" : fac.crowdPercentage > 40 ? "mod" : "low";

      return `
        <div class="facility-card ${isTop ? 'recommended-card' : ''}">
          ${isTop ? '<span class="facility-rec-ribbon">Fastest Door-to-Doctor</span>' : ''}

          <div class="facility-card-header">
            <div class="fac-title-group">
              <h3>${fac.name}</h3>
              <span class="fac-type">${fac.type} • ⭐ ${fac.rating}</span>
            </div>
            <span class="fac-status-tag ${fac.isEmergencyReady ? 'emergency-open' : 'open'}">
              ${fac.status}
            </span>
          </div>

          <!-- KILLER FEATURE: TOTAL ESTIMATED TIME TO DOCTOR -->
          <div class="total-time-hero-box">
            <div class="time-hero-left">
              <span class="time-hero-label">Total Time to Doctor</span>
              <div class="time-hero-breakdown">
                🚗 Travel: <strong>${travel}m</strong> + ⏱️ Wait: <strong>${wait}m</strong>
              </div>
            </div>
            <div>
              <div class="time-hero-val">${totalTime}</div>
              <div class="time-hero-unit">Minutes Total</div>
            </div>
          </div>

          <!-- Secondary Stats Row -->
          <div class="fac-stats-row">
            <div class="fac-stat">
              <span class="fac-stat-label">Distance</span>
              <span class="fac-stat-val">${dist} km</span>
            </div>
            <div class="fac-stat">
              <span class="fac-stat-label">Lobby Queue</span>
              <span class="fac-stat-val">${fac.patientsWaiting} waiting</span>
            </div>
            <div class="fac-stat">
              <span class="fac-stat-label">ICU Ventilators</span>
              <span class="fac-stat-val">${fac.icuBeds > 0 ? `${fac.icuBeds} Free` : 'None'}</span>
            </div>
          </div>

          <!-- Crowd Density Meter -->
          <div class="crowd-meter-wrapper">
            <div class="crowd-meter-label">
              <span>Live Patient Density</span>
              <span style="color:${crowdClass === 'high' ? '#ef4444' : crowdClass === 'mod' ? '#f59e0b' : '#10b981'}">
                ${fac.crowdLevel} (${fac.crowdPercentage}%)
              </span>
            </div>
            <div class="crowd-progress-bar">
              <div class="crowd-fill ${crowdClass}" style="width:${fac.crowdPercentage}%"></div>
            </div>
          </div>

          <!-- Capabilities Badges -->
          <div class="fac-features-list">
            <span class="fac-badge ${fac.isEmergencyReady ? 'urgent-badge' : ''}">
              ${fac.isEmergencyReady ? `🚨 24/7 ER (${fac.emergencyBeds} Casualty Beds)` : '🏥 Day Clinic'}
            </span>
            <span class="fac-badge">${fac.hasLab247 ? '🔬 24/7 Lab' : '🔬 Lab Till 8 PM'}</span>
            <span class="fac-badge">${fac.hasPharmacy247 ? '💊 24/7 Pharmacy' : '💊 Pharmacy'}</span>
            ${fac.hasBloodBank ? '<span class="fac-badge highlight">🩸 Blood Bank On-Site</span>' : ''}
            <span class="fac-badge">💳 ${fac.paymentMethods.join(', ')}</span>
          </div>

          <!-- Footer Actions -->
          <div class="facility-card-footer">
            <div class="fac-cost-approx">
              <span class="fac-cost-label">OP Doctor Fee</span>
              <span class="fac-cost-amount">₹${fac.doctorFee}</span>
            </div>
            <div class="fac-card-actions">
              <button class="btn-compare-toggle ${isCompared ? 'selected' : ''}" onclick="app.toggleCompareFacility('${fac.id}')" title="Add to side-by-side comparison matrix">
                ${isCompared ? '✓ Comparing' : '+ Compare'}
              </button>
              <button class="btn-route" onclick="app.openRouteModal('${fac.id}')">
                Route
              </button>
              <button class="btn-primary" onclick="app.quickSelectForBill('${fac.id}')">
                Services
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // ----------------------------------------
  // Comparison Mode Matrix (Requirement 7)
  // ----------------------------------------
  toggleCompareFacility(facId) {
    if (this.comparedFacilities.has(facId)) {
      this.comparedFacilities.delete(facId);
      this.showToast("Removed from comparison", "ℹ️");
    } else {
      if (this.comparedFacilities.size >= 3) {
        this.showToast("You can compare up to 3 facilities at a time", "⚠️");
        return;
      }
      this.comparedFacilities.add(facId);
      this.showToast("Added to comparison", "✓");
    }
    this.renderFacilities();
    this.updateFloatingCompareBar();
  }

  clearComparison() {
    this.comparedFacilities.clear();
    this.renderFacilities();
    this.updateFloatingCompareBar();
    this.showToast("Comparison cleared", "✕");
  }

  updateFloatingCompareBar() {
    const bar = document.getElementById("floatingCompareBar");
    const countBadge = document.getElementById("compareCountBadge");
    const namesList = document.getElementById("compareNamesList");
    if (!bar) return;

    const count = this.comparedFacilities.size;
    if (count > 0) {
      bar.classList.add("active");
      if (countBadge) countBadge.innerText = `${count} Facilit${count > 1 ? 'ies' : 'y'}`;
      if (namesList) {
        const names = Array.from(this.comparedFacilities).map(id => {
          const fac = FACILITIES.find(f => f.id === id);
          return fac ? fac.name.split(' ')[0] : id;
        }).join(" vs ");
        namesList.innerText = names;
      }
    } else {
      bar.classList.remove("active");
    }
  }

  openComparisonModal() {
    if (this.comparedFacilities.size < 2) {
      this.showToast("Select at least 2 facilities to compare side-by-side", "ℹ️");
      return;
    }

    const modal = document.getElementById("comparisonModal");
    const wrapper = document.getElementById("comparisonTableWrapper");
    const loc = this.currentLocation;

    const facs = Array.from(this.comparedFacilities).map(id => FACILITIES.find(f => f.id === id)).filter(Boolean);

    // Compute metrics
    const metricsList = facs.map(f => {
      const dist = f.distances[loc] || 2.5;
      const travel = f.travelTimes[loc] || 10;
      const wait = f.opWaitTime;
      const total = travel + wait;
      return { fac: f, dist, travel, wait, total, fee: f.doctorFee, crowd: f.crowdPercentage, icu: f.icuBeds, erBeds: f.emergencyBeds };
    });

    // Determine best values
    const minTotal = Math.min(...metricsList.map(m => m.total));
    const minTravel = Math.min(...metricsList.map(m => m.travel));
    const minWait = Math.min(...metricsList.map(m => m.wait));
    const minFee = Math.min(...metricsList.map(m => m.fee));
    const minCrowd = Math.min(...metricsList.map(m => m.crowd));
    const maxIcu = Math.max(...metricsList.map(m => m.icu));
    const maxEr = Math.max(...metricsList.map(m => m.erBeds));

    wrapper.innerHTML = `
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Comparison Criteria</th>
            ${facs.map(f => `
              <th>
                <div style="font-weight:800; font-size:0.95rem; color:#0f172a;">${f.name}</div>
                <div style="font-size:0.75rem; color:var(--text-muted);">${f.type}</div>
              </th>
            `).join("")}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="feature-title">⭐ Rating & Status</td>
            ${facs.map(f => `<td>⭐ ${f.rating} • <strong>${f.status}</strong></td>`).join("")}
          </tr>
          <tr>
            <td class="feature-title">🚗 Distance & Proximity</td>
            ${metricsList.map(m => `<td>${m.dist} km</td>`).join("")}
          </tr>
          <tr>
            <td class="feature-title">⏱️ Travel Time</td>
            ${metricsList.map(m => `
              <td class="${m.travel === minTravel ? 'best-value' : ''}">
                ${m.travel} mins ${m.travel === minTravel ? '<span class="best-badge">FASTEST</span>' : ''}
              </td>
            `).join("")}
          </tr>
          <tr>
            <td class="feature-title">👥 Crowd Level</td>
            ${metricsList.map(m => `
              <td class="${m.crowd === minCrowd ? 'best-value' : ''}">
                ${m.fac.crowdLevel} (${m.crowd}%) ${m.crowd === minCrowd ? '<span class="best-badge">LEAST CROWD</span>' : ''}
              </td>
            `).join("")}
          </tr>
          <tr>
            <td class="feature-title">⏳ Outpatient Lobby Wait</td>
            ${metricsList.map(m => `
              <td class="${m.wait === minWait ? 'best-value' : ''}">
                ~${m.wait} mins (${m.fac.patientsWaiting} waiting) ${m.wait === minWait ? '<span class="best-badge">SHORTEST WAIT</span>' : ''}
              </td>
            `).join("")}
          </tr>
          <tr>
            <td class="feature-title">💰 Doctor OP Fee</td>
            ${metricsList.map(m => `
              <td class="${m.fee === minFee ? 'best-value' : ''}">
                ₹${m.fee} ${m.fee === minFee ? '<span class="best-badge">LOWEST COST</span>' : ''}
              </td>
            `).join("")}
          </tr>
          <tr style="background:#f0f9ff; font-weight:700;">
            <td class="feature-title" style="background:#e0f2fe; color:#0369a1;">⚡ Total Door-to-Doctor Time</td>
            ${metricsList.map(m => `
              <td class="${m.total === minTotal ? 'best-value' : ''}" style="font-size:1rem; font-family:var(--font-mono);">
                ${m.total} mins ${m.total === minTotal ? '<span class="best-badge" style="background:#0284c7;">WINNER</span>' : ''}
              </td>
            `).join("")}
          </tr>
          <tr>
            <td class="feature-title">🚨 Emergency & ICU</td>
            ${metricsList.map(m => `
              <td>
                ${m.fac.isEmergencyReady ? `✓ ER Ready (${m.erBeds} Beds, ${m.icu} ICU)` : '✕ Day Clinic Only'}
              </td>
            `).join("")}
          </tr>
          <tr>
            <td class="feature-title">🩸 Blood Bank On-Site</td>
            ${facs.map(f => `<td>${f.hasBloodBank ? '✓ Available On-Site' : '✕ No Blood Bank'}</td>`).join("")}
          </tr>
          <tr>
            <td class="feature-title">💊 Pharmacy & Lab</td>
            ${facs.map(f => `<td>${f.hasPharmacy247 ? '24/7 Pharmacy' : 'Day Pharmacy'} • ${f.hasLab247 ? '24/7 Lab' : 'Day Lab'}</td>`).join("")}
          </tr>
          <tr>
            <td class="feature-title">💳 Insurance & Cashless</td>
            ${facs.map(f => `<td>${f.supportsCashless ? '✓ Cashless TPA Helpdesk Active' : '✕ Counter Payment Only'}</td>`).join("")}
          </tr>
          <tr>
            <td class="feature-title">Action</td>
            ${facs.map(f => `
              <td>
                <button class="btn-route" onclick="app.closeComparisonModal(); app.openRouteModal('${f.id}')">
                  Navigate
                </button>
              </td>
            `).join("")}
          </tr>
        </tbody>
      </table>
    `;

    modal.classList.add("active");
  }

  closeComparisonModal(e) {
    if (e && e.target !== e.currentTarget && !e.target.classList.contains("modal-close")) return;
    document.getElementById("comparisonModal").classList.remove("active");
  }

  shareComparison() {
    const names = Array.from(this.comparedFacilities).map(id => {
      const f = FACILITIES.find(fac => fac.id === id);
      return f ? `${f.name} (₹${f.doctorFee}, ${f.opWaitTime}m wait)` : id;
    }).join(" vs ");

    navigator.clipboard?.writeText(`CareFlow Healthcare Comparison:\n${names}\nFind optimal healthcare at CareFlow.`);
    this.showToast("Comparison copied to clipboard for sharing!", "📋");
  }

  // ----------------------------------------
  // Doctors View (Requirement 10)
  // ----------------------------------------
  filterDoctors() {
    this.renderDoctors();
  }

  renderDoctors() {
    const list = document.getElementById("doctorCardsList");
    if (!list) return;

    const search = document.getElementById("doctorSearchInput")?.value.toLowerCase().trim() || "";
    const specialty = document.getElementById("doctorSpecialtyFilter")?.value || "all";
    const sort = document.getElementById("doctorSort")?.value || "recommended";
    const loc = this.currentLocation;

    let filtered = DOCTORS.filter(doc => {
      const matchesSearch = doc.name.toLowerCase().includes(search) || doc.specialty.toLowerCase().includes(search) || doc.facilityName.toLowerCase().includes(search);
      const matchesSpec = (specialty === "all") || (doc.specialty === specialty);
      return matchesSearch && matchesSpec;
    });

    filtered.sort((a, b) => {
      const facA = FACILITIES.find(f => f.id === a.facilityId);
      const facB = FACILITIES.find(f => f.id === b.facilityId);
      const distA = facA ? (facA.distances[loc] || 3) : 3;
      const distB = facB ? (facB.distances[loc] || 3) : 3;
      const travelA = facA ? (facA.travelTimes[loc] || 10) : 10;
      const travelB = facB ? (facB.travelTimes[loc] || 10) : 10;

      if (sort === "wait") return a.waitTime - b.waitTime;
      if (sort === "fee") return a.fee - b.fee;
      if (sort === "distance") return distA - distB;

      // Recommended: Door-to-doctor delay + fee
      const totalDelayA = travelA + a.waitTime + (a.fee * 0.04);
      const totalDelayB = travelB + b.waitTime + (b.fee * 0.04);
      return totalDelayA - totalDelayB;
    });

    if (filtered.length === 0) {
      list.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:50px; color:var(--text-muted);">No doctors found matching filters. Try another search or specialty.</div>`;
      return;
    }

    list.innerHTML = filtered.map(doc => {
      const fac = FACILITIES.find(f => f.id === doc.facilityId);
      const dist = fac ? (fac.distances[loc] || 2.5) : 2.5;
      const travel = fac ? (fac.travelTimes[loc] || 10) : 10;
      const totalDelay = travel + doc.waitTime;
      const initials = doc.name.split(" ").map(n => n[0]).slice(1, 3).join("");
      const isSaved = this.isDoctorSaved(doc.id);

      return `
        <div class="doctor-card">
          <div class="doctor-header">
            <div class="doc-avatar">${initials || 'MD'}</div>
            <div class="doc-info">
              <h3>${doc.name}</h3>
              <div class="doc-spec">${doc.specialty} • ${doc.experience} • ⭐ ${doc.rating}</div>
              <div class="doc-hospital">${doc.facilityName} (${dist} km away)</div>
            </div>
          </div>

          <div class="doc-status-banner ${doc.status === 'Available' ? 'available' : 'busy'}">
            <span>● ${doc.status}</span>
            <span>Next Available Slot: <strong>${doc.nextSlot}</strong></span>
          </div>

          <div class="doc-metrics-grid">
            <div class="doc-metric-item">
              <span class="doc-metric-lbl">Queue Length</span>
              <span class="doc-metric-val">${doc.patientsWaiting} Patients Waiting</span>
            </div>
            <div class="doc-metric-item">
              <span class="doc-metric-lbl">Clinic Wait</span>
              <span class="doc-metric-val">~${doc.waitTime} mins</span>
            </div>
            <div class="doc-metric-item">
              <span class="doc-metric-lbl">Estimated Travel</span>
              <span class="doc-metric-val">${travel} mins (${dist} km)</span>
            </div>
            <div class="doc-metric-item">
              <span class="doc-metric-lbl">Total Delay</span>
              <span class="doc-metric-val" style="color:var(--primary); font-weight:800;">~${totalDelay} mins door-to-consult</span>
            </div>
          </div>

          <div class="doctor-card-footer">
            <div>
              <span style="font-size:0.68rem; color:var(--text-muted);">Consultation Fee:</span>
              <div class="doc-fee">₹${doc.fee}</div>
            </div>
            <div style="display:flex; gap:6px;">
              <button class="btn-outline-small" onclick="app.toggleBookmarkDoctor('${doc.id}')" title="Save Doctor">
                ${isSaved ? '★' : '☆'}
              </button>
              <button class="btn-route" onclick="app.openRouteModal('${doc.facilityId}')">
                Route
              </button>
              <button class="btn-primary" onclick="app.generateDoctorToken('${doc.id}')">
                Get Pre-Token
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // ----------------------------------------
  // Labs & Diagnostics (Requirement 11)
  // ----------------------------------------
  quickFilterLab(query) {
    const input = document.getElementById("labSearchInput");
    if (input) input.value = query;
    this.filterLabs();
  }

  filterLabs() {
    this.renderLabs();
  }

  renderLabs() {
    const container = document.getElementById("labComparisonContainer");
    if (!container) return;

    const search = document.getElementById("labSearchInput")?.value.toLowerCase().trim() || "";
    const loc = this.currentLocation;

    const filtered = LAB_TESTS.filter(t =>
      t.name.toLowerCase().includes(search) ||
      t.category.toLowerCase().includes(search) ||
      t.description.toLowerCase().includes(search)
    );

    if (filtered.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-muted);">No lab tests match "${search}". Try CBC, Sugar, Lipid, Thyroid, LFT, or X-Ray.</div>`;
      return;
    }

    container.innerHTML = filtered.map(test => {
      // Find cheapest price & shortest wait for badges
      const minPrice = Math.min(...test.options.map(o => o.price));
      const minWait = Math.min(...test.options.map(o => o.waitTime));

      // Sort by CareFlow score (Wait * 10 + price)
      const sortedOptions = [...test.options].sort((a, b) => {
        return (a.waitTime * 10 + a.price) - (b.waitTime * 10 + b.price);
      });

      return `
        <div class="lab-test-group-card">
          <div class="test-group-header">
            <div class="test-group-title">
              <h3>${test.name}</h3>
              <div class="test-group-desc">${test.description} • Category: <strong>${test.category}</strong></div>
            </div>
          </div>

          <table class="lab-options-table">
            <thead>
              <tr>
                <th>Laboratory Facility & Proximity</th>
                <th>Price (Approx)</th>
                <th>Queue</th>
                <th>Wait Time</th>
                <th>Next Available Slot</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${sortedOptions.map(opt => {
                const fac = FACILITIES.find(f => f.id === opt.facilityId);
                const dist = fac ? (fac.distances[loc] || 2.5) : 2.5;
                const isCheapest = (opt.price === minPrice);
                const isFastest = (opt.waitTime === minWait);

                return `
                  <tr>
                    <td>
                      <div class="lab-facility-name">
                        ${opt.facilityName}
                        ${isCheapest ? '<span class="badge-cheapest">CHEAPEST</span>' : ''}
                        ${isFastest ? '<span class="badge-fastest-lab">FASTEST</span>' : ''}
                      </div>
                      <div class="lab-distance">📍 ${dist} km away • ${fac?.status || 'Open'}</div>
                    </td>
                    <td>
                      <span class="lab-price-tag">₹${opt.price}</span>
                    </td>
                    <td>
                      <strong>${opt.waiting}</strong> in queue
                    </td>
                    <td>
                      <span style="color:${opt.waitTime > 20 ? '#ef4444' : opt.waitTime > 10 ? '#f59e0b' : '#10b981'}; font-weight:700;">
                        ~${opt.waitTime} mins
                      </span>
                    </td>
                    <td>
                      <strong>${opt.slot}</strong>
                    </td>
                    <td>
                      <button class="btn-route" onclick="app.openRouteModal('${opt.facilityId}')">
                        Navigate
                      </button>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      `;
    }).join("");
  }

  // ----------------------------------------
  // Health Packages (Requirement 5 in app)
  // ----------------------------------------
  renderPackages() {
    const grid = document.getElementById("packagesGrid");
    if (!grid) return;

    grid.innerHTML = CHECKUP_PACKAGES.map(pkg => `
      <div class="package-card">
        <div class="pkg-header">
          <div>
            <h3>${pkg.name}</h3>
            <span class="pkg-meta">⏱️ Duration: ${pkg.timeRequired}</span>
          </div>
          <div class="pkg-price">₹${pkg.price}</div>
        </div>

        <div class="pkg-meta">
          <span>📅 Next Slot: <strong>${pkg.nextSlot}</strong></span> •
          <span style="color:#10b981; font-weight:700;">${pkg.availability}</span>
        </div>

        <div class="pkg-tests-list">
          <strong style="font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); margin-bottom:4px;">Tests Included:</strong>
          ${pkg.testsIncluded.map(t => `
            <div class="pkg-test-item">
              <span class="bullet">✓</span>
              <span>${t}</span>
            </div>
          `).join("")}
        </div>

        <div style="margin-top:auto; padding-top:14px; border-top:1px solid var(--border-light); display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.75rem; color:var(--text-muted);">Available at all partner centers</span>
          <button class="btn-primary" onclick="app.selectPackageForBooking('${pkg.id}')">
            Book Sample Slot
          </button>
        </div>
      </div>
    `).join("");
  }

  // ----------------------------------------
  // Medicines & Pharmacy (Requirement 12)
  // ----------------------------------------
  filterMedicines() {
    this.renderMedicines();
  }

  renderMedicines() {
    const wrapper = document.getElementById("medicinesTableWrapper");
    if (!wrapper) return;

    const search = document.getElementById("medicineSearchInput")?.value.toLowerCase().trim() || "";
    const criticalOnly = document.getElementById("chkCriticalMeds")?.checked || false;

    let filtered = MEDICINES.filter(med => {
      const matchSearch = med.name.toLowerCase().includes(search) || med.category.toLowerCase().includes(search);
      const matchCrit = criticalOnly ? med.isCritical : true;
      return matchSearch && matchCrit;
    });

    if (filtered.length === 0) {
      wrapper.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-muted);">No medicines found. Check spelling or uncheck critical only filter.</div>`;
      return;
    }

    wrapper.innerHTML = `
      <table class="meds-table">
        <thead>
          <tr>
            <th>Medicine Name & Classification</th>
            <th>Stock Status</th>
            <th>Approx Tariff</th>
            <th>Hospital Pharmacy Stock Breakdown</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map(med => `
            <tr>
              <td>
                <div style="font-weight:800; color:#0f172a; font-size:0.92rem;">
                  ${med.name}
                  ${med.isCritical ? '<span class="med-badge-critical">CRITICAL LIFE SUPPORT</span>' : ''}
                </div>
                <div style="font-size:0.75rem; color:var(--text-muted);">${med.category}</div>
              </td>
              <td>
                <span class="stock-tag ${med.stockStatus.includes('Available') ? 'in-stock' : med.stockStatus.includes('Low') ? 'low-stock' : 'out-of-stock'}">
                  ● ${med.stockStatus}
                </span>
              </td>
              <td>
                <span style="font-family:var(--font-mono); font-weight:700;">${med.approxPrice}</span>
              </td>
              <td>
                <div style="display:flex; flex-direction:column; gap:4px; font-size:0.78rem;">
                  ${med.pharmacies.map(p => `
                    <div style="display:flex; justify-content:space-between; gap:10px; background:#f8fafc; padding:4px 8px; border-radius:4px;">
                      <span>${p.facilityName} (${p.open247 ? '24/7' : 'Till 10 PM'}):</span>
                      <strong>${p.stock} • ${p.price}</strong>
                    </div>
                  `).join("")}
                </div>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }

  // ----------------------------------------
  // Blood Bank Availability (Requirement 13)
  // ----------------------------------------
  selectBloodGroup(grp) {
    this.selectedBloodGroup = grp;
    document.querySelectorAll(".btn-blood").forEach(b => {
      b.classList.toggle("active", b.innerText.trim().startsWith(grp));
    });
    this.renderBloodBanks();
  }

  decrementBloodUnit() {
    if (this.selectedBloodUnits > 1) {
      this.selectedBloodUnits--;
      document.getElementById("selectedBloodUnits").innerText = `${this.selectedBloodUnits} Unit${this.selectedBloodUnits > 1 ? 's' : ''}`;
      this.renderBloodBanks();
    }
  }

  incrementBloodUnit() {
    if (this.selectedBloodUnits < 6) {
      this.selectedBloodUnits++;
      document.getElementById("selectedBloodUnits").innerText = `${this.selectedBloodUnits} Unit${this.selectedBloodUnits > 1 ? 's' : ''}`;
      this.renderBloodBanks();
    }
  }

  renderBloodBanks() {
    const grid = document.getElementById("bloodBanksGrid");
    const summaryBar = document.getElementById("bloodStatusSummaryBar");
    if (!grid) return;

    const grp = this.selectedBloodGroup;
    const req = this.selectedBloodUnits;
    const loc = this.currentLocation;

    // Calculate total units in region
    const totalUnitsInRegion = BLOOD_BANKS.reduce((acc, bb) => acc + (bb.stocks[grp] || 0), 0);
    const facilitiesWithStock = BLOOD_BANKS.filter(bb => (bb.stocks[grp] || 0) >= req).length;

    if (summaryBar) {
      summaryBar.innerHTML = `
        <div>
          <span>Regional Availability for <strong>${grp}</strong>: </span>
          <strong style="color:${totalUnitsInRegion > 10 ? '#10b981' : totalUnitsInRegion > 3 ? '#f59e0b' : '#ef4444'};">
            ${totalUnitsInRegion} Units Available Across ${facilitiesWithStock} Facilities
          </strong>
        </div>
        <div style="font-size:0.75rem;">
          <span class="badge-disclaimer">SIMULATED BUFFER</span> Real-time cross-match verification required on site
        </div>
      `;
    }

    grid.innerHTML = BLOOD_BANKS.map(bb => {
      const fac = FACILITIES.find(f => f.id === bb.facilityId);
      const dist = fac ? (fac.distances[loc] || 3.0) : 3.0;
      const travel = fac ? (fac.travelTimes[loc] || 12) : 12;
      const count = bb.stocks[grp] || 0;
      const isSufficient = count >= req;

      return `
        <div class="blood-bank-card">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
            <div>
              <h3 style="font-size:1.15rem; font-weight:800; color:#0f172a;">${bb.name}</h3>
              <div style="font-size:0.78rem; color:var(--text-muted);">${bb.status}</div>
            </div>
            <span class="stock-tag ${count > 5 ? 'in-stock' : count > 0 ? 'low-stock' : 'out-of-stock'}">
              ${count} units of ${grp}
            </span>
          </div>

          <div class="fac-stats-row" style="margin-bottom:14px;">
            <div class="fac-stat">
              <span class="fac-stat-label">Blood Group</span>
              <span class="fac-stat-val" style="color:#dc2626;">${grp}</span>
            </div>
            <div class="fac-stat">
              <span class="fac-stat-label">Transit Distance</span>
              <span class="fac-stat-val">${dist} km</span>
            </div>
            <div class="fac-stat">
              <span class="fac-stat-label">Dispatch Time</span>
              <span class="fac-stat-val">~${travel} mins</span>
            </div>
          </div>

          <div style="background:#f8fafc; padding:10px; border-radius:var(--radius-sm); font-size:0.8rem; margin-bottom:14px; border:1px solid var(--border-light);">
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
              <span>Sample & Testing Tariff:</span>
              <strong>${bb.processingCharge}</strong>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span>Req. Units Fulfillment:</span>
              <strong style="color:${isSufficient ? '#10b981' : '#dc2626'}">
                ${isSufficient ? '✓ Sufficient Stock in Buffer' : '⚠️ Partial Buffer / Replacement Requisition'}
              </strong>
            </div>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:12px; border-top:1px solid var(--border-light); gap:8px;">
            <button class="btn-route" onclick="app.openRouteModal('${bb.facilityId}')">
              Route
            </button>
            <button class="btn-primary" onclick="app.reserveBloodUnits('${bb.name}', '${grp}', ${req})">
              Reserve Units (Simulated)
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  reserveBloodUnits(centerName, grp, units) {
    this.showToast(`Simulated Buffer Hold reserved for ${units} unit(s) of ${grp} at ${centerName}`, "🩸");
  }

  // ----------------------------------------
  // Bill & Payment Estimator (Requirement 14)
  // ----------------------------------------
  updateEstimator() {
    const facSelect = document.getElementById("estimatorFacility");
    const facId = facSelect ? facSelect.value : "fac-1";
    const fac = FACILITIES.find(f => f.id === facId) || FACILITIES[0];

    const facBadge = document.getElementById("estFacilityBadge");
    if (facBadge) facBadge.innerText = `${fac.name} (${fac.type})`;

    let total = 0;
    const items = [];

    // Consultation
    const consultRadio = document.querySelector('input[name="estConsultation"]:checked');
    const consultVal = consultRadio ? parseInt(consultRadio.value) : 0;
    if (consultVal > 0) {
      items.push({ name: `Doctor Consultation (${consultVal === 400 ? 'General Medicine' : 'Specialist'})`, price: consultVal });
      total += consultVal;
    }

    // Diagnostic tests
    document.querySelectorAll('#estTestsList input[type="checkbox"]:checked').forEach(chk => {
      const price = parseInt(chk.value);
      const name = chk.dataset.name;
      items.push({ name, price });
      total += price;
    });

    // Registration fee
    const chkReg = document.getElementById("estRegFee");
    if (chkReg && chkReg.checked) {
      const regFee = fac.registrationFee || 50;
      items.push({ name: "Hospital Registration & Digital Card", price: regFee });
      total += regFee;
    }

    // Nursing fee
    const chkNursing = document.getElementById("estNursingFee");
    if (chkNursing && chkNursing.checked) {
      items.push({ name: "Nursing Vitals & Triage Assessment", price: 100 });
      total += 100;
    }

    // Medication kit
    const chkMed = document.getElementById("estMedKit");
    if (chkMed && chkMed.checked) {
      items.push({ name: "Essential OP Medication Kit", price: 180 });
      total += 180;
    }

    // Render items
    const listContainer = document.getElementById("estimatorItemsList");
    if (listContainer) {
      listContainer.innerHTML = items.map(item => `
        <div class="invoice-item-row">
          <span class="invoice-item-name">${item.name}</span>
          <span class="invoice-item-price">₹${item.price}</span>
        </div>
      `).join("");
    }

    // Total
    const totalEl = document.getElementById("estimatorTotalAmount");
    if (totalEl) totalEl.innerText = `₹${total}`;

    // Facility payment support matrix
    const matrixEl = document.getElementById("estSupportMatrix");
    if (matrixEl) {
      matrixEl.innerHTML = `
        <div class="matrix-item ${fac.supportsOnlinePay ? 'supported' : ''}">
          <span class="check-icon">${fac.supportsOnlinePay ? '✓' : '✕'}</span>
          <span>Online Pre-Payment ${fac.supportsOnlinePay ? 'Supported (UPI/Card)' : 'Not Available (Pay at Counter)'}</span>
        </div>
        <div class="matrix-item supported">
          <span class="check-icon">✓</span>
          <span>Physical Counter Payment Accepted (Cash/POS)</span>
        </div>
        <div class="matrix-item ${fac.supportsCashless ? 'supported' : ''}">
          <span class="check-icon">${fac.supportsCashless ? '✓' : '✕'}</span>
          <span>Cashless Insurance TPA Helpdesk ${fac.supportsCashless ? 'Active (Pre-authorization Desk)' : 'Not Supported at this Clinic'}</span>
        </div>
      `;
    }
  }

  quickSelectForBill(facId) {
    this.switchView("estimator");
    const select = document.getElementById("estimatorFacility");
    if (select) {
      select.value = facId;
      this.updateEstimator();
    }
  }

  copyBillEstimate() {
    const total = document.getElementById("estimatorTotalAmount")?.innerText || "₹700";
    const facBadge = document.getElementById("estFacilityBadge")?.innerText || "CareFlow Facility";
    navigator.clipboard?.writeText(`CareFlow Healthcare Out-of-Pocket Estimate:\nFacility: ${facBadge}\nEstimated Out-of-Pocket Total: ${total}\nGenerated via CareFlow AI.`);
    this.showToast("Bill estimate copied to clipboard!", "📋");
  }

  showBookingTokenModal() {
    const modal = document.getElementById("bookingModal");
    const body = document.getElementById("bookingModalBody");
    const total = document.getElementById("estimatorTotalAmount")?.innerText || "₹700";
    const facSelect = document.getElementById("estimatorFacility");
    const facName = facSelect ? facSelect.options[facSelect.selectedIndex].text : "CareFlow Metro Hospital";
    const tokenNo = "CF-" + Math.floor(1000 + Math.random() * 9000);

    body.innerHTML = `
      <div style="text-align:center; padding:10px 0 20px 0; border-bottom:1px solid var(--border-light); margin-bottom:16px;">
        <span class="badge-disclaimer">SIMULATED VISIT PASS</span>
        <div style="font-size:2.2rem; font-weight:800; font-family:var(--font-mono); color:#0284c7; margin:8px 0;">
          TOKEN #${tokenNo}
        </div>
        <p style="font-size:0.85rem; color:var(--text-muted);">Present this token at the reception/kiosk upon arrival</p>
      </div>

      <div style="background:#f8fafc; padding:16px; border-radius:var(--radius-md); font-size:0.88rem; margin-bottom:16px; border:1px solid var(--border-light);">
        <div style="margin-bottom:8px;"><strong>Facility:</strong> ${facName}</div>
        <div style="margin-bottom:8px;"><strong>Estimated Payable at Counter:</strong> <span style="font-weight:800; color:#0284c7;">${total}</span></div>
        <div style="margin-bottom:8px;"><strong>Estimated Queue Clearance:</strong> ~12 mins from arrival</div>
        <div><strong>Accepted Payment:</strong> UPI (PhonePe/GPay), Cards, Cash, TPA Insurance</div>
      </div>

      <div style="font-size:0.75rem; color:var(--text-muted); line-height:1.5;">
        * Notice: This is a prototype reservation pass. Actual hospital queue prioritization may adjust based on medical emergency cases.
      </div>
    `;

    modal.classList.add("active");
  }

  closeBookingModal(e) {
    if (e && e.target !== e.currentTarget && !e.target.classList.contains("modal-close")) return;
    document.getElementById("bookingModal").classList.remove("active");
  }

  // ----------------------------------------
  // Emergency Coordination Center (Requirement 9)
  // ----------------------------------------
  renderEmergencyCenter() {
    const loc = this.currentLocation;

    // Filter only emergency-capable hospitals
    const erHospitals = FACILITIES.filter(f => f.isEmergencyReady);

    // Emergency Smart Recommendation (Prioritizes Trauma Readiness + Shortest ETA)
    let bestEr = erHospitals[0];
    let minDelay = 999;
    erHospitals.forEach(h => {
      const travel = h.travelTimes[loc] || 15;
      const wait = h.emergencyWaitTime || 0;
      const total = travel + wait;
      if (total < minDelay) {
        minDelay = total;
        bestEr = h;
      }
    });

    // Populate recommendation banner
    const recContent = document.getElementById("erRecContent");
    if (recContent && bestEr) {
      const travel = bestEr.travelTimes[loc] || 10;
      const dist = bestEr.distances[loc] || 2.4;

      recContent.innerHTML = `
        <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:16px;">
          <div>
            <h3 style="font-size:1.4rem; font-weight:800; color:#ffffff;">${bestEr.name}</h3>
            <div style="font-size:0.85rem; color:#d4d4d8; margin-top:2px;">
              ${bestEr.type} • 🚨 Trauma Level 1 Ready • <strong>${bestEr.emergencyBeds} Resuscitation Beds Free</strong>
            </div>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="btn-primary" style="background:#ef4444; border:none; padding:10px 18px;" onclick="app.openRouteModal('${bestEr.id}')">
              🚨 START GPS NAVIGATION (${travel} min)
            </button>
          </div>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:14px;">
          <span class="er-tag-urgent">FASTEST LIFE-SAVING TRANSIT: ${travel} MINS</span>
          <span class="er-tag-avail">ICU VENTILATORS: ${bestEr.icuBeds} AVAILABLE</span>
          <span class="er-tag-avail">O- UNIVERSAL BLOOD: BUFFER VERIFIED</span>
          <span style="font-size:0.8rem; color:#a1a1aa; align-self:center;">📍 Distance: ${dist} km</span>
        </div>
      `;
    }

    // Pillar 1: Hospital List
    const hospList = document.getElementById("erHospitalList");
    if (hospList) {
      hospList.innerHTML = erHospitals.map(h => {
        const dist = h.distances[loc] || 3.0;
        const travel = h.travelTimes[loc] || 12;

        return `
          <div class="er-item-row">
            <div class="er-item-top">
              <span class="er-item-title">${h.name}</span>
              <span class="er-tag-urgent">${travel} MIN ETA</span>
            </div>
            <div style="font-size:0.75rem; color:#a1a1aa;">
              ${dist} km • Crowd: ${h.crowdLevel} • ER Wait: <strong>${h.emergencyWaitTime === 0 ? 'ZERO (Immediate Triage)' : `${h.emergencyWaitTime} min`}</strong>
            </div>
            <div style="font-size:0.72rem; color:#34d399;">
              ✓ ${h.emergencyBeds} Resuscitation Beds • ${h.icuBeds} ICU Beds Available
            </div>
            <button class="btn-route" style="background:#3f3f46; color:#ffffff; border:none; margin-top:4px;" onclick="app.openRouteModal('${h.id}')">
              Route (${dist} km)
            </button>
          </div>
        `;
      }).join("");
    }

    // Pillar 2: Ambulances
    const ambList = document.getElementById("erAmbulanceList");
    if (ambList) {
      ambList.innerHTML = AMBULANCES.map(a => `
        <div class="er-item-row">
          <div class="er-item-top">
            <span class="er-item-title">${a.name}</span>
            <span class="${a.status === 'Available' ? 'er-tag-avail' : 'er-tag-urgent'}">${a.status}</span>
          </div>
          <div style="font-size:0.78rem; color:#e4e4e7;">${a.type} • ${a.features}</div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;">
            <span style="font-size:0.78rem; color:#cbd5e1;">📍 ${a.distance} • <strong>ETA: ${a.eta}</strong></span>
            <button class="btn-sos-call" style="padding:4px 10px; font-size:0.72rem;" onclick="app.requestAmbulanceModal()">
              DISPATCH
            </button>
          </div>
        </div>
      `).join("");
    }

    // Pillar 3: Resources
    const resList = document.getElementById("erResourcesList");
    if (resList) {
      resList.innerHTML = `
        <div class="er-item-row">
          <div class="er-item-top">
            <span class="er-item-title">O-Negative Universal Blood</span>
            <span class="er-tag-avail">6 Units Ready</span>
          </div>
          <div style="font-size:0.75rem; color:#a1a1aa;">
            Emergency transfusion buffer active at Metro & St. Jude blood banks.
          </div>
        </div>

        <div class="er-item-row">
          <div class="er-item-top">
            <span class="er-item-title">Epinephrine & Atropine Stock</span>
            <span class="er-tag-avail">Adequate Buffer</span>
          </div>
          <div style="font-size:0.75rem; color:#a1a1aa;">
            Available in all 3 Level-1 Trauma casualty wards.
          </div>
        </div>

        <div class="er-item-row">
          <div class="er-item-top">
            <span class="er-item-title">On-Duty Trauma Surgeon</span>
            <span class="er-tag-avail">Active On-Site</span>
          </div>
          <div style="font-size:0.75rem; color:#a1a1aa;">
            CareFlow Metro Trauma Bay 1 & St. Jude ER.
          </div>
        </div>

        <div class="er-item-row">
          <div class="er-item-top">
            <span class="er-item-title">Ventilator Support Capacity</span>
            <span class="er-tag-avail">13 ICU Units</span>
          </div>
          <div style="font-size:0.75rem; color:#a1a1aa;">
            Real-time oxygen pipeline pressure normal (4.2 bar).
          </div>
        </div>
      `;
    }
  }

  // ----------------------------------------
  // AI Hub & Delay Prediction (Requirement 10 in app)
  // ----------------------------------------
  renderAiHub() {
    const list = document.getElementById("aiDelayCompList");
    if (!list) return;

    const loc = this.currentLocation;

    list.innerHTML = FACILITIES.map(f => {
      const travel = f.travelTimes[loc] || 10;
      const wait = f.opWaitTime;
      const total = travel + wait;

      return `
        <div class="delay-row">
          <div>
            <strong>${f.name}</strong>
            <div class="delay-breakdown">
              <span>🚗 Travel: ${travel}m</span> + <span>⏱️ Queue: ${wait}m</span>
            </div>
          </div>
          <div style="text-align:right;">
            <span style="font-family:var(--font-mono); font-size:1.1rem; font-weight:800; color:#0284c7;">
              ${total} min
            </span>
            <div style="font-size:0.7rem; color:var(--text-muted);">Door-to-Doctor</div>
          </div>
        </div>
      `;
    }).join("");
  }

  // ----------------------------------------
  // Route Modal & Map Simulation (Requirement 8)
  // ----------------------------------------
  openRouteModal(facId) {
    const fac = FACILITIES.find(f => f.id === facId) || FACILITIES[0];
    this.currentRouteFacility = fac;

    const loc = this.currentLocation;
    const dist = fac.distances[loc] || 2.8;
    const travel = fac.travelTimes[loc] || 12;

    document.getElementById("modalRouteHospitalName").innerText = `Route to ${fac.name}`;
    const hospLabel = document.getElementById("svgHospitalLabel");
    if (hospLabel) hospLabel.textContent = fac.name.split(" ")[0] + " Hosp";

    const userLabel = document.getElementById("svgUserPinLabel");
    if (userLabel) userLabel.textContent = `You (${LOCATIONS[loc].name.split(",")[0]})`;

    document.getElementById("modalMapEtaBadge").innerText = `🚗 ${travel} min (${dist} km)`;
    document.getElementById("modalFastestTime").innerText = `${travel} mins`;
    document.getElementById("modalFastestDist").innerText = `${dist} km`;
    document.getElementById("modalAltTime").innerText = `${travel + 7} mins`;

    // Google Maps external link
    const mapsBtn = document.getElementById("btnExternalGoogleMaps");
    if (mapsBtn) {
      mapsBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fac.name + " " + fac.address)}`;
    }

    // Modal navigation steps
    const stepsList = document.getElementById("modalRouteSteps");
    if (stepsList) {
      stepsList.innerHTML = `
        <li>Head toward main road from ${LOCATIONS[loc].name} (300m)</li>
        <li>Take the express lane via Inner Ring Road (${(dist * 0.6).toFixed(1)} km)</li>
        <li>Bypass Market Junction flyover (Clear traffic flow)</li>
        <li>Turn right at ${fac.address.split(',')[0]} (400m)</li>
        <li>Arrive at <strong>${fac.name}</strong> — Dedicated Emergency & Outpatient Parking available</li>
      `;
    }

    document.getElementById("routeModal").classList.add("active");
  }

  closeRouteModal(e) {
    if (e && e.target !== e.currentTarget && !e.target.classList.contains("modal-close")) return;
    document.getElementById("routeModal").classList.remove("active");
  }

  // ----------------------------------------
  // Helper Token Generator
  // ----------------------------------------
  generateDoctorToken(docId) {
    const doc = DOCTORS.find(d => d.id === docId);
    if (!doc) return;

    const modal = document.getElementById("bookingModal");
    const body = document.getElementById("bookingModalBody");
    const tokenNo = "OP-" + Math.floor(100 + Math.random() * 900);

    // Save token to saved list
    this.addSavedToken({
      type: "Doctor Consultation",
      title: `${doc.name} (${doc.specialty})`,
      facility: doc.facilityName,
      token: tokenNo,
      slot: doc.nextSlot,
      fee: `₹${doc.fee}`
    });

    body.innerHTML = `
      <div style="text-align:center; padding:10px 0 20px 0; border-bottom:1px solid var(--border-light); margin-bottom:16px;">
        <span class="badge-disclaimer">SIMULATED DOCTOR QUEUE PASS</span>
        <div style="font-size:2.2rem; font-weight:800; font-family:var(--font-mono); color:#0284c7; margin:8px 0;">
          OP TOKEN #${tokenNo}
        </div>
        <p style="font-size:0.85rem; color:var(--text-muted);">Reserved for ${doc.name}</p>
      </div>

      <div style="background:#f8fafc; padding:16px; border-radius:var(--radius-md); font-size:0.88rem; margin-bottom:16px; border:1px solid var(--border-light);">
        <div style="margin-bottom:8px;"><strong>Doctor:</strong> ${doc.name} (${doc.specialty})</div>
        <div style="margin-bottom:8px;"><strong>Hospital:</strong> ${doc.facilityName}</div>
        <div style="margin-bottom:8px;"><strong>Estimated Consultation Slot:</strong> ${doc.nextSlot}</div>
        <div style="margin-bottom:8px;"><strong>Estimated Queue Ahead:</strong> ${doc.patientsWaiting} Patients (~${doc.waitTime} mins)</div>
        <div><strong>Consultation Fee:</strong> ₹${doc.fee} (Payable at counter or via UPI)</div>
      </div>

      <div style="font-size:0.75rem; color:var(--text-muted); line-height:1.5;">
        * Notice: Simulated prototype pass. Please show this screen at reception to enter the physical consultation queue.
      </div>
    `;

    modal.classList.add("active");
  }

  selectPackageForBooking(pkgId) {
    const pkg = CHECKUP_PACKAGES.find(p => p.id === pkgId);
    if (!pkg) return;

    const modal = document.getElementById("bookingModal");
    const body = document.getElementById("bookingModalBody");
    const tokenNo = "CHK-" + Math.floor(100 + Math.random() * 900);

    body.innerHTML = `
      <div style="text-align:center; padding:10px 0 20px 0; border-bottom:1px solid var(--border-light); margin-bottom:16px;">
        <span class="badge-disclaimer">SIMULATED PACKAGE REGISTRATION</span>
        <div style="font-size:2.2rem; font-weight:800; font-family:var(--font-mono); color:#0d9488; margin:8px 0;">
          TOKEN #${tokenNo}
        </div>
        <p style="font-size:0.85rem; color:var(--text-muted);">${pkg.name}</p>
      </div>

      <div style="background:#f8fafc; padding:16px; border-radius:var(--radius-md); font-size:0.88rem; margin-bottom:16px; border:1px solid var(--border-light);">
        <div style="margin-bottom:8px;"><strong>Package:</strong> ${pkg.name}</div>
        <div style="margin-bottom:8px;"><strong>Total Price:</strong> <span style="font-weight:800; color:#0d9488;">₹${pkg.price}</span></div>
        <div style="margin-bottom:8px;"><strong>Fast:</strong> 10-12 hours fasting recommended for lipid/glucose profile</div>
        <div style="margin-bottom:8px;"><strong>Sample Collection Slot:</strong> ${pkg.nextSlot}</div>
        <div><strong>Time Required:</strong> ~${pkg.timeRequired}</div>
      </div>
    `;

    modal.classList.add("active");
  }

  // ----------------------------------------
  // Bookmarking / Saved Functionality (Req 16)
  // ----------------------------------------
  loadSavedItems() {
    try {
      const data = localStorage.getItem("careflow_saved");
      return data ? JSON.parse(data) : { facilities: [], doctors: [], tokens: [] };
    } catch (e) {
      return { facilities: [], doctors: [], tokens: [] };
    }
  }

  saveSavedItems() {
    try {
      localStorage.setItem("careflow_saved", JSON.stringify(this.savedItems));
      this.updateSavedBadge();
    } catch (e) {}
  }

  isFacilitySaved(facId) {
    return this.savedItems.facilities.includes(facId);
  }

  isDoctorSaved(docId) {
    return this.savedItems.doctors.includes(docId);
  }

  toggleBookmarkFacility(facId) {
    if (this.isFacilitySaved(facId)) {
      this.savedItems.facilities = this.savedItems.facilities.filter(id => id !== facId);
      this.showToast("Facility removed from bookmarks", "ℹ️");
    } else {
      this.savedItems.facilities.push(facId);
      this.showToast("Facility bookmarked successfully", "★");
    }
    this.saveSavedItems();
    this.renderHomeSmartRec();
    this.renderFacilities();
  }

  toggleBookmarkDoctor(docId) {
    if (this.isDoctorSaved(docId)) {
      this.savedItems.doctors = this.savedItems.doctors.filter(id => id !== docId);
      this.showToast("Doctor removed from bookmarks", "ℹ️");
    } else {
      this.savedItems.doctors.push(docId);
      this.showToast("Doctor bookmarked successfully", "★");
    }
    this.saveSavedItems();
    this.renderDoctors();
  }

  addSavedToken(tokenObj) {
    this.savedItems.tokens.unshift(tokenObj);
    if (this.savedItems.tokens.length > 5) this.savedItems.tokens.pop();
    this.saveSavedItems();
  }

  updateSavedBadge() {
    const badge = document.getElementById("savedCountBadge");
    if (!badge) return;
    const total = (this.savedItems.facilities?.length || 0) + (this.savedItems.doctors?.length || 0) + (this.savedItems.tokens?.length || 0);
    badge.innerText = total;
  }

  openSavedModal() {
    const modal = document.getElementById("savedModal");
    const body = document.getElementById("savedModalBody");
    if (!modal || !body) return;

    const facs = this.savedItems.facilities.map(id => FACILITIES.find(f => f.id === id)).filter(Boolean);
    const docs = this.savedItems.doctors.map(id => DOCTORS.find(d => d.id === id)).filter(Boolean);
    const tokens = this.savedItems.tokens || [];

    if (facs.length === 0 && docs.length === 0 && tokens.length === 0) {
      body.innerHTML = `<div style="text-align:center; padding:30px; color:var(--text-muted);">No saved items yet. Bookmark facilities, doctors, or generate queue tokens to view them here.</div>`;
    } else {
      body.innerHTML = `
        ${tokens.length > 0 ? `
          <h4 style="font-size:0.85rem; font-weight:800; color:var(--primary); margin-bottom:8px;">Active Queue Passes & Tokens:</h4>
          <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
            ${tokens.map(t => `
              <div style="background:#f0f9ff; border:1px solid #bae6fd; padding:10px 14px; border-radius:var(--radius-sm); font-size:0.82rem;">
                <div style="display:flex; justify-content:space-between; font-weight:800; color:#0369a1;">
                  <span>${t.title}</span>
                  <span>${t.token}</span>
                </div>
                <div style="color:var(--text-muted); margin-top:2px;">${t.facility} • Slot: ${t.slot} • ${t.fee}</div>
              </div>
            `).join("")}
          </div>
        ` : ''}

        ${facs.length > 0 ? `
          <h4 style="font-size:0.85rem; font-weight:800; margin-bottom:8px;">Saved Hospitals:</h4>
          <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
            ${facs.map(f => `
              <div style="background:#f8fafc; border:1px solid var(--border-light); padding:10px 14px; border-radius:var(--radius-sm); display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong>${f.name}</strong>
                  <div style="font-size:0.75rem; color:var(--text-muted);">${f.type} • Fee: ₹${f.doctorFee}</div>
                </div>
                <button class="btn-route" onclick="app.closeSavedModal(); app.openRouteModal('${f.id}')">Route</button>
              </div>
            `).join("")}
          </div>
        ` : ''}

        ${docs.length > 0 ? `
          <h4 style="font-size:0.85rem; font-weight:800; margin-bottom:8px;">Saved Doctors:</h4>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${docs.map(d => `
              <div style="background:#f8fafc; border:1px solid var(--border-light); padding:10px 14px; border-radius:var(--radius-sm); display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong>${d.name}</strong> (${d.specialty})
                  <div style="font-size:0.75rem; color:var(--text-muted);">${d.facilityName} • ₹${d.fee}</div>
                </div>
                <button class="btn-primary" onclick="app.closeSavedModal(); app.generateDoctorToken('${d.id}')">Pass</button>
              </div>
            `).join("")}
          </div>
        ` : ''}
      `;
    }

    modal.classList.add("active");
  }

  closeSavedModal(e) {
    if (e && e.target !== e.currentTarget && !e.target.classList.contains("modal-close")) return;
    document.getElementById("savedModal").classList.remove("active");
  }

  clearSavedItems() {
    this.savedItems = { facilities: [], doctors: [], tokens: [] };
    this.saveSavedItems();
    this.openSavedModal();
    this.renderFacilities();
    this.renderDoctors();
    this.showToast("All saved bookmarks and passes cleared", "✕");
  }

  // ----------------------------------------
  // Global & Header Search (Requirement 3)
  // ----------------------------------------
  handleGlobalSearch(e) {
    if (e.key === "Enter") {
      this.executeGlobalSearch();
    }
  }

  handleHeaderSearch(e) {
    if (e.key === "Enter") {
      const q = document.getElementById("headerSearchInput")?.value;
      if (q) {
        document.getElementById("globalSearchInput").value = q;
        this.executeGlobalSearch();
      }
    }
  }

  applySearchSuggestion(sugg) {
    const input = document.getElementById("globalSearchInput");
    if (input) input.value = sugg;
    this.executeGlobalSearch();
  }

  executeGlobalSearch() {
    const input = document.getElementById("globalSearchInput");
    const query = input?.value.trim().toLowerCase();
    if (!query) return;

    // Check doctors
    const matchDoc = DOCTORS.some(d => d.name.toLowerCase().includes(query) || d.specialty.toLowerCase().includes(query));
    if (matchDoc) {
      this.switchView("doctors");
      const docInput = document.getElementById("doctorSearchInput");
      if (docInput) {
        docInput.value = query;
        this.filterDoctors();
      }
      return;
    }

    // Check labs
    const matchLab = LAB_TESTS.some(t => t.name.toLowerCase().includes(query) || t.category.toLowerCase().includes(query));
    if (matchLab) {
      this.switchView("labs");
      this.quickFilterLab(query);
      return;
    }

    // Check medicines
    const matchMed = MEDICINES.some(m => m.name.toLowerCase().includes(query));
    if (matchMed || query.includes("pharmacy") || query.includes("medicine")) {
      this.switchView("medicines");
      const medInput = document.getElementById("medicineSearchInput");
      if (medInput && !query.includes("pharmacy") && !query.includes("medicine")) {
        medInput.value = query;
        this.filterMedicines();
      }
      return;
    }

    // Check blood
    if (query.includes("blood") || query.includes("o+") || query.includes("o-") || query.includes("a+") || query.includes("b+")) {
      this.switchView("blood");
      if (query.includes("o-")) this.selectBloodGroup("O-");
      else if (query.includes("o+")) this.selectBloodGroup("O+");
      return;
    }

    // Check emergency
    if (query.includes("emergency") || query.includes("icu") || query.includes("ambulance") || query.includes("trauma")) {
      this.toggleEmergencyMode(true);
      return;
    }

    // Otherwise facilities
    this.switchView("facilities");
  }

  // ----------------------------------------
  // Background Live Simulation Engine
  // ----------------------------------------
  startLiveSimulationTicks() {
    setInterval(() => {
      // Pick random doctor and vary waiting queue
      const randomDoc = DOCTORS[Math.floor(Math.random() * DOCTORS.length)];
      if (randomDoc) {
        const delta = Math.random() > 0.5 ? 1 : -1;
        randomDoc.patientsWaiting = Math.max(1, randomDoc.patientsWaiting + delta);
        randomDoc.waitTime = Math.max(3, Math.round(randomDoc.patientsWaiting * 3.5));
      }

      // Pick random facility crowd
      const randomFac = FACILITIES[Math.floor(Math.random() * FACILITIES.length)];
      if (randomFac) {
        const deltaCrowd = (Math.random() - 0.5) * 4;
        randomFac.crowdPercentage = Math.min(95, Math.max(15, Math.round(randomFac.crowdPercentage + deltaCrowd)));
      }

      // If active on certain views, refresh silently
      if (document.getElementById("view-doctors")?.classList.contains("active")) {
        this.renderDoctors();
      }
      if (document.getElementById("view-facilities")?.classList.contains("active")) {
        this.renderFacilities();
      }
    }, 12000);
  }
}

// Instantiate global app instance
const app = new CareFlowApp();
