//Домашнее задание. JS. Урок 4. Задание 3.
//
//Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов. Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'



'use strict';
function addThreeDots(someText){
    if (someText.length > 21){
        return someText.slice(0, 20) + '...';
    }
    else{
        return someText;
    }
}

var inputText1 = 'Напишите функцию';
var inputText2 = 'Напишите функцию, которая принимает на вход';


console.log(addThreeDots(inputText1));
console.log(addThreeDots(inputText2));