//Домашнее задание. JS. Урок 2. Задание 1.
//
//Используя конструкцию if..else, напишите код, который будет спрашивать: 'Какой сейчас год?'. Если посетитель вводит '2015', то выводить 'Вы правы!', если что-то другое — выводить 'С луны свалися? 2015!'.


'use strict';
var year = prompt('Какой сейчас год?');

if (year == '2015') {
    alert('Вы правы!')
}
else{
    alert('С луны свалился?')
}