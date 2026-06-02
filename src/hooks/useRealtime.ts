'use client'

import { useEffect, useRef } from 'react';

type RealtimeHandler = (key: string) => void;

const handlers = new Map<string, Set<RealtimeHandler>>();

function startSSE() {
  const url = `${window.location.origin}/api/realtime`;
  const es = new EventSource(url);

  es.addEventListener('update', (e: MessageEvent) => {
    const key = e.data;
    const set = handlers.get(key);
    if (set) set.forEach(fn => fn(key));
    const wild = handlers.get('*');
    if (wild) wild.forEach(fn => fn(key));
  });

  es.onerror = () => {
    es.close();
    setTimeout(startSSE, 3000);
  };
}

let sseStarted = false;
function ensureSSE() {
  if (typeof window === 'undefined') return;
  if (!sseStarted) {
    sseStarted = true;
    startSSE();
  }
}

export function useRealtime(key: string, handler: RealtimeHandler) {
  const handlerRef = useRef<RealtimeHandler>(handler);
  handlerRef.current = handler;

  useEffect(() => {
    ensureSSE();
    if (!handlers.has(key)) handlers.set(key, new Set());

    const wrapper: RealtimeHandler = (k) => handlerRef.current(k);
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
