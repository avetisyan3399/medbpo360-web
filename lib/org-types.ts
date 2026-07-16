export type OrgType = {
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

export const orgTypes: OrgType[] = [
  {
    slug: "growing-practices",
    name: "Independent & Growing Practices",
    tagline: "Standardized systems, sized to fit you",
    headline: "RCM & Back-Office Support for Independent Practices",
    subheadline:
      "Standardized billing, credentialing, and reporting systems — sized right for a single practice today, whether you're planning to grow or planning to stay exactly this size.",
    description:
      "You don't need to be a health system to benefit from standardized revenue cycle systems. Independent practices get the same clean-claim discipline, credentialing tracking, and executive-style reporting we build for our largest clients — scaled to a team and price point that fits where you are now. That's true whether you're aiming to add locations down the line or you're perfectly happy staying a single, independent practice indefinitely — either way, you get systems built for accuracy, not for a growth trajectory you may not want.",
    challenges: [
      {
        title: "Small teams wear too many hats",
        body: "A 5-provider practice often has one person handling billing, credentialing, and collections part-time between other duties. That's where errors and missed revenue creep in — not from lack of effort, but lack of dedicated systems.",
      },
      {
        title: "Growth outpaces internal processes",
        body: "Adding a second location or a few new providers can overwhelm a billing process that was never built to scale. Practices that standardize early avoid the painful re-platforming that comes with growing on an ad hoc system.",
      },
      {
        title: "Credentialing delays hit smaller practices harder",
        body: "A single provider stuck in a credentialing backlog can mean a meaningful share of a small practice's total revenue sitting on hold — the impact is proportionally bigger than at a larger organization.",
      },
    ],
    included: [
      "Standardized billing and coding built to grow with you, not just handle today's volume",
      "Credentialing and payer enrollment for solo and small-group providers",
      "Transparent reporting from day one — the same dashboards we build for health systems, scaled to your size",
      "A dedicated implementation contact, not a call queue",
      "Flat, transparent pricing with no long-term contracts required",
      "A clear path to add locations or providers without switching systems later",
    ],
    stats: [
      { value: "Day One", label: "Executive-Style Reporting" },
      { value: "No Minimums", label: "Practices of Any Size Welcome" },
      { value: "94%", label: "Target Clean Claim Rate" },
    ],
    metaTitle: "RCM & Billing Support for Independent & Growing Practices",
    metaDescription:
      "Standardized billing, credentialing, and reporting for independent and growing medical practices — the same systems we build for health systems, sized to fit you.",
    keyword: "independent medical practice billing outsourcing",
  },
  {
    slug: "health-systems",
    name: "Health Systems",
    tagline: "Enterprise RCM for multi-facility systems",
    headline: "Revenue Cycle Outsourcing for Health Systems",
    subheadline:
      "Standardized billing, credentialing, and back-office operations across every facility — with a single executive reporting layer.",
    description:
      "Health systems run revenue cycle across dozens of departments, service lines, and facilities, each with its own quirks. We standardize the parts that should be standardized — coding compliance, denial workflows, credentialing tracking — while adapting to the payer mix and service-line complexity that makes every system different.",
    challenges: [
      {
        title: "Service-line complexity fragments revenue cycle visibility",
        body: "A health system billing across primary care, specialty, ancillary, and facility fees needs revenue cycle reporting that rolls up cleanly — not a dozen disconnected views that leadership has to reconcile manually.",
      },
      {
        title: "Departmental billing variance hides systemic issues",
        body: "When each department or facility runs its own billing processes, the same denial pattern can exist in five places without anyone connecting the dots at the system level.",
      },
      {
        title: "Credentialing at system scale is a continuous operation",
        body: "With hundreds of providers across facilities, credentialing isn't a project — it's an ongoing operational function that needs dedicated infrastructure, not periodic attention.",
      },
    ],
    included: [
      "System-wide RCM standardization across departments and facilities",
      "Consolidated denial management and pattern identification at the system level",
      "Facility and provider credentialing managed as a continuous operation",
      "Executive-level revenue cycle dashboard rolling up every service line",
      "Payer contract performance analysis across the full system",
      "Dedicated implementation team for system-wide rollouts",
    ],
    stats: [
      { value: "Multi-Site", label: "Standardized Across Every Facility" },
      { value: "100%", label: "Roster-Level Credentialing Visibility" },
      { value: "Exec", label: "Reporting Built for Leadership" },
    ],
    metaTitle: "Revenue Cycle Outsourcing for Health Systems",
    metaDescription:
      "Standardized billing, credentialing, and denial management across every facility in your health system, with executive-level reporting rolled up to one view.",
    keyword: "health system revenue cycle outsourcing",
  },
  {
    slug: "mso-pe-backed-groups",
    name: "MSOs & PE-Backed Groups",
    tagline: "Built for roll-up growth",
    headline: "RCM & Back-Office Outsourcing for MSOs and PE-Backed Groups",
    subheadline:
      "Onboard acquired practices onto standardized billing and credentialing fast — without the revenue dip that usually comes with a roll-up.",
    description:
      "Management services organizations and PE-backed groups grow by acquisition, and every new practice added to the platform needs to be standardized onto consistent billing, coding, and credentialing workflows — fast. We build the onboarding playbook once and run it on every acquisition, so integration timelines shrink and EBITDA doesn't take a hit during the transition.",
    challenges: [
      {
        title: "Acquired practices arrive with inconsistent billing maturity",
        body: "Every acquired practice comes with its own billing habits, coding patterns, and payer relationships. Standardizing onto platform-wide processes without disrupting cash flow requires a repeatable onboarding motion, not a one-off project each time.",
      },
      {
        title: "Investors expect revenue cycle metrics, not anecdotes",
        body: "PE-backed platforms need clean, comparable RCM metrics across every practice in the portfolio for board reporting and diligence on future add-ons — not billing data that varies in format and quality site to site.",
      },
      {
        title: "Credentialing timelines can delay deal value realization",
        body: "A newly acquired provider who isn't credentialed with the platform's payer contracts can't bill at the negotiated rate. Slow credentialing directly delays the synergy value the deal was underwritten on.",
      },
    ],
    included: [
      "Repeatable acquisition onboarding playbook — billing, coding, and credentialing standardized fast",
      "Cross-practice RCM benchmarking for portfolio-level reporting",
      "Credentialing sprints timed to close dates to minimize value-realization lag",
      "Standardized KPI reporting formatted for investor and board review",
      "Platform-wide payer contract performance analysis",
      "Dedicated integration team available for every new acquisition",
    ],
    stats: [
      { value: "45d", label: "Target Provider Credentialing Sprint" },
      { value: "Portfolio", label: "Standardized KPI Reporting" },
      { value: "Repeatable", label: "Acquisition Onboarding Playbook" },
    ],
    metaTitle: "RCM Outsourcing for MSOs & PE-Backed Medical Groups",
    metaDescription:
      "Standardized billing, credentialing, and portfolio-level RCM reporting for MSOs and PE-backed medical groups scaling through acquisition.",
    keyword: "MSO revenue cycle management outsourcing",
  },
  {
    slug: "ascs",
    name: "Ambulatory Surgery Centers",
    tagline: "High-value case billing, done right",
    headline: "Billing & RCM for Ambulatory Surgery Centers",
    subheadline:
      "Facility fee billing, implant cost recovery, and authorization management for ASCs running high-value cases at volume.",
    description:
      "ASC billing carries real financial risk per case — implant costs, facility fee coding, and payer-specific authorization rules all have to be right, every time, or a single denied high-value case can outweigh a week of smaller claims. We bring ASC-specific billing expertise and authorization management built for centers running surgical volume.",
    challenges: [
      {
        title: "Implant and device cost recovery is high-stakes",
        body: "Missing or miscoding implant costs on a single case can mean thousands of dollars in unrecovered facility costs. At ASC volume, systematic implant billing accuracy is a material revenue driver, not a rounding error.",
      },
      {
        title: "Prior authorization gaps on surgical cases are costly",
        body: "A missed or expired authorization on a scheduled surgical case risks a same-day cancellation or a denied claim on a high-dollar procedure — both expensive outcomes that proactive tracking prevents.",
      },
      {
        title: "Facility fee vs. professional fee coding requires ASC-specific expertise",
        body: "ASC facility billing follows different rules than hospital outpatient or physician office billing. Generalist billing teams without ASC-specific training routinely miscode facility components.",
      },
    ],
    included: [
      "ASC-specific facility fee coding and billing",
      "Implant and high-cost device billing and cost recovery tracking",
      "Prior authorization management for scheduled surgical cases",
      "Payer-specific ASC contract and carve-out management",
      "Case-level profitability reporting by procedure and payer",
      "Credentialing for facility and surgeon panels with ASC-contracted payers",
    ],
    stats: [
      { value: "Case-Level", label: "Profitability Reporting" },
      { value: "100%", label: "Auth Verified Before Surgery Date" },
      { value: "ASC-Specific", label: "Facility Fee Coding Expertise" },
    ],
    metaTitle: "Ambulatory Surgery Center Billing & RCM Services",
    metaDescription:
      "ASC-specific facility billing, implant cost recovery, and surgical case authorization management. Built for ambulatory surgery centers running high-value case volume.",
    keyword: "ambulatory surgery center billing services",
  },
  {
    slug: "multi-site-medical-groups",
    name: "Multi-Site Medical Groups",
    tagline: "One billing standard, every location",
    headline: "RCM Outsourcing for Multi-Site Medical Groups",
    subheadline:
      "Standardized billing, credentialing, and AR management across every location — with visibility into which site actually needs attention.",
    description:
      "Groups with multiple locations often discover that revenue performance varies wildly by site — not because of patient mix, but because billing execution isn't standardized. We bring every location onto the same billing infrastructure and reporting, so leadership can see exactly which sites are performing and which need intervention.",
    challenges: [
      {
        title: "Site-level revenue variance often isn't about patient volume",
        body: "Two locations with similar patient volume can have dramatically different collections due to inconsistent front-desk verification, coding habits, or follow-up discipline — issues invisible without site-by-site reporting.",
      },
      {
        title: "New site openings repeat the same startup mistakes",
        body: "Without a standardized playbook, every new location relearns the same credentialing and billing setup lessons the last one did — costing time and revenue that a repeatable process would prevent.",
      },
      {
        title: "Front-desk and billing inconsistency compounds across sites",
        body: "Eligibility verification habits, collections scripts, and documentation standards drift site to site without centralized oversight, and the compounding effect shows up as unexplained AR variance.",
      },
    ],
    included: [
      "Standardized billing and coding workflows across every location",
      "Site-by-site revenue and denial rate reporting to pinpoint underperformance",
      "New-location opening playbook — credentialing, setup, and billing onboarding",
      "Centralized AR management worked across all sites in one view",
      "Consistent front-desk eligibility verification standards, group-wide",
      "Dedicated account team overseeing the full multi-site relationship",
    ],
    stats: [
      { value: "Site-by-Site", label: "Revenue & Denial Reporting" },
      { value: "Standardized", label: "New-Location Playbook" },
      { value: "94%", label: "Target Clean Claim Rate" },
    ],
    metaTitle: "RCM Outsourcing for Multi-Site Medical Groups",
    metaDescription:
      "Standardized billing, credentialing, and AR management across every location in your medical group, with site-by-site performance reporting.",
    keyword: "multi-site medical group billing outsourcing",
  },
  {
    slug: "hospital-based-groups",
    name: "Hospital-Based Groups",
    tagline: "Professional billing that matches the facility side",
    headline: "Billing & RCM for Hospital-Based Physician Groups",
    subheadline:
      "Professional fee billing for anesthesia, hospitalist, emergency, and radiology groups — coordinated with facility billing, not duplicated against it.",
    description:
      "Hospital-based groups bill professional fees in parallel with a facility's technical billing — and getting the coordination wrong means duplicate billing, compliance exposure, or missed revenue. We specialize in professional fee billing for hospital-based specialties, with the modifier and global-vs-professional expertise these groups depend on.",
    challenges: [
      {
        title: "Professional vs. facility billing coordination is high-risk",
        body: "Billing the global fee when the facility already billed the technical component creates compliance exposure. Hospital-based groups need billing partners who understand this boundary precisely, every time.",
      },
      {
        title: "High-volume, low-margin-per-case billing demands efficiency",
        body: "Anesthesia and hospitalist billing especially depend on high case volume with thin per-case margins — billing inefficiency at that volume compounds into real revenue loss quickly.",
      },
      {
        title: "Coverage-based staffing models complicate credentialing",
        body: "Hospital-based groups often rotate providers across facilities and shifts, meaning credentialing has to track a moving roster against multiple facility and payer requirements simultaneously.",
      },
    ],
    included: [
      "Professional fee billing for anesthesia, hospitalist, ED, and radiology groups",
      "Modifier and global-vs-professional component compliance (modifier 26, etc.)",
      "High-volume claim processing built for case-based billing models",
      "Rotating-roster credentialing tracked across multiple facilities",
      "Coordination protocols to prevent duplicate billing against facility charges",
      "Case-volume and per-provider productivity reporting",
    ],
    stats: [
      { value: "High-Volume", label: "Case-Based Billing Built to Scale" },
      { value: "100%", label: "Professional/Facility Coordination" },
      { value: "Rotating", label: "Roster Credentialing Supported" },
    ],
    metaTitle: "Billing & RCM for Hospital-Based Physician Groups",
    metaDescription:
      "Professional fee billing for anesthesia, hospitalist, emergency, and radiology groups, coordinated with facility billing and built for high case volume.",
    keyword: "hospital based physician billing services",
  },
];

export function getOrgType(slug: string): OrgType | undefined {
  return orgTypes.find((o) => o.slug === slug);
}
