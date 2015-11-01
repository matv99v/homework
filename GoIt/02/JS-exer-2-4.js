//Домашнее задание. JS. Урок 2. Задание 4.
//
//Перепишите if с использованием оператора '?'
//
//var a = 1, b = 2;
//if (a + b >= 3) {
//result = 'Yep!';
//} else {
//result = 'Noup!';
//}

'use strict'
var a = 1, b = 2, result;
(a + b >= 3) ? result = 'Yep!' : result = 'Noup';
alert(result);