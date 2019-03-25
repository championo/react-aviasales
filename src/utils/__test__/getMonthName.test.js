const  utils  = require('../utils');

test('Without argument', () => {
  expect(utils.getMonthName()).toBe('');
});

test('Argument is null', () => {
  expect(utils.getMonthName(null)).toBe('');
});

test('Argument is undefined', () => {
  expect(utils.getMonthName(undefined)).toBe('');
});

test('Argument is {} (empty object)', () => {
  expect(utils.getMonthName({})).toBe('');
});

test('Argument is [] (empty array)', () => {
  expect(utils.getMonthName([])).toBe('');
});

test('Argument is \'\' (empty string)', () => {
  expect(utils.getMonthName('')).toBe('');
});

test('Argument is string with only numbers \'4\'', () => {
  expect(utils.getMonthName('4')).toBe('');
});

test('Argument is number 13', () => {
  expect(utils.getMonthName(13)).toBe('');
});

test('Argument is number 11 return \'дек\'', () => {
  expect(utils.getMonthName(11)).toBe('дек');
});

test('Argument is number -5', () => {
  expect(utils.getMonthName(-5)).toBe('');
});

test('Argument is number 0 return \'янв\'', () => {
  expect(utils.getMonthName(0)).toBe('янв');
});

test('Argument is number 3 return \'апр\'', () => {
  expect(utils.getMonthName(3)).toBe('апр');
});