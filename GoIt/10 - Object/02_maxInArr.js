// Задание 2 (Максимальное число в массиве)
//
// Необходимо написать функцию, которая будет принимать на вход массив чисел и
// возвращать самое большое.


'use strict';
function getMaxNumber(arr) {
    return Math.max.apply(null, arr);
}


console.log( getMaxNumber([1,2,0,-20,3,4,5]) );
