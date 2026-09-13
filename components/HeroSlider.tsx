'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface Slide {
  id: number;
  image: string;
  location: string;
  quota: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=85',
    location: 'Tre Cime di Lavaredo · Patrimonio UNESCO',
    quota: '2.999 m s.l.m.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85',
    location: 'Sassolungo e Gruppo del Sella',
    quota: '3.181 m s.l.m.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=85',
    location: 'Val di Funes & Gruppo delle Odle',
    quota: '2.500 m s.l.m.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2400&q=85',
    location: 'Pale di San Martino · Dolomiti Orientali',
    quota: '3.192 m s.l.m.',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative w-full min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-abete-dark"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Background a Tutta Larghezza (100% Display Width) */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <img
              src={slide.image}
              alt={slide.location}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Gradiente sovrapposto Verde Abete e Maschera Fotografica per contrasto */}
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-topo-dark opacity-15" />
      </div>

      {/* Contenuto Centrale Rimodulato */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-2">
        
        {/* Logo Ufficiale Badge Maglietta Trasparente - Tour Felici Badge Trasparent */}
        <div className="mb-6 flex justify-center">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 transition-transform duration-500 hover:scale-105">
            <img
              src="/images/tour-felici-badge-transparent.png"
              alt="Logo Ufficiale Tour Felici SRL - Tre Cime di Lavaredo"
              className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.65)]"
            />
          </div>
        </div>

        {/* Tagline Heritage */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-ocra-light text-xs font-semibold uppercase tracking-[0.25em] mb-5 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-ocra animate-pulse"></span>
          Dolomiti UNESCO · Dal 1984
        </div>

        {/* Titolo Rimodulato */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight tracking-tight">
          Tour Felici <br className="hidden sm:inline" />
          <span className="font-normal text-dolomia text-2xl sm:text-4xl md:text-5xl block sm:inline mt-1 sm:mt-0 font-serif">
            — Custodi della Montagna dal 1984
          </span>
        </h1>

        {/* Sottotitolo Valoriale Integrale e Riposizionato */}
        <div className="max-w-3xl mx-auto mb-8 bg-abete-dark/50 backdrop-blur-md py-3 px-6 rounded-2xl border border-white/10">
          <p className="text-base sm:text-xl text-dolomia-light leading-relaxed font-light">
            Esperienze Alpine Autentiche, Preservazione dell'Ecosistema Dolomitico e Sostegno Attivo alle Comunità Locali.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="#servizi-ambientali"
            className="w-full sm:w-auto bg-ocra hover:bg-ocra-light text-abete-dark font-bold text-sm uppercase tracking-wider py-3.5 px-9 rounded-full shadow-alpine-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Esplora i Servizi Ambientali</span>
            <span className="text-base">↓</span>
          </Link>
          <Link
            href="/guide-alpine"
            className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold text-sm uppercase tracking-wider py-3.5 px-8 rounded-full backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>⛰️ Guide Alpine IFMGA</span>
          </Link>
        </div>

        {/* Info Slide Corrente */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-dolomia/80 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-ocra"></span>
          <span>{slides[currentSlide].location}</span>
          <span className="text-white/40">|</span>
          <span className="font-mono text-ocra-light">{slides[currentSlide].quota}</span>
        </div>

        {/* Badge Indicatori Chiave */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/15 max-w-4xl mx-auto text-left">
          <div className="p-2.5">
            <div className="text-xl sm:text-2xl font-bold font-mono text-ocra">40+</div>
            <div className="text-xs text-dolomia/80 mt-0.5">Anni di Presenza Attiva</div>
          </div>
          <div className="p-2.5">
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">100%</div>
            <div className="text-xs text-dolomia/80 mt-0.5">Guide Alpine IFMGA</div>
          </div>
          <div className="p-2.5">
            <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">0%</div>
            <div className="text-xs text-dolomia/80 mt-0.5">Turismo Predatorio</div>
          </div>
          <div className="p-2.5">
            <div className="text-xl sm:text-2xl font-bold font-mono text-dolomia">14</div>
            <div className="text-xs text-dolomia/80 mt-0.5">Comunità Partner</div>
          </div>
        </div>
      </div>

      {/* Frecce di Navigazione Slide (Laterali) */}
      <button
        onClick={prevSlide}
        aria-label="Slide precedente"
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 text-white items-center justify-center transition-all duration-200 focus:outline-none backdrop-blur-sm"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Slide successiva"
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 text-white items-center justify-center transition-all duration-200 focus:outline-none backdrop-blur-sm"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicatori Dots in basso */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Vai a slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-7 h-2 bg-ocra'
                : 'w-2 h-2 bg-white/40 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
