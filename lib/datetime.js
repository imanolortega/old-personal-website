import moment from 'moment';

/* Format Date */

export function formatDate(date, pattern = "DD-MM-YYYY") {
  return moment(date).format(pattern);
}

/* Sort Objects By Date */

export function sortObjectsByDate(array, { key = 'date' } = {}) {
  return array.sort((a, b) => new Date(b[key]) - new Date(a[key]));
}
