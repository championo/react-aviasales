import { isIntNumber } from './checkTypes';

/**
 * Возвращает true, если строка в формате 'dd.mm.yy'. В противном случае - false.
 * @param {string} dateString - Строка, содержащая дату, в формате 'dd.mm.yy'.
 * @returns {boolean} Возвращает true, если строка в формате 'dd.mm.yy'. В иных случаях - false.
 */
export const isDateFormat = dateString => {
  const regExp = new RegExp('^[0-9]{2}\\.[0-9]{2}\\.[0-9]{2}$');
  return regExp.test(dateString);
}

/**
 * Возвращает объект Date, созданный на основе строки.
 * @param {string} dateString Строка, содержащая дату в формате 'dd.mm.yy'.
 * @returns {Date} Объект Date. В случае ошибки конвертации будет возвращена строка 'Invalid Date'.
 */
export const convertToDate = dateString => {

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
export const capitalize = text => {

  if (typeof text !== 'string')
    return '';

  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Возвращает название месяца по его порядковому номеру.
 * @param {number} monthNumber Номер месяца (от 0 до 11).
 * @returns {string} Строка, содержащая сокращенное имя месяца. В случае ошибки получения значения будет возвращена строка со значением 'Некорректный месяц'.
 */
export const getMonthName = monthNumber => {

  if ((typeof monthNumber !== 'number') || monthNumber < 0 || monthNumber > 11)
    return 'Некорректный месяц';

  const names = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

  return names[monthNumber];
}

/**
 * Возвращает строку, содержащую дату, в формате '12 окт 2018, Сб'.
 * @param {string} dateString Строка, содержащая дату в формате 'dd.mm.yy'.
 * @returns {string} Строка, содержащая отформатированную дату. В случае ошибки получения значения будет возвращена пустая строка или со значением 'Некорректная дата'.
 * @version 1.0.0
 */
export const getLongDate = (dateString) => {

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
 * Пересчитывает стоимость билета на основе списка курсов валют и текущей валюты
 */
export const calcPrice = (currencies, currentCurrency) => {

  let findedCurrency;

  if (currencies !== null)
    findedCurrency = currencies.courses.find(x => x.CharCode === currentCurrency.trim().toUpperCase());

  
  return function(price) {
    if (typeof price !== 'number' || price < 0)
      return 'Некорректная цена';

      if (findedCurrency !== undefined)
        return price / findedCurrency.Value;
      else return price;
  }
}


/**
 * Возвращает форматированную цену в зависимости от валюты.
 * @param {number} price Цена.
 * @returns {string} Строка, содержащая отформатированную цену. В случае ошибки получения значения будет возвращена строка со значением 'Некорректная цена'.
 */
export const formatCurrency = currencyCode => {

  if (typeof currencyCode !== 'string' || (currencyCode.length < 1 && currencyCode.length > 3))
    return 'Некорректная валюта';

  return function(price) {
    let options = { style: 'currency', currency: currencyCode.trim().toUpperCase(), minimumFractionDigits: 0 }; 

    if (typeof price !== 'number' || price < 0)
      return new Intl.NumberFormat('ru-RU', options).format(0);

    return new Intl.NumberFormat('ru-RU', options).format(price);
  }
}

export const generateString = () => {
  return Math.random().toString(16).substr(2, 7);
}

/**
 * @description Возвращает склоненное существительное
 * @param {number} number Число, к которому нужно склонить существительное
 * @param {array} titles Массив склоненных слов, например ['яблолко', 'яблока', 'яблок']
 */
export const getDeclension = number => {
  
  if (!isIntNumber(number))
    return 'Нет данных';

  /* Сначала идут правила исключения: 0 - возвращаем Без пересадок; 11, 12, 13, 14 - пересадок */

  if (number === 0)
    return '';

  /* Вообще числа заканчивающиеся на 11-14 так должны себя вести (111, 214, 613) */
  if ([11, 12, 13, 14].includes(getTwoLastDigit(number)))
    return `${number} пересадок`;

  /* Есть закономерность, при которой склонять слово можно по последней цифре числа. Например,
  цифра оканчивающаяся на 0 (0 (но мы сделали исключение!), 10, 20, 30, 60, 100) вернет слово 'пересадок';
  цифра оканчивающаяся на 1 (1, 21, 31, 61, 101) вернет слово 'пересадка';
  цифра оканчивающаяся на 2-4 (2, 3, 4, 22, 23, 34, 43, 44, 102) вернет слово 'пересадки';
  цифра оканчивающаяся на 5-9 (5, 8, 19, 25, 27, 36, 39, 45, 167) вернет слово 'пересадок'.
  */
  switch(number) {
    //switch(getLastChar(number)) {
    case 0:
      return `${number} пересадок`;
    case 1:
      return `${number} пересадка`;
    case 2:
    case 3:
    case 4:
      return `${number} пересадки`;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return `${number} пересадок`;
    default:
      break;
  }
}

export const getLastChar = text => {
  return text.toString().charAt(text.length-1);
}

export const getTwoLastDigit = number => {
  const pattern = /[0-9]{1,2}$/;
  return number.toString().match(pattern);
}

/*
export const getCourses = () => {
  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  .then(function(response) {
    if(response.ok)
      return response.json();

    throw new Error('Network response was not ok.');
  }).then(function(data) { 
    console.log(data);
  }).catch(function(error) {
    console.log('Fetch operation error: ' + error.message);
  });
}
*/
/*
export const convertTo = (currency, price) => {
  return (price / currency);
}
*/
/*
export const formatCurrency = (price) => {

  if (typeof price !== 'number' || price < 0)
    return 'Некорректная цена';

  // Форматируем цену в формате '12 400,34 ₽'
  let options = { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }; 
  return new Intl.NumberFormat('ru-RU', options).format(price);
} */