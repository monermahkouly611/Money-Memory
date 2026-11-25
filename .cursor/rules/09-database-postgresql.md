---
description: PostgreSQL - סכמה, migrations, גיבויים וביצועים
globs: ["**/migrations/**", "**/*.sql", "prisma/**", "drizzle/**"]
alwaysApply: false
---
# PostgreSQL

- Migrations מגורסנים בקוד בלבד (Prisma Migrate/Drizzle Kit/Alembic). אין שינוי סכמה ידני בסביבות.
- שינויים בגישת **expand/contract**: מוסיפים, מעבירים, ורק אחר כך מסירים. כל migration backward-compatible עם הגרסה הקודמת לצורך rollback.
- אילוצים ברמת DB: PK, FK, UNIQUE, NOT NULL, CHECK. טיפוסים מדויקים (timestamptz, numeric לכסף - לעולם לא float).
- אינדקסים לפי שאילתות אמיתיות (EXPLAIN ANALYZE). בדיקת N+1. Connection pooling (PgBouncer/pool של ה-ORM).
- Soft delete ו-audit trail היכן שנדרש. מחיקת נתוני משתמש לפי מדיניות פרטיות.
- DB נפרד לכל סביבה. אין נתוני production ב-develop/staging; אם נדרש - אנונימיזציה.
- גיבויים אוטומטיים יומיים + PITR היכן שאפשר, ובדיקת שחזור (restore drill) תקופתית. RPO/RTO מוגדרים.
- Least privilege: משתמש אפליקציה נפרד ממשתמש migrations. SSL חובה.
- Seed data לפיתוח בלבד, סינתטי.
