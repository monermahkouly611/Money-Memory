# Money Memory: MVP plan (session 11)

Final scope: version 1.0 = Must only, three languages, 72-hour budget (D26, D32). Task list with estimates: `docs/build-plan.md`.


**Budget:** 60 hours at the time (D25); raised to 72 hours by D32 to keep three languages. Current task list: `docs/build-plan.md`. Estimates in hours: optimistic / likely / pessimistic; expected = (O + 4×L + P) ÷ 6. These are first guesses, not measured.

## MoSCoW

| Group | Capabilities |
| --- | --- |
| **Must** (no product without it) | Sign-in by email with 18+ confirmation and terms/privacy consent; add, edit, delete bills, expenses, income, debts and money owed; repeating bills with Mark paid; local reminders (default 2 days before 09:00 and on the due date); Home with spending this month and upcoming/overdue payments; Hebrew, Arabic and English UI with RTL (D14, D32); delete account; privacy page |
| **Should** | Action cards on Home; monthly budget per category; subscriptions screen with total; snooze; Arabic and English; email reminders |
| **Could** | Savings goal; rule-based savings tips; Apple and Google sign-in; in-app data export; Next.js website |
| **Won't (1.0)** | Receipt and SMS scanning; AI assistant; paid plan and store billing; marketing opt-in and emails; multiple currencies; full offline editing; event analytics system; Open Banking; WhatsApp/SMS reminders |

## Must tasks and estimate

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

## RICE for Should and Could

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

## Roadmap

| Version | When | Contents |
| --- | --- | --- |
| **1.0 (MVP)** | Now, 60 h | The 9 Must tasks |
| **1.1** | After launch, by RICE | Subscriptions screen, action cards, budgets, snooze, Apple/Google sign-in, tips, savings goal, Arabic and English, email reminders |
| **2.0** | By what we learn | Receipt and SMS scanning, read-only AI assistant, paid plan with store billing, website, in-app export |

## Manual instead of built (concierge MVP)
- Data export: the founder sends it by email on request.
- First users: onboarded personally, which doubles as the interviews still missing (O1).
- Privacy and terms: one static page, linked from the stores.
