//Задачка 5
//Создайте функцию find(arr, value), которая ищет в массиве arr
//значение value и возвращает его позицию, если найдено, или
//-1, если не найдено.

'use strict';

function find(arr, value){
    return arr.lastIndexOf(value);
}

var myArr = ['a', 'b', 'c', 'd', 'e'];

console.log(find(myArr, 'b'));
console.log(find(myArr, 'e'));
console.log(find(myArr, 'y'));


