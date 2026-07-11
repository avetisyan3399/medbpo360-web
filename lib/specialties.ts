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
    tagline: "Mental health & substance use billing at scale",
    headline: "Enterprise Behavioral Health Billing Services",
    subheadline:
      "Carve-out routing, authorization tracking, and telehealth compliance for behavioral health networks and multi-site treatment providers.",
    description:
      "Behavioral health billing gets more complex, not less, at scale — more MBHO carve-outs to route correctly, more authorization limits to track across more patients, more telehealth compliance rules across more states. We bring the systems to manage that complexity across an entire network of providers and locations.",
    challenges: [
      {
        title: "Carve-out routing errors multiply across a provider network",
        body: "When a network bills the wrong MBHO entity, it's not one denied claim — it's a systemic pattern across every provider seeing that payer's members, until someone catches it network-wide.",
      },
      {
        title: "Authorization limit tracking at volume requires automation",
        body: "Manually tracking session limits across hundreds of patients and multiple payers doesn't scale. Networks need systematic tracking that flags renewals before limits are hit, across the entire patient panel.",
      },
      {
        title: "Multi-state telehealth compliance is a moving target",
        body: "Networks operating across state lines face different telehealth licensure and billing rules in each state, and those rules change frequently — compliance has to be actively managed, not assumed.",
      },
    ],
    included: [
      "Network-wide MBHO carve-out identification and correct-entity billing",
      "Systematic authorization limit tracking and renewal alerts across the full patient panel",
      "Multi-state telehealth billing compliance — POS codes, modifiers, licensure coordination",
      "Credentialing with Optum Behavioral Health, Evernorth, Magellan, and Beacon at network scale",
      "Parity violation identification and documentation across the network",
      "Network-level denial analysis by payer, site, and denial reason",
    ],
    stats: [
      { value: "Network-Wide", label: "Carve-Out Routing Accuracy" },
      { value: "48h", label: "Auth Turnaround Target" },
      { value: "Multi-State", label: "Telehealth Compliance Managed" },
    ],
    metaTitle: "Enterprise Behavioral Health Billing Services",
    metaDescription:
      "Carve-out routing, authorization tracking, and telehealth compliance for behavioral health networks and multi-site treatment providers, managed at scale.",
    keyword: "behavioral health billing outsourcing enterprise",
  },
  {
    slug: "primary-care",
    name: "Primary Care",
    tagline: "High-volume primary care billing, standardized",
    headline: "Primary Care Billing for Multi-Provider Groups",
    subheadline:
      "E/M optimization, AWV and CCM revenue capture, and standardized coding across every provider in your primary care group.",
    description:
      "Primary care groups see the highest claim volume of any specialty, which means small per-claim inefficiencies compound into significant revenue at scale. We standardize E/M coding accuracy, AWV and CCM capture, and documentation review across every provider — turning individual coding habits into a consistent, optimized group-wide standard.",
    challenges: [
      {
        title: "E/M coding variance across providers is common and expensive",
        body: "In any primary care group of meaningful size, some providers systematically undercode while others code appropriately. Without provider-level coding audits, that variance goes unaddressed and revenue is left on the table.",
      },
      {
        title: "CCM and AWV programs need dedicated billing infrastructure",
        body: "Chronic Care Management and Annual Wellness Visit billing require systematic patient identification and tracking that most groups' EHRs don't automate well — capturing this revenue at scale requires a dedicated process.",
      },
      {
        title: "Standardizing documentation review across a large provider panel",
        body: "Ensuring MDM and time-based documentation supports the billed E/M level across dozens of providers requires ongoing review infrastructure, not a one-time training session.",
      },
    ],
    included: [
      "Provider-level E/M coding audits and standardization across the group",
      "AWV billing (G0438/G0439) with separate E/M capture where appropriate",
      "Chronic Care Management (CCM) program billing infrastructure and patient tracking",
      "Group-wide preventive vs. diagnostic coding and modifier 33 compliance",
      "Standardized documentation review process across the full provider panel",
      "Provider-level productivity and coding accuracy reporting",
    ],
    stats: [
      { value: "Provider-Level", label: "Coding Accuracy Audits" },
      { value: "CCM/AWV", label: "Revenue Capture Programs" },
      { value: "94%", label: "Target Clean Claim Rate" },
    ],
    metaTitle: "Primary Care Billing for Multi-Provider Groups",
    metaDescription:
      "E/M coding standardization, AWV and CCM revenue capture, and provider-level billing audits for large primary care groups and health systems.",
    keyword: "primary care group billing outsourcing",
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    tagline: "High-value procedural billing at group scale",
    headline: "Cardiology Billing for Enterprise Cardiovascular Groups",
    subheadline:
      "Authorization management, modifier compliance, and device/procedure billing across every provider and site in your cardiovascular group.",
    description:
      "Cardiology is one of the highest-reimbursing specialties and one of the most heavily scrutinized — which means the financial stakes of getting authorization, modifier, and global-vs-professional billing right multiply at group scale. We bring cardiology-specific expertise to groups running interventional, diagnostic, and device volume across multiple sites.",
    challenges: [
      {
        title: "Prior authorization volume scales faster than staff capacity",
        body: "Stress testing, imaging, interventional procedures, and device implants all require authorization. At group scale, the volume of auth requests routinely outpaces what an internal team can track without dedicated infrastructure.",
      },
      {
        title: "Modifier 26 compliance risk multiplies across sites",
        body: "Cardiologists reading studies at facilities they don't own must bill modifier 26 only. Enforcing that consistently across a group with providers working at multiple hospital and outpatient sites requires systematic oversight.",
      },
      {
        title: "Device and implant billing carries real per-case financial risk",
        body: "High-cost device implants require precise documentation and coding to recover cost appropriately. At procedure volume, systematic accuracy is the difference between margin and loss on device-heavy cases.",
      },
    ],
    included: [
      "Authorization management at volume across imaging, interventional, and device procedures",
      "Group-wide modifier 26 / global-vs-professional compliance enforcement",
      "Device and implant billing with cost-recovery documentation review",
      "Incident-to billing management for mid-level providers across sites",
      "Bundling audit and modifier 25/59 compliance at group scale",
      "Cardiology credentialing across the full provider roster and payer panel",
    ],
    stats: [
      { value: "Volume-Ready", label: "Authorization Tracking" },
      { value: "Group-Wide", label: "Modifier Compliance Enforcement" },
      { value: "94%", label: "Target Clean Claim Rate" },
    ],
    metaTitle: "Cardiology Billing for Enterprise Cardiovascular Groups",
    metaDescription:
      "Authorization management, modifier compliance, and device billing for cardiology groups running interventional and diagnostic volume across multiple sites.",
    keyword: "cardiology group billing outsourcing",
  },
  {
    slug: "multi-specialty-groups",
    name: "Multi-Specialty Groups",
    tagline: "One billing partner, every specialty under your roof",
    headline: "Billing & RCM for Multi-Specialty Medical Groups",
    subheadline:
      "Specialty-specific coding expertise unified under one standardized billing operation, across every department in your group.",
    description:
      "Multi-specialty groups need billing accuracy that flexes across radically different coding rules — a cardiology procedure, a behavioral health session, and a lab test all follow different logic — while still rolling up into one coherent revenue cycle operation. We staff specialty-specific expertise within a single, standardized billing infrastructure.",
    challenges: [
      {
        title: "Specialty-specific expertise is hard to staff internally at breadth",
        body: "A billing team that's excellent at primary care coding may not have the depth for cardiology device billing or behavioral health carve-outs. Multi-specialty groups need breadth without sacrificing depth in any one area.",
      },
      {
        title: "Cross-specialty reporting rarely rolls up cleanly",
        body: "Comparing revenue cycle performance across departments with fundamentally different billing profiles requires reporting built to normalize that complexity — not a generic dashboard that treats every specialty the same.",
      },
      {
        title: "Referral and coordination billing between internal specialties gets missed",
        body: "When a patient sees multiple specialists within the same group, coordination of billing — avoiding duplicate E/M billing, capturing appropriate consult codes — requires cross-departmental billing awareness most systems don't have.",
      },
    ],
    included: [
      "Specialty-specific coding expertise across every department in the group",
      "Unified billing infrastructure and reporting across all specialties",
      "Cross-specialty performance benchmarking normalized for each department's billing profile",
      "Internal referral and coordination billing review to prevent duplicate billing",
      "Department-level and group-wide denial and AR reporting",
      "Credentialing managed across the full multi-specialty provider roster",
    ],
    stats: [
      { value: "Multi-Specialty", label: "Coding Depth in One Operation" },
      { value: "Unified", label: "Cross-Department Reporting" },
      { value: "94%", label: "Target Clean Claim Rate" },
    ],
    metaTitle: "Billing & RCM for Multi-Specialty Medical Groups",
    metaDescription:
      "Specialty-specific coding expertise unified under one standardized billing operation for multi-specialty medical groups and health systems.",
    keyword: "multi specialty group billing outsourcing",
  },
  {
    slug: "laboratory-diagnostics",
    name: "Labs & Diagnostics",
    tagline: "PAMA-compliant billing at diagnostic volume",
    headline: "Laboratory & Diagnostics Billing at Enterprise Volume",
    subheadline:
      "PAMA rates, LCD compliance, and ABN management for independent labs and diagnostic networks running high-volume testing.",
    description:
      "Lab billing runs on a fundamentally different regulatory framework — PAMA fee schedules, Local Coverage Determinations, and CLIA compliance — and at diagnostic network volume, the margin for error shrinks fast. We bring lab-specific billing expertise built for networks processing high test volume across multiple reference and reflex testing relationships.",
    challenges: [
      {
        title: "LCD compliance at volume requires systematic diagnosis matching",
        body: "Medicare's Local Coverage Determinations define which diagnoses justify each test. At high volume, manually verifying LCD compliance on every requisition isn't feasible — it requires systematic, automated-assisted checking.",
      },
      {
        title: "ABN issuance workflows must scale without becoming blanket waivers",
        body: "Networks need ABN workflows that trigger correctly at volume — issued before testing, tied to actual LCD non-compliance — without defaulting to blanket ABNs that create compliance exposure.",
      },
      {
        title: "Molecular and toxicology billing carries elevated audit risk at scale",
        body: "High-volume molecular diagnostic and toxicology billing draws disproportionate payer scrutiny. Networks need documentation and coding discipline that holds up under audit, consistently, across every test run.",
      },
    ],
    included: [
      "PAMA-compliant billing for high-volume routine and specialty lab panels",
      "Systematic LCD compliance checking against diagnosis codes at volume",
      "Scaled ABN issuance workflows tied to actual coverage determinations",
      "Molecular, genetic, and toxicology billing with audit-ready documentation practices",
      "Reflex and add-on test billing rule management across testing relationships",
      "Volume-level denial analysis by test type and payer",
    ],
    stats: [
      { value: "High-Volume", label: "PAMA & LCD Compliance" },
      { value: "Audit-Ready", label: "Molecular & Toxicology Billing" },
      { value: "<48h", label: "Claim Submission Target" },
    ],
    metaTitle: "Laboratory & Diagnostics Billing at Enterprise Volume",
    metaDescription:
      "PAMA-compliant billing, LCD compliance, and ABN management for independent labs and diagnostic networks running high-volume testing.",
    keyword: "diagnostic laboratory billing outsourcing",
  },
];

export function getSpecialty(slug: string): Specialty | undefined {
  return specialties.find((s) => s.slug === slug);
}
