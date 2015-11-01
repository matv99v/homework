//Домашнее задание. JS. Урок 2. Задание 5.
//
//Перепишите if..else с использованием нескольких операторов '?':
//var name = 'admin', text;
//if (name == 'admin') {
//text = 'Hi';
//} else if (name == 'manager') {
//text = 'Hello';
//} else if (name == '') {
//text = 'No login';
//} else {
//text = '';
//}


'use strict';
var name = 'admin', text;
(name == 'admin') ? text = 'Hi':
    (name == 'manager') ? text = 'Hello' :
        (name == '') ? text = 'No login' : text = '';

alert(text);