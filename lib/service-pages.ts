export type ServicePage = {
  slug: string;
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  description: string;
  challenges: { title: string; body: string }[];
  included: string[];
  stats: { value: string; label: string }[];
  metaTitle: string;
  metaDescription: string;
  keyword: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "call-center",
    name: "Call Center Services",
    tagline: "Enterprise call volume. Zero drop-off.",
    headline: "Medical Billing Call Center Services at Scale",
    subheadline:
      "Dedicated pods for patient billing, payer follow-up, and scheduling — sized to your patient volume, not the other way around.",
    description:
      "Health systems and multi-site groups don't need a single agent picking up overflow — they need a call center built to absorb enterprise volume without wait times climbing. We staff dedicated pods against your patient population, with escalation paths, QA scoring, and reporting built for an operations leader, not a solo practice owner.",
    challenges: [
      {
        title: "In-house call centers don't scale with growth",
        body: "Adding a location or acquiring a practice means adding headcount, training time, and management overhead. Most organizations are perpetually understaffed on the phones during growth phases — right when call volume is highest.",
      },
      {
        title: "Inconsistent scripting across sites hurts patient experience",
        body: "Multi-site groups without centralized call operations end up with a different experience at every location. Standardizing scripts, escalation paths, and QA across dozens of sites is a full-time operational function most groups haven't built.",
      },
      {
        title: "Payer call time consumes clinical and administrative bandwidth",
        body: "Prior auth status calls, denial escalations, and eligibility checks pull staff away from higher-value work. At enterprise volume, that's the equivalent of multiple FTEs tied up on hold with insurance companies every week.",
      },
    ],
    included: [
      "Dedicated call center pods sized to your patient/provider volume",
      "Patient billing inquiries, balance collections, and payment plan setup",
      "Prior authorization status calls and denial escalations to payer provider lines",
      "Centralized scheduling and appointment management across multiple sites",
      "Standardized scripting and QA scoring across all locations",
      "24/7 or extended-hours coverage options for after-hours and overflow",
      "Multilingual support — English, Spanish, and additional languages on request",
      "Executive-level call volume, AHT, and resolution-rate reporting",
    ],
    stats: [
      { value: "35–45%", label: "Cost Savings vs. In-House at Scale" },
      { value: "24/7", label: "Coverage Available" },
      { value: "100%", label: "HIPAA-Compliant Operations" },
    ],
    metaTitle: "Enterprise Medical Billing Call Center Services",
    metaDescription:
      "Dedicated call center pods for health systems and multi-site medical groups. Patient billing, payer follow-up, scheduling, and 24/7 coverage options — sized to enterprise volume.",
    keyword: "medical billing call center outsourcing",
  },
  {
    slug: "medical-billing-rcm",
    name: "Medical Billing & RCM",
    tagline: "Revenue cycle management built for scale.",
    headline: "Enterprise Medical Billing & Revenue Cycle Management",
    subheadline:
      "Full-cycle RCM for multi-provider groups and health systems — standardized across every site, reported at the executive level.",
    description:
      "Running RCM across dozens of providers and multiple locations requires more than a billing team — it requires standardized workflows, payer-specific expertise at volume, and reporting your CFO can actually use. We build the RCM infrastructure that scales with acquisitions, new locations, and provider growth without the revenue dip that usually comes with it.",
    challenges: [
      {
        title: "Fragmented billing across sites hides revenue leakage",
        body: "When each location or acquired practice runs billing differently, denial patterns, undercoding, and AR aging go undetected at the aggregate level. Leadership sees the top-line number, not where the leakage is happening.",
      },
      {
        title: "Onboarding a new site or acquisition disrupts cash flow",
        body: "Every new location added to a growing group risks a 60–90 day revenue dip while billing gets standardized. Without a scalable RCM partner, that dip compounds with every acquisition.",
      },
      {
        title: "Payer contract complexity multiplies at volume",
        body: "Enterprise groups negotiate different rates across payers and regions. Without systematic fee schedule analysis at scale, underpayment goes undetected across hundreds of thousands of claims.",
      },
    ],
    included: [
      "Standardized CPT/ICD-10/HCPCS coding across all sites and specialties",
      "AI-assisted claim scrubbing before submission, at volume",
      "Electronic claims submission and clearinghouse management across payers",
      "Site-by-site and aggregate denial rate tracking by payer and CPT code",
      "Fee schedule analysis — contracted rate vs. actual reimbursement, across regions",
      "New-location and acquisition onboarding playbook to protect cash flow",
      "Executive dashboard — clean claim rate, AR days, collections by site",
      "Dedicated implementation and operations team, not a single account manager",
    ],
    stats: [
      { value: "92%+", label: "Target Clean Claim Rate at Scale" },
      { value: "<45d", label: "Target AR Days Outstanding" },
      { value: "90d", label: "New-Site Onboarding Window" },
    ],
    metaTitle: "Enterprise Medical Billing & RCM Outsourcing",
    metaDescription:
      "Full-cycle revenue cycle management for health systems, MSOs, and multi-site medical groups. Standardized billing, executive reporting, and acquisition onboarding built for scale.",
    keyword: "enterprise medical billing outsourcing",
  },
  {
    slug: "credentialing-enrollment",
    name: "Credentialing & Payer Enrollment",
    tagline: "Roster credentialing, not one-off applications.",
    headline: "Bulk Credentialing & Payer Enrollment Services",
    subheadline:
      "Facility and provider-panel credentialing built for groups onboarding multiple providers at once — with real-time roster tracking.",
    description:
      "Credentialing one provider is a paperwork problem. Credentialing a 40-provider roster across a dozen payers during an acquisition is an operations problem. We manage bulk enrollment, CAQH and PECOS at scale, and delegated credentialing agreements — with roster-level visibility so leadership always knows exactly how many providers are billable, and how many are still in process.",
    challenges: [
      {
        title: "Roster-level credentialing gaps are invisible until claims deny",
        body: "When 5 of 40 providers on a roster have a credentialing gap with a specific payer, those claims deny quietly — no alert, no escalation — until someone reconciles it against the roster, often months later.",
      },
      {
        title: "M&A activity outpaces credentialing capacity",
        body: "Acquiring a practice or onboarding a new site means credentialing every provider with every payer the new entity contracts with. Most internal credentialing teams aren't built to absorb that volume without a multi-month backlog.",
      },
      {
        title: "Delegated credentialing agreements require ongoing audit readiness",
        body: "Health systems and large groups with delegated credentialing status must maintain audit-ready files continuously — not just at initial delegation. Falling out of compliance risks losing delegated status entirely.",
      },
    ],
    included: [
      "Bulk provider and facility credentialing across all major commercial payers",
      "CAQH ProView setup and ongoing attestation management at roster scale",
      "Medicare PECOS enrollment and Medicaid enrollment across multiple states",
      "Delegated credentialing agreement support and audit-ready file maintenance",
      "Real-time roster dashboard — billable, in-process, and expiring by provider",
      "M&A and new-site credentialing sprints timed to close/onboarding dates",
      "Expiration tracking across licenses, DEA, COIs, and board certifications at scale",
      "Re-credentialing managed proactively across the full roster on a rolling basis",
    ],
    stats: [
      { value: "40+", label: "Provider Rosters Managed Concurrently" },
      { value: "100%", label: "Roster-Level Deadline Tracking" },
      { value: "45d", label: "Avg Enrollment Sprint for New Sites" },
    ],
    metaTitle: "Bulk Provider Credentialing & Payer Enrollment",
    metaDescription:
      "Roster-level credentialing and payer enrollment for health systems, MSOs, and multi-site groups. CAQH, PECOS, delegated credentialing, and M&A onboarding sprints.",
    keyword: "bulk provider credentialing services",
  },
  {
    slug: "bpo-back-office",
    name: "Full-Scale BPO / Back-Office Outsourcing",
    tagline: "Your entire back office, operationalized.",
    headline: "Full-Scale Medical BPO & Back-Office Outsourcing",
    subheadline:
      "Claims processing, denial management, staffing augmentation, and administrative operations — one partner running the back office end-to-end.",
    description:
      "Beyond billing and credentialing, growing healthcare organizations need back-office capacity that flexes with volume — claims processing teams, denial management specialists, administrative staffing, and the operational infrastructure to support it all. We operate as an extension of your back office, not a vendor you have to manage.",
    challenges: [
      {
        title: "Back-office headcount can't flex with seasonal or growth volume",
        body: "Hiring cycles are slow, and back-office roles are often the first cut when organizations need to control costs — leaving a capacity gap right when volume spikes from new locations or seasonal demand.",
      },
      {
        title: "Denial management requires specialized headcount most groups can't justify",
        body: "Dedicated denial management specialists who understand payer-specific appeal processes are expensive to hire and retain internally, especially for organizations without the claim volume to keep a full team busy year-round.",
      },
      {
        title: "Administrative overhead scales linearly without outsourcing",
        body: "Data entry, document processing, and administrative workflows tend to grow headcount 1:1 with patient volume unless there's a partner absorbing that work at a lower marginal cost.",
      },
    ],
    included: [
      "Claims processing operations — intake, adjudication support, and submission at volume",
      "Dedicated denial management team with payer-specific appeal expertise",
      "Administrative staffing augmentation — data entry, document processing, records support",
      "Back-office workflow design and operational playbooks tailored to your systems",
      "Flexible capacity that scales up or down with seasonal and growth volume",
      "Integration support across major EHR and practice management systems",
      "Dedicated operations lead and implementation team for every engagement",
      "Monthly operational reporting — throughput, turnaround time, and cost per transaction",
    ],
    stats: [
      { value: "30–40%", label: "Typical Back-Office Cost Reduction" },
      { value: "Flex", label: "Capacity Scales With Volume" },
      { value: "100%", label: "HIPAA-Compliant Operations" },
    ],
    metaTitle: "Full-Scale Medical BPO & Back-Office Outsourcing",
    metaDescription:
      "Claims processing, denial management, and administrative staffing augmentation for health systems and large medical groups. One partner running your back office at scale.",
    keyword: "medical back office outsourcing",
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}
