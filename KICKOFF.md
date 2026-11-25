# Money Memory: kickoff pack

Everything needed to start building version 1.0 with Claude Code. Copy this folder into your project folder, then run the monorepo prompt in `docs/history/session-12-setup.md` (section 3). The prompt creates `apps/mobile`, the rest of `apps/api` and `packages/shared`.

## The product in three lines
A personal finance app for individuals in Israel (18+): know what you spend, track bills, debts and money owed, and never miss a payment.
Version 1.0 (MVP): sign-in, entries, repeating bills with Mark paid, local reminders, Home with this month's spending and upcoming payments, Hebrew/Arabic/English, delete account.
Budget: 72 hours, one builder (the founder with Claude Code and Cursor).

## What is in this pack

```
money-memory/
├── KICKOFF.md                 this file
├── CLAUDE.md                  standing instructions for Claude Code
├── .nvmrc  .gitignore
├── apps/api/
│   ├── .env.example           environment variable names, no values
│   └── prisma/
│       ├── schema.prisma      version 1.0 tables
│       └── migrations-extra/001_positive_amounts.sql
└── docs/
    ├── build-plan.md          tasks 0-9, estimates, "done when"
    ├── mvp-plan.md            MoSCoW, RICE, MVP line, roadmap
    ├── decisions.md           decision log D1-D36, open questions
    ├── prd.md                 product requirements v8
    ├── rfc.md                 technical RFC (Hebrew)
    ├── schema.md              ERD and schema notes
    └── history/               earlier session work: wireframes (07), CTO meeting (08),
                               architecture (09), environment setup (12), prototype.html
```

## Ready to start?

**Blocking decisions: all closed** (18 Nov 2026)
- MVP line confirmed: Must only (D26), email one-time-code sign-in (D28, D34), local reminders only (D29), manual export and no website (D30), metric from bill rows (D31).
- Three languages kept (D14); budget raised to 72 hours (D32).
- Course stack confirmed: Express + Prisma on Render, isolation in code (D23).
- Monorepo: mobile + api + shared, no web, no Redis (D33).
- First task is the reminder spike (D35).

**What you still need to do (not documents, actions)**
1. Install the tools in `docs/history/session-12-setup.md` section 1.
2. Open accounts: GitHub and Render now; an email provider before task 3. Apple Developer and Google Play only when 1.0 is ready for the stores.
3. Have one iPhone and one Android phone (two Androids from different makers is better) for task 0.

**Open questions that do not block starting**

| # | Question | Needed before |
| --- | --- | --- |
| Q4 | OKRs | Launch |
| Q5 | Plan prices and free AI limit | Version 2.0 |
| Q6 | Especially sensitive data and DPO (Amendment 13) | Store submission (lawyer) |
| Q7 | Store cancellation vs consumer law | Version 2.0 (lawyer) |
| Q8 | Arabic reviewer | Public launch |
| Q9 | Local-notification limits | Answered by task 0 |
| Q10 | Exact commands in CLAUDE.md | After the monorepo exists |
| Q12 | Sign in with Apple rule | Store submission |
| Q14 | Real hours per task | Filled in as you go |
| O1 | User interviews | Do them while onboarding the first users (D30) |

**Produced during the work (not missing)**
- Privacy policy and terms text: drafted in task 9 with the `israeli-legal-policies` skill, reviewed by a lawyer before store submission.
- Translation files: created in task 1 or 3, completed in task 8.

## First session, step by step
1. Install tools; fill the table in `docs/history/session-12-setup.md`.
2. Empty folder `money-memory` → `git init` → copy this pack in → `claude`.
3. Plan Mode → paste the monorepo prompt → approve the plan → follow each command.
4. `/init`, first commit, push, create `develop`, `staging`, `main`.
5. Then task 0 (reminder spike) and task 1 checks in `docs/build-plan.md`.
