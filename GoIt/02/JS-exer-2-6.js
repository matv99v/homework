//Домашнее задание. JS. Урок 2. Задание 6.
//
//We need a function that can transform a number into a string. What ways of achieving this do you know? Examples:
//numberToString(123); // returns '123';
//numberToString(999); // returns '999';


'use strict';
function numberToString1(num){
    return '' + num;
}

function numberToString2(num){
    return num.toString();
}

function numberToString3(num){
    return String(num);
}

var result1 = numberToString1(prompt('Method-1. Input a number'));
alert('Method-1. Converted type of your input is ' + typeof result1);

var result2 = numberToString1(prompt('Method-2. Input a number'));
alert('Method-2. Converted type of your input is ' + typeof result2);

var result3 = numberToString1(prompt('Method-3. Input a number'));
alert('Method-3. Converted type of your input is ' + typeof result3);
