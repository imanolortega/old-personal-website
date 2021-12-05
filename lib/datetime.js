import { format } from 'date-fns';

/**
 * formatDate
 */

export function formatDate(date, pattern = 'dd-MM-yyyy') {
  return format(new Date(date), pattern);
}

/**
 * sortObjectsByDate
 */

export function sortObjectsByDate(array, { key = 'date' } = {}) {
  return array.sort((a, b) => new Date(b[key]) - new Date(a[key]));
}
