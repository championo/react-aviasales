import { getMonthName } from '../utils';

describe('getMonthName', () => {

  test('Аргумент c типом не number. Вернет \'Invalid month\'', () => {
    expect(getMonthName()).toBe('Invalid month');
    expect(getMonthName(null)).toBe('Invalid month');
    expect(getMonthName({})).toBe('Invalid month');
    expect(getMonthName([])).toBe('Invalid month');
    expect(getMonthName(new Date())).toBe('Invalid month');
    expect(getMonthName('some text')).toBe('Invalid month');
  });

  test('Аргумент - отрицательное число. Вернет \'Invalid month\'', () => {
    expect(getMonthName(-1)).toBe('Invalid month');
  });

  test('Аргумент - число 12, превышающее число месяцев (от 0 до 11). Вернет \'Invalid month\'', () => {
    expect(getMonthName(12)).toBe('Invalid month');
  });

  test('Аргумент - число 1.2 (с дробной частью). Вернет \'Invalid month\'', () => {
    expect(getMonthName(1.2)).toBe('Invalid month');
  });

  test('Аргумент - число 0. Вернет \'янв\'', () => {
    expect(getMonthName(0)).toBe('янв');
  });

  test('Аргумент - число 5. Вернет \'июн\'', () => {
    expect(getMonthName(5)).toBe('июн');
  });

  test('Аргумент - число 11. Вернет \'дек\'', () => {
    expect(getMonthName(11)).toBe('дек');
  });

});