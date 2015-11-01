//Домашнее задание. JS. Урок 4. Задание 2.
//
//Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex.
//
//checkSpam('get new Sex videos'); // true
//checkSpam('[SPAM] How to earn fast money?'); // true
//checkSpam('New PSD template'); // false



'use strict';
function checkSpam(text){
    var spamWords = ['sex', 'spam'];

    for (var i = 0; i < spamWords.length; i++){
        return !!(text.indexOf(spamWords[i]) + 1);
    }
}

var message = 'get new Sex videos';
console.log(checkSpam(message));
