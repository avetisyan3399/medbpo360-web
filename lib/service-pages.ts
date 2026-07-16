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
    tagline: "Every call answered. No matter your size.",
    headline: "Medical Billing Call Center Services",
    subheadline:
      "Dedicated support for patient billing, payer follow-up, and scheduling — sized to your patient volume, not the other way around.",
    description:
      "A small practice can't justify a full-time front-desk hire dedicated to billing calls, and a multi-site group can't afford inconsistent scripting across locations — both need a call center built to fit their actual volume. We staff support sized to your patient population, with escalation paths, QA scoring, and reporting that works whether you're a single location or several.",
    challenges: [
      {
        title: "In-house call coverage is hard to staff at any size",
        body: "A solo or small practice often can't justify a dedicated phone role at all, so calls get squeezed between other front-desk work. A growing group adding locations faces the opposite problem — headcount and training overhead every time volume increases.",
      },
      {
        title: "Inconsistent scripting hurts the patient experience",
        body: "Whether it's one location with rotating front-desk coverage or several sites with no centralized process, patients get a different experience depending on who picks up. Standardizing scripts, escalation paths, and QA takes a dedicated operational function most practices haven't built.",
      },
      {
        title: "Payer call time consumes bandwidth that should go to patients",
        body: "Prior auth status calls, denial escalations, and eligibility checks pull staff away from higher-value work. For a small practice that's often the office manager's whole afternoon; at higher volume, it's the equivalent of multiple FTEs tied up on hold with insurance companies every week.",
      },
    ],
    included: [
      "Call center support sized to your patient/provider volume",
      "Patient billing inquiries, balance collections, and payment plan setup",
      "Prior authorization status calls and denial escalations to payer provider lines",
      "Scheduling and appointment management, single-site or multi-site",
      "Standardized scripting and QA scoring",
      "24/7 or extended-hours coverage options for after-hours and overflow",
      "Multilingual support — English, Spanish, and additional languages on request",
      "Call volume, AHT, and resolution-rate reporting",
    ],
    stats: [
      { value: "35–45%", label: "Typical Cost Savings vs. In-House Hire" },
      { value: "24/7", label: "Coverage Available" },
      { value: "100%", label: "HIPAA-Compliant Operations" },
    ],
    metaTitle: "Medical Billing Call Center Services",
    metaDescription:
      "Dedicated call center support for medical practices of any size. Patient billing, payer follow-up, scheduling, and 24/7 coverage options, sized to your patient volume.",
    keyword: "medical billing call center outsourcing",
  },
  {
    slug: "medical-billing-rcm",
    name: "Medical Billing & RCM",
    tagline: "Revenue cycle management built to fit your practice.",
    headline: "Medical Billing & Revenue Cycle Management",
    subheadline:
      "Full-cycle RCM for practices of any size — standardized coding, payer-specific expertise, and reporting you can actually use.",
    description:
      "Running RCM well takes more than a billing team — it takes standardized workflows, payer-specific expertise, and reporting that tells you what's actually happening with your revenue. That's true whether you're a single-provider practice or running several locations. We build RCM infrastructure that fits your current size and scales with you if you grow, without the revenue dip that usually comes with a transition.",
    challenges: [
      {
        title: "Revenue leakage is hard to see without dedicated reporting",
        body: "Whether it's one provider or several locations billing slightly differently, denial patterns, undercoding, and AR aging go undetected without someone looking at the right level of detail — not just the top-line collections number.",
      },
      {
        title: "Adding a provider, location, or acquisition can disrupt cash flow",
        body: "Every new provider, new location, or newly acquired practice risks a temporary revenue dip while billing gets standardized — the same friction whether it's one new hire or a roll-up onboarding several practices at once. Without a billing partner built to onboard smoothly, that dip is avoidable, not a necessary cost of growth.",
      },
      {
        title: "Payer contract complexity affects practices of every size",
        body: "Negotiated rates vary by payer and region regardless of how many providers you have. Without systematic fee schedule analysis, underpayment goes undetected — a bigger problem at volume, but a real one even for a single practice.",
      },
    ],
    included: [
      "Standardized CPT/ICD-10/HCPCS coding across your practice",
      "AI-assisted claim scrubbing before submission",
      "Electronic claims submission and clearinghouse management across payers",
      "Denial rate tracking by payer and CPT code",
      "Fee schedule analysis — contracted rate vs. actual reimbursement",
      "New-provider, new-location, and acquisition onboarding to protect cash flow",
      "Clean claim rate, AR days, and collections reporting",
      "Dedicated implementation and operations team, not a single account manager",
    ],
    stats: [
      { value: "92%+", label: "Target Clean Claim Rate" },
      { value: "<45d", label: "Target AR Days Outstanding" },
      { value: "1 to 100+", label: "Providers Supported, Any Size" },
    ],
    metaTitle: "Medical Billing & RCM Outsourcing",
    metaDescription:
      "Full-cycle revenue cycle management for medical practices of any size. Standardized billing, clear reporting, and smooth onboarding for new providers and locations.",
    keyword: "medical billing outsourcing",
  },
  {
    slug: "credentialing-enrollment",
    name: "Credentialing & Payer Enrollment",
    tagline: "From a single provider to a full roster.",
    headline: "Credentialing & Payer Enrollment Services",
    subheadline:
      "CAQH, PECOS, and state Medicaid enrollment managed for practices of any size — with real-time status tracking.",
    description:
      "Credentialing a single new provider still means navigating CAQH, PECOS, state Medicaid, and every commercial payer's own process and timeline — and a missed step delays billing just as much as it would for a larger roster. We manage enrollment for practices of any size, from a solo provider joining a new payer panel to a multi-provider group onboarding several providers at once, with visibility into exactly where each application stands.",
    challenges: [
      {
        title: "Credentialing gaps are invisible until claims start denying",
        body: "A single provider with a credentialing gap on one payer can have claims deny quietly for months before anyone reconciles it — the same blind spot that affects a larger roster, just at smaller scale.",
      },
      {
        title: "A new hire or new location means starting the enrollment clock over",
        body: "Every new provider needs credentialing with every payer your practice contracts with, and timelines run 60–120 days per payer regardless of practice size. Most practices don't have someone tracking this full-time.",
      },
      {
        title: "M&A activity can outpace credentialing capacity fast",
        body: "Acquiring a practice or onboarding a full roster at once means credentialing every provider with every payer the new entity contracts with — a volume spike most internal teams, and even some larger credentialing departments, aren't staffed to absorb without a multi-month backlog.",
      },
      {
        title: "Re-credentialing deadlines are easy to miss without a tracking system",
        body: "Licenses, DEA registrations, COIs, and board certifications all expire on different cycles. Missing a re-credentialing deadline can mean a lapse in billing privileges — a risk whether you have one provider or many.",
      },
    ],
    included: [
      "Provider and facility credentialing across all major commercial payers",
      "CAQH ProView setup and ongoing attestation management",
      "Medicare PECOS enrollment and Medicaid enrollment across states",
      "Delegated credentialing agreement support and audit-ready file maintenance where applicable",
      "Real-time status dashboard — billable, in-process, and expiring by provider",
      "New-provider and new-location credentialing timed to your onboarding dates",
      "M&A and roll-up credentialing sprints timed to close/onboarding dates for acquired rosters",
      "Expiration tracking across licenses, DEA, COIs, and board certifications",
      "Re-credentialing managed proactively on a rolling basis",
    ],
    stats: [
      { value: "1 to 40+", label: "Providers Credentialed Concurrently" },
      { value: "100%", label: "Deadline Tracking" },
      { value: "60–120d", label: "Typical Payer Enrollment Window" },
    ],
    metaTitle: "Credentialing & Payer Enrollment Services",
    metaDescription:
      "CAQH, PECOS, state Medicaid, and commercial payer credentialing for practices of any size, from a single new provider to a multi-provider roster.",
    keyword: "provider credentialing services",
  },
  {
    slug: "bpo-back-office",
    name: "Back-Office Outsourcing",
    tagline: "Your back office, operationalized — at your size.",
    headline: "Medical BPO & Back-Office Outsourcing",
    subheadline:
      "Claims processing, denial management, and administrative support — one partner running the back-office work you don't have staff for.",
    description:
      "Beyond billing and credentialing, healthcare organizations of every size need back-office capacity that flexes with volume — claims processing, denial management, and administrative work that doesn't stop just because there's no one on staff to do it. We operate as an extension of your back office, whether that's filling a gap for a small practice or adding capacity for a larger one.",
    challenges: [
      {
        title: "Back-office work doesn't pause just because you're short-staffed",
        body: "Small practices often don't have anyone dedicated to claims processing or denial follow-up at all; larger organizations struggle to flex headcount up and down with seasonal or growth volume. Either way, the work backs up.",
      },
      {
        title: "Denial management requires specialized knowledge that's expensive to keep in-house",
        body: "Payer-specific appeal expertise takes time to build, and it's hard to justify a dedicated hire without enough claim volume to keep that role busy — a bar plenty of practices never clear on their own.",
      },
      {
        title: "Administrative workload scales with patient volume, staffing rarely does",
        body: "Data entry, document processing, and administrative workflows tend to grow with patient volume whether or not there's someone available to absorb that work at a lower marginal cost than a new hire.",
      },
    ],
    included: [
      "Claims processing operations — intake, adjudication support, and submission",
      "Denial management with payer-specific appeal expertise",
      "Administrative support — data entry, document processing, records support",
      "Back-office workflow design tailored to your practice",
      "Flexible capacity that scales up or down with your volume",
      "Integration support across major EHR and practice management systems",
      "Dedicated operations lead for every engagement",
      "Monthly operational reporting — throughput, turnaround time, and cost per transaction",
    ],
    stats: [
      { value: "30–40%", label: "Typical Back-Office Cost Reduction" },
      { value: "Flex", label: "Capacity Scales With Your Volume" },
      { value: "100%", label: "HIPAA-Compliant Operations" },
    ],
    metaTitle: "Medical BPO & Back-Office Outsourcing",
    metaDescription:
      "Claims processing, denial management, and administrative support for medical practices of any size, from a single practice to a multi-location group.",
    keyword: "medical back office outsourcing",
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}
