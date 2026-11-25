# Money Memory: decision log

## What this log is for
1. Keep every product and technical decision in one place: what was decided, the alternatives, why, and what we gave up.
2. **Keep `CLAUDE.md` up to date.** Whenever the user asks for a change to how Claude works on this project, or a decision changes a rule, stack item, command or "never" item, update `CLAUDE.md` in the same change and record it here.
3. Be the source of truth when the PRD, RFC and code disagree.

## Rules for Claude
- Add a new entry for every decision the user makes or changes. Never rewrite an old entry: mark it `Replaced by Dxx` and add a new one.
- Fill every field. If the user did not give a reason, write "Not stated" instead of inventing one.
- The **CLAUDE.md** field is `Updated: <what changed>` or `No change`.
- When the user says "add to CLAUDE.md", "remember this", "from now on" or "always / never ...": update `CLAUDE.md`, then log it here.
- Keep `CLAUDE.md` under 100 lines. If it grows past that, propose what to move to `docs/` before adding more.
- Open questions go in the "Open" table, not as decisions.

## Entry template
```
### Dxx: <short title>
- Date: YYYY-MM-DD
- Status: Active | Replaced by Dxx
- Decision:
- Alternatives:
- Why:
- What we gave up:
- CLAUDE.md: Updated: ... | No change
```

## Decisions

| # | Date | Decision | Alternatives | Why | Gave up | Status | CLAUDE.md |
| --- | --- | --- | --- | --- | --- | --- | --- |
| D1 | 2026-11-16 | iOS and Android from one Expo codebase | Native per platform; web app | One builder, one codebase | Some native-only features | Active | Stack |
| D2 | 2026-11-16 | AI provider switchable between Claude and OpenAI | One provider | Flexibility | Simplicity | Replaced by D17 | - |
| D3 | 2026-11-16 | Hebrew, Arabic and English in v1 | Hebrew only first | Reach all three audiences | Speed; more testing | Active (see D14) | Code rules |
| D4 | 2026-11-18 | AI assistant is read-only | Add with confirmation; full actions | Lowest security risk (OWASP excessive agency) | Convenience | Active | AI section |
| D5 | 2026-11-18 | Shekel only | Currency label; multi-currency | Smaller scope | Users with foreign currency | Active | Code rules |
| D6 | 2026-11-18 | Sign-in with email, Apple, Google | Email only; phone SMS | Covers both stores | Phone sign-in | Active | No change |
| D7 | 2026-11-18 | Reminder default: 2 days before 09:00 and on due date | 1 day before; no default | Clear default | - | Active | No change |
| D8 | 2026-11-18 | Delete receipt images and raw SMS after extraction | Keep image; user chooses | Less sensitive data held | Viewing receipts later | Active | AI + Never |
| D9 | 2026-11-18 | Users must be 18+ | 16+; ask lawyer | Avoid minors' consent rules | Younger users | Active | Never |
| D10 | 2026-11-18 | Home leads with spending, then action cards, then payments | Payments first; split tabs | Product purpose: know and plan spending | - | Active | Description |
| D11 | 2026-11-18 | Monthly budget per category and a savings goal | Budget only; goal only | Plan and save | - | Active | Description |
| D12 | 2026-11-18 | Live actions are cards on Home; savings tips are rule-based | Push nudges; AI tips | Low risk, no AI needed | AI advice | Active | Description |
| D13 | 2026-11-18 | One builder (founder with Claude and Cursor) | Two devs; team | Reality | - | Active | No change |
| D14 | 2026-11-18 | Keep three languages in v1 (CTO flagged as costly) | Hebrew only; Hebrew + Arabic | Founder's choice | Launch speed | Active | Code rules |
| D15 | 2026-11-18 | Two releases | One launch; AI first | Smaller first launch | R1 without AI and payment | Active | Description |
| D16 | 2026-11-18 | Store billing; in-app Cancel opens store cancel page | External payment; no payment | Fits store rules (verify) | Store fee; cancel outside app (lawyer) | Active | No change |
| D17 | 2026-11-18 | One AI provider behind an interface | Two providers | One test set, one agreement | Instant switching | Active | Stack |
| D18 | 2026-11-18 | Receipt scanning with AI vision, monthly limit | On-device OCR; no scanning | Accuracy in Hebrew | Cost per scan (unknown) | Active | No change |
| D19 | 2026-11-18 | Managed backend with per-user access rules | Own server; phone only | Ready isolation | Control | Replaced by D23 | - |
| D20 | 2026-11-18 | Local notifications + one email with send log | Server push; push only | Works offline | Harder measurement | Active | Code rules |
| D21 | 2026-11-18 | Offline is read-only | Full offline; always online | No sync conflicts | Adding offline | Active | No change |
| D22 | 2026-11-18 | Metrics from own DB events, no names or amounts | External analytics; survey | Privacy, no extra processor | Ready dashboards | Active | Code rules |
| D23 | 2026-11-18 | Course stack: Expo, Next.js, Express + TS, PostgreSQL + Prisma, Redis + BullMQ, Zod, hosted on Render | Managed backend (D19); Railway | Course requirement | Built-in isolation: replaced by a userId rule and a cross-user test per endpoint | Active (confirmed 2026-11-18) | Updated: stack, userId rule, cross-user test |
| D24 | 2026-11-18 | Decision log keeps CLAUDE.md up to date on request | Update CLAUDE.md manually | One place, no drift | - | Active | How we work |
| D25 | 2026-11-18 | Build budget for version 1.0 is 60 hours (10 h/week × 6 weeks) | 100 h; 150 h | Founder's answer (session 11) | Everything that does not fit 60 h | Replaced by D32 | No change |
| D26 | 2026-11-18 | Version 1.0 = Must only (9 tasks, about 49 h + 20% buffer ≈ 59 h). See "MVP prioritization" below | Must + top RICE items; the full Release 1 from D15 | Must alone fills the 60 h budget once the 20% buffer is added | Budgets, savings goal, action cards, subscriptions screen, snooze move to 1.1 | Active (confirmed 2026-11-18) | Updated: CLAUDE.md now builds version 1.0 only, scope in docs/tasks.md |
| D27 | 2026-11-18 | Version 1.0 in Hebrew only, with RTL and translation files ready; Arabic and English in 1.1 | Keep three languages (D14) and cut other Must items | Three languages do not fit 60 h; translation files keep the later switch cheap | Arabic and English speakers at launch | Rejected by founder (D14 kept) | No change |
| D28 | 2026-11-18 | Version 1.0 sign-in by email only; Apple and Google in 1.1 | Email + Apple + Google (D6) | Saves about 5 h; must check whether store rules then require Apple sign-in | One-tap sign-in | Active (confirmed 2026-11-18); method in D34 | Updated: sign-in line |
| D29 | 2026-11-18 | Version 1.0 reminders are local notifications only; server email (and Redis + BullMQ) moves to 1.1 | Local + email (D20) | Email + queue cost about 10 h; local notifications cover the core promise | A backup channel for users who turned notifications off | Active (confirmed 2026-11-18) | Updated: Redis/BullMQ removed from 1.0 stack |
| D30 | 2026-11-18 | Concierge (manual) work in 1.0 instead of building: data export on request by email; onboarding the first users personally; privacy and terms as one static page instead of a Next.js site | Build export, website and onboarding | Each happens rarely at first; build when it hurts | Self-service export and a marketing site | Active (confirmed 2026-11-18); export must still meet Amendment 13 response duties (Q6) | Updated: no apps/web; api serves the legal page |
| D31 | 2026-11-18 | Primary metric in 1.0 is computed from bill rows (due date, paid flag), no separate event system | Event table (D22) in 1.0 | The data already exists; saves work | Fine-grained funnel data | Active (confirmed 2026-11-18); D22 moves to 1.1 | No change |
| D32 | 2026-11-18 | Version 1.0 budget raised to 72 hours (about 7 weeks × 10 h) | Machine translation reviewed later; cut a Must item | Keep three languages (D14) without cutting Must | About one more week | Active | No change |
| D33 | 2026-11-18 | Monorepo for 1.0: apps/mobile, apps/api, packages/shared. No apps/web, no Redis | Full course layout with an empty web app | Build only what 1.0 uses | Course layout parity | Active | Updated: stack and setup prompt |
| D34 | 2026-11-18 | Sign-in by email + 6-digit one-time code; a transactional email provider sends codes only | Email + password; ready-made auth service | No stored passwords; small extra vendor | One-tap sign-in (1.1) | Active | Updated: sign-in and one-time-code rules, "Never store passwords" |
| D35 | 2026-11-18 | Start with task 0: a throwaway reminder spike before product code | Build reminders directly in task 6 | Biggest technical risk (RFC section 8), cheapest early test | About 4 hours | Active | Updated: tasks.md order |
| D36 | 2026-11-18 | Kickoff pack: CLAUDE.md, docs/ (tasks, prd, rfc, architecture, db-schema, setup, screens, decisions, cto-meeting, reference prototype), .cursor/rules, .nvmrc, .gitignore, .env.example | Start from the course template only | Everything Claude Code needs from the first session | - | Active | Updated: Docs section |

## Open

| # | Question | Owner | Notes |
| --- | --- | --- | --- |
| Q1 | ~~Confirm D23 replaces D19~~ | Founder | Closed: confirmed |
| Q2 | ~~Redis + BullMQ in v1?~~ | Founder | Closed: not in 1.0 (D29, D33); revisit with email reminders in 1.1 |
| Q3 | ~~Next.js or a static page?~~ | Founder | Closed: static page from api (D30, D33) |
| Q4 | OKRs | Founder | Not written yet |
| Q5 | Plan prices and free AI limit | Founder | Needs market check |
| Q6 | Especially sensitive data and DPO under Amendment 13 | Lawyer | |
| Q7 | Store cancellation vs consumer-law duties | Lawyer | Affects S5 |
| Q8 | Arabic reviewer | Founder | |
| Q9 | Local-notification limits per OS | CTO | Test with a throwaway app first |
| Q10 | Commands in CLAUDE.md | CTO | Confirm after the monorepo is created (not blocking) |
| Q11 | ~~Confirm D26-D31~~ | Founder | Closed: confirmed, except D27 (rejected) |
| Q12 | Sign in with Apple required? | CTO | Apple's rule targets apps that use third-party sign-in; email one-time code should not trigger it. Verify current guideline before store submission (not blocking) |
| Q13 | Apple requires in-app account deletion when an app offers account creation: confirm current rule | CTO | Kept as Must (task 9) |
| Q14 | Estimates are the CTO's first guess, not a session-10 breakdown | Founder | Record actual hours per task to improve the next estimate |

## MVP prioritization (session 11, 18 Nov 2026)

**Budget:** 60 hours at the time (D25); raised to 72 hours by D32 to keep three languages. Current task list: `docs/tasks.md`. Estimates in hours: optimistic / likely / pessimistic; expected = (O + 4×L + P) ÷ 6. These are first guesses, not measured.

### MoSCoW

| Group | Capabilities |
| --- | --- |
| **Must** (no product without it) | Sign-in by email with 18+ confirmation and terms/privacy consent; add, edit, delete bills, expenses, income, debts and money owed; repeating bills with Mark paid; local reminders (default 2 days before 09:00 and on the due date); Home with spending this month and upcoming/overdue payments; Hebrew, Arabic and English UI with RTL (D14, D32); delete account; privacy page |
| **Should** | Action cards on Home; monthly budget per category; subscriptions screen with total; snooze; Arabic and English; email reminders |
| **Could** | Savings goal; rule-based savings tips; Apple and Google sign-in; in-app data export; Next.js website |
| **Won't (1.0)** | Receipt and SMS scanning; AI assistant; paid plan and store billing; marketing opt-in and emails; multiple currencies; full offline editing; event analytics system; Open Banking; WhatsApp/SMS reminders |

### Must tasks and estimate

| # | Task | Part | Size | O | L | P | Expected |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Project setup, environments, deploy to Render | Infra | S | 2 | 4 | 8 | 4.3 |
| 2 | Database tables with Prisma (users, items, expenses, consents) | DB | M | 3 | 5 | 8 | 5.2 |
| 3 | Email sign-in, 18+ confirmation, consent record | App + server | M | 4 | 6 | 12 | 6.7 |
| 4 | Add, edit, delete entries (one form for all types) | App + server | M | 4 | 7 | 12 | 7.3 |
| 5 | Repeating bills and Mark paid | App + server | M | 3 | 5 | 8 | 5.2 |
| 6 | Local reminders: schedule, cancel on paid, defaults | App | M | 4 | 6 | 12 | 6.7 |
| 7 | Home: spending this month, upcoming and overdue | App | M | 4 | 5 | 9 | 5.5 |
| 8 | Hebrew translation files and RTL | App | M | 3 | 5 | 8 | 5.2 |
| 9 | Delete account and privacy page | App + server | S | 2 | 3 | 5 | 3.2 |
| | **Total** | | | | | | **49.2** |
| | **With 20% buffer** | | | | | | **≈ 59** |

Result: Must alone uses the 60-hour budget. Nothing from Should or Could fits 1.0.

### RICE for Should and Could

Reach = estimated users affected per 100 active users in the first quarter (no real user data yet). Impact: 3 huge, 2 big, 1 medium, 0.5 small. Confidence is 50% where nothing was validated in interviews, 80% where the need is clear from the PRD.

| Capability | R | I | C | E (h) | RICE | Why these numbers |
| --- | --- | --- | --- | --- | --- | --- |
| Subscriptions screen with total | 60 | 1 | 80% | 3 | 16.0 | Most users pay subscriptions; reuses existing entries |
| Action cards on Home | 90 | 2 | 50% | 6 | 15.0 | Everyone opens Home; core of "live actions", but unvalidated |
| Monthly budget per category | 70 | 2 | 50% | 6 | 11.7 | Central to "plan spending"; unvalidated |
| Snooze | 50 | 0.5 | 80% | 2 | 10.0 | Small convenience, cheap |
| Apple and Google sign-in | 70 | 0.5 | 80% | 5 | 5.6 | Faster signup, not essential |
| Rule-based tips | 60 | 0.5 | 50% | 3 | 5.0 | Nice nudge, unproven |
| Savings goal | 40 | 1 | 50% | 5 | 4.0 | Valuable to savers only |
| Arabic and English | 30 | 2 | 50% | 10 | 3.0 | Big for those users; share unknown |
| Email reminders (+ queue) | 60 | 1 | 50% | 10 | 3.0 | Backup channel; heavy to build |
| Next.js website | 20 | 0.5 | 50% | 5 | 1.0 | A static page covers 1.0 |
| In-app data export | 5 | 0.5 | 80% | 3 | 0.7 | Rare request; manual first |

### Roadmap

| Version | When | Contents |
| --- | --- | --- |
| **1.0 (MVP)** | Now, 60 h | The 9 Must tasks |
| **1.1** | After launch, by RICE | Subscriptions screen, action cards, budgets, snooze, Apple/Google sign-in, tips, savings goal, Arabic and English, email reminders |
| **2.0** | By what we learn | Receipt and SMS scanning, read-only AI assistant, paid plan with store billing, website, in-app export |

### Manual instead of built (concierge MVP)
- Data export: the founder sends it by email on request.
- First users: onboarded personally, which doubles as the interviews still missing (O1).
- Privacy and terms: one static page, linked from the stores.
