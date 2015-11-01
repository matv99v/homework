//Задачка 2
//Напишите функцию toCamelCase(str), которая преобразует
//строки вида «my-short-string» в «myShortString».
//То есть, дефисы удаляются, а все слова после них получают
//заглавную букву.
//    Например:
//toCamelCase('background-color'); // 'backgroundColor';
//toCamelCase('list-style-image'); // 'listStyleImage';
//toCamelCase('-webkit-transition'); // 'WebkitTransition';
//P.S. Вам пригодятся методы строк charAt, split и toUpperCase.

'use strict';

var str1 = 'my-short-string-camel-insight';
var str2 = 'background-color';
var str3 = '-webkit-transition';

function toCamelCase(str){
    var arr = str.split('-');
    for (var ind = 1; ind < arr.length; ind++){
        var firstChar = arr[ind].charAt(0).toUpperCase();
        var restOfWord = arr[ind].slice(1);
        arr[ind] = firstChar + restOfWord;
    }
    return arr.join('');

}



console.log(toCamelCase(str1));
console.log(toCamelCase(str2));
console.log(toCamelCase(str3));
console.log(toCamelCase('hello-world'));