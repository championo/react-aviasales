/**
 * Возвращает true, если строка в формате 'dd.mm.yy'. В противном случае - false.
 * @param {string} dateString - Строка, содержащая дату, в формате 'dd.mm.yy'.
 * @returns {boolean} Возвращает true, если строка в формате 'dd.mm.yy'. В иных случаях - false.
 */
export const isShortDateFormat = dateString => {

  const regExp = new RegExp('^[0-9]{2}\\.[0-9]{2}\\.[0-9]{2}$');

  if (regExp.test(dateString)) { // Если строка в формате 'dd.mm.yy' - проверяем диапазон значений дня и месяца

    let arr = dateString.split('.');

    // При сравнении значений разных типов, используется числовое преобразование. '23' < 1 будет как 23 < 1
    if (arr[0] < 1 || arr[0] > 31)
      return false;

    if (arr[1] < 1 || arr[1] > 12)
      return false;

    return true;
  }
  return false;
}