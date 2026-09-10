import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validations';
import { query } from '@/lib/db';
import { ZodError } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validazione input con Zod
    const validatedData = newsletterSchema.parse(body);

    // Inserimento nel database
    const result = await query(
      `INSERT INTO newsletter_subscriptions (email, nome, data_iscrizione, attivo) 
       VALUES ($1, $2, NOW(), true) 
       ON CONFLICT (email) DO UPDATE SET nome = COALESCE($2, newsletter_subscriptions.nome)
       RETURNING id`,
      [validatedData.email, validatedData.nome || null]
    );

    return NextResponse.json({ 
      success: true, 
      message: 'Iscrizione completata con successo',
      id: result.rows[0].id 
    });
  } catch (error) {
    console.error('Errore iscrizione newsletter:', error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: 'Dati non validi', details: error.issues },
        { status: 400 }
      );
    }

    // Gestione conflitto email duplicata
    if (error instanceof Error && error.message.includes('duplicate key')) {
      return NextResponse.json(
        { error: 'Email già registrata' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Errore server durante l\'iscrizione' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Endpoint per verificare lo stato del servizio
  return NextResponse.json({ 
    service: 'newsletter-api', 
    status: 'active',
    timestamp: new Date().toISOString() 
  });
}
