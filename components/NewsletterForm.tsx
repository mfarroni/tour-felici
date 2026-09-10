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
      <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 text-center">
        <p className="text-emerald-800 dark:text-emerald-200 font-medium">
          📬 Grazie per esserti iscritto! Riceverai presto le nostre novità.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
          placeholder="latuo@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Nome (opzionale)
        </label>
        <input
          id="nome"
          type="text"
          {...register('nome')}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
          placeholder="Il tuo nome"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          id="consenso"
          type="checkbox"
          {...register('consenso')}
          className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
        />
        <label htmlFor="consenso" className="text-sm text-gray-600 dark:text-gray-400">
          Accetto la{' '}
          <a href="/privacy" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">
            privacy policy
          </a>{' '}
          e acconsento al trattamento dei dati personali *
        </label>
      </div>
      {errors.consenso && (
        <p className="text-sm text-red-600 dark:text-red-400">{errors.consenso.message}</p>
      )}

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
      >
        {isSubmitting ? 'Iscrizione in corso...' : 'Iscriviti alla newsletter'}
      </button>
    </form>
  );
}
