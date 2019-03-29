import { capitalize } from '../utils';

describe('Capitalize', () => {

  test('Аргумент c типом не string. Вернет пустую строку', () => {
    expect(capitalize()).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize({})).toBe('');
    expect(capitalize([])).toBe('');
    expect(capitalize(new Date())).toBe('');
    expect(capitalize(12345)).toBe('');
  });

  test('Аргумент - пустая строка. Вернет пустую строку', () => {
    expect(capitalize('')).toBe('');
  });

  test('Аргумент - строка \'15 days\' (начинается с числа). Вернет \'15 days\'', () => {
    expect(capitalize('15 days')).toBe('15 days');
  });

  test('Аргумент - строка \' space first\' (начинается с пробела). Вернет \' space first\'', () => {
    expect(capitalize(' space first')).toBe(' space first');
  });

  test('Аргумент - строка \'some text\'(начинается с буквы в нижнем регистре). Вернет строку \'Some text\'', () => {
    expect(capitalize('some text')).toBe('Some text');
  });

  test('Аргумент - строка \'Some text\'(начинается с буквы в верхнем регистре). Вернет строку \'Some text\'', () => {
    expect(capitalize('Some text')).toBe('Some text');
  });

});