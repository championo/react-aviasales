import { getTwoLastDigit } from '../utils';

describe('getTwoLastDigit', () => {

  test('Аргумент c типом не string. Вернет пустую строку', () => {
    expect(getTwoLastDigit()).toBe('');
    expect(getTwoLastDigit(null)).toBe('');
    expect(getTwoLastDigit({})).toBe('');
    expect(getTwoLastDigit([])).toBe('');
    expect(getTwoLastDigit(new Date())).toBe('');
    expect(getTwoLastDigit(12345)).toBe('');
  });

  test('', () => {
    expect(getTwoLastDigit(0)).toBe('0');
  });

  test('', () => {
    expect(getTwoLastDigit(13)).toBe('13');
  });

  test('', () => {
    expect(getTwoLastDigit(124)).toBe('24');
  });

  test('', () => {
    expect(getTwoLastDigit(12345)).toBe('45');
  });

  test('', () => {
    expect(getTwoLastDigit('')).toBe('');
  });

  test('', () => {
    expect(getTwoLastDigit('  ')).toBe('');
  });

  test('', () => {
    expect(getTwoLastDigit('00')).toBe('00');
  });

  test('', () => {
    expect(getTwoLastDigit('пять')).toBe('');
  });

  test('', () => {
    expect(getTwoLastDigit('пять5')).toBe('5');
  });

  test('', () => {
    expect(getTwoLastDigit('5пять')).toBe('');
  });

});