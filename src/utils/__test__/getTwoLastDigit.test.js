import { getTwoLastDigit } from '../utils';

describe('getTwoLastDigit function', () => {

  test('Аргумент c типом не number. Вернет null', () => {
    expect(getTwoLastDigit()).toBe(null);
    expect(getTwoLastDigit(null)).toBe(null);
    expect(getTwoLastDigit({})).toBe(null);
    expect(getTwoLastDigit([])).toBe(null);
    expect(getTwoLastDigit(new Date())).toBe(null);
    expect(getTwoLastDigit('')).toBe(null);
    expect(getTwoLastDigit('  ')).toBe(null);
    expect(getTwoLastDigit('00')).toBe(null);
  });

  test('Аргумент - число -5. Вернет число 5', () => {
    expect(getTwoLastDigit(-5)).toBe(5);
  });

  test('Аргумент - число 0. Вернет число 0', () => {
    expect(getTwoLastDigit(0)).toBe(0);
  });

  test('Аргумент - число 13. Вернет число 13', () => {
    expect(getTwoLastDigit(13)).toBe(13);
  });

  test('Аргумент - число 124. Вернет число 24', () => {
    expect(getTwoLastDigit(124)).toBe(24);
  });

  test('Аргумент - число 12345. Вернет число 45', () => {
    expect(getTwoLastDigit(12345)).toBe(45);
  });

});