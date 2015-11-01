//Задачка 2
//Написать функцию вычисляющую факториал числа n
//n! = n * (n - 1) * (n - 2) * ... * 1

'use strict';

function factRecurs(n){
    if (n == 1){ return 1}
    else {return n * factRecurs(n - 1)}
}

function factCycle(n){
    for (var ind = n, result = 1; ind > 1; ind--){
        result *= ind;
    }
    return result;
}


num = 6;
console.log(factRecurs(num));
console.log(factCycle(num));