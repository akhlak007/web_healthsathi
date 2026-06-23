import type { RawCaseStudy } from "@/types/research";

export const rawResearchCases: RawCaseStudy[] = [
  {
    id: "case-cardio-001",
    title: "Hypertension adherence after mobile reminders",
    category: "Cardiology",
    featured: true,
    patientName: "[redacted patient]",
    phoneNumber: "[redacted phone]",
    address: "[redacted address]",
    nationalId: "[redacted national id]",
    age: 54,
    symptoms: ["Headache", "Elevated blood pressure", "Fatigue"],
    diagnosis: "Stage 2 hypertension with inconsistent medication adherence",
    clinicalFindings: [
      "Blood pressure readings improved after reminder-based adherence support",
      "Follow-up notes showed fewer missed doses across the observation window"
    ],
    outcomeMetrics: ["Average systolic pressure reduced by 14 mmHg", "Medication adherence increased to 88%"],
    tags: ["hypertension", "reminders", "adherence", "mobile health"]
  },
  {
    id: "case-peds-002",
    title: "Family profile continuity for pediatric asthma",
    category: "Pediatrics",
    featured: true,
    patientName: "[redacted patient]",
    phoneNumber: "[redacted phone]",
    address: "[redacted address]",
    nationalId: "[redacted national id]",
    age: 8,
    symptoms: ["Wheezing", "Night cough", "Exercise intolerance"],
    diagnosis: "Mild persistent asthma requiring family-managed follow-up",
    clinicalFindings: [
      "Caregiver reminders improved inhaler schedule consistency",
      "Family profile notes helped preserve symptom history across visits"
    ],
    outcomeMetrics: ["Night cough frequency decreased by 42%", "Emergency visit risk flagged earlier"],
    tags: ["asthma", "family profile", "pediatrics", "continuity"]
  },
  {
    id: "case-neuro-003",
    title: "Referral readiness for recurrent migraine symptoms",
    category: "Neurology",
    featured: false,
    patientName: "[redacted patient]",
    phoneNumber: "[redacted phone]",
    address: "[redacted address]",
    nationalId: "[redacted national id]",
    age: 36,
    symptoms: ["Photophobia", "Nausea", "Unilateral headache"],
    diagnosis: "Recurrent migraine pattern requiring neurological review",
    clinicalFindings: [
      "Symptom timeline improved referral quality",
      "Medication history helped identify potential trigger windows"
    ],
    outcomeMetrics: ["Referral packet prepared with 6 weeks of symptom logs", "Trigger documentation completeness reached 91%"],
    tags: ["migraine", "referral", "symptom tracking", "neurology"]
  },
  {
    id: "case-onco-004",
    title: "Diagnostic timeline tracking during oncology follow-up",
    category: "Oncology",
    featured: false,
    patientName: "[redacted patient]",
    phoneNumber: "[redacted phone]",
    address: "[redacted address]",
    nationalId: "[redacted national id]",
    age: 49,
    symptoms: ["Weight loss", "Persistent fatigue", "Abnormal lab trend"],
    diagnosis: "Oncology follow-up requiring structured diagnostic continuity",
    clinicalFindings: [
      "Report consolidation reduced missing-file incidents",
      "Follow-up schedule reminders improved appointment preparedness"
    ],
    outcomeMetrics: ["Report retrieval time reduced by 63%", "Follow-up adherence improved across two cycles"],
    tags: ["oncology", "diagnostics", "follow-up", "records"]
  },
  {
    id: "case-epi-005",
    title: "Aggregate fever pattern monitoring for local insights",
    category: "Epidemiology",
    featured: true,
    patientName: "[redacted patient]",
    phoneNumber: "[redacted phone]",
    address: "[redacted address]",
    nationalId: "[redacted national id]",
    age: 27,
    symptoms: ["Fever", "Body ache", "Rash"],
    diagnosis: "Acute febrile illness pattern suitable for aggregate trend review",
    clinicalFindings: [
      "Anonymized symptom clusters supported local trend analysis",
      "Location-specific identifiers were removed before research display"
    ],
    outcomeMetrics: ["Cluster reviewed across anonymized cases", "Personal identifiers removed before educational use"],
    tags: ["epidemiology", "aggregate data", "fever", "public health"]
  }
];
