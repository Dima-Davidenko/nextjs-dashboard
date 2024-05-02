import { useCallback } from 'react';
import { debounce } from './utils';
export const useDebounce = (callback: (...args: any) => any, delay: number) => {
  const debouncedCallback = debounce(callback, delay);
  return useCallback(debouncedCallback, [debouncedCallback]);
};
