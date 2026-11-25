# Money Memory: version 1.0 tasks

Budget: **72 hours** (D32). Estimates in hours: optimistic / likely / pessimistic; expected = (O + 4×L + P) ÷ 6. First guesses by the CTO; write the actual hours after each task.

| # | Task | Part | Size | O | L | P | Expected | Actual |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | Reminder spike: throwaway test of local-notification limits | Mobile | S | 2 | 4 | 6 | 4.0 | |
| 1 | Monorepo, environments, deploy api to Render | Infra | S | 2 | 4 | 8 | 4.3 | |
| 2 | Database tables with Prisma | API | M | 3 | 5 | 8 | 5.2 | |
| 3 | Email one-time-code sign-in, 18+, consent | Mobile + API | M | 5 | 7 | 14 | 7.8 | |
| 4 | Add, edit, delete entries | Mobile + API | M | 4 | 7 | 12 | 7.3 | |
| 5 | Repeating bills and Mark paid | Mobile + API | M | 3 | 5 | 8 | 5.2 | |
| 6 | Local reminders | Mobile | M | 4 | 6 | 12 | 6.7 | |
| 7 | Home screen | Mobile + API | M | 4 | 5 | 9 | 5.5 | |
| 8 | Hebrew, Arabic, English and RTL | Mobile | M | 6 | 10 | 16 | 10.3 | |
| 9 | Delete account; privacy and terms page | Mobile + API | S | 2 | 3 | 5 | 3.2 | |
| | **Total** | | | | | | **59.5** | |
| | **With 20% buffer** | | | | | | **≈ 71.4** | |

Order: 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9. Task 8 sets up translation files early (in task 1 or 3); the full translation pass is task 8.

## Definition of done (every task)
- Acceptance criteria below pass, on a real iPhone and a real Android phone where the task touches the app.
- Tests pass, including the cross-user test for every new endpoint.
- No UI text outside the translation files.
- Committed on `develop`; actual hours written in the table.

## 0. Reminder spike (biggest technical risk, RFC section 8)
Throwaway Expo app, not part of the product.
- Schedules 80 local notifications over two weeks, some repeating.
- Logs which ones appear, and when, on 1 iPhone and 2 Android phones from different makers.
- Scenarios: airplane mode, restart, do-not-disturb, app not opened for days.
- **Done when:** we know the per-OS limit on scheduled notifications and whether 1.0 needs a "rolling window" (only the next N reminders scheduled, refreshed on every app open). Result logged in `docs/decisions.md`.

## 1. Monorepo and deploy
- Follow `docs/setup.md`.
- **Done when:** `pnpm dev` runs api and Expo with no red errors; `GET /health` returns `ok` locally and on Render; the app opens in Expo Go; the repo is on GitHub with no `.env`.

## 2. Database
- Tables from `docs/db-schema.md`. First migration.
- **Done when:** migration runs on a clean database; seed script creates one test user with sample entries.

## 3. Sign-in (D34, D9)
- Email → 6-digit code by email → session token.
- Signup screen: email, "I am 18 or older" checkbox, "I accept the terms and privacy policy" checkbox with links. Both unticked by default and required.
- Consent stored with version and time.
- **Done when:** a new user signs up and signs in; wrong code 5 times blocks the code; an expired code is refused; another user's token cannot read this user's data.

## 4. Entries (S3, F1)
- One form for: bill, expense, income, debt I owe, money owed to me. Fields: name, amount, date (due date for bills and debts), category for expenses, repeat for bills.
- List, edit, delete.
- **Done when:** each type can be created, edited and deleted; amounts are stored in agorot; invalid input shows a message in the user's language.

## 5. Repeating bills and Mark paid (S7, S10, F4, F10)
- Repeat: none, weekly, monthly, yearly.
- Mark paid stores `paidAt`. A repeating bill then creates the next bill.
- Money owed to me: "Mark received".
- **Done when:** S10 and its edge case (due on the 31st) pass; a paid bill creates exactly one next bill.

## 6. Local reminders (S1, F3, D20/D29)
- Schedule notifications for each unpaid bill and debt: default 2 days before at 09:00 and on the due date at 09:00, Israel time.
- Cancel on paid, edit or delete; reschedule on every app open (as the spike decides).
- **Done when:** S1 and its edge case pass on both phones; no duplicate notification after editing a bill.

## 7. Home (D10, partial)
- This month: total spent, total income, spending by category.
- Lists: overdue, due in the next 7 days, later. Each row has Mark paid.
- Empty state: "Nothing due".
- **Done when:** totals match the entries; an overdue bill appears under Overdue.

## 8. Languages and RTL (D14, S9)
- Language picker; Hebrew default; Arabic and English complete.
- RTL for Hebrew and Arabic, LTR for English, including numbers, dates and the ₪ sign.
- **Done when:** every screen is checked in all three languages on one phone; no missing translation keys (test fails on a missing key).

## 9. Delete account and legal page (S8 partial, F9 partial)
- Delete account with a confirmation step; all user rows removed.
- Static page served by the api with privacy policy and terms (draft with the `israeli-legal-policies` skill; lawyer review before store submission).
- Data export: manual by email on request (D30).
- **Done when:** after deletion, the user's rows are gone and sign-in creates a new empty account; the page URL works for the store listings.

## After 1.0 (not now)
Version 1.1 by RICE: subscriptions screen, action cards, budgets, snooze, Apple and Google sign-in, savings tips, savings goal, email reminders.
Version 2.0: receipt and SMS scanning, AI assistant, paid plan, website, in-app export.
