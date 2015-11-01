//Домашнее задание. JS. Урок 2. Задание 7.
//
//Description:
//We need a function that can transform a string into a number. What ways of achieving this do you know?Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
//Examples:
//stringToNumber("1234") == 1234
//stringToNumber("605" ) == 605
//stringToNumber("1405") == 1405
//stringToNumber("-7"  ) == -7


'use strict';
function stringToNumber1(myString){
    if (!isNaN(myString)){
        return +myString;
    }
    else{
        return 'Not a number!'
    }
}

function stringToNumber2(myString){
    return parseInt(myString);
}

function stringToNumber3(myString){
    return myString.toString(10);
}

var result1 = stringToNumber1(prompt('Method-1. Input a string'));
alert('Method-1. Converted string: ' + result1 +
    '. Type of your input is ' + typeof result1);

var result2 = stringToNumber2(prompt('Method-2. Input a string'));
alert('Method-2. Converted string: ' + result2 +
    '. Type of your input is ' + typeof result2);

var result3 = stringToNumber2(prompt('Method-3. Input a string'));
alert('Method-3. Converted string: ' + result3 +
    '. Type of your input is ' + typeof result3);
