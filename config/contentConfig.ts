import type {
  DownloadLink,
  FaqItem,
  Feature,
  Highlight,
  LegalSection,
  NavLink,
  ResearchCategory,
  Stat,
  TeamMember,
  TimelineItem,
  Vision
} from "@/types/content";

export const siteUrl = "https://healthsathi.com";

const downloadLinks: DownloadLink[] = [
  {
    eyebrow: "Download on",
    label: "Google Play",
    platform: "Android",
    href: "#download"
  },
  {
    eyebrow: "Download on",
    label: "App Store",
    platform: "iOS",
    href: "#download"
  }
];

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Vision", href: "/vision" },
  { label: "Research Hub", href: "/research-hub" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy-policy" }
];

const footerLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Vision", href: "/vision" },
  { label: "Research Hub", href: "/research-hub" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Account Deletion", href: "/account-deletion" },
  { label: "Request Account Deletion", href: "/delete-account" },
  { label: "Contact", href: "/contact" },
  { label: "Support", href: "/support" },
  { label: "Doctor Login", href: "/doctor-login" }
];

const statistics: Stat[] = [
  {
    value: "72h",
    label: "Account erasure window",
    detail: "Deletion requests are designed to purge personal identifiers, historical vitals, and profile configuration across production systems within 72 hours."
  },
  {
    value: "AES-256",
    label: "Encryption at rest",
    detail: "Sensitive medical logs, diagnostic histories, and practitioner credentials are described with field-level encryption controls."
  },
  {
    value: "0",
    label: "Commercial data sharing",
    detail: "HealthSathi does not sell, lease, monetize, or distribute sensitive medical records to advertisers or data brokers."
  },
  {
    value: "BMDC",
    label: "Doctor verification layer",
    detail: "Clinical profile access is reserved for verified practitioners with valid Bangladesh Medical & Dental Council credentials."
  }
];

const impactStats = [
  {
    value: 25000,
    suffix: "+",
    label: "Active Patients",
    detail: "Patient profiles, family health journeys, reminders, and medical-record continuity."
  },
  {
    value: 1200,
    suffix: "+",
    label: "Research Studies",
    detail: "Anonymized case learning and local medical intelligence direction for Bangladesh."
  },
  {
    value: 850,
    suffix: "+",
    label: "Partner Doctors",
    detail: "Verified practitioner workflows designed around BMDC credential safety."
  },
  {
    value: 64,
    suffix: "+",
    label: "Hospitals Connected",
    detail: "Institutional and diagnostic-report integration roadmap across care networks."
  }
];

const features: Feature[] = [
  {
    title: "Patient Profile",
    description: "A longitudinal health profile for vitals, previous history, diagnostic reports, family profiles, and emergency context.",
    icon: "FileHeart"
  },
  {
    title: "Medicine Reminder",
    description: "Timely medication and lab-test reminders designed to keep patients aligned with doctor-guided care plans.",
    icon: "CalendarClock"
  },
  {
    title: "Emergency SOS",
    description: "Rapid access to emergency support context so family members and care teams can respond faster.",
    icon: "PhoneCall"
  },
  {
    title: "Medical Records",
    description: "A digital medical-history layer that reduces lost paper reports and keeps diagnostic records available on the patient phone.",
    icon: "ClipboardCheck"
  },
  {
    title: "AI Assistant",
    description: "A dedicated personal AI direction for health tracking, education, research intelligence, and analytics support.",
    icon: "Bot"
  },
  {
    title: "Family Profiles",
    description: "Multi-profile support for caregivers managing loved ones while preserving consent, privacy, and role-based access.",
    icon: "UsersRound"
  }
];

const trustIndicators: Highlight[] = [
  {
    title: "Explicit consent by design",
    body: "No pre-checked boxes. HealthSathi follows an active opt-in model for clinical data processing and professional information handling.",
    icon: "CheckCircle2"
  },
  {
    title: "Anonymized research pool",
    body: "Names, phone numbers, national identifiers, and specific addresses are scrubbed before case study data is shown to students or practitioners.",
    icon: "Microscope"
  },
  {
    title: "Bangladesh data sovereignty",
    body: "The platform content is written around localized health records, Bangladesh healthcare strategy, and government stakeholder readiness.",
    icon: "DatabaseZap"
  }
];

const visions: Vision[] = [
  {
    title: "পকেটে স্বাস্থ্যসেবা",
    subtitle: "Healthcare in Your Pocket",
    concept: "Patients can keep their medical data, previous clinical history, reports, reminders, and family health context available on their own phone around the clock.",
    feature: "Automatic reminders help patients remember medicines, follow-up visits, and lab tests at the right time.",
    icon: "HeartPulse",
    accent: "#14B8A6"
  },
  {
    title: "ইনস্ট্যান্ট প্রাতিষ্ঠানিক কানেকশন",
    subtitle: "Seamless Institutional Integration",
    concept: "Patients can connect directly with hospitals and local diagnostic centers from anywhere in Bangladesh.",
    feature: "Diagnostic reports can flow into the user app profile, reducing the risk of lost paper reports and repeated manual searching.",
    icon: "Hospital",
    accent: "#06B6D4"
  },
  {
    title: "শিক্ষা, গবেষণা ও এআই ইন্টেলিজেন্স",
    subtitle: "Research, Study & AI Intelligence for BD",
    concept: "Medical students and practitioners can study real, localized, anonymized case data while HealthSathi advances dedicated health AI research.",
    feature: "A personal AI direction supports health tracking and helps coordinate the broader clinical data and analytics ecosystem.",
    icon: "Sparkles",
    accent: "#F9735B"
  }
];

const researchCategories: ResearchCategory[] = [
  {
    name: "Cardiology",
    description: "Heart health patterns, hypertension, medication adherence, and outcome trends."
  },
  {
    name: "Pediatrics",
    description: "Child health observations, family profile support, and preventive care workflows."
  },
  {
    name: "Neurology",
    description: "Neurological symptom tracking, referral readiness, and longitudinal clinical findings."
  },
  {
    name: "Oncology",
    description: "Treatment continuity, diagnostics timelines, and anonymized outcome metrics."
  },
  {
    name: "Epidemiology",
    description: "Population-level patterns from anonymized, consented, aggregate health data."
  }
];

const privacyPolicySections: LegalSection[] = [
  {
    title: "Compliance With Bangladesh Government Laws",
    body: "HealthSathi is written to align with Bangladesh personal data protection expectations, local digital health strategy, and the consent requirements described in the HealthSathi specification.",
    items: [
      "Explicit Consent Management: HealthSathi uses an active opt-in model. Silence and pre-checked boxes are not treated as consent.",
      "Absolute Data Anonymization for Research: Protected health information, including patient names, mobile numbers, national identifiers, and specific addresses, is scrubbed before case study data is shown.",
      "Data Sovereignty: Confidential localized medical records, logs, and database architecture are framed around Bangladesh hosting and infrastructure expectations."
    ]
  },
  {
    title: "Mobile Store Compliance",
    body: "The platform is prepared for Google Play and Apple App Store review by making privacy, deletion, and sensitive health data handling visible in app and on the web.",
    items: [
      "Zero Third-Party Commercialization: HealthSathi does not sell, lease, monetize, or share sensitive health data with advertisers, brokers, or commercial advertising networks.",
      "Data Encryption Standards: Clinical data pipelines are described as using HTTPS/TLS in transit and AES-256 field-level encryption at rest.",
      "No Local Browser Caching: Active patient profiles should not be stored in localStorage or sessionStorage on shared hospital or chamber computers."
    ]
  },
  {
    title: "User Data Rights and Right to Erasure",
    body: "Registered users retain authority over personal and clinical data and can request account deletion from the app or web portal.",
    items: [
      "Access and Rectification: Users can review, update, or correct account credentials and diagnostic metrics through secure dashboards.",
      "Account Deletion: A clear request workflow allows users to ask HealthSathi to purge identifiers, vitals, and profile settings within 72 hours.",
      "Support Contact: Privacy, regulatory, and deletion audit inquiries can be sent to healthsathi333@gmail.com."
    ]
  },
  {
    title: "Professional Verification and Clinical Safety",
    body: "Clinical profile search and sensitive data layers are restricted to verified medical practitioners with valid active BMDC credentials.",
    items: [
      "Doctor, student, and partner roles must accept Terms of Service and Privacy Policy consent before authentication.",
      "Clinical workflows should protect patient safety through professional verification and role-aware access.",
      "Research views should display only anonymized fields such as age range, symptoms, diagnosis, clinical findings, and outcome metrics."
    ]
  }
];

const termsSections: LegalSection[] = [
  {
    title: "Use of HealthSathi",
    body: "HealthSathi provides digital health profile, reminder, research, doctor access, and support experiences for patients, practitioners, students, partners, and healthcare stakeholders in Bangladesh."
  },
  {
    title: "Clinical Information",
    body: "The website and application experiences support health record organization and medical education. They do not replace emergency care, direct diagnosis, or in-person medical judgment from a qualified practitioner."
  },
  {
    title: "Professional Accounts",
    body: "Doctor access is intended for verified practitioners. HealthSathi may request credentials, BMDC status, organizational affiliation, and professional information to protect patient safety."
  },
  {
    title: "Consent and Data Processing",
    body: "Users must actively consent before HealthSathi processes clinical data, diagnostic records, professional information, or anonymized research contributions. Consent screens must not use pre-selected checkboxes."
  },
  {
    title: "Research and Case Study Data",
    body: "Research features are designed to use anonymized or aggregate clinical metrics. Patient names, phone numbers, national identifiers, and specific addresses must not appear in student or practitioner research views."
  },
  {
    title: "Account Deletion",
    body: "Users may request deletion through the website or app. HealthSathi aims to purge associated personal identifiers and accumulated diagnostic history within 72 hours after a verified deletion request."
  },
  {
    title: "Security",
    body: "HealthSathi content describes HTTPS/TLS transmission, AES-256 field-level encryption at rest, consent-based access, and no browser session caching for active patient profiles."
  },
  {
    title: "Contact",
    body: "Compliance, privacy, account, and support inquiries can be sent to healthsathi333@gmail.com or routed through the support portal."
  }
];

const consentItems = [
  {
    title: "Secure Health Data Hosting",
    body: "I explicitly consent to securely uploading, synchronizing, and storing my dynamic medical logs, diagnostic reports, and historical vitals on HealthSathi cloud architectures guarded via AES-256 field-level encryption."
  },
  {
    title: "Absolute Commercial Restriction",
    body: "I understand and verify that HealthSathi will never share, sell, lease, or distribute my clinical metrics or personal identity profiles with third-party advertisers or commercial data brokers."
  },
  {
    title: "Anonymized Research Authorization",
    body: "I authorize HealthSathi to include my clinical metrics in the aggregate Research & Case Study data pool only after my name, mobile contact, and specific demographic identifiers are programmatically scrubbed and anonymized."
  },
  {
    title: "Absolute Account Erasure",
    body: "I acknowledge that I retain the right to modify, download, or permanently purge my user account configuration and accumulated diagnostic history."
  }
];

const deletionTimeline: TimelineItem[] = [
  {
    title: "Request submitted",
    description: "The user submits email, user ID, reason, and a confirmation that account erasure is intentional."
  },
  {
    title: "Identity verification",
    description: "Support validates the request to prevent accidental or unauthorized deletion of clinical records."
  },
  {
    title: "Production purge",
    description: "Associated personal identifiers, historical vitals, and profile configurations are queued for permanent removal."
  },
  {
    title: "Completion notice",
    description: "HealthSathi aims to complete verified erasure across production systems within 72 hours."
  }
];

const teamMembers: TeamMember[] = [
  {
    name: "HealthSathi Product Team",
    role: "Digital Health Platform",
    focus: "Patient profiles, reminders, mobile app experience, and family health journeys."
  },
  {
    name: "Clinical Safety Council",
    role: "Medical Governance",
    focus: "BMDC verification direction, practitioner access, and clinical workflow safety."
  },
  {
    name: "Research & AI Group",
    role: "Case Study Intelligence",
    focus: "Anonymized research pools, medical student learning, and healthcare analytics."
  }
];

const supportFaq: FaqItem[] = [
  {
    question: "How do I request account deletion?",
    answer: "Use the Account Deletion page, enter your email and user ID, confirm the request, and HealthSathi will start the verification and deletion workflow."
  },
  {
    question: "Can HealthSathi sell my medical data?",
    answer: "No. The HealthSathi privacy standard states that sensitive health, medical, and diagnostic data is not sold, leased, monetized, or distributed to advertisers or data brokers."
  },
  {
    question: "How are research cases protected?",
    answer: "Research views use anonymized case data. Names, phone numbers, national IDs, addresses, and personal identifiers are removed before display."
  },
  {
    question: "Who can access clinical patient profile search?",
    answer: "Clinical data layers are intended for verified medical practitioners holding active BMDC credentials."
  },
  {
    question: "Where can I ask privacy questions?",
    answer: "Send privacy, deletion, or compliance questions to healthsathi333@gmail.com or use the support form."
  }
];

const visualAssets = {
  heroCareTeam: {
    src: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Doctor reviewing a digital health record with a patient"
  },
  heroPatientCare: {
    src: "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Healthcare professional speaking with a patient"
  },
  aboutStory: [
    {
      src: "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Clinical team in a hospital corridor"
    },
    {
      src: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Doctor using a tablet for medical records"
    },
    {
      src: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Patient care and healthcare monitoring"
    }
  ],
  researchSpotlight: {
    src: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Medical researcher reviewing laboratory results"
  },
  doctorLogin: {
    src: "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Doctor in a clinical workspace"
  },
  support: {
    src: "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Healthcare support team at a clinical desk"
  }
};

export const contentConfig = {
  site: {
    name: "HealthSathi",
    legalName: "HealthSathi.com",
    operator: "HealthSathi Team",
    url: siteUrl,
    domain: "healthsathi.com",
    logoMark: "/healthsathi-logo-mark.png",
    logoFull: "/healthsathi-logo.png",
    supportEmail: "healthsathi333@gmail.com",
    location: "Bangladesh",
    copyright: "© HealthSathi 2026",
    description:
      "HealthSathi is a premium digital health platform for Bangladesh, connecting patients, doctors, research, privacy, and healthcare intelligence."
  },
  seo: {
    title: "HealthSathi | Digital Health Platform for Bangladesh",
    description:
      "Your partner in digital health in Bangladesh. Empowering doctors, connecting patients, advancing medical knowledge.",
    keywords: [
      "HealthSathi",
      "digital health Bangladesh",
      "doctor platform",
      "patient medical records",
      "health research",
      "privacy first healthcare"
    ],
    image: "/og-healthsathi.svg"
  },
  nav: {
    links: navLinks,
    patientBadge: "For Patients",
    doctorLoginLabel: "Doctor Login",
    doctorLoginHref: "/doctor-login",
    menuLabel: "Open navigation",
    closeLabel: "Close navigation"
  },
  hero: {
    eyebrow: "Bangladesh digital health infrastructure",
    title: "Your Partner in Digital Health in Bangladesh",
    subtitle: "Empowering Doctors, Connecting Patients, Advancing Medical Knowledge.",
    mission:
      "HealthSathi is building a consent-first healthcare ecosystem where patients can carry their records, doctors can work with verified clinical context, and students can learn from anonymized local case intelligence.",
    photoOverlay: {
      label: "Real care context",
      body: "Clinical records, reminders, and research workflows grounded in everyday patient care."
    },
    dashboard: {
      eyebrow: "HealthSathi",
      title: "Clinical Command Center",
      status: "Live",
      consentTitle: "Consent readiness",
      consentBody: "Privacy policy, erasure, anonymized research, and BMDC verification."
    },
    primaryCta: { label: "Explore the Platform", href: "/about" },
    secondaryCta: { label: "Research Hub", href: "/research-hub" },
    downloadLinks,
    mockups: [
      { title: "Patient Profile", value: "Complete history", icon: "FileHeart" },
      { title: "Medicine Reminder", value: "Smart care nudges", icon: "CalendarClock" },
      { title: "Emergency SOS", value: "Family-ready signal", icon: "PhoneCall" },
      { title: "Medical Records", value: "Reports in one place", icon: "ClipboardCheck" },
      { title: "AI Assistant", value: "Personal health guidance", icon: "Bot" },
      { title: "Family Profiles", value: "Caregiver control", icon: "UsersRound" }
    ],
    floatingWidgets: [
      {
        title: "Medicine Reminder",
        body: "Next dose in 22 min",
        icon: "CalendarClock"
      },
      {
        title: "AI Assistant",
        body: "Trend analysis ready",
        icon: "Bot"
      },
      {
        title: "Medical Reports",
        body: "3 new files synced",
        icon: "ClipboardCheck"
      }
    ]
  },
  home: {
    sections: {
      platformEyebrow: "Platform",
      featuresTitle: "Built for everyday care and national-scale health intelligence",
      featuresSubtitle:
        "HealthSathi brings patient records, reminders, emergency context, doctor access, and research intelligence into one privacy-aware product system.",
      trustEyebrow: "Trust",
      trustTitle: "Privacy and clinical safety are core product requirements",
      aboutEyebrow: "About",
      aboutTitle: "A healthcare operating layer for Bangladesh",
      aboutBody:
        "HealthSathi connects patient-owned health records with doctors, hospitals, diagnostics, students, and researchers while keeping consent and anonymization visible across the product.",
      aboutCta: "Read About Us",
      visionEyebrow: "Vision",
      visionTitle: "Our 3 Core Visions",
      visionSubtitle:
        "A vibrant roadmap for mobile health access, institutional connectivity, and anonymized research intelligence.",
      researchEyebrow: "Research",
      researchTitle: "Research & Case Study Hub",
      researchCta: "Open Research Hub",
      teamEyebrow: "Team",
      teamTitle: "Built by a focused health technology team",
      teamSubtitle:
        "A product, clinical safety, research, and AI direction for healthcare infrastructure in Bangladesh.",
      downloadEyebrow: "Mobile App",
      downloadTitle: "Bring HealthSathi to every care journey",
      downloadBody:
        "The mobile app direction includes patient profiles, medicine reminders, emergency support, medical records, AI assistance, and family care profiles."
    }
  },
  statistics,
  impactStats,
  visualAssets,
  features,
  trustIndicators,
  about: {
    pageTitle: "About HealthSathi",
    pageSubtitle:
      "A modern healthcare platform designed for patients, doctors, students, researchers, hospitals, diagnostics centers, investors, and public stakeholders.",
    missionTitle: "Mission",
    mission:
      "To make trustworthy, consent-first digital health available across Bangladesh by connecting personal medical records, verified practitioners, institutional reports, and anonymized research intelligence.",
    body:
      "HealthSathi is structured around patient ownership, professional verification, research-safe anonymization, and mobile access. The platform vision covers healthcare in your pocket, seamless institutional integration, and an AI-backed research ecosystem for Bangladesh.",
    highlights: trustIndicators,
    media: [
      {
        title: "Patient-first mobile access",
        body: "A phone-based care layer for health history, reminders, reports, emergency support, and family profile management."
      },
      {
        title: "Doctor and partner readiness",
        body: "Verified professional access, BMDC credential direction, and partner workflows for clinical safety."
      },
      {
        title: "Government and investor clarity",
        body: "Clear privacy, consent, deletion, and anonymized research language suitable for stakeholder review."
      }
    ]
  },
  visions,
  research: {
    pageTitle: "Research & Case Study Hub",
    pageSubtitle:
      "Search anonymized clinical cases, explore categories, and review educational medical insights without exposing patient identifiers.",
    searchPlaceholder: "Search symptoms, diagnosis, findings, or category",
    allCategoriesLabel: "All categories",
    featuredLabel: "Featured research",
    caseLabels: {
      ageRange: "Age range",
      diagnosis: "Diagnosis",
      symptoms: "Symptoms",
      clinicalFindings: "Clinical findings",
      outcomeMetrics: "Outcome metrics"
    },
    categories: researchCategories,
    highlights: [
      "Only age ranges, symptoms, diagnosis, clinical findings, and outcome metrics are displayed.",
      "Names, phone numbers, addresses, national IDs, and personal identifiers are removed before rendering.",
      "The hub supports medical education, Research & Case Study workflows, and national healthcare analytics."
    ]
  },
  consent: {
    title: "Data Privacy & Clinical Consent",
    badge: "Active opt-in",
    disclosure:
      "By checking the boxes below and tapping I Agree and Do Consent, users explicitly acknowledge and authorize HealthSathi to process clinical data in alignment with Bangladesh PDPA 2026 expectations and app store developer guidelines.",
    items: consentItems,
    cancelLabel: "Cancel / Exit",
    agreeLabel: "I Agree and Do Consent",
    disabledHelper: "All consent points must be actively checked before continuing."
  },
  privacyPolicy: {
    pageTitle: "Privacy Policy",
    pageSubtitle:
      "HealthSathi privacy commitments for patients, medical practitioners, students, and healthcare stakeholders.",
    effectiveDate: "Effective June 2026",
    classification: "Confidential Technical & Legal Specification",
    sections: privacyPolicySections,
    visibilityTitle: "Compliance Visibility Matrix",
    visibilitySubtitle:
      "Store reviewers and users should be able to find privacy, deletion, and sensitive-data handling commitments across app settings, developer submissions, and public web pages.",
    visibilityMatrix: [
      {
        zone: "In-App Core Profile Settings Layout",
        details: [
          "Path: Settings -> Legal & Privacy",
          "Privacy Policy opens https://healthsathi.com/privacy-policy",
          "Account Deletion module starts a visible 72-hour erasure workflow"
        ]
      },
      {
        zone: "Developer Console Store Submission Dashboard",
        details: [
          "Sensitive health information access declaration: Yes",
          "Data in transit uses authenticated HTTPS/TLS protocols",
          "Data Safety target URL: https://healthsathi.com/privacy-policy"
        ]
      },
      {
        zone: "Root Landing Page Footer Structure",
        details: [
          "Footer preserves Privacy Policy and Terms of Service links",
          "Account Deletion, Contact, Support, and Doctor Login remain reachable",
          "Public web routes should keep valid certificates and active endpoints"
        ]
      }
    ]
  },
  terms: {
    pageTitle: "Terms of Service",
    pageSubtitle:
      "Terms for using HealthSathi patient, doctor, research, support, and account-management experiences.",
    effectiveDate: "Effective June 2026",
    sections: termsSections
  },
  accountDeletion: {
    pageTitle: "Account Deletion",
    pageSubtitle:
      "Request permanent erasure of your HealthSathi account, personal identifiers, historical vitals, and profile configuration.",
    formTitle: "Submit deletion request",
    fields: {
      email: "Email",
      userId: "User ID",
      reason: "Reason",
      confirmation:
        "I confirm that I want HealthSathi to permanently delete my account and associated diagnostic history after verification."
    },
    submitLabel: "Submit Request",
    disabledLabel: "Confirm deletion to continue",
    timelineTitle: "Deletion process timeline",
    timeline: deletionTimeline,
    successMessage:
      "Deletion request captured. In production, this flow should verify identity and signal backend erasure jobs within the 72-hour policy window."
  },
  doctorLogin: {
    pageTitle: "Doctor Login",
    pageSubtitle:
      "Secure access for verified doctors, medical students, and healthcare partners working with HealthSathi.",
    roles: ["Doctor", "Student", "Partner"],
    fields: {
      email: "Email",
      password: "Password"
    },
    consent:
      "I agree to the HealthSathi Terms of Service and Privacy Policy and consent to the processing of my professional information.",
    submitLabel: "Authenticate",
    disabledLabel: "Accept consent to continue",
    successMessage:
      "Demo authentication acknowledged. Production access should verify BMDC or partner credentials before clinical data access."
  },
  contact: {
    pageTitle: "Contact HealthSathi",
    pageSubtitle:
      "Reach the HealthSathi team for support, compliance, partnerships, research, or healthcare ecosystem conversations.",
    fields: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message"
    },
    submitLabel: "Send Message",
    supportTitle: "Support and compliance",
    supportBody:
      "For data deletion audits, regulatory inquiries, privacy-related complaints, app support, or partnerships, contact the HealthSathi team.",
    successMessage: "Message captured for demo. Connect this form to a backend support queue for production."
  },
  support: {
    pageTitle: "Support Center",
    pageSubtitle:
      "Find help for account recovery, technical support, privacy questions, medical data questions, and research access.",
    faqTitle: "FAQ",
    categories: [
      { title: "Technical Support", body: "App access, dashboard behavior, reports, reminders, and account troubleshooting." },
      { title: "Account Recovery", body: "Help with lost credentials, account ownership checks, and secure profile recovery." },
      { title: "Privacy Questions", body: "Consent, deletion, anonymization, and data processing questions." },
      { title: "Medical Data Questions", body: "Questions about medical history, diagnostic reports, family profiles, and research visibility." }
    ],
    faq: supportFaq
  },
  careers: {
    pageTitle: "Careers",
    pageSubtitle:
      "HealthSathi is building a venture-ready digital health platform for Bangladesh and welcomes builders across product, engineering, clinical safety, research, and partnerships.",
    openings: [
      "Full-Stack Product Engineer",
      "Healthcare UX Designer",
      "Clinical Operations Lead",
      "Research Data Privacy Analyst"
    ],
    body:
      "The hiring direction focuses on people who can build trustworthy healthcare systems with product depth, privacy discipline, and empathy for patients and practitioners."
  },
  team: {
    members: teamMembers
  },
  footer: {
    summary:
      "HealthSathi connects patients, doctors, research, privacy, and healthcare intelligence for Bangladesh.",
    links: footerLinks
  },
  routeMeta: {
    "/": {
      title: "HealthSathi | Digital Health Platform for Bangladesh",
      description: "Your partner in digital health in Bangladesh."
    },
    "/about": {
      title: "About HealthSathi",
      description: "Learn about HealthSathi mission, platform goals, and healthcare ecosystem strategy."
    },
    "/mission": {
      title: "HealthSathi Mission",
      description: "HealthSathi mission for consent-first digital health access across Bangladesh."
    },
    "/vision": {
      title: "HealthSathi Vision",
      description: "Explore HealthSathi core visions for pocket healthcare, institutional integration, and AI research."
    },
    "/doctor-login": {
      title: "Doctor Login",
      description: "Secure HealthSathi access for doctors, students, and partners."
    },
    "/research-hub": {
      title: "Research & Case Study Hub",
      description: "Explore anonymized medical cases and research insights."
    },
    "/privacy-policy": {
      title: "Privacy Policy",
      description: "HealthSathi privacy, consent, anonymization, and account deletion policy."
    },
    "/terms-of-service": {
      title: "Terms of Service",
      description: "HealthSathi terms for patients, doctors, students, partners, and researchers."
    },
    "/account-deletion": {
      title: "Account Deletion",
      description: "Request deletion of your HealthSathi account and associated data."
    },
    "/delete-account": {
      title: "Request Account Deletion",
      description: "Submit a Google Play compliant HealthSathi account deletion request."
    },
    "/contact": {
      title: "Contact HealthSathi",
      description: "Contact HealthSathi for support, privacy, compliance, research, and partnerships."
    },
    "/support": {
      title: "Support Center",
      description: "Get HealthSathi help for accounts, privacy, medical data, and technical support."
    },
    "/careers": {
      title: "Careers at HealthSathi",
      description: "Join HealthSathi to build digital health infrastructure for Bangladesh."
    }
  }
} as const;
