import { useState, useEffect, useRef } from 'react';
import { getStore, setStore } from '@/app/actions';
import { toast } from '@/components/Common';

export function usePersistentState<T>(key: string, defaultValue: T): [T, (val: T) => void, boolean] {
  const [value, setValue] = useState<T>(defaultValue);
  const [loaded, setLoaded] = useState(false);
  const isSetting = useRef(false);
  const initialSync = useRef(true);

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

  return [value, setValue, loaded];
}
