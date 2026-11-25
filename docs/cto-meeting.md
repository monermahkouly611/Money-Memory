# Money Memory: CTO meeting (18 Nov 2026)

Worksheet sheet: https://claude.ai/artifact/LScRR9UQEAj5FQNeJkZxXo

## Ten questions and answers

| # | Question | Answer |
| --- | --- | --- |
| 1 | Who builds v1? | The founder alone, with Claude and Cursor |
| 2 | Three languages in v1? | Keep all three (CTO flagged as expensive) |
| 3 | How to charge and cancel? | App Store / Google Play billing; in-app button opens the store's cancel page |
| 4 | One or two AI providers? | One, behind an interface |
| 5 | Receipt scanning method? | AI vision with a monthly limit |
| 6 | Backend? | Managed service (auth + PostgreSQL with per-user rules) plus a small server |
| 7 | How to send reminders? | Local notifications on the phone + one email from the server with a send log |
| 8 | Scope? | Two releases |
| 9 | Offline? | Read-only offline |
| 10 | Measurement? | Events in our own database, without names or amounts |

## Worksheet: questions I expected

| # | Question | My answer | Sure? | Came up? |
| --- | --- | --- | --- | --- |
| 1 | Who builds v1 and how long? | Me alone, with Claude and Cursor | Yes | Yes |
| 2 | Why three languages in v1? | I want to reach Hebrew, Arabic and English speakers from the start | No | Yes |
| 3 | How do you charge and cancel? | Store billing, button opens the store cancel page | No | Yes |
| 4 | How do reminders arrive on time and never twice? | Local notification + one email with a send log | No | Yes |
| 5 | Launch everything at once? | No, two releases | Yes | Yes |

## Worksheet: decisions

| # | Decision | Alternatives | Why | What we gave up |
| --- | --- | --- | --- | --- |
| 1 | Two releases | One launch; AI in release 1 | One builder: faster, lower risk | First release without scanning, AI and payment |
| 2 | One AI provider behind an interface | Two providers from day one | One test set and one processing agreement | Immediate flexibility if the provider changes price or fails |
| 3 | Managed backend with per-user rules | Own server; data only on the phone | Ready security and isolation | Full control; another vendor dependency |
| 4 | Local reminder + server email | Server push; push only | Works offline; email reaches users who turned off notifications | Hard to measure local notifications; two channels to sync |
| 5 | Offline is read-only | Full offline; always online | Simple, no sync conflicts | No adding entries without internet |
| 6 | Store billing | External web payment; no payment in v1 | Fits store rules; store handles payment | Store fee; cancel not inside the app (lawyer check) |
