# Money Memory: screens

`docs/history/prototype.html` is a clickable prototype of the **full vision** (open it in a browser). Version 1.0 builds only the screens below; the rest of the prototype is for later versions.

Wireframes canvas (full vision): https://claude.ai/artifact/F87NxM3xZHp6AW5eF6oATG

## Version 1.0 screens

| # | Screen | Stories | What is on it | Leads to |
| --- | --- | --- | --- | --- |
| 1 | Sign-in | D9, D34 | Email field → code field. Signup: "I am 18 or older" and "I accept the terms and privacy policy" (links), both unticked and required | Home |
| 2 | Home | S1, S3, S7, S10 | This month: spent, income, spending by category. Lists: overdue, due in 7 days, later; each row has Mark paid (Mark received for money owed). Empty state "Nothing due" | Add, entry details, Settings |
| 3 | Add / edit entry | S3, S10 | Type (bill, expense, income, I owe, owed to me), name, amount (₪), date, category (expenses), repeat (bills). Save, Delete | Home |
| 4 | Settings | S8, S9 | Language (עברית, العربية, English), privacy and terms link, "Request my data" (opens an email), Delete account with confirmation, Sign out | Sign-in after delete or sign-out |

Bottom navigation in 1.0: Home, Add, Settings.

## Version 1.0 user flows
- **Never miss a bill:** notification 2 days before → open Home → Mark paid → (repeating) next bill appears with its own reminders.
- **Record spending:** Add → Expense → amount and category → Save → Home totals update.
- **Change language:** Settings → Arabic → every screen switches to Arabic and right-to-left.
- **Leave:** Settings → Delete account → confirm → all data removed → back to Sign-in.

## Later (in the prototype, not in 1.0)
Plan tab (budgets, savings goal), action cards on Home, subscriptions screen, snooze, scan receipt, paste SMS, Ask AI, paid plan.
