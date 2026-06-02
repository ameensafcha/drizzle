'use client'

import { useEffect, useRef } from 'react';

type RealtimeHandler = (key: string, value?: any) => void;

const handlers = new Map<string, Set<RealtimeHandler>>();
let es: EventSource | null = null;

function startSSE() {
  if (es) es.close();
  if (typeof window === 'undefined') return;
  if (document.hidden) return;

  es = new EventSource(`${window.location.origin}/api/realtime`);

  es.addEventListener('update', (e: MessageEvent) => {
    const raw = String(e.data);
    const colonIdx = raw.indexOf(':');
    let key = raw;
    let value: any = undefined;

    if (colonIdx > 0) {
      key = raw.slice(0, colonIdx);
      try { value = JSON.parse(raw.slice(colonIdx + 1)); } catch { /* use raw text */ }
    }

    const set = handlers.get(key);
    if (set) set.forEach(fn => fn(key, value));
    const wild = handlers.get('*');
    if (wild) wild.forEach(fn => fn(key, value));
  });

  es.onerror = () => {
    if (es) { es.close(); es = null; }
    setTimeout(startSSE, 3000);
  };
}

function stopSSE() {
  if (es) { es.close(); es = null; }
}

if (typeof window !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { stopSSE(); }
    else { startSSE(); }
  });
}

export function useRealtime(key: string, handler: RealtimeHandler) {
  const handlerRef = useRef<RealtimeHandler>(handler);
  handlerRef.current = handler;

  useEffect(() => {
    startSSE();
    if (!handlers.has(key)) handlers.set(key, new Set());

    const wrapper: RealtimeHandler = (k, v) => handlerRef.current(k, v);
    handlers.get(key)!.add(wrapper);

    return () => {
      const set = handlers.get(key);
      if (set) {
        set.delete(wrapper);
        if (set.size === 0) handlers.delete(key);
      }
    };
  }, [key]);
}
