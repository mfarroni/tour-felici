import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  nome: z.string().optional(),
  interessi: z.array(z.string()).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validato = schema.parse(body);

    await query(
      `INSERT INTO newsletter_iscritti (email, nome, interessi) 
       VALUES ($1, $2, $3)`,
      [validato.email, validato.nome, validato.interessi || []]
    );

    return NextResponse.json({ success: true, message: "Iscrizione completata" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Errore validazione" }, { status: 400 });
  }
}