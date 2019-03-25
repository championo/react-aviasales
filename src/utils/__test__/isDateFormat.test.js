const  utils  = require('../utils');

test('Without argument', () => {
  expect(utils.isDateFormat()).toBe(false);
});

test('Date string is null', () => {
  expect(utils.isDateFormat(null)).toBe(false);
});

test('Date string is undefined', () => {
  expect(utils.isDateFormat(undefined)).toBe(false);
});

test('Date string is empty object', () => {
  expect(utils.isDateFormat({})).toBe(false);
});

test('Date string is empty array', () => {
  expect(utils.isDateFormat([])).toBe(false);
});

test('Date string is number', () => {
  expect(utils.isDateFormat(4426721)).toBe(false);
});

test('Date string is empty string', () => {
  expect(utils.isDateFormat('')).toBe(false);
});

test('Date string is date string', () => {
  expect(utils.isDateFormat('15 August 2009')).toBe(false);
});

test('Date string have short year (correct format)', () => {
  expect(utils.isDateFormat('10.05.18')).toBe(true);
});

test('Date string have long (full) year', () => {
  expect(utils.isDateFormat('10.05.2018')).toBe(false);
});