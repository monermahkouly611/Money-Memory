import { z } from "zod";

export const localeSchema = z.enum(["he", "ar", "en"]);
export type Locale = z.infer<typeof localeSchema>;

export const repeatSchema = z.enum(["none", "weekly", "monthly", "yearly"]);
export const obligationKindSchema = z.enum(["bill", "i_owe", "owed_to_me"]);
export const transactionTypeSchema = z.enum(["expense", "income"]);
export const categorySchema = z.enum([
  "groceries",
  "transport",
  "eating_out",
  "health",
  "housing",
  "fun",
  "other",
]);

/** Money is always integer agorot (ILS cents). Never floats. */
export const amountAgorotSchema = z.number().int().positive();

/** YYYY-MM-DD */
export const isoDateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

export const healthResponseSchema = z.literal("ok");
