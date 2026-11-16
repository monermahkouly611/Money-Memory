# Cursor Rules & Skills Kit

חבילת חוקים (rules) וסקילים (skills) לפרויקטים ב-Cursor. כל חוק/סקיל הוא קובץ md נפרד.

## התקנה
העתק את התיקייה `.cursor/` (ואת `templates/`) לשורש כל פרויקט חדש. לשימוש גלובלי בכל הפרויקטים: הדבק את תוכן החוקים ב-Cursor Settings -> Rules (User Rules), ואת הסקילים העתק ל-`~/.cursor/skills/`.

## חוקים - `.cursor/rules/`
| קובץ | תוכן | פעיל |
|---|---|---|
| 00 core-principles | עקרונות ותקנים | תמיד |
| 01 git-branching-workflow | develop/staging/main | תמיד |
| 02 ci-cd-railway | CI/CD ו-Railway | תמיד |
| 03 testing-standards | בדיקות קלות/מלאות/e2e | תמיד |
| 04 security-standards | אבטחה וסריקת תלויות | תמיד |
| 05 code-quality | איכות קוד | תמיד |
| 06 commit-pr-conventions | קומיטים/PR | תמיד |
| 07 stack-mobile-expo | Expo EAS | לפי קבצים |
| 08 stack-web-nextjs | Next.js | לפי קבצים |
| 09 database-postgresql | PostgreSQL | לפי קבצים |
| 10 seo-organic | SEO | לפי קבצים |
| 11 landing-pages | דפי נחיתה | לפי קבצים |
| 12 ai-agents | סוכני AI | לפי קבצים |
| 13 whatsapp-meta | WhatsApp | לפי קבצים |
| 14 paid-marketing | שיווק ממומן | לפי קבצים |
| 15 design-stitch-mcp | עיצוב Stitch | לפי קבצים |
| 16 observability-operations | תפעול | ידני/Agent |
| 17 privacy-compliance | פרטיות | תמיד |
| 18 business-deliverables | מצגת, דוחות, מודל, MVP | לפי קבצים |
| 19 project-type-routing | בחירת סטאק | תמיד |

## סקילים - `.cursor/skills/<name>/SKILL.md`
project-kickoff, setup-github-railway-pipeline, scaffold-nextjs-project, scaffold-expo-app, run-full-test-suite, release-promotion, dependency-vulnerability-scan, design-from-stitch, seo-article-factory, landing-page-build, ai-support-agent-setup, whatsapp-meta-integration, paid-marketing-appendix, investor-deck, financial-reporting-infra, business-model-forecast, mvp-poc, incident-response.

## תבניות - `templates/`
`github-workflows/` (ci-light, ci-full, promote), `branch-protection.sh`.

## נקודות לבדיקה לפני שימוש
1. `.cursor/mcp.json`: חבילת ה-Stitch MCP היא placeholder, יש להחליף בנתונים הרשמיים.
2. תוכן בקנה מידה של 1000 מאמרים: ראה אזהרת איכות ב-`seo-article-factory`.
3. חוקי פרטיות ותקשורת: מסגרת טכנית, לא ייעוץ משפטי.
