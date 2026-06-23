export type RawCaseStudy = {
  id: string;
  title: string;
  category: string;
  featured: boolean;
  patientName: string;
  phoneNumber: string;
  address: string;
  nationalId: string;
  age: number;
  symptoms: string[];
  diagnosis: string;
  clinicalFindings: string[];
  outcomeMetrics: string[];
  tags: string[];
};

export type AnonymizedCaseStudy = {
  id: string;
  title: string;
  category: string;
  featured: boolean;
  ageRange: string;
  symptoms: string[];
  diagnosis: string;
  clinicalFindings: string[];
  outcomeMetrics: string[];
  tags: string[];
};
