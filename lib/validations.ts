import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z.string().email('Inserisci un indirizzo email valido'),
  nome: z.string().min(2, 'Il nome deve contenere almeno 2 caratteri').optional(),
  consenso: z.boolean().refine(val => val === true, 'È necessario accettare la privacy policy'),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

export const guideAlpineSchema = z.object({
  nome: z.string().min(2),
  cognome: z.string().min(2),
  specializzazione: z.string().optional(),
  bio: z.string().min(10),
  immagine: z.string().url().optional(),
});

export type GuideAlpineInput = z.infer<typeof guideAlpineSchema>;
