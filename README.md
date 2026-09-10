# Tour Felici srl — Dolomiti since 1984

Portale web modulare e scalabile per un'agenzia che promuove una cultura del bel vivere in montagna, con focus sulle Dolomiti.

## 🎯 Mission

- **Valorizzare** il patrimonio naturale (flora, fauna, geologia, ecosistemi alpini)
- **Promuovere** risorse eno-gastronomiche (malghe, produttori locali, km0 reale)
- **Custodire** storia e cultura identitaria (Grande Guerra, tradizioni ladine, architettura rurale)
- **Sviluppare** progetti sociali (ripopolamento rurale, terzo settore, iniziative scolastiche)
- **Tutelare** l'ambiente (ecosostenibilità, lotta all'iperturismo, divulgazione ecologica)
- **Offrire** il servizio di Guida Alpina come core business esperienziale

## 🛠️ Stack Tecnologico

```yaml
Frontend:
  framework: Next.js 14 (App Router)
  language: TypeScript (strict mode)
  styling: Tailwind CSS
  state: React Context + Server Components
  forms: React Hook Form + Zod

Backend:
  runtime: Node.js 20+
  api: Next.js API Routes
  database: PostgreSQL (Neon serverless)
  driver: node-postgres (pg) - NO ORM
  auth: NextAuth.js
  validation: Zod

DevOps:
  hosting: Vercel (frontend + API)
  database: Neon (PostgreSQL serverless)
  ci_cd: GitHub Actions
  monitoring: Sentry (error tracking)
  analytics: Plausible (privacy-friendly)
```

## 📁 Struttura Progetto

```
tour-felici/
├── app/                      # Next.js App Router
│   ├── api/                  # API Routes
│   │   └── newsletter/       # Endpoint iscrizione newsletter
│   ├── guide-alpine/         # Sezione Guide Alpine
│   ├── natura/               # Sezione Natura
│   ├── storia/               # Sezione Storia
│   ├── agricoltura/          # Sezione Agricoltura
│   ├── sport/                # Sezione Sport
│   ├── cultura/              # Sezione Cultura
│   ├── ripopolamento/        # Sezione Ripopolamento
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/               # Componenti React riutilizzabili
│   ├── CardPilastro.tsx      # Card per i 6 pilastri
│   └── NewsletterForm.tsx    # Form iscrizione newsletter
├── lib/                      # Utility e configurazioni
│   ├── db.ts                 # Configurazione database PostgreSQL
│   ├── validations.ts        # Schema Zod per validazione
│   └── schema.sql            # Schema database SQL
├── types/                    # Tipi TypeScript
│   └── index.ts              # Tipi condivisi
├── .env.example              # Variabili d'ambiente esempio
└── README.md                 # Questo file
```

## 🚀 Quick Start

### Prerequisiti

- Node.js 20+
- npm o pnpm
- Account Neon (per database PostgreSQL)

### Installazione

```bash
# Clona il repository
git clone <repository-url>
cd tour-felici

# Installa dipendenze
npm install

# Copia file ambiente
cp .env.example .env.local

# Configura DATABASE_URL in .env.local
# Esempio: DATABASE_URL=postgresql://...

# Avvia sviluppo
npm run dev
```

### Database Setup

Esegui lo schema SQL sul tuo database Neon:

```bash
psql $DATABASE_URL < lib/schema.sql
```

O copia il contenuto di `lib/schema.sql` nell'editor SQL di Neon.

## 📦 Script Disponibili

```bash
npm run dev      # Avvia server sviluppo (http://localhost:3000)
npm run build    # Build produzione
npm run start    # Avvia server produzione
npm run lint     # Esegue ESLint
```

## 🏔️ I 6 Pilastri

1. **Natura** - Flora, fauna e geologia delle Dolomiti UNESCO
2. **Storia** - Grande Guerra, tradizioni ladine e memoria dei luoghi
3. **Agricoltura** - Malghe, produttori locali e filiera km0 reale
4. **Sport** - Guide Alpine e esperienze in quota
5. **Cultura** - Architettura rurale, arte e identità dolomitica
6. **Ripopolamento** - Progetti sociali per le comunità di montagna

## 🌐 Multilingua

Il portale supporta (MVP):
- 🇮🇹 Italiano (obbligatorio)

Future implementazioni:
- 🇩🇪 Tedesco
- 🇬🇧 Inglese
- 🏔️ Ladino

## ♿ Accessibilità

Il progetto segue le linee guida **WCAG 2.1 AA**:
- Contrasti colore appropriati
- Supporto screen reader
- Navigazione da tastiera
- Testi alternativi per immagini
- Focus states visibili

## 🌱 Ecosostenibilità

- Hosting green (Vercel carbon-neutral)
- Ottimizzazione risorse (Image Optimization Next.js)
- Minimizzazione bundle JS/CSS
- Database serverless (Neon)

## 👥 Team di Agenti (Simulato)

| Agente | Nome | Ruolo |
|--------|------|-------|
| 00 | Dolomia | Coordinatore / Project Manager |
| 01 | Stella Alpina | Comunicazione / Copywriting |
| 02 | Cembro | Full-stack Developer |
| 03 | Genziana | Naturalista |
| 04 | Larice | Storico |
| 05 | Camoscio | Sociale |
| 06 | Aquila | Didattica |
| 07 | Rododendro | UX Designer |

## 📄 License

© 2024 Tour Felici srl — Tutti i diritti riservati

---

*Costruito con rispetto per la montagna e le sue comunità* 🏔️
