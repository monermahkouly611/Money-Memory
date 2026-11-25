# Money Memory: architecture

## Version 1.0 (what we build now)

```mermaid
flowchart LR
  USER(("User<br/>(18+, Israel)"))

  subgraph PHONE["User's phone"]
    APP["apps/mobile<br/>Expo + React Native"]
    LN["Local notifications"]
  end

  subgraph RENDER["Render (hosting)"]
    API["apps/api<br/>Express + TypeScript<br/>+ privacy/terms page"]
    DB[("PostgreSQL<br/>via Prisma")]
  end

  SHARED["packages/shared<br/>types + Zod"]
  EMAIL{{"Email provider<br/>(sign-in codes only)"}}
  STORE{{"App Store / Google Play<br/>(download)"}}

  USER -- "adds a bill, taps Paid" --> APP
  APP -- "email, then 6-digit code" --> API
  API -- "one-time code" --> EMAIL
  EMAIL -- "code in inbox" --> USER
  API -- "session token" --> APP
  APP -- "entries + token (HTTPS)" --> API
  API -- "only this user's data (JSON)" --> APP
  API -- "save and read rows (filtered by userId)" --> DB
  APP -- "reminder dates and times" --> LN
  LN -- "reminder on screen" --> USER
  SHARED -. "same types and validation" .- APP
  SHARED -. "same types and validation" .- API
  STORE -- "installs the app" --> APP

  classDef ext fill:#ffffff,stroke:#111,stroke-width:2px,stroke-dasharray:6 4
  classDef data fill:#eeeeee,stroke:#111
  classDef people fill:#111,color:#fff,stroke:#111
  class EMAIL,STORE ext
  class DB data
  class USER people
```

**Legend:** circle = user; rectangle = our code; cylinder = data; dashed hexagon = external service.

- **apps/mobile:** every screen, the language picker, and scheduling reminders on the phone.
- **Local notifications:** reminders fire on time even with no internet.
- **apps/api:** checks who you are, returns only your data, saves entries, serves the privacy and terms page.
- **PostgreSQL + Prisma:** stores users, consents, obligations and transactions (`docs/db-schema.md`).
- **packages/shared:** one definition of "bill" and its validation, used by app and server so they never drift.
- **Email provider:** sends the sign-in code, nothing else.
- **Render:** runs the api and the database.

## Target (versions 1.1 and 2.0, not now)

```mermaid
flowchart LR
  APP["apps/mobile"] --> API["apps/api"]
  API --> DB[("PostgreSQL")]
  API -- "1.1: email reminder jobs" --> REDIS[("Redis")]
  REDIS --> WORKER["Worker (BullMQ)"]
  WORKER --> EMAIL{{"Email provider"}}
  WEB["2.0: apps/web<br/>Next.js"] --> STORE{{"App stores"}}
  API -. "2.0: question or receipt" .-> AI{{"AI provider"}}
  APP -. "2.0: buy or cancel Plus" .-> STORE
  STORE -. "2.0: subscription status" .-> API
```

## Security rules that come from this design
- The api is the only door to the database; the app never talks to the database directly.
- Every query filters by the signed-in `userId`; every endpoint has a cross-user test (D23).
- Codes and session tokens are stored hashed; no passwords exist (D34).
