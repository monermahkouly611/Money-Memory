---
description: תקני אבטחה - OWASP, סודות, תלויות, סריקת פגיעויות
alwaysApply: true
---
# אבטחה

## קוד
- OWASP Top 10 ו-ASVS רמה 2 כבסיס. ולידציה בכל גבול (קלט/פלט) עם schema (zod/pydantic).
- Authentication: ספק מוכר (Auth.js / Clerk / Supabase Auth / Firebase Auth) - לא מימוש עצמי של קריפטו. Argon2id/bcrypt לסיסמאות, MFA לאדמין.
- Authorization בצד שרת על כל endpoint (RBAC/ABAC), בדיקת בעלות על משאב (מניעת IDOR).
- Parameterized queries/ORM בלבד. הגנה מ-XSS, CSRF, SSRF, clickjacking. Rate limiting ו-brute-force protection.
- Security headers: CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. CORS מצומצם לדומיינים ידועים.
- הצפנה: TLS בכל מקום, הצפנה במנוחה לנתונים רגישים, מפתחות מנוהלים.

## סודות
- רק ב-env vars / Render environment variables / GitHub Secrets. `.env` ב-`.gitignore`, `.env.example` ללא ערכים אמיתיים.
- Secret scanning (gitleaks) ב-pre-commit וב-CI. סוד שדלף = רוטציה מיידית.

## תלויות ו-supply chain
- **לפני בחירת גרסה של כל חבילה, framework, runtime או image - חובה סריקה** שאין פגיעויות ידועות (CVE): `npm audit`/`pnpm audit`, `osv-scanner`, GitHub Dependabot, Snyk/Trivy.
- בדיקת מוניטין חבילה חדשה לפני התקנה (typosquatting, תחזוקה, מחבר) - ראה skill `dependency-vulnerability-scan`.
- גרסאות נעולות (lockfile), עדכוני אבטחה אוטומטיים (Dependabot/Renovate) עם PR וטסטים.
- אין שימוש בגרסאות EOL של Node, Python, PostgreSQL, Next.js.
- יצירת SBOM (CycloneDX) בכל release.
- Critical/High ללא תיקון = חוסם מיזוג. חריג רק עם אישור מתועד ותאריך יעד.

## תשתית
- עיקרון least privilege לכל service, token ו-DB user. סביבות מופרדות לחלוטין.
- גיבויים אוטומטיים ל-Postgres + בדיקת שחזור תקופתית. לוג ביקורת (audit log) לפעולות אדמין.
- נוהל תגובה לאירוע ופרצה: ראה skill `incident-response`.
