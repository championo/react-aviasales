import { getLastChar } from '../utils';

describe('getLastChar function', () => {

  test('Аргумент c типом не string. Вернет пустую строку', () => {
    expect(getLastChar()).toBe('');
    expect(getLastChar(null)).toBe('');
    expect(getLastChar({})).toBe('');
    expect(getLastChar([])).toBe('');
    expect(getLastChar(123)).toBe('');
  });

  test('Аргумент - пустая строка. Вернет пустую строку', () => {
    expect(getLastChar('')).toBe('');
  });

  test('Аргумент - строка из пробелов. Вернет пустую строку', () => {
    expect(getLastChar('   ')).toBe('');
  });

  test('Аргумент - строка \'635\'. Вернет строку \'5\'', () => {
    expect(getLastChar('635')).toBe('5');
  });

  test('Аргумент - строка \'635   \' с пробелами в конце. Вернет строку \'5\'', () => {
    expect(getLastChar('635   ')).toBe('5');
  });

});