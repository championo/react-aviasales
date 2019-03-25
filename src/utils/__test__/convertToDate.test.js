const  utils  = require('../utils');

test('Without argument', () => {
  expect(utils.convertToDate()).toBe('Invalid Date');
});

test('Argument is null', () => {
  expect(utils.convertToDate(null)).toBe('Invalid Date');
});

test('Argument is undefined', () => {
  expect(utils.convertToDate(undefined)).toBe('Invalid Date');
});

test('Argument is {} (empty object)', () => {
  expect(utils.convertToDate({})).toBe('Invalid Date');
});

test('Argument is [] (empty array)', () => {
  expect(utils.convertToDate([])).toBe('Invalid Date');
});

test('Argument is number 4426721', () => {
  expect(utils.convertToDate(4426721)).toBe('Invalid Date');
});

test('Argument is \'\' (empty string)', () => {
  expect(utils.convertToDate('')).toBe('Invalid Date');
});

test('Argument is \'22.05.2017\'', () => {
  expect(utils.convertToDate('22.05.2017')).toBe('Invalid Date');
});

test('Argument is \'33.13.33\'', () => {
  expect(utils.convertToDate('33.13.33')).toBe('Invalid Date');
});

test('Argument is \'29.02.18\'', () => {
  expect(utils.convertToDate('Some text')).toBe('Invalid Date');
});

test('Argument is date string \'22.05.17\'', () => {
  expect(utils.convertToDate('22.05.17')).toBe(new Date(17, 5-1, 22));
});