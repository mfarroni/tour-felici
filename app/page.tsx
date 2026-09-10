import Link from 'next/link';
import { GrigliaPilastri } from '@/components/CardPilastro';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-emerald-300 text-lg mb-4 font-medium tracking-wide">
            DOLOMITI SINCE 1984
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tour Felici srl
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Agenzia di pubblica utilità per una cultura del bel vivere in montagna.
            Guida Alpina, natura, storia e comunità nelle Dolomiti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guide-alpine"
              className="bg-white text-emerald-900 hover:bg-emerald-50 font-semibold py-3 px-8 rounded-full transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              ⛰️ Scopri le Guide Alpine
            </Link>
            <Link
              href="#pilastri"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-full transition-all duration-200 inline-flex items-center justify-center"
            >
              Esplora i nostri pilastri
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            La Nostra Missione
          </h2>
          <div className="prose prose-lg dark:prose-invert mx-auto space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Da oltre 40 anni, <strong className="text-emerald-700 dark:text-emerald-400">Tour Felici</strong> lavora per valorizzare il patrimonio naturale, culturale e umano delle Dolomiti. 
            </p>
            <p className="text-lg leading-relaxed">
              Non siamo un&apos;agenzia turistica tradizionale. Siamo un progetto di comunità che crede nella montagna come luogo di vita autentica, non di consumo effimero.
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                <span className="text-4xl block mb-3">🌲</span>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Tutela Ambientale</h3>
                <p className="text-sm">Ecosostenibilità concreta e lotta all&apos;iperturismo</p>
              </div>
              <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                <span className="text-4xl block mb-3">🏠</span>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Comunità Viva</h3>
                <p className="text-sm">Ripopolamento rurale e iniziative scolastiche</p>
              </div>
              <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <span className="text-4xl block mb-3">⛰️</span>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Guide Alpine</h3>
                <p className="text-sm">Esperienze autentiche con professionisti certificati</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilastri Section */}
      <section id="pilastri" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <GrigliaPilastri />
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-emerald-900 dark:bg-emerald-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Rimani in Contatto
          </h2>
          <p className="text-emerald-200 mb-8">
            Iscriviti alla newsletter per ricevere storie dalle Dolomiti, 
            eventi della comunità e novità sui nostri progetti.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Tour Felici srl</h3>
            <p className="text-gray-400 text-sm">
              Dolomiti since 1984<br />
              Agenzia di pubblica utilità
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Sezioni</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/guide-alpine" className="hover:text-white transition-colors">Guide Alpine</Link></li>
              <li><Link href="/natura" className="hover:text-white transition-colors">Natura</Link></li>
              <li><Link href="/storia" className="hover:text-white transition-colors">Storia</Link></li>
              <li><Link href="/agricoltura" className="hover:text-white transition-colors">Agricoltura</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Altre Sezioni</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/sport" className="hover:text-white transition-colors">Sport</Link></li>
              <li><Link href="/cultura" className="hover:text-white transition-colors">Cultura</Link></li>
              <li><Link href="/ripopolamento" className="hover:text-white transition-colors">Ripopolamento</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contatti</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>info@tourfelici.it</li>
              <li>+39 0471 XXXXXX</li>
              <li>Dolomiti, Italia</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Tour Felici srl — P.IVA XXXXXXXXXXX
        </div>
      </footer>
    </main>
  );
}
