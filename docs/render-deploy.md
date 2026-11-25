# Deploy to Render (development environment)

## 1. First time, from the project folder in a Windows terminal
```
corepack enable
pnpm install
pnpm test
pnpm --filter api build
git add -A
git commit -m "chore: monorepo skeleton and Render blueprint"
git branch -M develop
git remote add origin https://github.com/<YOUR_USER>/money-memory.git
git push -u origin develop
git push origin develop:staging develop:main
```
Check on GitHub that `.env` is not in the repo. `pnpm install` creates `pnpm-lock.yaml`: commit it, then change
`--no-frozen-lockfile` to `--frozen-lockfile` in `render.yaml`.

## 2. Render
1. Render dashboard -> New -> Blueprint -> pick the GitHub repo, branch `develop`.
2. Render reads `render.yaml` and creates `money-memory-api-dev` and `money-memory-db-dev` (Frankfurt).
3. Fill the two `sync: false` variables: `EMAIL_PROVIDER_API_KEY`, `EMAIL_FROM` (can stay empty until Task 3).
4. Open `https://<service>.onrender.com/health`: it must show `ok`.
5. Mobile: set `EXPO_PUBLIC_API_URL` to that URL.

## 3. Later
- Task 2: add the first Prisma migration, then add `pnpm --filter api migrate:deploy` before `start`
  (paid instances: use `preDeployCommand`).
- Before real users: paid web service and paid Postgres; add staging (branch `staging`) and production (branch `main`)
  as separate services with separate databases.
