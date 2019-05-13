import { isShortDateFormat } from '../checkFormats';

describe('isShortDateFormat function', () => {

  test('Аргумент c типом не string. Вернет false', () => {
    expect(isShortDateFormat()).toBe(false);
    expect(isShortDateFormat(null)).toBe(false);
    expect(isShortDateFormat({})).toBe(false);
    expect(isShortDateFormat([])).toBe(false);
    expect(isShortDateFormat(new Date())).toBe(false);
    expect(isShortDateFormat(12345)).toBe(false);
  });

  test('Аргумент - пустая строка. Вернет false', () => {
    expect(isShortDateFormat('')).toBe(false);
  });

  test('Аргумент - строка с некорректным форматом даты. Вернет false', () => {
    expect(isShortDateFormat('15 August 2009')).toBe(false);
    expect(isShortDateFormat('04.86')).toBe(false);
    expect(isShortDateFormat('22..19')).toBe(false);
    expect(isShortDateFormat('345.123.16')).toBe(false);
    expect(isShortDateFormat('22.13.')).toBe(false);
    expect(isShortDateFormat('22.13.1')).toBe(false);
  });

  test('Аргумент - строка с некорректным днем. Вернет false', () => {
    expect(isShortDateFormat('00.01.86')).toBe(false);
    expect(isShortDateFormat('41.01.19')).toBe(false);
  });

  test('Аргумент - строка с некорректным месяцем. Вернет false', () => {
    expect(isShortDateFormat('01.00.19')).toBe(false);
    expect(isShortDateFormat('01.13.19')).toBe(false);
  });

  test('Аргумент - строка \'56.25.19\' (некорректный день и месяц). Вернет false', () => {
    expect(isShortDateFormat('56.25.19')).toBe(false);
  });

  test('Аргумент - строка c некорректным разделителем. Вернет false', () => {
    expect(isShortDateFormat('26.04/86')).toBe(false);
    expect(isShortDateFormat('26/04/86')).toBe(false);
    expect(isShortDateFormat('26-04-86')).toBe(false);
  });

  test('Аргумент - строка с корректной датой. Вернет true', () => {
    expect(isShortDateFormat('01.01.19')).toBe(true);
    expect(isShortDateFormat('31.01.19')).toBe(true);
    expect(isShortDateFormat('16.01.17')).toBe(true);
    expect(isShortDateFormat('16.12.17')).toBe(true);
    expect(isShortDateFormat('17.06.16')).toBe(true);
    expect(isShortDateFormat('09.05.45')).toBe(true);
  });

});