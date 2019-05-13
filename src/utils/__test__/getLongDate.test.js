import { getLongDate } from '../utils';

describe('getLongDate function', () => {

  test('Аргумент c типом не string. Вернет пустую строку', () => {
    expect(getLongDate()).toBe('');
    expect(getLongDate(null)).toBe('');
    expect(getLongDate({})).toBe('');
    expect(getLongDate([])).toBe('');
    expect(getLongDate(new Date())).toBe('');
    expect(getLongDate(12345)).toBe('');
  });

  test('Аргумент - некорректная дата \'аа.09.17\'. Вернет \'Invalid Date\'', () => {
    expect(getLongDate('аа.09.17')).toBe('Invalid Date');
  });

  test('Аргумент - некорректная дата \'33.33.33\'. Вернет \'Invalid Date\'', () => {
    expect(getLongDate('33.33.33')).toBe('Invalid Date');
  });

  test('Аргумент - строка с датой \'01.09.17\'. Вернет \'1 сен 2017, Пт\'', () => {
    expect(getLongDate('01.09.17')).toBe('1 сен 2017, Пт');
  });

  test('Аргумент - строка с датой \'12.05.18\'. Вернет \'12 мая 2018, Сб\'', () => {
    expect(getLongDate('12.05.18')).toBe('12 мая 2018, Сб');
  });

  test('Аргумент - строка с датой \'27.03.19\'. Вернет \'27 мар 2019, Ср\'', () => {
    expect(getLongDate('27.03.19')).toBe('27 мар 2019, Ср');
  });

});