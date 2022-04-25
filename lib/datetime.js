import { format } from 'date-fns';
import moment from 'moment';

/**
 * formatDate
 */

export function formatDate(date, pattern = "DD-MM-YYYY") {
  return moment(date).format(pattern);
}

/**
 * sortObjectsByDate
 */

export function sortObjectsByDate(array, { key = 'date' } = {}) {
  return array.sort((a, b) => new Date(b[key]) - new Date(a[key]));
}
