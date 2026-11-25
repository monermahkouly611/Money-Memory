-- Money Memory: rules Prisma cannot express. Apply after the first Prisma migration (task 2).
-- Amounts are integer agorot and must be positive.
ALTER TABLE "Obligation"  ADD CONSTRAINT obligation_amount_positive  CHECK ("amountAgorot" > 0);
ALTER TABLE "Transaction" ADD CONSTRAINT transaction_amount_positive CHECK ("amountAgorot" > 0);
-- A login code may be tried at most 5 times.
ALTER TABLE "LoginCode"   ADD CONSTRAINT login_code_attempts_max     CHECK ("attempts" BETWEEN 0 AND 5);
