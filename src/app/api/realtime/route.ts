import { Client } from 'pg';

export const runtime = 'nodejs';

export async function GET(req: Request) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      let closed = false;
      const client = new Client(process.env.DATABASE_URL_WS!);

      const send = (event: string, data: string) => {
        if (closed) return;
        try {
          controller.enqueue(encoder.encode(`event: ${event}\ndata: ${data}\n\n`));
        } catch { /* ignore */ }
      };

      const cleanup = async () => {
        if (closed) return;
        closed = true;
        try { await client.end(); } catch { /* ignore */ }
        try { controller.close(); } catch { /* ignore */ }
      };

      (async () => {
        try {
          await client.connect();
          await client.query('LISTEN ds_update');

          client.on('notification', (msg) => {
            send('update', msg.payload || '');
          });

          client.on('error', () => cleanup());

          send('connected', 'ok');

          req.signal.addEventListener('abort', () => cleanup());
        } catch (err) {
          send('error', String(err));
          cleanup();
        }
      })();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
    },
  });
}
