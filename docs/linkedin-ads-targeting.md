# LinkedIn Ads — targeting brief

*Drafted 2026-08-26. Nothing here has been spent against; this is the setup to use when the owner decides to start. Written after conversion tracking went live (partner id 9891444, conversion id 28029316) and both gated resources shipped.*

## Before spending anything

Two free levers are still untouched, and both should be running first — not because ads are wrong, but because paying for something you can get free is a bad first move.

1. **Connection invites.** ~250 credits/month, refunded when accepted. Zero sent to date.
2. **Commenting as the page** on MGMA / HBMA / healthcare-admin posts, 2–3x a week.

Ads should start when the question is *"how do we get more of this?"* rather than *"does any of this work?"*

## Campaign 1 — Lab billing checklist (start here)

**Why this one first:** lab billing is the only genuine demand signal in Search Console. Six distinct commercial queries appear (`molecular lab billing`, `clinical lab billing specialists`, `genomic lab billing services`, and others), and `/specialties/laboratory-diagnostics` is already the fourth most-impressed page on the site. Everything else would be guessing.

**Objective:** Website conversions
**Destination:** `https://medbpo360.com/resources/lab-billing-compliance-checklist`
**Conversion:** the existing Contact Form Submission conversion, plus the resource unlock

| Facet | Setting |
|---|---|
| Location | United States (set to *permanent* location, not "recently in") |
| Company industry | Hospitals and Health Care; Medical Practices; and any laboratory/diagnostics industry your account exposes — LinkedIn's taxonomy shifts, so check what is actually listed |
| Company size | 11–50, 51–200, 201–500 |
| Job seniority | Manager, Director, VP, CXO, Owner |
| Job titles | Laboratory Director; Laboratory Manager; Director of Laboratory Services; Revenue Cycle Manager; Revenue Cycle Director; Billing Manager; Practice Administrator; Compliance Officer |
| Job function *(alternative to titles, not in addition)* | Operations; Finance; Healthcare Services |
| Exclude | Staffing and Recruiting industry — otherwise recruiters and agencies eat budget |

**Use titles OR function, not both.** LinkedIn ANDs facets together, so stacking them collapses the audience to almost nothing and delivery suffers.

**Target audience size: roughly 20,000–80,000.** Below ~15k LinkedIn struggles to deliver and costs climb. Far above 100k and you are paying to reach people who will never convert.

## Campaign 2 — Credentialing checklist (second)

Broader audience, less search evidence behind it, but the pain is sharper and more urgent — enrollment delays cost money on a visible clock.

**Destination:** `https://medbpo360.com/resources/credentialing-timeline-checklist`

| Facet | Setting |
|---|---|
| Location | United States |
| Company industry | Hospitals and Health Care; Medical Practices |
| Company size | 11–50, 51–200 (the owner's stated focus is Independent & Growing Practices) |
| Job seniority | Manager, Director, Owner, CXO |
| Job titles | Practice Administrator; Practice Manager; Credentialing Specialist; Credentialing Manager; Director of Operations; Office Manager; Revenue Cycle Manager |
| Exclude | Staffing and Recruiting |

## Campaign 3 — Retargeting (cheapest, run once eligible)

Requires 300+ site visitors before LinkedIn will build the audience — the same threshold that gates Website Demographics. The Insight Tag has been collecting since 2026-08-25, so this unlocks on its own timeline.

Retarget everyone who visited a resource page but did not reach `/contact/thank-you`. These are the highest-intent people the site has, and they cost materially less to reach than cold audiences.

## Settings that quietly waste money

- **Turn off Audience Expansion.** On by default. It shows ads to people LinkedIn considers "similar", which dilutes exactly the precision you are paying LinkedIn for.
- **Turn off the LinkedIn Audience Network** for the first campaign. It places ads on third-party sites and makes performance harder to read. Test it separately later if at all.
- **Bidding:** start with manual bidding or a cost cap, not maximum delivery. Maximum delivery spends the full budget regardless of whether it is finding the right people.
- **Schedule:** business hours, weekdays. Practice managers are not reading about PAMA reporting on a Sunday.

## Budget reality

LinkedIn is the most expensive major B2B channel — that is the trade for the targeting. Expect clicks in the high single digits to low teens, and leads in healthcare B2B commonly $50–200+.

**A $300 test tells you nothing.** A campaign needs roughly 6–8 weeks and a few thousand dollars before the numbers mean anything. If that is not the budget, the invites and page commenting are where the return is.

Suggested first commitment: **one campaign, $40–50/day, six weeks** (~$1,700–2,100). One campaign, not three — three small campaigns each starve.

## What to measure, and when

Do not judge anything in week one. At the six-week mark:

- **Cost per lead**, from the conversion — not cost per click
- **Which titles converted**, from the demographics breakdown. This is often the most valuable output, regardless of whether the campaign paid for itself
- **Resource unlock rate** on the landing page — if clicks are cheap but nobody unlocks, the problem is the page, not the targeting

Two independent measurements exist: LinkedIn's conversion and GA4's `generate_lead`. If they diverge materially, investigate before trusting either.

## Lead Gen Forms — deliberately not first

LinkedIn's native Lead Gen Forms typically convert better than a landing page, because the form pre-fills from the member's profile.

They are not the first test here because leads land inside LinkedIn rather than in the site's own flow: no Insight Tag conversion, no retargeting audience built, and the contact has to be exported. Website conversions are measurable end to end and feed campaign 3.

Worth testing as a variant once there is a baseline to compare against.
