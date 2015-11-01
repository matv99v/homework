//Задачка 1
//Напишите функцию sumTo(n), которая для данного n
//вычисляет сумму чисел от 1 до n
//sumTo(3) = 3 + 2 + 1 = 6
//sumTo(4) = 4 + 3 + 2 + 1 = 10
//• Рекурсия
//• Цикл
//• Формула арифметической прогрессии

'use strict';
function sumRecursion(n){
    if (n == 1) {
        return 1
    }
    else{
        return n + sumRecursion(n - 1);
    }
}

function sumCycle(n){
    for (var i = n, result = 0; i != 0; i--){
        result += i;
    }
    return result;
}

function sumAritheticalProgr(n){
    return ((1 + n) * n) / 2;
}

var num = 3;

console.log(sumRecursion(num));
console.log(sumCycle(num));
console.log(sumAritheticalProgr(num));