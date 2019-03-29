import { getLastChar } from '../utils';

describe('getLastChar', () => {

  test('Аргумент c типом не string. Вернет пустую строку', () => {
    expect(getLastChar()).toBe('');
    expect(getLastChar(null)).toBe('');
    expect(getLastChar({})).toBe('');
    expect(getLastChar([])).toBe('');
  });

  test('Пустая строка. Вернет пустую строку', () => {
    expect(getLastChar('')).toBe('');
  });

  test('Пробельная строка. Вернет пустую строку', () => {
    expect(getLastChar('   ')).toBe('');
  });

  test('Число 34. Вернет \'4\'', () => {
    expect(getLastChar(34)).toBe('4');
  });

  test('Строка \'635\'. Вернет \'5\'', () => {
    expect(getLastChar('635')).toBe('5');
  });

});