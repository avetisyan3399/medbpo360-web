// Gated resources ("lead magnets"). Each has a free portion that is rendered
// server-side and indexable, and a gated portion served only by
// app/api/resource-request after an email address is given.
//
// The gated half is deliberately NOT in the page's initial HTML. Serving the
// full text to crawlers while showing visitors a gate is cloaking, and search
// engines treat it as one. Google sees exactly what an anonymous visitor sees.

export type ResourceSection = {
  heading: string;
  body: string[];
  /** The concrete thing a reader should go and check. */
  verify?: string;
};

export type Resource = {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  /** Page this resource supports, for cross-linking. Exactly one applies. */
  relatedSpecialty?: string;
  relatedService?: string;
  relatedIndustry?: string;
  /** Shown above the gate. Indexable. */
  intro: string[];
  freeSections: ResourceSection[];
  /** Everything below is returned only after an email is submitted. */
  gatedSections: ResourceSection[];
  checklist: string[];
  sources: { label: string; url?: string }[];
  /** Revisit by this date — content contains dated regulatory deadlines. */
  reviewBy: string;
};

const labBillingChecklist: Resource = {
  slug: "lab-billing-compliance-checklist",
  title: "The Lab Billing Compliance Checklist",
  subtitle:
    "Seven places diagnostic revenue quietly leaks — and what to verify before the next audit, not after.",
  metaTitle: "Lab Billing Compliance Checklist",
  metaDescription:
    "Date-of-service rules, PAMA reporting, ABNs, LCD variation, panel scope, and genetic testing scrutiny — a sourced compliance checklist for clinical, molecular, and pathology labs of any size.",
  keyword: "clinical lab billing compliance",
  relatedSpecialty: "laboratory-diagnostics",
  intro: [
    "Lab billing is not physician billing applied to specimens. It runs on a separate regulatory framework, and the failure modes are specific enough that a lab can be genuinely excellent at one part of it and exposed on another without knowing.",
    "The pattern is consistent: labs rarely lose money because a claim was coded wrong. They lose it because a rule governing who may bill, when, and on what date was applied incorrectly at scale, quietly, for months — and nobody looks until an audit or a recoupment letter arrives.",
    "This is a checklist of seven places that happens. It applies whether you run a small physician office lab or a multi-site molecular reference lab. The volume differs; the rules don't.",
  ],
  freeSections: [
    {
      heading: "1. The date-of-service rule decides who gets paid — and it isn't intuitive",
      body: [
        "For most clinical diagnostic lab tests, Medicare's date of service is the date the specimen was collected, not the date the test was performed. When the specimen comes from a hospital outpatient, that ordinarily makes the test part of the hospital's claim, not the performing lab's.",
        "The exception is where labs get into trouble. Since January 1, 2018, CMS has allowed the date of service to be the date the test was performed for Advanced Diagnostic Laboratory Tests and for molecular pathology tests excluded from OPPS packaging — meaning the performing laboratory bills Medicare directly. But only when all three conditions hold: it was medically appropriate to collect the sample during the hospital outpatient encounter; the results do not guide treatment provided during that encounter; and the test was reasonable and medically necessary for treatment of an illness.",
        "The second condition is the one that fails in practice. If the result came back in time to influence care during that same encounter, the exception doesn't apply — and a lab that billed Medicare directly billed a claim it wasn't entitled to.",
      ],
      verify:
        "That someone can articulate, for each molecular test line, which date-of-service pathway applies and why. If the answer is “we always bill Medicare directly,” that's not a policy, it's an assumption.",
    },
    {
      heading: "2. PAMA reporting is live again, and the window is specific",
      body: [
        "After several years of legislative delay, private payer rate reporting resumed this year. The Consolidated Appropriations Act of 2026, signed February 3, set the data reporting period as May 1 through July 31, 2026, based on private payer data collected January 1 through June 30, 2025.",
        "That window has now closed. If you were an applicable laboratory for this cycle, the question is no longer whether you can gather the data in time — it is whether you reported, and whether what you reported was right. Labs frequently get the definition of the rate wrong: you report the allowed amount, meaning payment from the insurer plus any patient cost sharing, regardless of whether you were in network or out of network for that payer. Not your charge, and not your net receipt.",
        "On the payment side, there is no phase-in reduction in 2026. Beginning in 2027 through 2029, payment for a test may not be reduced by more than 15% per year against the prior year's rate — so the rates reported this summer are what the next three years of reductions are calculated against.",
      ],
      verify:
        "Whether you met the definition of an applicable laboratory for this cycle and actually reported before the window closed on July 31, 2026 — and if you did, that the figures submitted were allowed amounts rather than charges. This is the data the 2027–2029 rates are built on.",
    },
  ],
  gatedSections: [
    {
      heading: "3. Routine ABNs are not a safety net — they are a finding",
      body: [
        "Issuing an Advance Beneficiary Notice to every Medicare patient as standard practice feels like prudence. It is the opposite: CMS does not permit blanket or routine ABNs.",
        "An ABN is valid when the lab has a specific, articulable reason to believe Medicare will not pay — medical necessity, a frequency limitation, an experimental or investigational service. It must be delivered far enough ahead that the patient can make a real decision. A form handed over at the draw chair as a formality satisfies neither requirement, and an ABN found to be defective does not transfer financial liability to the patient. The lab absorbs it.",
      ],
      verify:
        "Pull ten ABNs from the last quarter. Can you state the specific expected reason for non-coverage on each? If they all say the same thing, they are routine, and they will not hold.",
    },
    {
      heading: "4. Coverage is local, and local means your MAC",
      body: [
        "Local Coverage Determinations vary by Medicare Administrative Contractor jurisdiction. A test payable in one jurisdiction can be non-covered in another, with different diagnosis code requirements and different frequency limits.",
        "Labs that receive specimens from multiple states routinely apply one jurisdiction's coverage logic across all of them. It works until it doesn't, and it fails retroactively across every claim in the period.",
      ],
      verify:
        "That your coverage rules are keyed to the correct MAC for each referring location — not to whichever jurisdiction your billing team learned first.",
    },
    {
      heading: "5. Panel size is now an explicit enforcement priority",
      body: [
        "The HHS Office of Inspector General added a work plan initiative examining expanded laboratory panels — those detecting six or more pathogens — versus targeted panels detecting up to five. Expanded panels pay materially more, and OIG's stated concern is that they are being run where a targeted panel would have been clinically sufficient.",
        "This is a documentation problem before it is a billing problem. If the ordering rationale for the broader panel isn't in the record, the claim is indefensible even when the panel was the right call clinically.",
      ],
      verify:
        "For your highest-volume expanded panel, whether the medical record supports why the broader panel was ordered. Not the diagnosis code — the reasoning.",
    },
    {
      heading: "6. Genetic and molecular testing is where the scrutiny is concentrated",
      body: [
        "The numbers explain why. An OIG report published January 2026 found Medicare Part B spending on clinical diagnostic lab tests rose 5% to $8.4 billion in 2024 — while the number of enrollees receiving tests declined. Genetic testing accounted for 43% of that spending, $3.6 billion, while representing only 5% of tests paid.",
        "That disproportion is what draws attention. OIG's 2026 work plan includes an initiative on genetic testing vulnerabilities specifically, examining fraud exposure, trends among testing laboratories, and geographic variation between jurisdictions that do and do not participate in the Molecular Diagnostic Services Program. Separately, the Department of Justice's 2025 National Health Care Fraud Takedown charged 49 defendants in connection with $1.17 billion in alleged Medicare fraud involving genetic testing and telemedicine arrangements.",
        "None of this makes legitimate molecular testing risky. It does mean the documentation standard is higher than it is elsewhere, and that referral-source arrangements deserve scrutiny before someone else applies it.",
      ],
      verify:
        "Where your genetic test orders originate, and whether any single referral relationship or telemedicine arrangement accounts for a share of volume you would struggle to explain.",
    },
    {
      heading: "7. Medical necessity is established before the specimen is drawn",
      body: [
        "Every item above shares a root cause: the decision that determines whether a claim is payable happens before the lab ever runs the test — at ordering. Diagnosis-to-test linkage, frequency history, coverage jurisdiction, panel scope, and the date-of-service pathway are all fixed at that moment.",
        "Labs that treat billing as a purely back-end function are reconstructing intent after the fact. Validation applied at the point of order stops the denial being generated at all, which is a categorically cheaper place to solve it than an appeal.",
      ],
      verify:
        "How many of last month's denials could have been prevented at order entry rather than appealed afterward. That number is the honest measure of where your revenue cycle actually starts.",
    },
  ],
  checklist: [
    "Date-of-service pathway documented per molecular test line, with the three-condition exception applied deliberately",
    "Applicable-laboratory status determined for the current PAMA cycle",
    "PAMA data for Jan 1–Jun 30, 2025 reported as allowed amounts, in and out of network, before the window closed 2026-07-31",
    "If the window was missed, applicable-laboratory status confirmed and exposure understood",
    "ABNs issued only on specific anticipated non-coverage, with time to decide",
    "Coverage rules keyed to the correct MAC per referring location",
    "Expanded panel orders supported by documented clinical rationale",
    "Referral concentration in genetic testing reviewed",
    "Denials segmented by preventable-at-order versus not",
  ],
  sources: [
    {
      label: "CMS — Laboratory Date of Service Policy",
      url: "https://www.cms.gov/medicare/payment/fee-schedules/clinical-laboratory-fee-schedule-clfs/date-service-policy",
    },
    {
      label: "CMS — CLFS & PAMA Reporting and Resources",
      url: "https://www.cms.gov/medicare/payment/fee-schedules/clinical-laboratory-fee-schedule/clfs-pama-reporting-resources",
    },
    {
      label: "CMS — Advance Beneficiary Notice of Noncoverage (ABN)",
      url: "https://www.cms.gov/medicare/forms-notices/beneficiary-notices-initiative/ffs-abn",
    },
    { label: "Consolidated Appropriations Act of 2026, CLFS provisions" },
    { label: "HHS OIG — Medicare Part B clinical diagnostic laboratory test spending, January 2026" },
    { label: "HHS OIG Work Plan 2026 — genetic testing oversight; expanded laboratory panels" },
    { label: "U.S. Department of Justice — 2025 National Health Care Fraud Takedown" },
  ],
  // Section 2 was rewritten on 2026-08-25 after the reporting window closed;
  // revisit when CMS announces the next collection and reporting periods.
  reviewBy: "2027-01-31",
};


const credentialingChecklist: Resource = {
  slug: "credentialing-timeline-checklist",
  title: "The Credentialing Timeline Checklist",
  subtitle:
    "Where enrollment quietly costs a practice money — and the dates that decide whether work you have already done is billable.",
  metaTitle: "Credentialing Timeline Checklist",
  metaDescription:
    "Medicare effective dates, retrospective billing, revalidation deactivation, CAQH lapses, and payer contract dates — a sourced credentialing checklist for practices of any size.",
  keyword: "provider credentialing timeline",
  relatedService: "credentialing-enrollment",
  intro: [
    "Credentialing failures rarely look like failures. Nobody sends a letter saying a provider is unbillable. The claims simply deny, or the enrollment quietly deactivates, and the practice discovers months of work was never payable.",
    "Almost all of it comes down to dates — which one governs, when the clock actually starts, and who was watching it. A provider can be fully credentialed with a payer and still have a window of services nobody can bill.",
    "This is a checklist of the dates that decide that. It applies to a solo provider adding one payer and to a group onboarding forty at once. The volume differs; the rules don't.",
  ],
  freeSections: [
    {
      heading: "1. Your effective date is not the date you were approved",
      body: [
        "This is the single most expensive misunderstanding in provider enrollment. Approval tells you the application succeeded. It does not tell you which services are billable.",
        "For physicians and non-physician practitioners, Medicare sets the effective date of billing privileges as the later of the date of filing, or the date the supplier first began furnishing services at a new practice location. Filing late does not move the clock back to when the provider started seeing patients — it moves the billable date forward to when the paperwork arrived.",
        "There is one narrow relief valve. Retrospective billing can reach back up to 30 days prior to the receipt of the enrollment package: if the date requested is not more than 30 days prior to receipt, the requested date becomes the Medicare effective date. During a Presidentially declared disaster that window widens — reassigners can be backdated up to 120 days from the receipt date, and all others up to 90 days.",
        "Thirty days is the entire margin for error in normal conditions. A provider who starts seeing Medicare patients sixty days before the application is filed has thirty days of services that cannot be billed to anyone.",
      ],
      verify:
        "For every provider who started in the last year, the gap between their first date of service and the date their enrollment application was received. Anything beyond 30 days was written off, whether or not anyone recorded it as a write-off.",
    },
    {
      heading: "2. Revalidation deactivates you on a schedule, and the notice is easy to miss",
      body: [
        "Medicare requires enrolled providers to revalidate their enrollment information roughly every five years. This is not optional maintenance and it is not triggered by anything the practice does — it arrives on Medicare's calendar, not yours.",
        "Notification is where practices lose it. Revalidation letters go to the special payments address and the correspondence address on file — addresses that are often years old, sometimes a former billing company, sometimes a suite the practice has left. Reminder emails go out roughly four months before the due date and again about six weeks prior, but only if a valid email is on file.",
        "Miss the submission window and enrollment is deactivated, typically within 60 to 75 days after the due date. Reactivation means re-enrolling, and claims for services in the gap are rejected. A provider who has practised continuously for years becomes unbillable because a letter went to the wrong address.",
      ],
      verify:
        "The correspondence and special payments addresses on file in PECOS for every enrolled provider, and whether the email on file reaches someone who will act on it. Check the addresses, not just the due dates — a due date you never receive is the failure mode.",
    },
  ],
  gatedSections: [
    {
      heading: "3. A lapsed CAQH attestation freezes everything downstream",
      body: [
        "CAQH ProView is where most commercial payers pull provider data during credentialing and re-credentialing. Attestation is the provider's confirmation that the profile is still accurate, and it must be repeated periodically — it is not a one-time setup task.",
        "When an attestation lapses the profile stops being treated as current. Payers pulling data during that window see a profile flagged as out of date, and credentialing and re-credentialing processes that depend on it stall. Nothing is rejected outright; it simply stops moving, which is why lapses often go unnoticed until a payer asks why an application has been sitting.",
        "The practical problem is ownership. Attestation reminders go to the individual provider's email, not to whoever manages credentialing — so the alert reaches the person least likely to act on it and least aware of what it blocks.",
      ],
      verify:
        "Whose inbox CAQH reminders reach for each provider, and whether anyone other than that provider would notice a lapse. Confirm the current attestation date for every provider directly in ProView rather than assuming.",
    },
    {
      heading: "4. Payer contract dates and credentialing approval are different dates",
      body: [
        "Being credentialed with a payer and being contracted to bill them are two separate events, and the second does not automatically follow the first. Credentialing verifies the provider. The contract establishes the participation and its effective date.",
        "Practices routinely start scheduling patients on the credentialing approval, then discover the contract's effective date is later — sometimes the first of the following month, sometimes tied to a load date in the payer's system. Services in between are out-of-network for a patient who was told otherwise.",
        "This is worth pinning down in writing, per payer, because the answer varies and nobody volunteers it.",
      ],
      verify:
        "For each payer added in the past year, whether you hold a written participation effective date — and whether any patient was scheduled as in-network before it.",
    },
    {
      heading: "5. A new location restarts the clock, even for credentialed providers",
      body: [
        "Opening or acquiring a location does not carry existing enrollments across. Each provider's billing privileges are tied to practice locations, and a new site means new filings — for providers who are already fully credentialed everywhere else.",
        "The trap is modelling the financial timeline against the clinical one. A site can be staffed, licensed, and seeing patients while nobody there is billable. Because the effective date is the later of filing or the start of services at that location, every day the paperwork lags is a day of unbillable work.",
        "Credentialing should start when a deal is in motion, not when it closes.",
      ],
      verify:
        "For any location opened or acquired in the last two years, the date services began there against the date enrollment was filed for it. The gap is the revenue that was never collectable.",
    },
    {
      heading: "6. Expirables lapse quietly and take billing with them",
      body: [
        "State licenses, DEA registrations, board certifications, and malpractice coverage all expire on their own schedules. Each is a credentialing prerequisite, and a lapse can suspend participation with payers that require it — often without an explicit notice tying the suspension to the cause.",
        "The failure is structural rather than negligent. Expiry dates live across a dozen systems and inboxes, each provider tracks their own, and nobody holds the consolidated view. It works until one is missed, and the miss surfaces as unexplained denials.",
      ],
      verify:
        "Whether a single list exists showing every expirable for every provider with its expiry date. If that list lives in more than one place, it does not exist.",
    },
    {
      heading: "7. Delegated credentialing changes who is accountable, not whether it is done",
      body: [
        "Larger groups sometimes hold delegated credentialing agreements, performing primary source verification themselves rather than each payer repeating it. Done well it shortens onboarding substantially.",
        "It also transfers the obligation. The delegating payer audits against the agreed standard, and a group that has drifted from its own documented process faces findings and potentially the loss of delegation — which would push every future provider back through full payer-side credentialing on the payer's timeline.",
        "For smaller practices this is not an option to pursue, but it is worth understanding when a billing or credentialing partner claims to hold delegation: ask which payers, and when it was last audited.",
      ],
      verify:
        "If you hold delegation, the date of your last audit and whether current practice matches the documented process. If a partner claims it, which payers it covers.",
    },
  ],
  checklist: [
    "Gap measured between first date of service and enrollment filing date for every provider added in the last year",
    "PECOS correspondence and special payments addresses confirmed current for every provider",
    "A monitored inbox — not only the provider's — receives revalidation and CAQH notices",
    "Current CAQH attestation date confirmed in ProView per provider",
    "Written participation effective date held for every payer, per provider",
    "Enrollment filed for every practice location before services began there",
    "One consolidated list of expirables: licenses, DEA, board certifications, malpractice",
    "If delegated credentialing applies, last audit date known and process matches practice",
  ],
  sources: [
    {
      label: "First Coast Service Options (CMS MAC) — Determining your Medicare effective date",
      url: "https://medicare.fcso.com/enrollment/determining-your-medicare-effective-date",
    },
    {
      label: "Noridian Healthcare Solutions (CMS MAC) — Revalidation",
      url: "https://med.noridianmedicare.com/web/jfb/enrollment/revalidation",
    },
    {
      label: "CMS — Medicare Provider Enrollment (MLN9658742)",
      url: "https://www.cms.gov/medicare/enrollment-renewal/providers-suppliers",
    },
    { label: "CAQH ProView — provider attestation requirements" },
  ],
  // Enrollment rules change less often than fee schedules, but the disaster
  // backdating windows shift with active declarations.
  reviewBy: "2027-02-28",
};

export const resources: Resource[] = [labBillingChecklist, credentialingChecklist];

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourcesForSpecialty(slug: string): Resource[] {
  return resources.filter((r) => r.relatedSpecialty === slug);
}

export function getResourcesForService(slug: string): Resource[] {
  return resources.filter((r) => r.relatedService === slug);
}

export function getResourcesForIndustry(slug: string): Resource[] {
  return resources.filter((r) => r.relatedIndustry === slug);
}

/**
 * The resource that belongs with a blog post, matched on whichever of the
 * three relations the post carries. Returns undefined when nothing matches —
 * an unrelated resource on a post is worse than none, so callers should render
 * nothing rather than fall back to whatever exists.
 */
export function getResourceForPost(post: {
  relatedSpecialty?: string;
  relatedService?: string;
  relatedIndustry?: string;
}): Resource | undefined {
  return resources.find(
    (r) =>
      (post.relatedSpecialty && r.relatedSpecialty === post.relatedSpecialty) ||
      (post.relatedService && r.relatedService === post.relatedService) ||
      (post.relatedIndustry && r.relatedIndustry === post.relatedIndustry),
  );
}
