import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function nl2br(str?: string) {
  if (!str) return '';
  return str.split('\n').join('<br>');
}

export function slug(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with a single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
}
