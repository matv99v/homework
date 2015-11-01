//Задачка 6
//Создайте фунцию filterRange(arr, a, b), которая принимает
//массив чисел arr и возвращает новый массив, который
//содержит только числа из arr из диапазона от a до b.
//    То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//    Функция не должна менять arr.
//    Например:
//var arr = [5, 7, 4, 8, 3, 0];
//var filtered = filterRange(arr, 3, 5);
//// filtered = [5, 4, 3];
//// arr = [5, 7, 4, 8, 3, 0];


'use strict';

var myArr = [4,9,2,4,5,6,1,8,5];

function filterRange(arr, a, b){
    if (a < b) {
        for (var ind = a, newArr = []; ind <= b; ind++) {
            newArr.push(arr[ind]);
        }
        return newArr;
    }
}

console.log(filterRange(myArr, 1, 3));
console.log(myArr);
