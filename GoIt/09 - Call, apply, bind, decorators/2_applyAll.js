// Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию
// func и произвольное количество аргументов.
//
// Она должна вызвать func(arg1, arg2...), то есть передать в func все
// аргументы, начиная со второго, и возвратить результат.

'use strict';

function applyAll() {
  var func = arguments[0];
  var args = [].slice.call( arguments, 1);
  return func.apply( null, args );
}

function mul() {
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

console.log( applyAll( Math.max, 4,6,87,89,9 ) );
console.log( applyAll( mul, 4,3 ) );
