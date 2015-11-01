//Задачка 3
//Написать функцию обратной сортировки reverseSort(arr).
//    Которая сортирует численный массив от большего к
//меньшему.
//    var arr = [5, 2, 1, -10, 8];
//console.log( reverseSort(arr) ); // 8, 5, 2, 1, -10


'use strict';
var arrRandom = [5, 2, 1, -10, 8];


function reverseSort(arr){
    return arr.sort( function(a, b){ return b - a} )
}

console.log(reverseSort(arrRandom));