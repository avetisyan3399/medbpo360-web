# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Several sessions share this working tree

The owner runs multiple Claude sessions against this repo at the same time. Files you did not create will appear in `git status` mid-task, and commits you did not make will appear in the log.

- **Stage by explicit path.** Never `git add -A`, `git add .`, or `git commit -a`. Name each file. On 2026-08-25 an `add`-everything commit swept two unreviewed blog posts from another session into an unrelated commit and pushed them live.
- **Check what you are about to publish.** Run `git log --oneline origin/main..HEAD` before every push and confirm you reviewed each commit listed. `main` auto-deploys to production.
- **Leave other sessions' work alone.** Do not commit, revert, stash, or `checkout` files you did not write. If they block you, say so rather than clearing them.

# Blog content rules

- Company voice only, byline `medbpo360 Team`. The owner stays personally anonymous.
- No invented statistics, testimonials, or client outcomes. Cite real industry sources and attribute them explicitly — never present third-party data as medbpo360's own results.
- **Verify every figure at the publisher's own page before publishing it.** A WebSearch result summary is a lead, not a source. This has caught fabricated-by-paraphrase stats and figures traceable only to vendor marketing blogs. If a number cannot be confirmed at its source, drop it.
- Size-inclusive: a solo or deliberately stable practice is a wanted client, not a stepping stone. Equally, do not overclaim breadth — only the specialties in `lib/specialties.ts`, services in `lib/service-pages.ts`, and org types in `lib/org-types.ts`.
- Every post needs exactly one of `relatedService` / `relatedSpecialty` / `relatedIndustry` in frontmatter, pointing at a real slug. It drives the "From the Blog" section on that page.
- Posts are date-gated (`date <= today`), so a future-dated post is **excluded from the build** — `next build` will not catch a frontmatter error in one. Validate frontmatter directly instead.
