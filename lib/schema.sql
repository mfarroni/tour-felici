-- Tour Felici srl - Database Schema per PostgreSQL
-- Creazione tabelle per il portale Dolomiti since 1984

-- Tabella newsletter_subscriptions
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  nome VARCHAR(100),
  data_iscrizione TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  attivo BOOLEAN DEFAULT true,
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Indice per ricerca veloce email
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_attivo ON newsletter_subscriptions(attivo);

-- Tabella guide_alpine (core business)
CREATE TABLE IF NOT EXISTS guide_alpine (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cognome VARCHAR(100) NOT NULL,
  specializzazione VARCHAR(200),
  bio TEXT NOT NULL,
  immagine_url VARCHAR(500),
  certificazioni TEXT[],
  anni_esperienza INTEGER,
  lingue_parlate VARCHAR[],
  attivo BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabella contenuti per le 6 sezioni tematiche
CREATE TABLE IF NOT EXISTS contenuti (
  id SERIAL PRIMARY KEY,
  sezione VARCHAR(50) NOT NULL CHECK (sezione IN ('natura', 'storia', 'agricoltura', 'sport', 'cultura', 'ripopolamento')),
  titolo VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  contenuto TEXT NOT NULL,
  estratto TEXT,
  autore_id INTEGER REFERENCES guide_alpine(id),
  data_pubblicazione TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  pubblicato BOOLEAN DEFAULT false,
  lingua VARCHAR(10) DEFAULT 'it' CHECK (lingua IN ('it', 'de', 'en', 'lld')),
  tags VARCHAR[],
  immagine_copertina VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contenuti_sezione ON contenuti(sezione);
CREATE INDEX IF NOT EXISTS idx_contenuti_slug ON contenuti(slug);
CREATE INDEX IF NOT EXISTS idx_contenuti_pubblicato ON contenuti(pubblicato);
CREATE INDEX IF NOT EXISTS idx_contenuti_lingua ON contenuti(lingua);

-- Tabella eventi/iniziative
CREATE TABLE IF NOT EXISTS eventi (
  id SERIAL PRIMARY KEY,
  titolo VARCHAR(255) NOT NULL,
  descrizione TEXT,
  data_inizio TIMESTAMP WITH TIME ZONE NOT NULL,
  data_fine TIMESTAMP WITH TIME ZONE,
  luogo VARCHAR(255),
  tipologia VARCHAR(100) CHECK (tipologia IN ('escursione', 'laboratorio', 'evento', 'corso', 'altro')),
  guida_alpina_id INTEGER REFERENCES guide_alpine(id),
  posti_disponibili INTEGER,
  prezzo DECIMAL(10,2),
  attivo BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabella log per tracking accessi API
CREATE TABLE IF NOT EXISTS api_logs (
  id SERIAL PRIMARY KEY,
  endpoint VARCHAR(255) NOT NULL,
  metodo VARCHAR(10) NOT NULL,
  ip_address INET,
  user_agent TEXT,
  status_code INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_api_logs_endpoint ON api_logs(endpoint);
CREATE INDEX IF NOT EXISTS idx_api_logs_created ON api_logs(created_at);

-- Commenti sulle tabelle
COMMENT ON TABLE newsletter_subscriptions IS 'Iscritti alla newsletter di Tour Felici';
COMMENT ON TABLE guide_alpine IS 'Guide Alpine certificate - core business dell''agenzia';
COMMENT ON TABLE contenuti IS 'Contenuti editoriali per le 6 sezioni tematiche';
COMMENT ON TABLE eventi IS 'Eventi, escursioni e iniziative organizzate';
COMMENT ON TABLE api_logs IS 'Log degli accessi alle API per monitoring';
