import { convertToDate } from '../utils';

describe('convertToDate function', () => {

  test('Аргумент c типом не string. Вернет \'Invalid Date\'', () => {
    // Можно проверить число месяца на NaN, если дата некорректна
    // Так проверить нельзя: convertToDate().toBe(new Date(undefined)) - оба вернут Date {NaN}, а NaN != NaN
    expect(isNaN(convertToDate().getDate())).toBe(true);
    expect(isNaN(convertToDate(null).getDate())).toBe(true);
    expect(isNaN(convertToDate({}).getDate())).toBe(true);
    expect(isNaN(convertToDate([]).getDate())).toBe(true);
    expect(isNaN(convertToDate(new Date()).getDate())).toBe(true);
    expect(isNaN(convertToDate(12345).getDate())).toBe(true);

    // Можно проверять и так: преобразовать в строку new Date(undefined), что вернет 'Invalid Date'
    // expect(convertToDate().toString()).toBe('Invalid Date');
  });

  test('Аргумент - строка с некорректным форматом', () => {
    expect(convertToDate('14-02-88').toString()).toBe('Invalid Date');
    expect(convertToDate('03/11/00').toString()).toBe('Invalid Date');
    expect(convertToDate('08.19').toString()).toBe('Invalid Date');
  });

  test('Аргумент - строка с корректной датой', () => {
    expect(convertToDate('14.02.88')).toEqual(new Date('88-02-14'));
    expect(convertToDate('03.11.00')).toEqual(new Date('00-11-03'));
    expect(convertToDate('10.08.19')).toEqual(new Date('19-08-10'));
  });
});