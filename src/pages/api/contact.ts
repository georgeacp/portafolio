import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, projectType, message } = data ?? {};

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: 'Por favor completa tu nombre, email y mensaje.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Prepared for Formspree or Resend integration:
    // 1. Formspree:
    //    if (import.meta.env.FORMSPREE_ENDPOINT) {
    //      await fetch(import.meta.env.FORMSPREE_ENDPOINT, { method: 'POST', body: JSON.stringify(data) });
    //    }
    // 2. Resend:
    //    if (import.meta.env.RESEND_API_KEY) { ... }

    return new Response(
      JSON.stringify({
        ok: true,
        message: '¡Mensaje recibido! Te responderé en menos de 24 horas.',
        received: { name, email, projectType },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch {
    return new Response(
      JSON.stringify({
        ok: false,
        error: 'No se pudo procesar el envío en este momento.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
