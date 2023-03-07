import { format } from 'date-fns';
import qs from 'qs';

export function formatDate(d: string | number | Date, f = 'dd-MM-yyyy'): string {
  if (!d) return '';
  if (typeof d === 'string') d = new Date(d);
  return format(d, f);
}

export function stringifyQuery(params: { [s: string]: unknown } | ArrayLike<unknown>): string {
  return Object.values(params).filter(Boolean).length
    ? '?' + qs.stringify(params, { indices: false, skipNulls: true })
    : '';
}
