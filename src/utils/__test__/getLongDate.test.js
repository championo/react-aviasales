const  utils  = require('../utils');

test('Date string is null', () => {
  expect(utils.getLongDate(null)).toBe('');
});

test('Date string is undefined', () => {
  expect(utils.getLongDate(undefined)).toBe('');
});

test('Date string is empty object', () => {
  expect(utils.getLongDate({})).toBe('');
});

test('Date string is empty array', () => {
  expect(utils.getLongDate([])).toBe('');
});

test('Date string is number', () => {
  expect(utils.getLongDate(4426721)).toBe('');
});

test('Date string is empty string', () => {
  expect(utils.getLongDate('')).toBe('');
});

test('Date string is \'12.10.18\'', () => {
  expect(utils.getLongDate('12.10.18')).toBe('12 окт 2018, Сб');
});