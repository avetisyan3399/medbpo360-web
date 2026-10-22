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

---

# Revision 2026-10-21 — what is actually being run

The plan above was drafted 2026-08-26 on the assumption that the free levers would run first and that ads would start once the question was *"how do we get more of this?"*. That is not what happened. The free levers never ran, and organic reach has since collapsed: 21 posts from 08-17 to 10-14 produced 925 impressions, 15 clicks, 1 like, 0 comments and 0 followers, with daily impressions falling from 24/day in August to 3.2/day by mid-October. Click-through across the whole run is 1.6%, which is normal — the posts convert the few people who see them, and almost nobody sees them.

So the ad is starting earlier, smaller, and against a different question: *does this audience respond at all?*

Two deliberate departures from the brief above, both of which overturn reasoning written in August.

**Credentialing, not lab billing, goes first.** The August argument for lab was the only genuine demand signal in Search Console. That argument is about Google, where people arrive already searching for a solution. LinkedIn has no search intent to capture — it interrupts people by job title, and "lab billing manager" is a far smaller targetable population than "practice manager." At $300 a narrow audience in an expensive auction is a liability, not a focus. Credentialing is also the least specialty-specific pain medbpo360 sells against, so the targeting does not have to be tight to work.

**A Lead Gen Form, not a landing page.** The August reasoning — end-to-end measurement, and traffic that builds a retargeting audience for campaign 3 — is sound at a larger budget. At $300 it is unreachable: LinkedIn requires a minimum audience size before a website retargeting audience can be used for anything, and this spend will not produce it. What binds at this budget is how many clicks the test needs before a null result means something, and the pre-filled form cuts that materially. The accepted cost is colder leads and a manual export. The form's thank-you URL still sends people to the resource page, so they land on the site either way.

## Campaign spec as launched

| Field | Value |
|---|---|
| Objective | Lead generation |
| Budget | $300 lifetime, daily cap $25, ends Mon 2026-11-09 |
| Start | Mon 2026-10-26 |
| Format | Single image, `brand/ad-credentialing-checklist.jpg` (1200×627) |
| Audience | US · job functions Healthcare Services, Operations, Finance · seniority Manager/Director/Owner · headcount 1–200 · titles Practice Manager, Practice Administrator, Revenue Cycle Manager, Billing Manager, Office Manager |
| Audience Expansion | **Off** |
| LinkedIn Audience Network | **Off** |

### Ad copy

**Intro text**

> Medicare sets a new provider's billing start date as the later of two dates, and retrospective billing reaches back only 30 days.
>
> Miss that window and you have weeks of work that cannot be billed to the payer or to the patient. It is simply gone — and most practices never record it as a loss, because nobody was watching that date.
>
> That is one of seven dates in the checklist. Sourced to CMS and its Medicare contractors throughout.

**Headline:** Seven dates that decide whether a provider is billable

**Description:** Free checklist, sourced to CMS.

**Call to action:** Download

### Lead Gen Form

| Field | Value |
|---|---|
| Form name | Credentialing Timeline Checklist |
| Headline | Get the checklist |
| Details | Seven dates that decide whether a new provider is billable. Sourced to CMS and its Medicare contractors. |
| Fields | First name · Last name · Work email — **nothing else** |
| Privacy policy URL | `https://medbpo360.com/privacy` |
| Confirmation URL | `https://medbpo360.com/resources/credentialing-timeline-checklist` |

Every extra form field costs completions. Three is the whole form.

## Running in parallel

The free levers run alongside the ad rather than before it, at the owner's decision on 2026-10-21: 250 page invites to real prospects (not job seekers), and five comments as the page twice a week. A reminder on 2026-11-18 re-pulls the exports to see whether organic moved. Keep the two apart in that analysis — sponsored impressions sit in their own columns and must not be mixed into the organic trend.
