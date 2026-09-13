import { z } from "zod";

export const bookingSchema = z.object({
  partenza_id: z.string().uuid("ID partenza non valido"),
  nome_referente: z.string().min(2, "Nome troppo corto").max(100),
  email_referente: z.string().email("Email non valida"),
  telefono: z.string().min(6, "Telefono troppo corto").max(30),
  num_partecipanti: z.number().int().min(1).max(12),
  note_richiesta: z.string().max(2000).optional(),
  livello_gruppo: z
    .enum(["FAMIGLIA", "ESCURSIONISTA", "ESPERTO", "ALPINISTICO"])
    .optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;