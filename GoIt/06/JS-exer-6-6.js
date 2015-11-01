//Задание 6 (Уникальные элементы массива)
//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).
//var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];
//console.log( unique(strings) ); // кришна, харе, 8-()


'use strict';

function unique(arr){
    var newArr = [];
    for (ind in arr){
        if (!(newArr.indexOf(arr[ind]) > -1)){
            newArr.push(arr[ind]);
        }
    }
    return newArr;

}


var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];
console.log( unique(strings) );
