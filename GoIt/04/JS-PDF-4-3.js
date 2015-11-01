//Задачка
//Написать функцию которая возвращает строку с
//заглавным первым символом
//upperFirst('hello') == 'Hello';
//upperFirst('') == ''; // нет ошибок при пустой строке


'use strict';

function getFirstChar(str){
    if (str) {
        var firstChar = str[0].toUpperCase();
        var restOfWord = str.substring(1);
        return firstChar + restOfWord;
    }
    return str;
}

console.log(getFirstChar(''));