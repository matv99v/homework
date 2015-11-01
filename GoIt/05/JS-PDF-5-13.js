//Задачка
//Код ниже получает из массива строк новый массив,
//    содержащий их длины. Перепишите его: уберите цикл,
//    используйте вместо него метод map.
//    var arr = ['Есть', 'жизнь', 'на', 'Марсе'];
//var arrLength = [];
//for (var i = 0; i < arr.length; i++) {
//    arrLength[i] = arr[i].length;
//}
//console.log( arrLength ); // 4,5,2,5


'use strict';

var arr = ['Есть', 'жизнь', 'на', 'Марсе'];
var arrLength = arr.map(function(elem) { return elem.length });

console.log(arrLength);