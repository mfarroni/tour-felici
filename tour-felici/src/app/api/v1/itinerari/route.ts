import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const itinerari = await query(`
      SELECT * FROM itinerari 
      WHERE pubblicato = TRUE AND attivo = TRUE
      ORDER BY created_at DESC
    `);
    return NextResponse.json({ success: true, data: itinerari });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Errore server" }, { status: 500 });
  }
}