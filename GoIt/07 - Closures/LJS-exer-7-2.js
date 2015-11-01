// Функция – строковый буфер
// важность: 5решение
// В некоторых языках программирования существует объект «строковый буфер», который
// аккумулирует внутри себя значения. Его функционал состоит из двух возможностей:
//
// Добавить значение в буфер.
// Получить текущее содержимое.
// Задача — реализовать строковый буфер на функциях в JavaScript, со следующим
// синтаксисом:
//
// Создание объекта: var buffer = makeBuffer();.
// Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове
// buffer(value) добавляет значение в некоторое внутреннее хранилище, а при вызове
// без аргументов buffer() — возвращает его.

'use strict';

function makeBuffer() {
  var content = '';
  return function buff(arg) {
    if (arguments.length > 0) { content += arg }
    return content;
  }
}
var a = makeBuffer();
console.log(a('one'));
console.log(a('two'));
console.log(a());
console.log(a('three'));