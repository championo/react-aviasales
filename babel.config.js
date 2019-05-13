 /* Настройка Babel.JS - переводчика современного кода JavaScript на более старые конструкции кода и выражения.
 * Это необходимо для работы JavaScript в старых браузерах, которые не поддерживают современный стандарт JS.

 @babel/preset-react
 */

 /** Настройка Babel.JS - переводчика современного кода JavaScript на более старые конструкции кода и выражения.
  * Это необходимо для работы JavaScript в старых браузерах, которые не поддерживают современный стандарт JS.
  * Настраивается Babel через плагины (plugin) и предустановки (preset). Предустановка - это набор плагинов.
  * @babel/preset-env - пресет, необходимый для корректного исполнения синтаксиса в большинстве окружений
  * @babel/preset-react - пресет конвертация JSX, т.к. Babel не умеет конвертировать JSX
  * @babel/core содержит код, который выполняет всю работу по трансляции, но не содержит внутри себя правил преобразования. 
  */

/*
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};*/

module.exports = function (api) {
  api.cache(true);

  const presets = [['@babel/preset-env', {targets: { node: 'current' }}], '@babel/preset-react'];

  const plugins = ['@babel/plugin-proposal-class-properties'];

  
  return {
    presets,
    plugins
  };
}