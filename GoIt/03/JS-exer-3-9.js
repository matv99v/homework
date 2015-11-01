//Домашнее задание. JS. Урок 3. Задание 9.
//
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative? Notes: The number can be negative already, in which case no change is required. Zero (0) can't be negative, see examples above.

'use strict';
var num = prompt('Enter a number');
if (num > 0){
    num = -num;
}
alert (num)