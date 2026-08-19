# Buffer setup and combined posting schedule

Everything needed to load Buffer in one place. Post text lives in
`facebook-posts.md` (Facebook) and §5 of `smm-plan.md` (LinkedIn).

## Do this before queueing anything

**Deploy the site first.** Facebook and LinkedIn scrape a URL's preview once and
cache it. If a link is posted before the per-post OG images ship, the platforms
cache an imageless card and keep serving it even after the deploy — clearing it
means re-scraping each URL by hand through Facebook's Sharing Debugger. Deploy,
then queue.

## Channel schedule settings

Set these slots in Buffer per channel. With slots configured, "Add to Queue"
drops each post into the next open slot in order — so posts get dated
automatically and there's no picking dates by hand.

| Channel | Days | Time |
|---|---|---|
| LinkedIn | Mon, Wed, Fri | 9:00 AM Pacific |
| Facebook | Tue, Thu | 9:00 AM Pacific |

The 9am Pacific slot is a convention, not a finding. After ~6 posts, check each
platform's own analytics and move it if the data disagrees.

## Load order

Add posts to each channel's queue **in numerical order** (#1 first). Buffer fills
slots chronologically, so the order below is what results.

Post #0 is already published and pinned on both platforms — do not re-queue it.

| Date | Channel | # | Topic |
|---|---|---|---|
| Wed 2026-08-19 | LinkedIn | 1 | Cardiology denial patterns |
| Thu 2026-08-20 | Facebook | 1 | Cardiology denial patterns |
| Fri 2026-08-21 | LinkedIn | 2 | Behavioral health denial rates |
| Mon 2026-08-24 | LinkedIn | 3 | Primary care: when to stop DIY billing |
| Tue 2026-08-25 | Facebook | 2 | Behavioral health denial rates |
| Wed 2026-08-26 | LinkedIn | 4 | Lab & diagnostics billing |
| Thu 2026-08-27 | Facebook | 3 | Primary care: when to stop DIY billing |
| Fri 2026-08-28 | LinkedIn | 5 | Signs your call center can't keep up |
| Mon 2026-08-31 | LinkedIn | 6 | Small practice + call center partner |
| Tue 2026-09-01 | Facebook | 4 | Lab & diagnostics billing |
| Wed 2026-09-02 | LinkedIn | 7 | CAQH / Medicare / Medicaid roadmap |
| Thu 2026-09-03 | Facebook | 5 | Signs your call center can't keep up |
| Fri 2026-09-04 | LinkedIn | 8 | Credentialing timelines for new locations |
| Tue 2026-09-08 | LinkedIn | 9 | What full-cycle RCM covers |
| Tue 2026-09-08 | Facebook | 6 | Small practice + call center partner |
| Wed 2026-09-09 | LinkedIn | 10 | What to outsource first |
| Thu 2026-09-10 | Facebook | 7 | CAQH / Medicare / Medicaid roadmap |
| Fri 2026-09-11 | LinkedIn | 11 | Billing across multiple specialties |
| Tue 2026-09-15 | Facebook | 8 | Credentialing timelines for new locations |
| Thu 2026-09-17 | Facebook | 9 | What full-cycle RCM covers |
| Tue 2026-09-22 | Facebook | 10 | What to outsource first |
| Thu 2026-09-24 | Facebook | 11 | Billing across multiple specialties |

Mon 2026-09-07 is Labor Day — LinkedIn #9 shifts to Tue 09-08, which is why two
posts land that day. If Buffer auto-fills the Monday slot, move that one post.

**All 22 links verified live in production 2026-08-18** — every blog URL and the
homepage return 200.

## After the queue empties

LinkedIn runs dry 2026-09-11, Facebook 2026-09-24. Both need new blog posts to
companion. Restock the blog pipeline before mid-September or the cadence stalls
the way it did in July.
