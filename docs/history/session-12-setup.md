# Money Memory: development environment (session 12)

## 1. Install the tools (in order)

| Tool | Check command | Version I got | Works? |
| --- | --- | --- | --- |
| Git + GitHub account | `git --version` | | |
| nvm, then Node LTS (`nvm install --lts`, `nvm use --lts`; Windows: nvm-windows) | `node -v` | | |
| pnpm (`npm install -g pnpm`) | `pnpm -v` | | |
| VS Code (or Cursor) | opens | | |
| Claude Code (needs a paid Claude plan) | `claude --version` | | |
| Expo Go on your phone | installed | | |

Never use `sudo` to install. If you get a permission error, ask Claude Code for the right fix.

## 2. Start the project
1. Create an empty folder `money-memory`, open a terminal in it, run `git init`, then `claude`.
2. Copy everything from this kickoff pack into the folder (`KICKOFF.md`, `CLAUDE.md`, `docs/`, `apps/api/`, `.nvmrc`, `.gitignore`).
3. Switch to Plan Mode (Shift+Tab until "Plan Mode" shows).
4. Paste the prompt below. Read the plan; check it has `apps/mobile`, `apps/api` and `packages/shared`. Approve.
5. Approve each command only after reading it.
6. Run `/init` and accept only the suggestions you understand.
7. First commit and push to GitHub. Check that `.env` is not on GitHub.

## 3. Monorepo prompt (adapted to Money Memory)

```
Read CLAUDE.md and docs/build-plan.md (task 1). Set up a new monorepo in this folder with pnpm and Turborepo:

- apps/mobile: Expo app with TypeScript. Follow Expo's official monorepo guide.
- apps/api: Express server with TypeScript, with one route GET /health that returns "ok".
- packages/shared: shared package for types and Zod schemas, used by mobile and api.

Also:
- Keep the existing .nvmrc, .gitignore, apps/api/.env.example and apps/api/prisma/ (add to .gitignore if something is missing).
- `pnpm dev` in the root runs apps/api and apps/mobile together.
- Do not create apps/web. Do not add Redis, BullMQ or any AI package.

Before you start, write a plan and wait for my approval. Do not install packages I did not ask for without asking.
At the end, explain each folder in one sentence and tell me how to open the app on my phone with Expo Go.
```

## 4. How to know it works
- [ ] `node -v`, `pnpm -v` and `claude --version` print versions.
- [ ] `pnpm dev` starts api and Expo with no red errors.
- [ ] The app opens on your phone after scanning the QR code in Expo Go.
- [ ] `http://localhost:<api port>/health` shows `ok`.
- [ ] The code is on GitHub, with no `.env` file.
- [ ] Branches `develop`, `staging` and `main` exist on GitHub; you work on `develop`.

## 5. Monorepo map

| Folder | What is in it | Built with |
| --- | --- | --- |
| `apps/mobile` | The app: sign-in, entries, Home, reminders, language | Expo + React Native + TypeScript |
| `apps/api` | The server, database access, privacy page | Express + TypeScript + Prisma |
| `packages/shared` | Types and Zod schemas shared by both | TypeScript + Zod |

## 6. Accounts you will need during version 1.0
| Account | Needed by | Cost |
| --- | --- | --- |
| GitHub | Task 1 | Free |
| Render (api + PostgreSQL) | Task 1 | Check current plans |
| Transactional email provider (sign-in codes only) | Task 3 | Check current free tier |
| Apple Developer Program | Store release (after 1.0 is built) | Paid, check current price |
| Google Play Console | Store release | One-time fee, check current price |
During development, Expo Go is free and needs no store account.
