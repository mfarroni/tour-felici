"use client";

import { useState } from "react";
import Button from "@/components/shared/Button";

const interessiOptions = [
  { value: "NATURA", label: "🌲 Natura" },
  { value: "STORIA", label: "📜 Storia" },
  { value: "AGRICOLTURA", label: "🌾 Agricoltura" },
  { value: "ZOOLOGIA", label: "🦌 Zoologia" },
  { value: "CULTURA", label: "🏔️ Cultura" },
  { value: "SPORT", label: "🥾 Sport" },
];

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [interessi, setInteressi] = useState<string[]>([]);
  const [privacy, setPrivacy] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const toggleInteresse = (value: string) => {
    setInteressi((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacy) {
      setErrorMsg("Devi accettare la privacy policy");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/v1/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, nome, interessi }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
        setNome("");
        setInteressi([]);
        setPrivacy(false);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Errore durante l'iscrizione");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Errore di connessione. Riprova più tardi.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="font-serif text-2xl text-abete mb-2">Benvenuto nella comunità!</h3>
        <p className="text-roccia">
          Riceverai presto la nostra prima newsletter con eventi e iniziative.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-abete mb-1">
            Nome (opzionale)
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Il tuo nome"
            className="w-full px-4 py-3 rounded-lg border border-dolomia bg-white
              focus:outline-none focus:ring-2 focus:ring-ocra focus:border-transparent
              text-abete placeholder:text-roccia/50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-abete mb-1">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="la-tua@email.it"
            className="w-full px-4 py-3 rounded-lg border border-dolomia bg-white
              focus:outline-none focus:ring-2 focus:ring-ocra focus:border-transparent
              text-abete placeholder:text-roccia/50"
          />
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-abete mb-2">
          Cosa ti interessa? (opzionale)
        </p>
        <div className="flex flex-wrap gap-2">
          {interessiOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggleInteresse(opt.value)}
              className={`px-3 py-1.5 rounded-full text-sm border transition-colors
                ${interessi.includes(opt.value)
                  ? "bg-abete text-neve border-abete"
                  : "bg-white text-roccia border-dolomia hover:border-ocra"
                }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={privacy}
          onChange={(e) => setPrivacy(e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-dolomia text-abete
            focus:ring-ocra"
        />
        <span className="text-xs text-roccia leading-relaxed">
          Accetto la{" "}
          <a href="/privacy" className="text-ocra underline">privacy policy</a>{" "}
          e il trattamento dei miei dati per ricevere la newsletter di Tour Felici srl.
          Potrai disiscriverti in qualsiasi momento. *
        </span>
      </label>

      {status === "error" && (
        <p className="text-red-600 text-sm" role="alert">{errorMsg}</p>
      )}

      <Button
        type="submit"
        variant="accent"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? "Iscrizione in corso..." : "Iscriviti alla newsletter"}
      </Button>
    </form>
  );
}