---
description: תקני בדיקות - קלות לפני develop, מלאות מ-develop ועד production, כולל e2e
alwaysApply: true
---
# תקני בדיקות

## בדיקות קלות (כל ענף שקודם ל-develop)
Lint, format, typecheck, unit tests, integration מהירים, secret scan, dependency audit, build. זמן יעד: עד ~10 דקות.

## בדיקות מלאות (develop -> staging -> main)
חייבות לכלול **e2e** ו**כל** סוגי הבדיקות, פונקציונליות ולא-פונקציונליות:

### פונקציונליות
- Unit, Integration, API/Contract (OpenAPI / Pact), Component
- **E2E**: Playwright לווב, Detox/Maestro לאפליקציית Expo - על תרחישי משתמש מרכזיים
- Regression, Smoke, Sanity, UAT/Acceptance (ב-staging)
- בדיקות DB: migrations קדימה ואחורה, אילוצים, אינדקסים
- בדיקות אינטגרציה חיצוניות (Meta/WhatsApp, תשלומים, LLM) מול sandbox/mocks מבוקרים

### לא-פונקציונליות
- **ביצועים:** Load, Stress, Spike, Soak (k6/Artillery), Lighthouse + Core Web Vitals
- **אבטחה:** SAST (CodeQL/Semgrep), DAST (OWASP ZAP), SCA (dependency scan), secret scanning, container scan (Trivy), בדיקות authz/IDOR
- **נגישות:** axe-core, WCAG 2.2 AA
- **תאימות:** דפדפנים, מכשירים, גרסאות iOS/Android, RTL/LTR
- **שימושיות ו-i18n/l10n**
- **אמינות ושחזור:** chaos בסיסי, failover, backup/restore drill, rollback test
- **תאימות רגולטורית:** בדיקות פרטיות וקבלת הסכמה (consent)
- **Observability:** וידוא שלוגים, מטריקות ואלרטים עובדים

## כללים
- כיסוי: מינימום 80% על לוגיקה עסקית (שורות וענפים), 100% על לוגיקה כספית/אבטחתית. אסור להוריד כיסוי ב-PR.
- בדיקות דטרמיניסטיות; בדיקה flaky - מתקנים או ממקמים בהסגר עם issue, לא מתעלמים.
- כל באג שמתגלה מקבל קודם בדיקה שנכשלת (regression test) ואז תיקון.
- Test pyramid: הרבה unit, פחות integration, מעט e2e ממוקד.
- נתוני בדיקה סינתטיים בלבד. אסור נתוני production בסביבות בדיקה.
- ב-staging רצה בדיקה מלאה על נתונים ותשתית הדומים ל-production לפני כל קידום ל-main.
- הדוח (תוצאות, כיסוי, ביצועים) נשמר כ-artifact של ה-run ומקושר ל-PR.
