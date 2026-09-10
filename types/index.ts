export interface Pilastro {
  id: string;
  titolo: string;
  descrizione: string;
  icona: string;
  href: string;
  colore: string;
}

export const pilastri: Pilastro[] = [
  {
    id: 'natura',
    titolo: 'Natura',
    descrizione: 'Flora, fauna e geologia delle Dolomiti UNESCO',
    icona: '🌿',
    href: '/natura',
    colore: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'storia',
    titolo: 'Storia',
    descrizione: 'Grande Guerra, tradizioni ladine e memoria dei luoghi',
    icona: '📜',
    href: '/storia',
    colore: 'from-amber-600 to-orange-700',
  },
  {
    id: 'agricoltura',
    titolo: 'Agricoltura',
    descrizione: 'Malghe, produttori locali e filiera km0 reale',
    icona: '🏔️',
    href: '/agricoltura',
    colore: 'from-yellow-600 to-amber-700',
  },
  {
    id: 'sport',
    titolo: 'Sport',
    descrizione: 'Guide Alpine e esperienze in quota',
    icona: '⛰️',
    href: '/sport',
    colore: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'cultura',
    titolo: 'Cultura',
    descrizione: 'Architettura rurale, arte e identità dolomitica',
    icona: '🏛️',
    href: '/cultura',
    colore: 'from-violet-600 to-purple-700',
  },
  {
    id: 'ripopolamento',
    titolo: 'Ripopolamento',
    descrizione: 'Progetti sociali per le comunità di montagna',
    icona: '👨‍👩‍👧‍👦',
    href: '/ripopolamento',
    colore: 'from-rose-600 to-pink-700',
  },
];

export interface GuidaAlpina {
  id: number;
  nome: string;
  cognome: string;
  specializzazione?: string;
  bio: string;
  immagine?: string;
  certificazioni?: string[];
}

export interface NewsletterSubscription {
  id: number;
  email: string;
  nome?: string;
  data_iscrizione: Date;
  attivo: boolean;
}
