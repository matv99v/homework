//Задание 5 (Проверка на палиндром)
//
//Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно, А роза упала на лапу Азора.
//
//    Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того является ли строка палиндромом или нет.
//
//console.log(isPal('Anna')); // true
//console.log(isPal('А роза упала на лапу Азора')); //true
//console.log(isPal('Вася')); //false
//console.log(isPal('12321')); //true
//console.log(isPal('123212')); //false

'use strict';


function isPal(str){
    var arr = [],
        flag = true;

    for (var ind = 0; ind < str.length; ind++){
        if (str[ind] !== ' '){
            arr.push(str[ind].toLowerCase());
        }
    }

    var numOfEl = arr.length - 1;

    for (ind = 0; ind < numOfEl / 2; ind++){
        flag = flag && arr[ind] == arr[numOfEl - ind];
        if (!flag){ return flag}
    }
    return true;
}

console.log(isPal('Anna'));
console.log(isPal('А роза упала на лапу Азора'));
console.log(isPal('Вася'));
console.log(isPal('12321'));
console.log(isPal('123212'));
