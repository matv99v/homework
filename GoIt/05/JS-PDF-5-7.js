//Задачка 4
//Написать функцию которая принимает на вход массив и
//возвращает случайное значение из этого массива.

'use strict';

var myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c'];
var myArrShort = ['a', 'b', 'c'];

function randomElement(arr){
    var min = 0,
        max = arr.length,
        index = Math.floor(Math.random() * (max - min)) + min;
    return arr[index];
}

console.log(randomElement(myArrShort));
console.log(randomElement(myArr));

