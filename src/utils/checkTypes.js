const isIntNumber = number => {
  return Number.isInteger(number);
}

/**
 * Проверяет является ли переданное значение строкой
 * @param {string} inputString Строка
 * @returns {boolean} Если тип не строка - возвращается false
 */
const isString = inputString => {

  if (typeof inputString === 'string')
    return true;

  return false;
}

/**
 * Проверяет является ли строка пустой
 * @param {string} inputString Строка
 * @returns {boolean} Если строка пустая или это не строка - возвращается true
 */
const isEmptyString = inputString => {

  if (!isString(inputString) || !inputString.length)
    return true;

  return false;
}


export { isString, isEmptyString, isIntNumber };