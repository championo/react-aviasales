import { formatCurrency } from '../utils';

describe('formatCurrency', () => {

  test('Аргумент c типом не string. Вернет \'Invalid currency\'', () => {
    expect(formatCurrency()).toBe('Invalid currency');
    expect(formatCurrency(null)).toBe('Invalid currency');
    expect(formatCurrency({})).toBe('Invalid currency');
    expect(formatCurrency([])).toBe('Invalid currency');
    expect(formatCurrency(new Date())).toBe('Invalid currency');
    expect(formatCurrency(12345)).toBe('Invalid currency');
  });

  test('Аргумент - пустая строка \'\'. Вернет \'Invalid currency\'', () => {
    expect(formatCurrency('')(12)).toBe('Invalid currency');
  });

  test('Аргумент - пробельная строка \'  \'. Вернет \'Invalid currency\'', () => {
    expect(formatCurrency('  ')(12)).toBe('Invalid currency');
  });

  test('Аргумент - недостаточно символов \'u\'. Вернет \'Invalid currency\'', () => {
    expect(formatCurrency('u')(12)).toBe('Invalid currency');
  });

  test('Аргумент - недостаточно символов \'us\'. Вернет \'Invalid currency\'', () => {
    expect(formatCurrency('us')(12)).toBe('Invalid currency');
  });

  test('Аргумент - много символов \'usdd\'. Вернет \'Invalid currency\'', () => {
    expect(formatCurrency('usdd')(12)).toBe('Invalid currency');
  });

  test('Аргумент - \'usd\', только один параметр. Вернет ??', () => {
    expect(formatCurrency('usd')).toBe('??');
  });

  test('Аргумент - \'usd\'. Вернет \'12 $\'', () => {
    expect(formatCurrency('usd')(12)).toBe('12 $');
  });

  test('Аргумент - \'usd\'. Вернет \'12 $\'', () => {
    expect(formatCurrency('usd')(-1)).toBe('12 $');
  });


});