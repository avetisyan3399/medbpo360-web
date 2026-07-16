export type Specialty = {
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

export const specialties: Specialty[] = [
  {
    slug: "behavioral-health",
    name: "Behavioral Health",
    tagline: "Mental health & substance use billing, done right",
    headline: "Behavioral Health Billing Services",
    subheadline:
      "Carve-out routing, authorization tracking, and telehealth compliance for behavioral health and substance use providers of any size.",
    description:
      "Behavioral health billing is complex regardless of how many providers you have — MBHO carve-outs to route correctly, authorization limits to track per patient, telehealth compliance rules that vary by state. Whether you're a solo therapist, a small group practice, or a multi-site provider, we bring the systems to manage that complexity so it doesn't fall on you or an overstretched front desk.",
    challenges: [
      {
        title: "Carve-out routing errors are easy to miss without dedicated billing focus",
        body: "Billing the wrong MBHO entity is a common, avoidable denial — but catching it requires payer-specific knowledge that's hard to maintain in-house when billing is one of several jobs someone on staff is doing.",
      },
      {
        title: "Authorization limit tracking doesn't scale down easily either",
        body: "Even a small caseload means tracking session limits across several payers, each with different renewal rules. Missing a renewal window costs a session's reimbursement whether you have 5 patients or 500.",
      },
      {
        title: "Telehealth compliance rules shift often and vary by state",
        body: "Providers seeing patients across state lines — or just keeping up with a single state's changing telehealth billing rules — need that compliance actively monitored, not assumed correct from last year.",
      },
    ],
    included: [
      "MBHO carve-out identification and correct-entity billing",
      "Authorization limit tracking and renewal alerts across your full patient panel",
      "Telehealth billing compliance — POS codes, modifiers, licensure coordination",
      "Credentialing with Optum Behavioral Health, Evernorth, Magellan, and Beacon",
      "Parity violation identification and documentation",
      "Denial analysis by payer and denial reason",
    ],
    stats: [
      { value: "Payer-Specific", label: "Carve-Out Routing Accuracy" },
      { value: "48h", label: "Auth Turnaround Target" },
      { value: "Any Size", label: "Solo to Multi-Site Providers" },
    ],
    metaTitle: "Behavioral Health Billing Services",
    metaDescription:
      "Carve-out routing, authorization tracking, and telehealth compliance for behavioral health and substance use providers — solo practices to multi-site groups.",
    keyword: "behavioral health billing outsourcing",
  },
  {
    slug: "primary-care",
    name: "Primary Care",
    tagline: "High-volume primary care billing, standardized",
    headline: "Primary Care Billing Services",
    subheadline:
      "E/M optimization, AWV and CCM revenue capture, and consistent coding for primary care practices of any size.",
    description:
      "Primary care sees the highest claim volume of any specialty, which means small per-claim inefficiencies add up fast — whether you're a solo practitioner or a multi-provider group. We standardize E/M coding accuracy, AWV and CCM capture, and documentation review so no provider is leaving revenue on the table, regardless of how many providers you have.",
    challenges: [
      {
        title: "E/M coding variance is common, even for a single provider",
        body: "Without regular coding audits, undercoding creeps in quietly — a habit rather than a decision. It happens in solo practices and large groups alike, and it goes unaddressed without someone checking.",
      },
      {
        title: "CCM and AWV programs need dedicated billing attention to pay off",
        body: "Chronic Care Management and Annual Wellness Visit billing require systematic patient identification and tracking that most EHRs don't automate well. Capturing this revenue reliably takes a dedicated process, not an occasional reminder.",
      },
      {
        title: "Documentation review often falls to whoever has time, not whoever should do it",
        body: "Ensuring MDM and time-based documentation actually supports the billed E/M level takes ongoing review — a task that's easy to defer indefinitely without someone owning it.",
      },
    ],
    included: [
      "E/M coding audits and standardization",
      "AWV billing (G0438/G0439) with separate E/M capture where appropriate",
      "Chronic Care Management (CCM) program billing infrastructure and patient tracking",
      "Preventive vs. diagnostic coding and modifier 33 compliance",
      "Ongoing documentation review process",
      "Coding accuracy and productivity reporting",
    ],
    stats: [
      { value: "Provider-Level", label: "Coding Accuracy Audits" },
      { value: "CCM/AWV", label: "Revenue Capture Programs" },
      { value: "94%", label: "Target Clean Claim Rate" },
    ],
    metaTitle: "Primary Care Billing Services",
    metaDescription:
      "E/M coding standardization, AWV and CCM revenue capture, and billing audits for primary care practices — solo practitioners to multi-provider groups.",
    keyword: "primary care billing outsourcing",
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    tagline: "High-value procedural billing, done precisely",
    headline: "Cardiology Billing Services",
    subheadline:
      "Authorization management, modifier compliance, and device/procedure billing for cardiology practices of any size.",
    description:
      "Cardiology is one of the highest-reimbursing specialties and one of the most heavily scrutinized — which means getting authorization, modifier, and global-vs-professional billing right matters just as much for a solo cardiologist as it does for a multi-site group. We bring cardiology-specific billing expertise to practices running interventional, diagnostic, and device volume, whatever your size.",
    challenges: [
      {
        title: "Prior authorization volume is hard to keep up with, even for a small team",
        body: "Stress testing, imaging, interventional procedures, and device implants all require authorization. Tracking that volume without dedicated infrastructure is a burden regardless of how many providers are sharing the load.",
      },
      {
        title: "Modifier 26 errors are an easy, recurring mistake",
        body: "Cardiologists reading studies at facilities they don't own must bill modifier 26 only. Getting this consistently right — whether you're reading at one outside site or several — requires systematic oversight, not memory.",
      },
      {
        title: "Device and implant billing carries real per-case financial risk",
        body: "High-cost device implants require precise documentation and coding to recover cost appropriately. One misbilled device case can matter as much to a small practice's margin as several do to a larger one.",
      },
    ],
    included: [
      "Authorization management across imaging, interventional, and device procedures",
      "Modifier 26 / global-vs-professional compliance review",
      "Device and implant billing with cost-recovery documentation review",
      "Incident-to billing management for mid-level providers",
      "Bundling audit and modifier 25/59 compliance",
      "Cardiology credentialing across your full provider roster and payer panel",
    ],
    stats: [
      { value: "Any Size", label: "Solo to Multi-Site Practices" },
      { value: "Systematic", label: "Modifier Compliance Review" },
      { value: "94%", label: "Target Clean Claim Rate" },
    ],
    metaTitle: "Cardiology Billing Services",
    metaDescription:
      "Authorization management, modifier compliance, and device billing for cardiology practices of any size — solo cardiologists to multi-site groups.",
    keyword: "cardiology billing outsourcing",
  },
  {
    slug: "multi-specialty-groups",
    name: "Multi-Specialty Groups",
    tagline: "One billing partner, every specialty under your roof",
    headline: "Billing & RCM for Multi-Specialty Practices",
    subheadline:
      "Specialty-specific coding expertise unified under one standardized billing operation, whether you run two departments or a dozen.",
    description:
      "Multi-specialty practices need billing accuracy that flexes across different coding rules — a cardiology procedure, a behavioral health session, and a lab test all follow different logic — while still rolling up into one coherent revenue cycle operation. That's true for a small practice with two specialties under one roof just as much as a larger group. We staff specialty-specific expertise within a single, standardized billing operation sized to fit your practice.",
    challenges: [
      {
        title: "Specialty-specific expertise is hard to staff internally at any size",
        body: "A biller who's excellent at primary care coding may not have the depth for cardiology device billing or behavioral health carve-outs. Even a two-specialty practice needs breadth without sacrificing depth.",
      },
      {
        title: "Cross-specialty reporting rarely rolls up cleanly",
        body: "Comparing revenue cycle performance across departments with different billing profiles requires reporting built to normalize that complexity — not a generic dashboard that treats every specialty the same.",
      },
      {
        title: "Referral and coordination billing between internal specialties gets missed",
        body: "When a patient sees more than one specialist within the same practice, coordinating billing — avoiding duplicate E/M billing, capturing appropriate consult codes — requires cross-departmental awareness most systems don't have.",
      },
    ],
    included: [
      "Specialty-specific coding expertise across every department in your practice",
      "Unified billing infrastructure and reporting across all specialties",
      "Cross-specialty performance benchmarking normalized for each department's billing profile",
      "Internal referral and coordination billing review to prevent duplicate billing",
      "Department-level and practice-wide denial and AR reporting",
      "Credentialing managed across your full multi-specialty provider roster",
    ],
    stats: [
      { value: "Multi-Specialty", label: "Coding Depth in One Operation" },
      { value: "Unified", label: "Cross-Department Reporting" },
      { value: "94%", label: "Target Clean Claim Rate" },
    ],
    metaTitle: "Billing & RCM for Multi-Specialty Practices",
    metaDescription:
      "Specialty-specific coding expertise unified under one standardized billing operation for multi-specialty practices of any size.",
    keyword: "multi specialty billing outsourcing",
  },
  {
    slug: "laboratory-diagnostics",
    name: "Labs & Diagnostics",
    tagline: "PAMA-compliant billing, at any test volume",
    headline: "Laboratory & Diagnostics Billing Services",
    subheadline:
      "PAMA rates, LCD compliance, and ABN management for independent labs and diagnostic providers of any size.",
    description:
      "Lab billing runs on a fundamentally different regulatory framework — PAMA fee schedules, Local Coverage Determinations, and CLIA compliance — and getting it wrong carries real financial risk whether you're running a single reference lab or a multi-site diagnostic network. We bring lab-specific billing expertise built to fit your test volume and testing relationships, not a one-size-fits-enterprise model.",
    challenges: [
      {
        title: "LCD compliance takes systematic diagnosis matching at any volume",
        body: "Medicare's Local Coverage Determinations define which diagnoses justify each test. Manually verifying LCD compliance on every requisition is easy to fall behind on even at modest volume — it needs a systematic process, not just careful staff.",
      },
      {
        title: "ABN issuance workflows need to trigger correctly, not become blanket waivers",
        body: "Labs need ABN workflows that trigger correctly before testing, tied to actual LCD non-compliance — without defaulting to blanket ABNs that create compliance exposure.",
      },
      {
        title: "Molecular and toxicology billing carries elevated audit risk",
        body: "Molecular diagnostic and toxicology billing draws disproportionate payer scrutiny regardless of how many tests you run. It needs documentation and coding discipline that holds up under audit, consistently.",
      },
    ],
    included: [
      "PAMA-compliant billing for routine and specialty lab panels",
      "Systematic LCD compliance checking against diagnosis codes",
      "ABN issuance workflows tied to actual coverage determinations",
      "Molecular, genetic, and toxicology billing with audit-ready documentation practices",
      "Reflex and add-on test billing rule management across testing relationships",
      "Denial analysis by test type and payer",
    ],
    stats: [
      { value: "Any Volume", label: "PAMA & LCD Compliance" },
      { value: "Audit-Ready", label: "Molecular & Toxicology Billing" },
      { value: "<48h", label: "Claim Submission Target" },
    ],
    metaTitle: "Laboratory & Diagnostics Billing Services",
    metaDescription:
      "PAMA-compliant billing, LCD compliance, and ABN management for independent labs and diagnostic providers of any size.",
    keyword: "diagnostic laboratory billing outsourcing",
  },
];

export function getSpecialty(slug: string): Specialty | undefined {
  return specialties.find((s) => s.slug === slug);
}
