//Задачка 1
//Написать функцию которая принимает на вход
//массив и возвращает последний элемент массива.

'use strict';

var myArr = [ 1, 4, 'fd', 7, 9, 's'];


function lastItem_1(arg) {
    return arg[arg.length - 1];
}

function lastItem_2(arg) {
    return arg.pop();
}

function lastItem_3(arg) {
    return arg.slice(arg.length - 1, arg.length);
}



console.log(lastItem_1(myArr), myArr);
console.log(lastItem_2(myArr), myArr);
console.log(lastItem_3(myArr), myArr);

