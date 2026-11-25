---
description: פיתוח אפליקציות - Expo EAS ל-Android ו-iOS, צד שרת Node/Python
globs: ["app.json", "app.config.*", "eas.json", "apps/mobile/**"]
alwaysApply: false
---
# אפליקציות מובייקל

- Expo (React Native + TypeScript strict) עם Expo Router. בנייה והעלאה ל-**Android ו-iOS** דרך **EAS Build** + EAS Submit + EAS Update (OTA רק לשינויי JS).
- פרופילי `eas.json`: `development` (client), `preview`/`staging` (פנימי, מחובר ל-staging API), `production` (חנויות, מחובר ל-main API). Channel ב-EAS Update לכל סביבה.
- בנייה ל-production מופעלת רק מ-CI אחרי מיזוג ל-`main`. גרסת אפליקציה ו-build number אוטומטיים (`appVersionSource: remote`).
- אחסון סודות משתמש ב-`expo-secure-store`; אין סודות בקוד הלקוח (כל מפתח בקליינט נחשב ציבורי).
- צד שרת: **Node.js (TypeScript, Fastify/NestJS) או Python (FastAPI)** - בחירה אחת לכל שירות, מתועדת ב-ADR. API מתועד ב-OpenAPI.
- Push notifications דרך Expo Push/FCM/APNs, עם הסכמה מפורשת ובקרת תדירות.
- דרישות חנויות: מדיניות פרטיות, Data Safety (Google) ו-App Privacy (Apple), מחיקת חשבון בתוך האפליקציה, הרשאות מינימליות.
- Crash/Error reporting (Sentry) + analytics בכפוף להסכמה. Deep links ו-Universal Links מוגדרים.
- בדיקות: Jest + React Native Testing Library, Maestro/Detox ל-e2e על build של preview.
- נגישות (screen readers, גדלי פונט דינמיים), RTL מלא, מצב offline ו-error states.
