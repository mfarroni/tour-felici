import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-abete text-neve mt-24">
      <div className="container-main py-16 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl mb-2">Tour Felici</h3>
          <p className="text-sm text-neve/70 mb-4">Dolomiti since 1984</p>
          <p className="text-xs text-neve/50 leading-relaxed">
            Promuoviamo una cultura del bel vivere in montagna, nel rispetto
            della natura e delle comunità locali.
          </p>
        </div>

        {/* Esplora */}
        <div>
          <h4 className="font-semibold mb-4 text-ocra text-sm uppercase tracking-wider">
            Esplora
          </h4>
          <ul className="space-y-2 text-sm text-neve/80">
            <li><Link href="/guide" className="hover:text-ocra transition-colors">Guide Alpine</Link></li>
            <li><Link href="/natura" className="hover:text-ocra transition-colors">Natura & Zoologia</Link></li>
            <li><Link href="/storia" className="hover:text-ocra transition-colors">Storia & Memoria</Link></li>
            <li><Link href="/agricoltura" className="hover:text-ocra transition-colors">Agricoltura & Gusto</Link></li>
            <li><Link href="/sport" className="hover:text-ocra transition-colors">Sport Sostenibile</Link></li>
            <li><Link href="/cultura" className="hover:text-ocra transition-colors">Cultura Identitaria</Link></li>
          </ul>
        </div>

        {/* Progetto Sociale */}
        <div>
          <h4 className="font-semibold mb-4 text-ocra text-sm uppercase tracking-wider">
            Progetto Sociale
          </h4>
          <ul className="space-y-2 text-sm text-neve/80">
            <li><Link href="/ripopolamento" className="hover:text-ocra transition-colors">Ripopolamento rurale</Link></li>
            <li><Link href="/newsletter" className="hover:text-ocra transition-colors">Newsletter</Link></li>
            <li><Link href="/ripopolamento" className="hover:text-ocra transition-colors">Adotta un borgo</Link></li>
            <li><Link href="/agricoltura" className="hover:text-ocra transition-colors">Produttori locali</Link></li>
          </ul>
        </div>

        {/* Contatti */}
        <div>
          <h4 className="font-semibold mb-4 text-ocra text-sm uppercase tracking-wider">
            Contatti
          </h4>
          <p className="text-sm text-neve/80">info@tourfelici.it</p>
          <p className="text-sm text-neve/80 mt-1">+39 0436 000 000</p>
          <p className="text-sm text-neve/80 mt-1">Cortina d'Ampezzo (BL)</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-neve/10 py-6">
        <div className="container-main flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neve/50">
          <p>© 1984–{new Date().getFullYear()} Tour Felici srl · P.IVA 00000000000</p>
          <p>Turismo sostenibile nelle Dolomiti UNESCO</p>
        </div>
      </div>
    </footer>
  );
}