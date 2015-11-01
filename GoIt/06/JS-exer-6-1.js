//Домашнее задание. JS. Урок 6.
//Задание 1 (Удаление css клссов)
//
//У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами:
//
//    var obj = {
//        className: 'open menu'
//    };
//Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
//
//    removeClass(obj, 'open'); // obj.className='menu'
//removeClass(obj, 'blabla'); // без изменений
//P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:
//
//    obj = {
//        className: 'my menu menu'
//    };
//
//removeClass(obj, 'menu');
//
//console.log( obj.className ); // 'my'
//Лишних пробелов после функции образовываться не должно.

'use strict';

var objMain = {
    className: 'open menu my exit menu hello'
};

function removeClass(obj, cls){
    arr = obj.className.split(' ');
    obj.className = arr.filter(function (word){ return word != cls}).join(' ');
}

removeClass(objMain, 'menu');
console.log(objMain);