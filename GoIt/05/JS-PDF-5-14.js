//Сумма аргументов
//Напишите функцию sum(...), которая возвращает сумму всех
//своих аргументов.
//sum() = 0
//sum(1) = 1
//sum(1, 2) = 3
//sum(1, 2, 3) = 6
//sum(1, 2, 3, 4) = 10

'use strict';

function sum(){
    for (var sum = 0, ind = 0; ind < arguments.length; ind++){
        sum += arguments[ind];
    }
    return sum;
}


console.log(sum(1,2,3));
console.log(sum(1,2,3,4));