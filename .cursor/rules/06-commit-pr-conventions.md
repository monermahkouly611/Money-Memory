---
description: קונבנציות קומיטים, PR, גרסאות ושמות ענפים
alwaysApply: true
---
# קומיטים ו-PR

- **Conventional Commits:** `feat:`, `fix:`, `perf:`, `refactor:`, `test:`, `docs:`, `build:`, `ci:`, `chore:`, `revert:`; `!` או `BREAKING CHANGE:` לשינוי שובר.
- שורת נושא עד 72 תווים, זמן הווה, באנגלית. גוף הקומיט מסביר *למה*.
- קומיט אטומי: שינוי לוגי אחד. בלי קבצים לא קשורים.
- שמות ענפים: `feature/<ticket>-short-desc`, `fix/...`, `chore/...`, `docs/...`.
- SemVer: MAJOR.MINOR.PATCH, tag על main בכל release, CHANGELOG אוטומטי.
- **PR חייב לכלול:** תיאור הבעיה והפתרון, איך נבדק, צילומי מסך ל-UI, השפעה על DB/תשתית, רשימת סיכונים ו-rollback.
- PR קטן (עד ~400 שורות שינוי יחסית). גדול מזה - מפרקים.
- לא ממזגים עם בדיקות אדומות, התנגשויות או הערות review פתוחות.
- אין force push לענפים משותפים. אין rewriting של היסטוריה שפורסמה.
