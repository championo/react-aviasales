# Episode #5: Aviasales.

[In English](README.md)

**Aviasales** - моё второе React-приложение, в котором реализуется фильтрация авиабилетов.

## Демо
Уже скоро!

## Предпросмотр
![Aviasales demo](design/preview/demo.gif)

## О проекте
Проект посвящен выполнению тестового задания на позицию Junior Frontend Developer. Подробнее о задании по ссылке [Aviasales](https://github.com/KosyanMedia/test-tasks/blob/master/aviasales/README.md). 

Это задание является одним из наиболее популярных практических заданий, которые выполняют начинающие и не только разработчики. Достаточно взглянуть на количество проектов, размещенных на [Github](https://github.com/search?q=aviasales). Не знаю с чем связано то, что многие разработчики используют для этого задания styled-components (популярность библиотеки?). И я не стал исключением, но чисто случайно, т.к. после первого проекта [Ifinum](https://github.com/championo/react-ifinum), хотелось попробовать что-то еще после CSS Modules.
Проект является учебным и предназначен для изучения библиотеки [React](https://reactjs.org) и связанной с ней экосистемой, получения практических навыков.
Кстати, а вы помните фразочку "Озвучено по версии к-к-к-кураж бамбей. При поддержке aviasales.ru. Поиск дешёвых авиабилетов"?!

## Что используется
* [Create-React-App](https://facebook.github.io/create-react-app)
* [React](https://reactjs.org)
* [Redux](https://react-redux.js.org)
* [Reselect](https://github.com/reduxjs/reselect)
* [Jest](https://jestjs.io)
* [styled-components](https://www.styled-components.com)
* [CSS Grid Layout](https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout)

У Вас должен быть установлен [Git](https://git-scm.com), [Node.js](https://nodejs.org). По возможности установите плагины браузера React Developer Tools, Redux DevTools. Также для работы с файлом sketch использовалась бесплатная программа [Lunacy](https://icons8.ru/lunacy). Правда, например, она некорректно отображает логотип сайта (у самолета отваливается крыло, есть и другие небольшие огрехи), но для получения цветовой палитры её хватило. Так же были использованы [сторонние изображения](https://tobiasahlin.com/blog/common-mac-os-x-lion-cursors) для указателя мыши и [стрелка](https://www.flaticon.com/free-icon/up-arrow_271239) кнопки возвращения наверх.

## Задачи
- [ ] Рендер билетов с сортировкой по цене;
- [x] Фильтрация билетов по количеству пересадок;
- [x] Переключение валюты;
- [x] Верстка билета, фильтра, переключения валют;
- [ ] Адаптивный дизайн до 320px;
- [ ] json с билетами асинхронно подтягивался с локального сервера при инициализации.

## Как установить
```bash
# Скопируйте проект с github
git clone https://github.com/championo/react-aviasales.git
# Перейдите в папку с проектом
cd react-aviasales
# Восстановите Node.js модули
npm install
```

**Примечание: Вы также можете [**скачать**](https://github.com/championo/react-aviasales/archive/master.zip) проект как zip-архив (после скачивания и распаковки необходимо выполнить команду `npm install`)**

## Как запустить

```bash
# Запустите Node.js сервер
npm start
```

В браузере по умолчанию автоматически откроется вкладка с адресом [http://localhost:3000](http://localhost:3000).

## Redux

Папка redux - содержит создателей действий, преобразователи, селектор. Структура, названия каталогов и файлов - типовые для проектов, использующих redux.

## Тестирование
В качестве фреймворка для модульного тестирования в приложении используется [Jest](https://jestjs.io/) от Facebook.

### Как запустить модульные тесты (unit tests)

Для запуска всех тестов выполните команду
```bash
npm test
```
Для запуска одного теста выполните команду
```bash
npm test utils/__test__/capitalize.test.js
```

## Для связи
Буду рад слышать от вас замечания и рекомендации по проекту. Для связи со мной используйте telegram [https://t.me/championo](https://t.me/championo)