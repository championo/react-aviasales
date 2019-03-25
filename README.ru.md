# Episode #5: Aviasales.

[In English](README.md)

**Aviasales** - моё второе React-приложение, в котором реализуется фильтрация авиабилетов.

## Демо
Смотреть на [Github Pages](). Приложение имеет адаптивный дизайн.

## Предпросмотр
()

## О проекте
Проект посвящен выполнению тестового задания на позицию Junior Frontend Developer. Подробнее о задании по ссылке [Aviasales](https://github.com/KosyanMedia/test-tasks/blob/master/aviasales/README.md). 

Это задание является одним из наиболее популярных практических заданий, которые выполняют начинающие и не только разработчики. Достаточно взглянуть на количество проектов, размещенных на [Github](). Не знаю с чем связано то, что многие разработчики используют для этого задания styled-components (популярность библиотеки?). И я не стал исключением, но чисто случайно, т.к. после первого проекта [Ifinum](), хотелось попробовать что-то еще после [CSS Modules]().
Проект является учебным и предназначен для изучения библиотеки [React](https://github.com/) и связанной с ней экосистемой, получения практических навыков.

## Что используется
* [React](https://reactjs.org/)
* [Create-React-App](https://facebook.github.io/create-react-app/)
* [Redux](https://react-redux.js.org/)
* [styled-components](https://www.styled-components.com/)
* [CSS Grid Layout](https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout)
* [Jest](https://jestjs.io/)

У Вас должен быть установлен Node.js, Git. По возможности установите плагины браузера React DevTools, Redux DevTools. Также для работы с файлом sketch использовалась бесплатная программа [Lunacy](https://icons8.ru/lunacy). Правда, например, она некорректно отображает логотип сайта (у самолета отваливается крыло, есть и другие небольшие огрехи), но для получения цветовой палитры её хватило. Так же были использованы [сторонние изображения]() для указателя мыши и [стрелка (от DavidGuetta)]() кнопки возвращения наверх. А также сервисы для получения списка валют.

## Задачи
- [ ] Рендер билетов с сортировкой по цене;
- [x] Фильтрация билетов по количеству пересадок;
- [ ] Переключение валюты;
- [x] Верстка билета, фильтра, переключения валют;
- [ ] Адаптивный дизайн до 320px;
- [ ] json с билетами асинхронно подтягивался с локального сервера при инициализации.

## Как установить
```bash
# Скопируйте проект с github
git clone https://github.com/griffinsockwell/react-firebase-crud.git
# Перейдите в папку с проектом
cd aviasales
# Восстановите Node.js модули
npm install
```

**Примечание: Вы также можете [**скачать**](https://github.com/ХХХХХХХХХХ/master.zip) проект как zip-архив (после скачивания и распаковки необходимо выполнить команду `npm install`)**

## Как запустить

```bash
# Запустите Node.js сервер
npm start
```

В браузере по умолчанию автоматически откроется вкладка с адресом [http://localhost:3000/](http://localhost:3000/).

## Модель данных

| Поле          | Формат данных |  Описание                             |
|---------------|---------------|---------------------------------------|
| id            | Hex Guid      | Уникальный идентификатор              |
| direction     | Guid          | Идентификатор направления поставки?   |
| number        | Число         | Номер счета                           |
| date_created  | Дата          | Дата создания записи                  |       
| date_due      | Дата          | Дата счета?                           |
| date_supply   | Дата          | Дата поставки                         |
| comment       | Строка        | Комментарий                           |

**Примечание**
id - строка в формате Hex Guid, полученная как префикс `5ac1f09a` + последовательность 16-ти сгенерированных символов. Мне неизвестен способ, которым автор задания получает такой id, но в своей работе я генерирую его с помощью [uniqid](http://localhost:3000/). Вместо 16-ти дополнительных символов создаются 8.
direction - строка в формате guid xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx, которая генерируется с помощью модуля [uuid/v4](http://localhost:3000/)
date_* - строка, содержащая дату в длинном формате

Данные выглядят так
```javascript
{
    Ололо
}
```

## Компоненты

В приложении есть компоненты с состоянием (statefull), так и без него (stateless). 
Компонентов без состояния большинство. Они служат для отображения (вывода) информации. К там компонентам можно отнести: Header, ListErrors, Notify, Section, InvoiceInfo и другие. 
К компонентам с состоянием (изменяют состояние/данные) можно отнести:  Create, Edit и другие.


## Назначение компонент
* ConfirmDeleteDialog - диалог подтверждения удаления всех счетов
* Details - отображает в зависимости от корректного id либо страницу с информацией о счете или страницу NotFound
* EditableForm - единая форма ввода данных для компонент Create и Save. В ней только поля ввода данных
* Header - отображает заголовок страницы
* ListErrors - отображает список ошибок
* Notify - popup панель уведомлений о тех или иных событиях (ошибка удаления, успех создания новой сущности и т.д.)
* Search - компонент фильтрации данных
* Section - контейнер для визуального объединения UI-элементов в группу. По сути просто заменяет <div className="BorderedContainer"></div>
* About - отображает информацию о проекте
* Actions - содержит элементы управления для управления списком счетов (создать новую запись, очистить, фильтровать)
* Create - отвечает за создание новой сущности
* DeleteAll - страница подтверждения удаления всех элементов
* Edit - отвечает за изменение сущности
* Invoices - по сути это главная (домашняя) страница

**********
Приложение разбито на несколько частей (компонент). 
Общие компоненты приложения свойственные и другим приложениям: Header, Content, Footer. 
Компоненты-элементы управления (те компоненты, которые являются типичными элементами UI и имеют стандартное отображение или немного преобразованное): Border, CheckBox, RadioButton, GroupBox.
Специализированные компоненты (для решения вопросов бизнес логики): Ticket (состоит из блоков Info, ), 

Фильтрация данных осуществляется в боковой панели (SideBar). Отфильтрованные данные передаются в контейнер TicketList, в котором происходит вывод найденных билетов Ticket. Компонент Ticket состоит из других компонент, в которые однонаправленно пробрасываются данные для отображения.
**********

## Основные компоненты

### [SearchBar]()
Компонент для отображения панели фильтрации билетов, выбора валюты стоимости билета.
Имеет предустановленные фильтры (через UI). 

### [Tickets]()
Компонент для вывода списка билетов. В компонент передается коллекция уже отфильтрованных билетов. Если в коллекции есть билеты – они отображаются, иначе выводится запись «К сожалению, билеты не найдены».
То что управляет выводом билетов. При изменении выбора валюты, пересадок - именно тут производится пересчет и передача новых значений пропсов для отображения

### [Ticket]()
Компонент для отображения информации о билете. Данные для отображения получает из компонента TicketList. Состоит из нескольких простейших компонент: BuyButton, TicketInfo, Ticket...

### [Header](), [Content](), [Footer]()
Типовые компоненты для web-страниц. Компоненты простейшие. Для позиционирования используется flex-box. 

### [GoTopButton]()
Кнопка для возвращения в начало страницы.

![Edit](https://raw.githubusercontent.com/evoluteur/evolutility-ui-react/master/public/screenshots/comics/one-edit.gif)

Code: [/src/components/views/one/Edit.js](https://github.com/evoluteur/evolutility-ui-react/blob/master/src/components/views/one/Edit.js)

### BuyBotton, Ticket
Получают цену в виде строки с валютой. Нет смысла проверять на ноль. Там не 0 в цене!!!!!!!!!!! Обратить внимание на функцию обработчик покупки билета

![List](https://raw.githubusercontent.com/evoluteur/evolutility-ui-react/master/public/screenshots/comics/many-list.gif)

Code: [/src/components/views/many/List.js](https://github.com/evoluteur/evolutility-ui-react/blob/master/src/components/views/many/List.js)

### RadioButton
RadioButton (Радиокнопка) - неуправляемый компонент (uncontrolled component). Отмечу, что при инициализации нескольких RadioButton как isChecked = true, в состоянии отмечен (true) отстанется, тот которому значение true присваивалось последним (другие true будут сброшены).
Радиокнопка не была сделана управляемым компонентом, потому что у каждой кнопки было было свое состояние isChecked, в результате чего эти состояния было бы трудно синхронизировать как в обычном DOM, где это делается автоматически (сброс и установка значения checked). Пришлось бы пробегать по другим кнопкам и менять для каждой состояние на отключен. В общем получается ерунда.
 componentDidMount() {
    // Установка начального значения (выбран/не выбран) по свойству isChecked
    // Если на входе логическое значение - устанавливаем его в качестве начального. В противном случае - false
  //  this.radioInput.current.checked = (typeof this.props.isChecked === 'boolean') ? this.props.isChecked : false;
  }
  еуправляемые компоненты. Они хранят данные формы прямо в DOM.
Code: [/src/components/views/many/Cards.js](https://github.com/evoluteur/evolutility-ui-react/blob/master/src/components/views/many/Cards.js)

## Redux

Папка redux - содержит действия, редуктор по работе с хранилищем. Структура, названия каталогов и файлов - типовые для проектов, использующих redux.

Хранилище данных состоит из:
- tickets - исходная коллекция билетов

## Для связи
Буду рад слышать от вас замечания и рекомендации по проекту. Для связи со мной используйте telegram [https://t.me/championo](https://t.me/championo)

Курсоры
http://tobiasahlin.com/blog/common-mac-os-x-lion-cursors/
http://petercollingridge.appspot.com/svg-optimiser

npm run eject - извлечь настройки
file-loader - должен быть установлен

Если нужно взять шрифты с Google Fonts, но подключать их со своего хоста
google-webfonts-helper 

Алгоритм преобразования валюты такой
- при старте приложения асинхронно получаем данные о курсах валют с удаленного сервера
- Полученные данные записываем в redux-хранилище.
- Я не стал делать запрос курса по клику кнопки выбора валюты из следующих соображений:
курс валют как правило определяется на определенный момент времени 
устанавливается на весь день и как правило не меняется в течении дня (Это для ЦБ). Но банки могут менять валюту несколько раз в день. Посмотрите например https://www.sberbank.ru/ru/quotes/currencies таблицу изменения котировок Сбербанка за конкретный день. Но особо мониторить не надо. Это же не биржа.
также этим мы минимизируем количество запросов к серверу с данными
получаем бонус в виде кэширования данных
для обновления используем метку о времени получения данных. спустя N-количество времени обновляем котировки
это
использую данный ресурс из удобства - отдает данные в json-формате. Как вариант при использовании xml использовать какой-нибудь конвертер xml to json.


фициальный курс валюты, как правило, является биржевым курсом по состоянию на определенный момент времени. Необходимость такой фиксации связана с тем, что официальный курс валют используется для ведения бухгалтерского учета и прочих официально регламентированных процедур, и в конкретный день должен быть одинаковым у всех пользователей. Так, Центральный банк России каждый рабочий день в 11-30 по московскому времени берет курс доллара к рублю на ММВБ и объявляет его официальным курсом следующего дня.

Разумеется, после того, как зафиксирован официальный курс, он начнет расходиться с текущим биржевым. Например, официальный курс доллара США на 12.03.2019 составляет 66.0763 рублей, а текущий биржевой курс на 22:30 (мск) 11.03.2019 составляет 65.9898 руб.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
