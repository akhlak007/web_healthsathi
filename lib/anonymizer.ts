import type { AnonymizedCaseStudy, RawCaseStudy } from "@/types/research";

const piiPatterns = [
  /\+?8801[3-9]\d{8}\b/g,
  /\b01[3-9]\d{8}\b/g,
  /\b\d{10,17}\b/g,
  /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi,
  /\b(?:house|road|block|village|ward|upazila|sadar)\b[^,.]*/gi
];

export function getAgeRange(age: number): string {
  if (age < 0 || !Number.isFinite(age)) {
    return "Unknown";
  }

  if (age < 1) {
    return "Under 1";
  }

  const start = Math.floor(age / 10) * 10;
  const end = start + 9;

  if (start >= 90) {
    return "90+";
  }

  return `${start}-${end}`;
}

export function scrubPersonalIdentifiers(value: string): string {
  return piiPatterns.reduce(
    (scrubbed, pattern) => scrubbed.replace(pattern, "[removed]"),
    value
  );
}

function scrubList(values: string[]): string[] {
  return values.map((value) => scrubPersonalIdentifiers(value));
}

export function anonymizeCaseStudy(caseStudy: RawCaseStudy): AnonymizedCaseStudy {
  return {
    id: caseStudy.id,
    title: scrubPersonalIdentifiers(caseStudy.title),
    category: caseStudy.category,
    featured: caseStudy.featured,
    ageRange: getAgeRange(caseStudy.age),
    symptoms: scrubList(caseStudy.symptoms),
    diagnosis: scrubPersonalIdentifiers(caseStudy.diagnosis),
    clinicalFindings: scrubList(caseStudy.clinicalFindings),
    outcomeMetrics: scrubList(caseStudy.outcomeMetrics),
    tags: scrubList(caseStudy.tags)
  };
}

export function anonymizeCaseStudies(caseStudies: RawCaseStudy[]): AnonymizedCaseStudy[] {
  return caseStudies.map(anonymizeCaseStudy);
}
