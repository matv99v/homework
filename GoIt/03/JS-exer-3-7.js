//Домашнее задание. JS. Урок 3. Задание 7.
//
//Create a function that takes an integer as an argument and returns "Even" or "Odd".

'use strict';
function isEverOrOdd (arg){
    if (arg % 2){
        return 'odd';
    }
    else {
        return 'even';
    }
}

var num = prompt('Input an integer number');
alert( num + ' is ' +  isEverOrOdd(num) );
console.log( num, ' is ', isEverOrOdd(num) );

