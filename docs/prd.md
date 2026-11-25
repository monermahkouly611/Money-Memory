# Money Memory: PRD v8

This file is the working PRD for development. The earlier live doc (v7) is at https://claude.ai/artifact/2RqjTeiEteMbgE6dVjPgJS.

Draft v7. Built from the project description, the PRD session answers, the personas and user-stories session, three skeptic reviews, the purpose clarification and the CTO meeting. Anything not answered is listed under open questions, not guessed.

## Version 1.0 scope (added in v8, sessions 11-12)

Version 1.0 (MVP, 72-hour budget) builds only: sign-in by email one-time code with 18+ and consent; add, edit and delete bills, expenses, income, debts and money owed; repeating bills with Mark paid; local reminders; Home with this month's spending and upcoming/overdue payments; Hebrew, Arabic and English with RTL; delete account and a privacy/terms page. Task list: `docs/tasks.md`.

Moved out of 1.0 (with reasons in `docs/decisions.md` D26-D36): budgets (F11), savings goal (F12), action cards (F13), subscriptions screen (S6), snooze, savings tips (F6), Apple and Google sign-in, email reminders, in-app export (manual instead), event analytics, and all of Release 2.

## Version history

- **v1:** first draft from nine PRD-session answers.
- **v2:** proto-personas; stories in "As a... I want... so that..." form with Given / When / Then; S7-S9 added.
- **v3 (review 1):** definition of a missed payment; free plan defined; raw SMS text discarded; three-language risk.
- **v4 (review 2):** recurring bills (F10, S10); AI chat read-only; shekel only; sign-in by email, Apple and Google.
- **v5 (review 3):** provisional performance targets; reminder defaults; receipt images deleted; users 18+.
- **v6 (purpose):** budgets (F11), savings goal (F12), live action cards (F13), rule-based savings tips back in v1 (F6), Home leads with spending.
- **v8 (MVP):** version 1.0 scope, 72-hour budget, email one-time-code sign-in, monorepo without web.
- **v7 (CTO meeting):** decisions D13-D22: solo builder, two releases, store billing, one AI provider, managed backend, local reminders plus email, read-only offline, in-house metrics.

## 1. Problem and background

People in Israel lose money and peace of mind because their obligations are scattered: income, expenses, debts, money owed to them, bills and subscriptions live in different places, so payments get missed and nobody knows where the money goes.

**Purpose:** help a person know what they spend their money on, track their spending, plan it with a budget, save toward a goal, and never miss a payment. The app turns this into live actions: short cards that tell the user what to do next.

**Evidence status:** no user interviews yet; the problem is a hypothesis until tested (chapter 9).

## 2. Goals and success metrics

| Role | Metric | Target |
| --- | --- | --- |
| Primary | Share of recorded bills not marked paid by their due date, per active user in their first 30 days | TBD after baseline survey |
| Guardrail | Week-4 retention of users who added at least 3 obligations | TBD |
| Later | Free-to-paid conversion | Measured after v1 has stable usage |

**Definition:** a payment is "missed" when a recorded bill's due date has passed and the user never marked it paid. Self-reported (no bank connection), so it depends on the mark-paid action (S7).

OKRs are not written yet (open).

## 3. Target audience and personas

Version 1 targets **individuals in Israel, 18+**, managing their own money. Not in v1: families, couples, freelancers, small businesses.

### Proto-personas (to validate in interviews)

| | A: "Noa" | B: "Dan" |
| --- | --- | --- |
| Who | Salaried, several monthly bills and one instalment plan | Lends and borrows informally, several subscriptions |
| Main problem | Forgets a payment date and pays late | Forgets who owes whom and what he still pays for |
| Today | Memory, bank app, calendar | Memory, chat messages, bank statements |
| Wants | One place and a reminder before each payment | A clear list of debts both ways and all subscriptions |
| Would leave if | Entering data takes too long | The app feels like accounting software |
| To verify | Interview 5-10 people per type (O1) | Same |

## 4. Market and competitors

First desk research, November 2026. Starting point only.

| Product | Type | Price found | Notes |
| --- | --- | --- | --- |
| Riseup (Israel) | Budgeting and cash flow, bank data, WhatsApp updates | About NIS 45/month after a free month (2020 sources; not verified now) | Leads the Israeli category in downloads (Sensor Tower) |
| FamilyBiz (Israel) | Family budget software | Free basic, paid premium (not verified) | Bank sync, free trial |
| YNAB (US) | Envelope budgeting | $14.99/month or $109/year, 34-day trial | No free plan |
| Monarch Money (US) | Budgeting with account sync | $99.99/year (claimed by a competitor, not verified) | Not Israel focused |

- **Difference (hypothesis):** competitors centre on budgeting from connected accounts; Money Memory centres on obligations, reminders and live actions.
- **Market size:** global personal finance software about USD 1.35-1.89 billion in 2025 (analysts differ). Israel TAM/SAM/SOM not found (O2).
- **Pricing:** do not set prices (O4) before checking current Israeli prices and willingness to pay.

## 5. User stories and acceptance criteria

| Story | Given | When | Then |
| --- | --- | --- | --- |
| S1: As a user with monthly bills, I want a reminder before a bill is due, so that I avoid late fees | A bill and a 2-day lead time | The lead time is reached | One reminder per channel, never twice |
| S1 edge | Bill already marked paid | Lead time reached | No reminder |
| S2 (R2): As a user, I want to photograph a receipt, so that I do not type the details | A clear receipt photo | I upload it | Amount, date, merchant pre-filled; nothing saved until I confirm |
| S2 edge | Unreadable photo | I upload it | Clear message; I can enter manually |
| S2 edge (SMS) | A pasted bank SMS | I submit it | Fields pre-filled; raw text not stored; saved only on confirm |
| S3: As a user who lent money, I want to track what is owed to me, so that I remember to ask for it | An amount owed with a due date | Due date passes unpaid | Shown as overdue and I get a reminder |
| S4 (R2): As a user, I want to ask the AI where my money went, so that I understand my spending | Recorded expenses | I ask | Answer names the period, uses only my data |
| S4 edge | No data for the period | I ask | It says it has no data |
| S5 (R2): As a paying user, I want to cancel easily, so that I do not need support | Active paid plan | I tap Cancel | **To rewrite (D16):** opens the store's cancellation page; end date shown; lawyer to confirm |
| S6: As a user, I want all subscriptions with their total, so that I can cancel unneeded ones | Three subscriptions | I open Subscriptions | Monthly total and next charge dates |
| S7: As a user, I want to mark a bill paid or snooze it, so that I only get relevant reminders | A reminder | I tap Paid or Snooze | Paid stops reminders; Snooze returns once |
| S8: As a user, I want to export or delete my data, so that I stay in control | Signed in | Export or delete | File with all entries / data removed after confirmation |
| S8 edge | Active paid plan | I delete my account | Warned that the plan is cancelled, end date shown |
| S9: As a Hebrew or Arabic speaker, I want the app in my language | Language set | Any screen | Text and layout RTL and in my language |
| S10: As a user, I want bills to repeat, so that I do not re-enter them | Monthly repeating bill | I mark it paid | Next bill one month later, reminder scheduled |
| S10 edge | Due on the 31st | Shorter month | Due on the last day of that month |
| S11: As a user, I want a limit per category, so that I notice before overspending | Spending reaches 80% | I open Home | Action card with category, percent, amounts, Review budget |
| S11 edge | Spending above budget | I open Plan | Marked over budget, shows how much |
| S12: As a user, I want a savings goal, so that I know how much to put aside | Goal with target and date | I open Plan | Percent saved and monthly amount needed; moving money updates it |
| S13: As a user, I want Home to tell me what to do next | A due payment, budget near limit or goal behind | I open Home | Action cards with one button each |
| S13 edge | Nothing needs action | I open Home | "All caught up" |

## 6. Functional requirements

R1 = release 1, R2 = release 2 (D15).

| # | Requirement | Release |
| --- | --- | --- |
| F1 | Create, edit, delete income, expenses, debts, money owed, bills, subscriptions | R1 |
| F2 | Scan receipt or pasted SMS; extract amount, date, merchant; discard image and raw text | R2 |
| F3 | Reminders at user-chosen lead times; default 2 days before at 09:00 Israel time and on the due date | R1 |
| F4 | Mark paid or snooze | R1 |
| F5 | AI assistant answers from the user's own data; read-only | R2 |
| F6 | Rule-based savings tips, labelled general information | R1 |
| F7 | Freemium with monthly and yearly plan via store billing; AI limited per month on free | R2 |
| F8 | Hebrew, Arabic, English, full RTL | R1 |
| F9 | Export data and delete account | R1 |
| F10 | Recurring bills and subscriptions | R1 |
| F11 | Monthly budget per category with progress | R1 |
| F12 | Savings goal with monthly amount needed | R1 |
| F13 | Live action cards on Home | R1 |

## 7. Non-functional requirements

| # | Area | Requirement |
| --- | --- | --- |
| N1 | Performance | Provisional: screens about 2 s, AI answers start about 5 s; review after beta |
| N2 | Security | Sign-in with email, Apple, Google; per-user isolation; encryption in transit and at rest; pen test before launch |
| N3 | AI security | OWASP Top 10 for LLM 2025: no secrets in prompts, read-only, output validated, rate limits |
| N4 | Privacy | 18+; Amendment 13 notice and consent; financial data treated as possibly especially sensitive; processors disclosed; no training on user data without separate consent |
| N5 | Messaging | Reminders only on chosen channels; marketing needs separate opt-in (section 30A) |
| N6 | Accessibility | WCAG 2.2 AA |
| N7 | AI transparency | Shows it is AI; offers a human route |
| N8 | Reliability | Reminders never sent twice; backups with tested restore |

## 8. Out of scope for version 1

- Open Banking (bank or card connection)
- WhatsApp and SMS reminders
- Shared accounts, couples, business features
- Executing payments or moving money
- Investment advice and AI-generated savings advice
- Multiple currencies (shekel only)
- Full offline editing (offline is read-only)
- Web app

## 9. Assumptions, risks, open questions

**Assumptions:** A1 users will enter data regularly; A2 reminders reduce missed payments enough to justify a subscription. Both untested.

**Risks:** unreliable reminders (biggest technical risk, see RFC); solo builder with three languages; data leak between users; AI errors (R2); unknown AI cost; store cancellation vs consumer law; especially sensitive data; users not marking Paid; Arabic translation quality.

**Decisions:** D1 iOS and Android via Expo; D3/D14 three languages; D4 read-only AI; D5 shekel only; D6 sign-in; D7 reminder defaults; D8 delete images and SMS text; D9 18+; D10 Home leads with spending; D11 budgets and goal; D12 action cards and rule-based tips; D13 solo builder; D15 two releases; D16 store billing; D17 one AI provider behind an interface; D18 AI vision scanning with limit; D19 managed backend (note: the course stack Express + Prisma conflicts, see architecture doc); D20 local notifications plus email with send log; D21 read-only offline; D22 in-house event metrics.

**Open:** O1 interviews; O2 Israel market size and prices; O3 metric targets; O4 prices and AI limit; O5 especially sensitive data (lawyer); OKRs; AI cost per scan and question; Arabic reviewer; lawyer on store cancellation.

## 10. Value proposition and business model

**Value proposition:** one place for everything you spend, owe and are owed, with a plan, a goal and a clear next action every day.

**Business model:** freemium with monthly or yearly subscription in release 2, through App Store and Google Play billing. Clear renewal terms, explicit auto-renewal consent, reminder before renewal.
