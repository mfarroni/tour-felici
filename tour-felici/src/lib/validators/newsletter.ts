import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email("Inserisci un indirizzo email valido"),
  nome: z.string().max(100).optional(),
  interessi: z
    .array(
      z.enum([
        "NATURA", "STORIA", "AGRICOLTURA",
        "ZOOLOGIA", "CULTURA", "SPORT",
      ])
    )
    .optional(),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "Devi accettare la privacy policy" }),
  }),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;