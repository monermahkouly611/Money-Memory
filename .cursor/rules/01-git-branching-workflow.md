---
description: מודל ענפים, Git ו-GitHub - develop/staging/main וסדר עדכון
alwaysApply: true
---
# מודל ענפים ו-Git

## ענפים ראשיים (בענן ב-GitHub)
| ענף | תפקיד | סביבה |
|---|---|---|
| `develop` | פיתוח ואינטגרציה. הענף המקומי היחיד במחשב | Render Development |
| `staging` | בדיקות המדמות production, אבל אינה production | Render Staging |
| `main` | production. המשתמשים עובדים עליו, חייב לעבוד ללא באגים | Render Production |

## כללים
- **במחשב המקומי קיים רק `develop` כענף ראשי.** `staging` ו-`main` לא נשלפים לעבודה ולא נערכים מקומית.
- ענפי עבודה (`feature/*`, `fix/*`, `chore/*`, `docs/*`) **קודמים ל-develop**: נוצרים מ-develop, חיים קצר, ממוזגים ל-develop ב-PR, ונמחקים אחרי המיזוג.
- **אסור לעבוד ישירות על staging או main.** שינוי מגיע אליהם אך ורק דרך קידום (promotion).
- **סדר עדכון קבוע ועולה:** `develop` -> `staging` -> `main`. אסור לדלג על שלב, ואסור לקדם ל-main משהו שלא עבר staging.
- קידום = PR מ-`develop` ל-`staging`, ואז PR מ-`staging` ל-`main`. אין מיזוג הפוך.
- Hotfix גם הוא עובר את כל הרצף (develop -> staging -> main), בלי קיצורי דרך. הרצף מהיר כשה-pipeline אוטומטי.
- ענפי main/staging/develop מוגנים (branch protection): ללא push ישיר, ללא force push, ללא מחיקה.

## מיזוג
- GitHub חוסם מיזוג עד שכל בדיקות ה-PR ירוקות (required status checks) ויש לפחות review אחד (או self-review מתועד בעבודה סולו).
- ל-develop: squash merge. ל-staging ול-main: merge commit (שומר היסטוריית קידום).
- ענף חייב להיות up-to-date מול היעד לפני מיזוג.

## הקשר ל-Render
**GitHub הוא מקור האמת.** אין deploy ידני ל-Render. עדכון ענף ב-GitHub מפעיל deploy אוטומטי לסביבה המתאימה.

## אמצעים מקומיים
- `git config pull.ff only`, `git config fetch.prune true`.
- Pre-commit hooks (lint, format, secret scan) דרך husky/lefthook.
- קומיט וחתימה לפי `06-commit-pr-conventions.md`.
