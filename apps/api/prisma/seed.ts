import { PrismaClient } from "@prisma/client";

if (process.env.NODE_ENV === "production") {
  throw new Error("Refusing to seed in production.");
}

const prisma = new PrismaClient();

const SEED_EMAIL = "test.user@example.com";

function utcDate(daysFromToday: number): Date {
  const d = new Date();
  d.setUTCHours(0, 0, 0, 0);
  d.setUTCDate(d.getUTCDate() + daysFromToday);
  return d;
}

async function main(): Promise<void> {
  await prisma.user.deleteMany({ where: { email: SEED_EMAIL } });

  const user = await prisma.user.create({
    data: {
      email: SEED_EMAIL,
      locale: "he",
      ageConfirmedAt: new Date(),
      consents: {
        create: [
          { type: "terms", version: "2026-11-v1" },
          { type: "privacy", version: "2026-11-v1" },
        ],
      },
      obligations: {
        create: [
          { kind: "bill", name: "Electricity", amountAgorot: 45000, dueDate: utcDate(2), repeat: "monthly" },
          { kind: "bill", name: "Internet", amountAgorot: 12900, dueDate: utcDate(-3), repeat: "monthly" },
          { kind: "i_owe", name: "Loan from a friend", amountAgorot: 200000, dueDate: utcDate(20) },
          { kind: "owed_to_me", name: "Dinner split", amountAgorot: 15000, dueDate: utcDate(7) },
        ],
      },
      transactions: {
        create: [
          { type: "expense", name: "Groceries", amountAgorot: 31050, date: utcDate(-1), category: "groceries" },
          { type: "expense", name: "Bus pass", amountAgorot: 22500, date: utcDate(-4), category: "transport" },
          { type: "income", name: "Salary", amountAgorot: 1000000, date: utcDate(-10) },
        ],
      },
    },
  });

  console.log(`Seeded user ${user.id}`);
}

main()
  .catch((err: unknown) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
