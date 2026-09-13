// Tipi condivisi tra frontend e backend

export type Ruolo = 'CLIENTE' | 'GUIDA' | 'ADMIN';
export type Difficolta = 'FAMIGLIA' | 'ESCURSIONISTA' | 'ESPERTO' | 'ALPINISTICO';
export type Ambito = 'NATURA' | 'STORIA' | 'AGRICOLTURA' | 'ZOOLOGIA' | 'CULTURA' | 'SPORT' | 'GEOLOGIA' | 'GRANDE_GUERRA';
export type Stagione = 'PRIMAVERA' | 'ESTATE' | 'AUTUNNO' | 'INVERNO';
export type StatoPartenza = 'APERTA' | 'IN_CORSO' | 'COMPLETATA' | 'ANNULLATA';
export type StatoPrenotazione = 'IN_ATTESA' | 'CONFERMATA' | 'PAGATA' | 'COMPLETATA' | 'ANNULLATA' | 'RIMBORSATA';

export interface Guida {
  id: string;
  nome: string;
  cognome: string;
  bio: string;
  foto_url: string | null;
  email: string;
  anno_esperienza: number;
  collegio_guida: string;
  lingue: string[];
  specializzazioni: string[];
  attivo: boolean;
}

export interface Itinerario {
  id: string;
  slug: string;
  titolo: string;
  sottotitolo: string | null;
  descrizione: string;
  descrizione_breve: string;
  durata_ore: number;
  dislivello_pos: number;
  dislivello_neg: number | null;
  difficolta: Difficolta;
  quota_max: number | null;
  quota_min: number | null;
  zona: string;
  gruppo_montuoso: string;
  coordinate_start: { lat: number; lng: number } | null;
  note_naturalistiche: string | null;
  note_storiche: string | null;
  note_culturali: string | null;
  fauna_avvistabile: string[];
  flora_presente: string[];
  tags: Ambito[];
  stagione_consigliata: Stagione[];
  max_partecipanti: number;
  prezzo_base: number;
  incluso: string[];
  richiesto: string[];
  attivo: boolean;
  pubblicato: boolean;
  created_at: string;
}

export interface Partenza {
  id: string;
  itinerario_id: string;
  data_inizio: string;
  data_fine: string | null;
  posti_totali: number;
  posti_occupati: number;
  prezzo_speciale: number | null;
  stato: StatoPartenza;
}

export interface NewsletterIscritto {
  id: string;
  email: string;
  nome: string | null;
  interessi: Ambito[];
  attivo: boolean;
  created_at: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}