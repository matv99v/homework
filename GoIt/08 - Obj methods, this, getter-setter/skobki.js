// Напишите функцию sum, которая будет работать так:
//
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// Количество скобок может быть любым.


'use strict';

function sum(a) {
  var curSum = a;

  function func(b) {
    curSum = curSum + b;
    return func;
  }
  func.toString = function() { return curSum; };
  return func;
}


console.log( sum(1)(2)(3)(4)(-11) + '');
