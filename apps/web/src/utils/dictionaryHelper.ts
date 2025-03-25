import { getDictionary as getDict } from './dictionary';
import type { Locale } from '../../i18n.config';

// Safe wrapper function to avoid type conflicts
export function getDictionarySafe(locale: Locale) {
  return getDict(locale) as any;
} 