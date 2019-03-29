export const isInteger = number => {
  return typeof value === 'number' && Number.isFinite(number) && !(number % 1);
}

/**
 * Проверяет является ли переданное значение строкой
 * @param {string} inputString Строка
 * @returns {boolean} Если тип не строка - возвращается false
 */
export const isString = inputString => {

  if (typeof inputString === 'string')
    return true;

  return false;
}

/**
 * Проверяет является ли строка пустой
 * @param {string} inputString Строка
 * @returns {boolean} Если строка пустая или это не строка - возвращается true
 */
export const isEmptyString = inputString => {

  if (!isString(inputString) || !inputString.length)
    return true;

  return false;
}