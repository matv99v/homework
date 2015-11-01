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
    if (arguments.length > 0) { content += arg; }
    buff.clear = function() { content = '' };
    return content;
   }
}
var a = makeBuffer();
console.log('1-', 'result:', a('one'));
console.log('2-', 'result:', a('two'));
console.log('3-', 'result:', a());
console.log('4-', 'result:', a('three'));
console.log('5-', 'result:', a());
a.clear();
console.log('6-', 'result:', a());
