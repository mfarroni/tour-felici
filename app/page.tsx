import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BentoGrid from '@/components/BentoGrid';
import { GrigliaPilastri } from '@/components/CardPilastro';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-dolomia-light bg-topo-pattern text-ardesia flex flex-col">
      {/* Header & Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section ad altissimo impatto */}
        <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-abete-dark">
          {/* Sfondo fotografico d'autore delle vette dolomitiche con foschia */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=85"
              alt="Cime delle Dolomiti nella foschia all'alba"
              className="w-full h-full object-cover object-center opacity-45 scale-105 transition-transform duration-1000"
            />
            {/* Sovrapposizione a gradiente verde abete e curve topografiche */}
            <div className="hero-overlay absolute inset-0" />
            <div className="absolute inset-0 bg-topo-dark opacity-15" />
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto px-2">
            {/* Tagline Heritage */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-ocra-light text-xs font-semibold uppercase tracking-[0.25em] mb-8 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-ocra"></span>
              Dolomiti UNESCO · Dal 1984
            </div>

            {/* Titolo Monumentale Serif */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.08] tracking-tight">
              Tour Felici — <br className="hidden sm:inline" />
              <span className="italic font-normal text-dolomia">Custodi della Montagna</span>{' '}
              <span className="font-serif italic text-ocra text-3xl sm:text-5xl md:text-6xl block sm:inline mt-2 sm:mt-0 font-normal">
                dal 1984
              </span>
            </h1>

            {/* Sottotitolo Valoriale */}
            <p className="text-lg sm:text-2xl text-dolomia-light/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Esperienze Alpine Autentiche, Preservazione dell'Ecosistema Dolomitico e Sostegno Attivo alle Comunità Locali.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="#servizi-ambientali"
                className="w-full sm:w-auto bg-ocra hover:bg-ocra-light text-abete-dark font-bold text-sm uppercase tracking-wider py-4 px-9 rounded-full shadow-alpine-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Esplora la Montagna</span>
                <span className="text-base">↓</span>
              </Link>
              <Link
                href="/guide-alpine"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold text-sm uppercase tracking-wider py-4 px-8 rounded-full backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>⛰️ Le Guide Alpine</span>
              </Link>
            </div>

            {/* Badge Indicatori Chiave */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/15 max-w-4xl mx-auto text-left">
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-ocra">40+</div>
                <div className="text-xs text-dolomia/80 mt-0.5">Anni di Presenza Attiva</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white">100%</div>
                <div className="text-xs text-dolomia/80 mt-0.5">Guide Alpine IFMGA</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">0%</div>
                <div className="text-xs text-dolomia/80 mt-0.5">Turismo Predatorio</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-dolomia">14</div>
                <div className="text-xs text-dolomia/80 mt-0.5">Borghi & Comunità Partner</div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Servizi per l'Ambiente & Ecosostenibilità */}
        <BentoGrid />

        {/* Manifesto: Lentezza e Rigore Scientifico */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dolomia-surface border-y border-dolomia-dark/60">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-ocra-dark bg-ocra/10 px-3 py-1.5 rounded-full inline-block">
                  Il Nostro Manifesto
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-bold text-abete-dark leading-tight">
                  La montagna non è un parco giochi, ma un organismo vivente.
                </h2>
                <div className="space-y-4 text-ardesia-light text-base sm:text-lg leading-relaxed">
                  <p>
                    Fondata nel 1984 nel cuore delle valli ladine, <strong>Tour Felici srl</strong> è nata con una convinzione radicale: contrastare la mercificazione effimera delle vette dolomitiche attraverso la conoscenza scientifica, il passo lento e la valorizzazione di chi la montagna la abita tutto l'anno.
                  </p>
                  <p>
                    Non proponiamo record o turismo da consumo fotografico. Educhiamo lo sguardo, guidiamo in sicurezza su pareti e sentieri millenari, e reinvestiamo le nostre risorse a favore delle comunità rurali d'alta quota.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-dolomia-dark shadow-sm">
                    <span className="text-2xl">🌲</span>
                    <div>
                      <h4 className="text-sm font-bold text-abete-dark">Ecologia & Biodiversità</h4>
                      <p className="text-xs text-ardesia-muted">Divulgazione botanica e geologica</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-dolomia-dark shadow-sm">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h4 className="text-sm font-bold text-abete-dark">Comunità Montane</h4>
                      <p className="text-xs text-ardesia-muted">Filiera corta e ripopolamento</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Riquadro Citazione / Sigillo di Garanzia */}
              <div className="md:col-span-5">
                <div className="bg-abete text-dolomia-light p-8 sm:p-10 rounded-3xl border border-abete-light shadow-alpine-lg relative overflow-hidden">
                  <span className="text-6xl text-ocra/40 font-serif leading-none block mb-4">“</span>
                  <p className="font-serif text-xl sm:text-2xl leading-relaxed text-white mb-6">
                    Cammina sulle orme dei pastori e delle guide che da secoli attraversano queste forcelle. Ogni sentiero non è una sfida, ma una relazione.
                  </p>
                  <div className="border-t border-white/15 pt-4">
                    <div className="font-bold text-ocra text-sm">Tour Felici srl</div>
                    <div className="text-xs text-dolomia/70">Ente di pubblica utilità e servizi ambientali</div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-ocra/10 blur-2xl pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* I 6 Pilastri */}
        <GrigliaPilastri />

        {/* Trasparenza Green & Cruscotto */}
        <section id="sostenibilita" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-abete-dark via-abete to-abete-light text-white rounded-4xl p-8 sm:p-14 shadow-alpine-lg relative overflow-hidden border border-white/10">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-ocra text-xs font-semibold uppercase tracking-widest mb-4">
                🌱 Impegno Sostenibile Certificato
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                Sostenibilità Digitale e Ambientale Reale
              </h2>
              <p className="text-dolomia/90 text-base sm:text-lg mb-8 leading-relaxed">
                Questo portale è alimentato da energia 100% rinnovabile (server carbon-neutral), privo di cookie invasivi o tracker pubblicitari di terze parti, con immagini e script compressi per ridurre al minimo i consumi energetici di rete.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-xs text-dolomia/70 uppercase tracking-wider mb-1">Emissioni Web</div>
                  <div className="text-xl font-bold font-mono text-emerald-300">0.08g CO₂</div>
                  <div className="text-xs text-dolomia/80 mt-1">Per visualizzazione (Top 5% globale)</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-xs text-dolomia/70 uppercase tracking-wider mb-1">Privacy First</div>
                  <div className="text-xl font-bold font-mono text-ocra">No Cookies</div>
                  <div className="text-xs text-dolomia/80 mt-1">Nessuna profilazione commerciale</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-xs text-dolomia/70 uppercase tracking-wider mb-1">Accessibilità</div>
                  <div className="text-xl font-bold font-mono text-white">WCAG 2.1 AA</div>
                  <div className="text-xs text-dolomia/80 mt-1">Navigazione per ogni esigenza</div>
                </div>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-topo-dark opacity-10 pointer-events-none hidden lg:block" />
          </div>
        </section>

        {/* Newsletter / Bollettino dei Sentieri */}
        <section id="newsletter" className="py-24 px-4 sm:px-6 lg:px-8 bg-abete text-dolomia-light">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-ocra bg-white/10 px-3 py-1.5 rounded-full inline-block mb-4">
              Bollettino Mensile
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
              Rimani Connesso con la Montagna
            </h2>
            <p className="text-dolomia/90 text-base sm:text-lg mb-8 leading-relaxed">
              Ricevi ogni mese il nostro bollettino sullo stato dei sentieri, appuntamenti di divulgazione scientifica, racconti della tradizione ladina e progetti delle comunità locali.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </main>

      {/* Footer Istituzionale & Editoriale */}
      <footer className="bg-abete-deep text-dolomia-light border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Colonna 1: Identità */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-ocra text-abete-dark flex items-center justify-center font-bold">
                TF
              </div>
              <span className="font-serif font-bold text-2xl text-white">
                Tour Felici srl
              </span>
            </div>
            <p className="text-sm text-dolomia/80 max-w-sm leading-relaxed">
              Dolomiti since 1984 · Agenzia di pubblica utilità per la tutela del patrimonio naturale, la cultura alpina e l'accompagnamento etico in quota.
            </p>
            <div className="pt-2 text-xs text-ocra-light flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Server a basso impatto ambientale · Carbon Neutral Hosting
            </div>
          </div>

          {/* Colonna 2: Servizi & Natura */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Aree di Tutela
            </h4>
            <ul className="space-y-2.5 text-sm text-dolomia/80">
              <li><Link href="/natura" className="hover:text-ocra transition-colors">Flora & Geologia</Link></li>
              <li><Link href="/guide-alpine" className="hover:text-ocra transition-colors">Guide Alpine IFMGA</Link></li>
              <li><Link href="/agricoltura" className="hover:text-ocra transition-colors">Malghe & Filiera Km0</Link></li>
              <li><Link href="/storia" className="hover:text-ocra transition-colors">Memoria della Grande Guerra</Link></li>
            </ul>
          </div>

          {/* Colonna 3: Comunità */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Progetti Sociali
            </h4>
            <ul className="space-y-2.5 text-sm text-dolomia/80">
              <li><Link href="/ripopolamento" className="hover:text-ocra transition-colors">Ripopolamento Rurale</Link></li>
              <li><Link href="/cultura" className="hover:text-ocra transition-colors">Identità Ladina</Link></li>
              <li><Link href="/sport" className="hover:text-ocra transition-colors">Didattica per Scuole</Link></li>
              <li><Link href="#sostenibilita" className="hover:text-ocra transition-colors">Report di Sostenibilità</Link></li>
            </ul>
          </div>

          {/* Colonna 4: Contatti & Territorio */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Sede Operativa
            </h4>
            <ul className="space-y-2 text-sm text-dolomia/80">
              <li>Dolomiti UNESCO, Italia</li>
              <li className="font-mono text-xs text-ocra">info@tourfelici.it</li>
              <li>P.IVA 02849200219</li>
              <li className="pt-2 text-xs text-dolomia/60">Aperto dal lunedì al sabato per attività in quota e progetti didattici.</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-dolomia/60 gap-4">
          <p>© {new Date().getFullYear()} Tour Felici srl — Tutti i diritti riservati. Costruito con rispetto per la montagna e le sue comunità.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/trasparenza" className="hover:text-white transition-colors">Trasparenza Amministrativa</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

