'use client';

import Link from 'next/link';
import { pilastri, type Pilastro } from '@/types';

interface CardPilastroProps {
  pilastro: Pilastro;
}

export default function CardPilastro({ pilastro }: CardPilastroProps) {
  return (
    <Link 
      href={pilastro.href}
      className="group relative overflow-hidden rounded-3xl bg-dolomia-surface p-7 border border-dolomia-dark/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-alpine hover:border-ocra/60 focus:outline-none focus:ring-2 focus:ring-ocra flex flex-col justify-between"
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl block p-3 rounded-2xl bg-abete/5 group-hover:bg-ocra/15 transition-colors" role="img" aria-label={pilastro.titolo}>
            {pilastro.icona}
          </span>
          <span className="text-[11px] uppercase tracking-widest text-ocra-dark font-semibold">
            Pilastro
          </span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-abete-dark mb-2 group-hover:text-abete transition-colors">
          {pilastro.titolo}
        </h3>
        <p className="text-sm text-ardesia-light leading-relaxed">
          {pilastro.descrizione}
        </p>
      </div>

      <div className="relative z-10 pt-6 mt-4 border-t border-dolomia/80 flex items-center justify-between text-xs font-semibold text-abete group-hover:text-ocra-dark transition-colors">
        <span>Approfondisci</span>
        <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-ocra/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Link>
  );
}

export function GrigliaPilastri() {
  return (
    <section id="pilastri" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-abete/10 text-abete text-xs font-semibold uppercase tracking-widest mb-3">
          Le Fondamenta dell'Agenzia
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-abete-dark mb-4 tracking-tight">
          I Nostri 6 Pilastri Identitari
        </h2>
        <p className="text-lg text-ardesia-light leading-relaxed">
          Sei dimensioni interconnesse nate per valorizzare l'ecosistema montano, custodire la memoria storica e promuovere una cultura del bel vivere in quota.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pilastri.map((pilastro) => (
          <CardPilastro key={pilastro.id} pilastro={pilastro} />
        ))}
      </div>
    </section>
  );
}

