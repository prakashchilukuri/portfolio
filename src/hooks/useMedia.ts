import { useSyncExternalStore } from 'react';

export function useMedia(query: string, fallback = false) {
  return useSyncExternalStore(
    (cb) => {
      if (typeof window === 'undefined' || !window.matchMedia) return () => {};
      try {
        const mql = window.matchMedia(query);
        if (mql.addEventListener) {
          mql.addEventListener('change', cb);
          return () => mql.removeEventListener('change', cb);
        } else if ('addListener' in mql) {
          // Compatibility for Safari < 14 and older WebKit
          (mql as any).addListener(cb);
          return () => (mql as any).removeListener(cb);
        }
      } catch {
        /* ignore query listener error */
      }
      return () => {};
    },
    () => {
      if (typeof window === 'undefined' || !window.matchMedia) return fallback;
      try {
        return window.matchMedia(query).matches;
      } catch {
        return fallback;
      }
    },
    () => fallback,
  );
}

/** True on devices with a precise pointer (mouse / trackpad) — gates hover-only effects. */
export const useFinePointer = () => useMedia('(hover: hover) and (pointer: fine)');
export const useReducedMotionPref = () => useMedia('(prefers-reduced-motion: reduce)');
export const useDesktop = () => useMedia('(min-width: 1024px)');
