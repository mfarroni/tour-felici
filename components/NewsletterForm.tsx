'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsletterSchema, type NewsletterInput } from '@/lib/validations';

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      nome: '',
      consenso: false,
    },
  });

  const onSubmit = async (data: NewsletterInput) => {
    try {
      setError(null);
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'Errore durante l\'iscrizione');
      }

      setSubmitted(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore imprevisto');
    }
  };

  if (submitted) {
    return (
      <div className="bg-abete/80 border border-ocra/30 rounded-2xl p-6 text-center shadow-alpine">
        <span className="text-3xl block mb-2">🏔️</span>
        <p className="text-dolomia-light font-serif text-lg font-medium">
          Grazie per esserti unito alla nostra comunità!
        </p>
        <p className="text-xs text-dolomia/80 mt-1">
          Riceverai il Bollettino dei Sentieri e delle Comunità all'indirizzo indicato.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-dolomia-light mb-1.5">
          Indirizzo Email *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-3 bg-abete-dark/70 border border-white/15 rounded-xl text-white placeholder-dolomia/40 text-sm focus:outline-none focus:ring-2 focus:ring-ocra focus:border-transparent transition-all"
          placeholder="nome@dominio.it"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-amber-300">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="nome" className="block text-xs font-semibold uppercase tracking-wider text-dolomia-light mb-1.5">
          Nome e Cognome (opzionale)
        </label>
        <input
          id="nome"
          type="text"
          {...register('nome')}
          className="w-full px-4 py-3 bg-abete-dark/70 border border-white/15 rounded-xl text-white placeholder-dolomia/40 text-sm focus:outline-none focus:ring-2 focus:ring-ocra focus:border-transparent transition-all"
          placeholder="es. Mario Rossi"
        />
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          id="consenso"
          type="checkbox"
          {...register('consenso')}
          className="mt-1 w-4 h-4 text-ocra border-white/20 rounded bg-abete-dark focus:ring-ocra focus:ring-offset-0"
        />
        <label htmlFor="consenso" className="text-xs text-dolomia/80 leading-snug">
          Accetto la{' '}
          <a href="/privacy" className="text-ocra hover:underline" target="_blank" rel="noopener noreferrer">
            informativa sulla privacy
          </a>{' '}
          e acconsento a ricevere aggiornamenti su progetti ecologici ed eventi alpini. Nessun invio commerciale aggressivo. *
        </label>
      </div>
      {errors.consenso && (
        <p className="text-xs text-amber-300">{errors.consenso.message}</p>
      )}

      {error && (
        <div className="bg-red-950/40 border border-red-500/30 rounded-xl p-3">
          <p className="text-xs text-red-200">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-ocra hover:bg-ocra-light disabled:bg-ocra/50 text-abete-dark font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 text-sm uppercase tracking-wider shadow-md hover:shadow-lg mt-2 cursor-pointer flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>Iscrizione in corso...</span>
        ) : (
          <>
            <span>Iscriviti al Bollettino</span>
            <span>→</span>
          </>
        )}
      </button>
    </form>
  );
}
