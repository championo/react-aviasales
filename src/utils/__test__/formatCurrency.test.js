const  utils  = require('../utils');

test('Without argument', () => {
  expect(utils.formatCurrency()).toBe('Некорректная цена');
});

test('Argument is null', () => {
  expect(utils.formatCurrency(null)).toBe('Некорректная цена');
});

test('Argument is undefined', () => {
  expect(utils.formatCurrency(undefined)).toBe('Некорректная цена');
});

test('Argument is {} (empty object)', () => {
  expect(utils.formatCurrency({})).toBe('Некорректная цена');
});

test('Argument is [] (empty array)', () => {
  expect(utils.formatCurrency([])).toBe('Некорректная цена');
});

test('Argument is Date', () => {
  expect(utils.formatCurrency(new Date())).toBe('Некорректная цена');
});

test('Argument is \'\' (empty string)', () => {
  expect(utils.formatCurrency('')).toBe('Некорректная цена');
});

test('Argument is string with only numbers \'12345\'', () => {
  expect(utils.formatCurrency('12745')).toBe('RUB 12 745');
});

test('Argument is string with numbers and letters \'12abc\'', () => {
  expect(utils.formatCurrency('12abc')).toBe('Некорректная цена');
});

test('Argument is string with numbers and letters \'abc12\'', () => {
  expect(utils.formatCurrency('abc12')).toBe('Некорректная цена');
});

test('Argument is big number', () => {
  expect(utils.formatCurrency(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
});

test('Argument is small number', () => {
  expect(utils.formatCurrency(-9e109999999999999999999999)).toBe('Некорректная цена');
});

test('Argument is number -3', () => {
  expect(utils.formatCurrency(-3)).toBe('Некорректная цена');
});

test('Argument is number 0', () => {
  expect(utils.formatCurrency(0)).toBe('Некорректная цена');
});

test('Argument is number 12', () => {
  expect(utils.formatCurrency(12)).toBe(12);
});

test('Argument is number 12400', () => {
  expect(utils.formatCurrency(12400)).toBe('12 400 ₽');
});

test('Argument is number 12400.34', () => {
  expect(utils.formatCurrency(12400.34)).toBe('12 400,34 ₽');
});

test('Argument is number 12400,34', () => {
  expect(utils.formatCurrency(12400,34)).toBe('12 400,34 ₽');
});

// alert( 1 / 0 ); // Infinity