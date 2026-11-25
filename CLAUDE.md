# Money Memory

Personal finance app for individuals in Israel (18+). Users track spending, income, bills, debts, money owed and subscriptions, and get reminders before payments are due.
**We are building version 1.0 (MVP) only.** Its scope is the task list in `docs/tasks.md`. Anything else (budgets, savings goal, action cards, subscriptions screen, snooze, scanning, AI, paid plan, website) is out of scope: do not build it, even partly, unless I ask.

## Docs
- `docs/tasks.md`: version 1.0 tasks, order and acceptance criteria. Start here.
- `docs/prd.md`: product requirements (stories S1-S13)
- `docs/db-schema.md`: tables and Prisma draft
- `docs/architecture.md`: parts of the system and what flows between them
- `docs/decisions.md`: decision log (D1...). Source of truth when docs disagree.
- `docs/reference/prototype.html`: clickable prototype of the full vision (more than 1.0)
Before changing a Prisma model, read `docs/db-schema.md`. Before starting a task, read its section in `docs/tasks.md`.

## Stack
- Monorepo: pnpm workspaces + Turborepo. Node version from `.nvmrc`.
- `apps/mobile`: Expo + React Native + TypeScript (iOS and Android)
- `apps/api`: Express + TypeScript; also serves the static privacy and terms page
- `packages/shared`: shared types and Zod schemas used by mobile and api
- Database: PostgreSQL + Prisma (in `apps/api`)
- Sign-in: email + one-time code; codes sent by a transactional email provider
- Reminders: local notifications scheduled on the phone (no server push, no email reminders in 1.0)
- Hosting: Render
- Not in 1.0: `apps/web`, Redis, BullMQ, any AI provider

## Commands
<!-- confirm after the monorepo is created -->
- `pnpm dev`: run api and Expo together
- `pnpm test`: all tests
- `pnpm --filter api prisma migrate dev`: new migration
- `pnpm --filter mobile start`: Expo only, scan with Expo Go

## Code rules
- TypeScript only. No `any`.
- Request bodies, queries and params are validated with Zod schemas from `packages/shared`.
- Every Prisma query on user data filters by the signed-in `userId`. No exceptions.
- Every API endpoint has a test that tries to read or change another user's data and expects 404.
- Money is stored as integer agorot (`amountAgorot Int`). Never floats. Currency is ILS only.
- Dates are stored in UTC and shown in Asia/Jerusalem.
- Monthly repeat on the 29th-31st falls back to the last day of shorter months.
- Default reminders: 2 days before at 09:00 and on the due date at 09:00, Israel time.
- Marking a bill paid cancels its scheduled notifications; a repeating bill then creates the next one.
- All user-facing text comes from `he`, `ar` and `en` translation files. No hard-coded UI text. Hebrew is the default.
- Every screen works right-to-left in Hebrew and Arabic and left-to-right in English.
- One-time codes: 6 digits, valid 10 minutes, single use, max 5 attempts, stored hashed.
- Code, comments and commit messages in English.
- Logs never contain amounts, names, emails, codes or tokens.

## How we work
- Before a change to more than one file: write a short plan and wait for approval.
- One task from `docs/tasks.md` at a time. Small steps; run `pnpm test` after each.
- Ask before installing any new package.
- Branches: work on `develop`; promote develop -> staging -> main. Never push to main directly.
- After each task, write the actual hours next to the estimate in `docs/tasks.md`.
- When I make or change a decision, add an entry to `docs/decisions.md`.
- When I ask to add, change or remove a rule here: update this file, then log it in `docs/decisions.md` ("CLAUDE.md updated: ...").
- If you make the same mistake twice, propose a new rule for this file.

## Never
- Secrets, API keys or passwords in code or in this file. Use `.env` (in `.gitignore`); keep `.env.example` without real values.
- Store passwords. Sign-in is by one-time code only.
- Edit a migration that has already run. Create a new one.
- Let a user finish signup without confirming 18+ and accepting the terms and privacy policy.
- Pre-tick any consent checkbox.
- Send marketing messages of any kind.
- Move money or execute payments.
- Use `sudo` to install anything.
