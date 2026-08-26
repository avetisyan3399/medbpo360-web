# DRAFT FOR REVIEW — Lab Billing Compliance Checklist

*Draft 2026-08-25, published 2026-08-25. Section 2 corrected the same day: the PAMA reporting window closed 2026-07-31, so it was written in the wrong tense. See lib/resources.ts for the shipped text — that file is the source of truth, not this draft.*

*Original note: Every factual claim is sourced; sources listed at the end. Company voice, no client outcomes claimed, no invented statistics.*

**Gate design:** everything above the `--- GATE ---` marker is free and indexable. Below it requires an email to keep reading, in-page — no download required.

---

## Working title

**The Lab Billing Compliance Checklist: Seven Places Diagnostic Revenue Quietly Leaks**

*Subtitle: What clinical, molecular, and pathology labs should verify before the next audit — not after.*

---

## Opening

Lab billing is not physician billing applied to specimens. It runs on a separate regulatory framework, and the failure modes are specific enough that a lab can be genuinely excellent at one part of it and exposed on another without knowing.

The pattern is consistent: labs rarely lose money because a claim was coded wrong. They lose it because a rule that governs *who may bill, when, and on what date* was applied incorrectly at scale, quietly, for months — and nobody looks until an audit or a recoupment letter arrives.

This is a checklist of seven places that happens. It applies whether you run a small physician office lab or a multi-site molecular reference lab. The volume differs; the rules don't.

---

## 1. The date-of-service rule decides who gets paid — and it is not intuitive

For most clinical diagnostic lab tests, Medicare's date of service is **the date the specimen was collected**, not the date the test was performed. When the specimen comes from a hospital outpatient, that ordinarily makes the test part of the hospital's claim, not the performing lab's.

The exception is where labs get into trouble. Since January 1, 2018, CMS has allowed the date of service to be **the date the test was performed** for Advanced Diagnostic Laboratory Tests and for molecular pathology tests excluded from OPPS packaging — meaning the performing laboratory bills Medicare directly. But only when all three conditions hold:

1. It was medically appropriate to collect the sample during the hospital outpatient encounter
2. The results do not guide treatment provided during that encounter
3. The test was reasonable and medically necessary for treatment of an illness

Condition 2 is the one that fails in practice. If the result came back in time to influence care during that same encounter, the exception doesn't apply — and a lab that billed Medicare directly billed a claim it wasn't entitled to.

**Verify:** that someone can articulate, for each molecular test line, which date-of-service pathway applies and why. If the answer is "we always bill Medicare directly," that's not a policy, it's an assumption.

## 2. PAMA reporting is live again, and the window is specific

After several years of legislative delay, private payer rate reporting is back. The Consolidated Appropriations Act of 2026, signed February 3, set the next data reporting period as **May 1 through July 31, 2026**, based on private payer data collected **January 1 through June 30, 2025**.

Two things labs get wrong:

- **What counts as the rate.** You report the *allowed amount* — payment from the insurer plus any patient cost sharing — regardless of whether you were in network or out of network for that payer. Not your charge, not your net receipt.
- **The collection period is already closed.** The data you must report covers the first half of 2025. If nobody was capturing it then, you are reconstructing it now from remittance data under a deadline.

On the payment side: there is no phase-in reduction in 2026. Beginning in 2027 through 2029, payment for a test may not be reduced by more than 15% per year against the prior year's rate.

**Verify:** that you know whether you meet the definition of an applicable laboratory for this cycle, and that someone owns the July 31 deadline by name.

--- GATE ---

*(Everything below requires an email address to continue reading.)*

## 3. Routine ABNs are not a safety net — they are a finding

Issuing an Advance Beneficiary Notice to every Medicare patient as standard practice feels like prudence. It is the opposite: **CMS does not permit blanket or routine ABNs.**

An ABN is valid when the lab has a specific, articulable reason to believe Medicare will not pay — medical necessity, a frequency limitation, an experimental or investigational service. It must be delivered far enough ahead that the patient can make a real decision. A form handed over at the draw chair as a formality satisfies neither requirement, and an ABN found to be defective does not transfer financial liability to the patient. The lab absorbs it.

**Verify:** pull ten ABNs from the last quarter. Can you state the specific expected reason for non-coverage on each? If they all say the same thing, they are routine, and they will not hold.

## 4. Coverage is local, and local means your MAC

Local Coverage Determinations vary by Medicare Administrative Contractor jurisdiction. A test payable in one jurisdiction can be non-covered in another, with different diagnosis code requirements and different frequency limits.

Labs that receive specimens from multiple states routinely apply one jurisdiction's coverage logic across all of them. It works until it doesn't, and it fails retroactively across every claim in the period.

**Verify:** that your coverage rules are keyed to the correct MAC for each referring location — not to whichever jurisdiction your billing team learned first.

## 5. Panel size is now an explicit enforcement priority

The HHS Office of Inspector General added a work plan initiative examining **expanded laboratory panels** — those detecting six or more pathogens — versus targeted panels detecting up to five. Expanded panels pay materially more, and OIG's stated concern is that they are being run where a targeted panel would have been clinically sufficient.

This is a documentation problem before it is a billing problem. If the ordering rationale for the broader panel isn't in the record, the claim is indefensible even when the panel was the right call clinically.

**Verify:** for your highest-volume expanded panel, whether the medical record supports why the broader panel was ordered. Not the diagnosis code — the reasoning.

## 6. Genetic and molecular testing is where the scrutiny is concentrated

The numbers explain why. An OIG report published January 2026 found Medicare Part B spending on clinical diagnostic lab tests rose 5% to **$8.4 billion in 2024** — while the number of enrollees receiving tests declined. Genetic testing accounted for **43% of that spending ($3.6 billion) while representing only 5% of tests paid**.

That disproportion is what draws attention. OIG's 2026 work plan includes an initiative on genetic testing vulnerabilities specifically, examining fraud exposure, trends among testing laboratories, and geographic variation between jurisdictions that do and do not participate in the Molecular Diagnostic Services Program. Separately, the Department of Justice's 2025 National Health Care Fraud Takedown charged 49 defendants in connection with $1.17 billion in alleged Medicare fraud involving genetic testing and telemedicine arrangements.

None of this makes legitimate molecular testing risky. It does mean the documentation standard is higher than it is elsewhere, and that referral-source arrangements deserve scrutiny before someone else applies it.

**Verify:** where your genetic test orders originate, and whether any single referral relationship or telemedicine arrangement accounts for a share of volume you would struggle to explain.

## 7. Medical necessity has to be established before the specimen is drawn

Every item above shares a root cause: the decision that determines whether a claim is payable happens before the lab ever runs the test — at ordering. Diagnosis-to-test linkage, frequency history, coverage jurisdiction, panel scope, and the date-of-service pathway are all fixed at that moment.

Labs that treat billing as a back-end function are reconstructing intent after the fact. Labs that push validation to the point of order stop generating the denials in the first place.

**Verify:** how many of last month's denials could have been prevented at order entry rather than appealed afterward. That number is the honest measure of where your revenue cycle actually starts.

---

## The checklist

- [ ] Date-of-service pathway is documented per molecular test line, with the three-condition exception applied deliberately
- [ ] Applicable-laboratory status determined for the current PAMA cycle
- [ ] PAMA data for Jan 1–Jun 30, 2025 assembled as allowed amounts, in and out of network
- [ ] A named owner for the July 31, 2026 PAMA deadline
- [ ] ABNs issued only on specific anticipated non-coverage, with time to decide
- [ ] Coverage rules keyed to the correct MAC per referring location
- [ ] Expanded panel orders supported by documented clinical rationale
- [ ] Referral concentration in genetic testing reviewed
- [ ] Denial analysis segmented by preventable-at-order versus not

---

## Sources

- CMS, Laboratory Date of Service Policy — https://www.cms.gov/medicare/payment/fee-schedules/clinical-laboratory-fee-schedule-clfs/date-service-policy
- Noridian (MAC), Laboratory Date of Service — ADLT and Molecular Pathology Tests
- CMS, CLFS & PAMA Reporting and Resources — https://www.cms.gov/medicare/payment/fee-schedules/clinical-laboratory-fee-schedule/clfs-pama-reporting-resources
- Consolidated Appropriations Act of 2026 (signed February 3, 2026), CLFS provisions
- CMS, ABN Form Instructions and Medicare Claims Processing Manual Chapter 30
- HHS OIG, report on Medicare Part B clinical diagnostic laboratory test spending, January 2026
- HHS OIG Work Plan, 2026 — genetic testing oversight and expanded laboratory panels
- U.S. DOJ, 2025 National Health Care Fraud Takedown

---

## Notes for review

1. **Nothing here claims medbpo360 results.** Every number is attributed to CMS, OIG, or DOJ.
2. **The gate falls after section 2.** Sections 1–2 are the most searchable content, which is deliberate — they should be indexable and rank. The checklist itself sits behind the gate, since that is the part people save.
3. **Verify before publishing:** whether medbpo360 actually offers order-entry-stage validation (section 7 implies it). If not, soften that line — it should describe good practice, not imply a service you don't run.
4. **Shelf life:** the PAMA dates go stale after July 31, 2026. Section 2 needs a revision date in the calendar.
