//Задачка 1
//Создайте функцию isEmpty(obj), которая
//возвращает true, если в объекте нет свойств
//и false — если хоть одно свойство есть.
//    function isEmpty(obj) {
//    /* ваш код */
//}
//var todoList = {};
//console.log( isEmpty(todoList) ); // true
//todoList['homework'] = 'lesson5';
//console.log( isEmpty(todoList) ); // false

'use strict';

function isEmpty(obj){
    for (var key in obj){
        return false;
    }
    return true;
}

var cookBook = {};
var phoneBook = {
    Vova: '097-78-87',
    Anton: '097-18-22'
};


console.log(isEmpty(cookBook));
console.log(isEmpty(phoneBook));

