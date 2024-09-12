import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function for combining class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Set item in local storage with a specific type
export const setItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Get item from local storage with a specific type
export const getItem = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item) as T;
  }
  return null;
};

// Remove item from local storage
export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};

// Clear all items from local storage
export const clear = (): void => {
  localStorage.clear();
};

