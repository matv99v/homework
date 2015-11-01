//Домашнее задание. JS. Урок 4. Задание 1.
//
//Последовательность чисел Фибоначчи вычисляется по формуле формулу F(n) = F(n-1) + F(n-2). В ней каждое следующее число вычисляется как сумма двух предыдущих. Первые два числа равны 1 и 1. Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.

'use strict';
function getFibonacciByPos(pos){
    var nPrev = 1, nPrevPrev = 1, nCurrent;

    for (var i = 2; i < pos ; i++){
        nCurrent = nPrevPrev + nPrev;
        nPrevPrev = nPrev;
        nPrev = nCurrent;
    }
    return nCurrent;
}
console.log(getFibonacciByPos(77));

