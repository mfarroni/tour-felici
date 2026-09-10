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
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${pilastro.colore} p-6 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50`}
    >
      <div className="relative z-10">
        <span className="text-5xl mb-4 block" role="img" aria-label={pilastro.titolo}>
          {pilastro.icona}
        </span>
        <h3 className="text-xl font-bold mb-2">{pilastro.titolo}</h3>
        <p className="text-sm opacity-90">{pilastro.descrizione}</p>
      </div>
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
}

export function GrigliaPilastri() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
        I Nostri 6 Pilastri
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Sei dimensioni interconnesse per valorizzare il patrimonio delle Dolomiti 
        e promuovere una cultura autentica del vivere in montagna.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pilastri.map((pilastro) => (
          <CardPilastro key={pilastro.id} pilastro={pilastro} />
        ))}
      </div>
    </section>
  );
}
