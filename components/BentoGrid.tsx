import React from 'react';
import Link from 'next/link';

export default function BentoGrid() {
  return (
    <section id="servizi-ambientali" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Intestazione Sezione */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-abete/10 text-abete text-xs font-semibold uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-ocra animate-pulse"></span>
          I Nostri Ambiti di Custodia
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-abete-dark mb-4 tracking-tight">
          Servizi per l'Ambiente & Comunità
        </h2>
        <p className="text-lg text-ardesia-light leading-relaxed">
          Un approccio integrato di tutela, divulgazione scientifica e presenza attiva sul territorio dolomitico.
        </p>
      </div>

      {/* Grid Bento a 4 colonne / layout asimmetrico */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Biodiversità Unica */}
        <div className="group relative bg-dolomia-light rounded-3xl p-6 border border-dolomia-dark/60 shadow-sm hover:shadow-alpine transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-ocra-dark bg-ocra/10 px-2.5 py-1 rounded-md">
                Ecosistemi
              </span>
              <span className="text-2xl">🌸</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-abete-dark mb-2 group-hover:text-abete transition-colors">
              Biodiversità Unica
            </h3>
            <p className="text-sm text-ardesia-light leading-relaxed mb-4">
              Tutela e censimento della flora d'alta quota (<em className="text-xs">Leontopodium alpinum</em>, muschi relitti) e monitoraggio dei corridoi faunistici dei grandi ungulati.
            </p>
          </div>

          <div className="space-y-3">
            {/* Foto immersiva / Preview grafica */}
            <div className="relative h-44 rounded-2xl overflow-hidden bg-abete-light/20">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
                alt="Flora e paesaggio dolomitico"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abete-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                Oltre 1.200 specie botaniche censite
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-abete font-semibold">
              <span>Progetto Rete Natura 2000</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>

        {/* Card 2: Guide Alpine Certificate */}
        <div className="group relative bg-dolomia-light rounded-3xl p-6 border border-dolomia-dark/60 shadow-sm hover:shadow-alpine transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-ocra-dark bg-ocra/10 px-2.5 py-1 rounded-md">
                Core Business
              </span>
              <span className="text-2xl">⛰️</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-abete-dark mb-2 group-hover:text-abete transition-colors">
              Guide Alpine Certificate
            </h3>
            <p className="text-sm text-ardesia-light leading-relaxed mb-4">
              Accompagnamento professionale con abilitazione internazionale IFMGA/UIAGM. Salite etiche, vie ferrate e rispetto rigido dei silenzi montani.
            </p>
          </div>

          <div className="space-y-3">
            <div className="relative h-44 rounded-2xl overflow-hidden bg-abete-light/20">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80"
                alt="Guida Alpina in cammino verso la vetta"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abete-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Disponibilità uscite settimanali
              </div>
            </div>

            <Link
              href="/guide-alpine"
              className="pt-2 flex items-center justify-between text-xs text-abete font-semibold group-hover:text-ocra-dark transition-colors"
            >
              <span>Profili Guide & Tariffe</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Card 3: Eco-Sostenibilità Attiva (Dashboard) */}
        <div className="group relative bg-abete text-dolomia-light rounded-3xl p-6 border border-abete-light shadow-alpine hover:shadow-alpine-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-ocra bg-white/10 px-2.5 py-1 rounded-md">
                Monitoraggio Live
              </span>
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Eco-Sostenibilità Attiva
            </h3>
            <p className="text-sm text-dolomia/90 leading-relaxed mb-4">
              Contrasto scientifico all'iperturismo. Mappiamo il carico antropico su forcelle e vallate per preservare il silenzio e la quiete.
            </p>
          </div>

          {/* Mini-Cruscotto vettoriale */}
          <div className="relative z-10 bg-abete-dark/80 rounded-2xl p-4 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-dolomia/80">Pressione Turistica Oggi</span>
              <span className="text-emerald-400 font-mono font-bold">BASSA (24%)</span>
            </div>
            {/* Barre di andamento */}
            <div className="space-y-1.5">
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-ocra h-full rounded-full w-1/4"></div>
              </div>
              <div className="flex justify-between text-[10px] text-dolomia/60 font-mono">
                <span>Fondovalle: Moderato</span>
                <span>Alte Quote: Protetto</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-center">
              <div className="p-2 rounded-lg bg-white/5">
                <div className="text-base font-bold text-ocra font-mono">0%</div>
                <div className="text-[10px] text-dolomia/70">Greenwashing</div>
              </div>
              <div className="p-2 rounded-lg bg-white/5">
                <div className="text-base font-bold text-white font-mono">100%</div>
                <div className="text-[10px] text-dolomia/70">Tracciabilità</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 flex items-center justify-between text-xs text-ocra font-semibold">
            <span>Report Ambientale Annuale</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>

          {/* Texture di fondo a curve di livello */}
          <div className="absolute inset-0 bg-topo-dark opacity-10 pointer-events-none" />
        </div>

        {/* Card 4: Preservazione Comunità Locali */}
        <div className="group relative bg-dolomia-light rounded-3xl p-6 border border-dolomia-dark/60 shadow-sm hover:shadow-alpine transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-ocra-dark bg-ocra/10 px-2.5 py-1 rounded-md">
                Ripopolamento
              </span>
              <span className="text-2xl">🏡</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-abete-dark mb-2 group-hover:text-abete transition-colors">
              Comunità & Borghi
            </h3>
            <p className="text-sm text-ardesia-light leading-relaxed mb-4">
              Progetti sociali contro lo spopolamento delle terre alte. Supporto a botteghe artigiane, malghe storiche e identità linguistica ladina.
            </p>
          </div>

          <div className="space-y-3">
            <div className="relative h-44 rounded-2xl overflow-hidden bg-abete-light/20">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Borgo alpino dolomitico"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abete-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                14 Comuni montani coinvolti
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-abete font-semibold">
              <span>Iniziative di Ripopolamento</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
