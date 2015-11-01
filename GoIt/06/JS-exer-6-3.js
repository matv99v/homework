//Задание 3 (Random sort)
//
//Необходимо отсортировать массив в случайном порядке используя метод sort.
//
//    var arr = [1, 2, 3, 4, 5];
//
//arr.sort(ваша функция);
//
//console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]


'use strict';

var arr = [1, 2, 3, 4, 5];

arr.sort( function(){
    return 0.5 - Math.random();
});

console.log(arr);