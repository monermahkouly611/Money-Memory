---
description: איכות קוד, ארכיטקטורה, TypeScript, lint וסגנון
alwaysApply: true
---
# איכות קוד

- TypeScript במצב `strict` בכל פרויקט JS. אסור `any` ללא הסבר. Python: type hints + mypy/pyright + ruff.
- ESLint + Prettier (או Biome); Python: ruff + black. הכל רץ ב-pre-commit וב-CI.
- פונקציות קטנות ובעלות אחריות אחת; שמות ברורים; אין קוד מת או מוקפא בהערות.
- הפרדת שכבות: presentation / application / domain / infrastructure. אין לוגיקה עסקית בקומפוננטות UI או ב-route handlers.
- Error handling מפורש: אין בליעת שגיאות; שגיאות מוכרות מול בלתי צפויות; הודעות למשתמש לא חושפות פרטים פנימיים.
- קונפיגורציה לפי 12-Factor: הכל ב-env, validated בעלייה (fail fast).
- Logging מובנה (JSON) עם correlation id; בלי PII וסודות בלוגים.
- Idempotency לפעולות כתיבה חיצוניות ו-webhooks. Retries עם backoff.
- API: versioning, OpenAPI מעודכן, פורמט שגיאות אחיד, pagination.
- Feature flags לשינויים מסוכנים. Migrations קטנים והפיכים.
- אין copy-paste של קוד שלא הובן. רישיונות של תלויות נבדקים (ללא GPL/AGPL לא מאושר בקוד מסחרי).
- Definition of Done: קוד, בדיקות, תיעוד, אבטחה, נגישות, observability, ו-CI ירוק.
