//Домашнее задание. JS. Урок 4. Задание 4.
//
//Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.
//
//var three = always(3);
//three(); // returns 3

'use strict';
var n = 54;

function always () {
    var nestedFuncVar = function nestedFunc(){
        return 3;
    }
    return nestedFuncVar;
}

console.log(always(n));