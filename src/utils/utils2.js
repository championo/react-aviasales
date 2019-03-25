const isNumber = number => {
  const regExp = new RegExp('^[0-9]+((.|,)[0-9]*)?$');
  return regExp.test(number);
}

/**
 * Возвращает true, если строка в формате 'dd.mm.yy'. В противном случае - false.
 * @param {string} dateString - Строка, содержащая дату, в формате 'dd.mm.yy'.
 * @returns {boolean} Возвращает true, если строка в формате 'dd.mm.yy'. В иных случаях - false.
 */
const isDateFormat = dateString => {
  const regExp = new RegExp('^[0-9]{2}\\.[0-9]{2}\\.[0-9]{2}$');
  return regExp.test(dateString);
}

/**
 * Возвращает объект Date, созданный на основе строки.
 * @param {string} dateString Строка, содержащая дату в формате 'dd.mm.yy'.
 * @returns {Date} Объект Date. В случае ошибки конвертации будет возвращена строка 'Invalid Date'.
 */
const convertToDate = dateString => {

  if(!isDateFormat(dateString)) // Если не подходит формат даты, возвращаем 'Invalid Date'
    return new Date(undefined);

  const [day, month, year] = dateString.split('.'); 
  return new Date(year, month - 1, day); 
}

/**
 * Возвращает строку с начальной буквой в верхнем регистре (например, 'строка' будет преобразована в 'Строка').
 * @param {string} text Строка.
 * @returns {string} Строка, начинающаяся с буквы в верхнем регистре. В случае ошибки преобразования будет возвращена пустая строка.
 */
const capitalize = text => {

  if (typeof text !== 'string')
    return '';

  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Возвращает название месяца по его порядковому номеру.
 * @param {number} monthNumber Номер месяца (от 0 до 11).
 * @returns {string} Строка, содержащая сокращенное имя месяца. В случае ошибки получения значения будет возвращена строка со значением 'Некорректный месяц'.
 */
const getMonthName = monthNumber => {
  if ((typeof monthNumber === 'number') && (monthNumber >= 0 && monthNumber <= 11)) {
    const names = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    return names[monthNumber];
  }
  return '';
}

/**
 * Возвращает строку, содержащую дату, в формате '12 окт 2018, Сб'.
 * @param {string} dateString Строка, содержащая дату в формате 'dd.mm.yy'.
 * @returns {string} Строка, содержащая отформатированную дату. В случае ошибки получения значения будет возвращена пустая строка или со значением 'Некорректная дата'.
 */
const getLongDate = (dateString) => {

  if (typeof dateString !== 'string')
    return '';

  let date = convertToDate(dateString);

  // Если значение не имеет тип Date или оно некорректное
  if((Object.prototype.toString.call(date) !== '[object Date]') || date.toString() === 'Invalid Date') 
    return 'Некорректная дата';

  let d = date.getDate();
  // Как вариант использовать это, но есть проблема, где возвращается слово "май"
  // let m = date.toLocaleString('ru-RU', {month: 'long'}).slice(0,3); февраль --> фев
  let m = getMonthName(date.getMonth());
  let y = "20" + date.getFullYear().toString().substr(2,2);
  let dw = capitalize(date.toLocaleString('ru', {weekday: 'short'}));

  return `${d} ${m} ${y}, ${dw}`;
}

/**
 * Возвращает форматированную цену.
 * @param {number} price Цена.
 * @returns {string} Строка, содержащая отформатированную цену. В случае ошибки получения значения будет возвращена строка со значением 'Некорректная цена'.
 */
const formatCurrency = (price) => {

  //console.log(price + 'fff-' + typeof price);
  
  //if (typeof price !== 'number' || (price < 0))
  if (typeof price !== 'number' || !isNumber(price))
    return 'Некорректная цена';

  // Форматируем цену в формате '12 400,34 ₽'
  let options = { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }; 
  //console.log(new Intl.NumberFormat('ru-RU', options).format(price));

  return new Intl.NumberFormat('ru-RU', options).format(price);
}

module.exports = { isNumber, isDateFormat, capitalize, convertToDate, getMonthName, getLongDate, formatCurrency }

/**
 * Возвращает форматированную цену.
 * @param {number} price Цена.
 * @returns {string} Строка, содержащая отформатированную цену. В случае ошибки получения значения будет возвращена строка со значением 'Некорректная цена'.

export const formatCurrency = (price) => {

  if (typeof price !== 'number' || price < 0)
    return 'Некорректная цена';

  // Форматируем цену в формате '12 400,34 ₽'
  let options = { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }; 
  return new Intl.NumberFormat('ru-RU', options).format(price);
} */