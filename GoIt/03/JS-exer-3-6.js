//Домашнее задание. JS. Урок 3. Задание 6.
//
//Напишите функцию pow(x,n), которая возвращает x в степени n Иначе говоря, умножает x на себя n раз и возвращает результат.

'use strict';
function pow1(x, n){
    for (var i = 2, result = x; i <= n ; i++){
        result *= x ;
    }
    return result;
}
function pow2(x, n){
    if (n == 0){
        return 1;
    }
    else {
        return x * pow2(x, n - 1);
    }
}

var a = 3, b = 3;
console.log('solution 1: ', pow1(a, b));
console.log('solution 2: ', pow2(a, b));

