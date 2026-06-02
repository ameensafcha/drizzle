import { useState, useEffect, useRef } from 'react';
import { getStore, setStore } from '@/app/actions';
import { toast } from '@/components/Common';
import { useRealtime } from './useRealtime';

export function usePersistentState<T>(key: string, defaultValue: T): [T, (val: T) => void, boolean] {
  const [value, setValue] = useState<T>(defaultValue);
  const [loaded, setLoaded] = useState(false);
  const isSetting = useRef(false);
  const initialSync = useRef(true);
  const fromRealtime = useRef(false);

  // Initial Fetch
  useEffect(() => {
    let alive = true;

    const fetchData = async () => {
      // Don't overwrite if the user is currently interacting/setting
      if (isSetting.current) return;

      const stored = await getStore(key);
      if (alive && stored !== null) {
        // Only update if data is actually different to avoid unnecessary re-renders
        if (JSON.stringify(stored) !== JSON.stringify(value)) {
          setValue(stored as T);
        }
      }
      if (alive) setLoaded(true);
    };

    fetchData();

    return () => {
      alive = false;
    };
  }, [key]);

  // Sync to Database (Debounced)
  useEffect(() => {
    if (!loaded) return;

    // Realtime aaya to skip — saving overlay + redundant DB write nahi
    if (fromRealtime.current) { fromRealtime.current = false; return; }

    isSetting.current = true;
    const timeout = setTimeout(async () => {
      const isInit = initialSync.current;
      initialSync.current = false;
      if (!isInit) window.dispatchEvent(new CustomEvent('ds-saving', { detail: true }));
      const res = await setStore(key, value);
      if (!isInit) window.dispatchEvent(new CustomEvent('ds-saving', { detail: false }));
      if (!isInit && res.success) toast('✦ saved');
      isSetting.current = false;
    }, 800);

    return () => {
      clearTimeout(timeout);
      isSetting.current = false;
    };
  }, [key, value, loaded]);

  // Realtime — re-fetch when another tab/device updates this key
  useRealtime(key, (updatedKey) => {
    if (updatedKey !== key) return;
    if (isSetting.current) return;
    fromRealtime.current = true;
    getStore(key).then((stored) => {
      if (stored !== null && JSON.stringify(stored) !== JSON.stringify(value)) {
        setValue(stored as T);
      } else {
        fromRealtime.current = false;
      }
    });
  });

  return [value, setValue, loaded];
}
