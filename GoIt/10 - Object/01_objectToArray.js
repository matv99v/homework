// Задание 1 (Объект в массив)
//
// Есть объект из чисел, строк и прочих данных. Необходимо его превратить в массив
// состоящий только из чисел или строк. Написать метод extractNumber или extractString,
// который будет возвращать массив.


'use strict';

var obj = {
  person1Age: 20,
  person1Name: 'Ivanov',
  person2Age: 30,
  person2Name: 'Petrov',
  person3Age: 40,
  person3Name: 'Sidorov'
};

var ages = [20,30,40];
var names = ['Ivanov', 'Petrov', 'Sidorov'];

function extractNumber(obj) {
    var arr = [];
    for (var prop in obj){
        if ( typeof obj[prop] == 'number'){
            arr.push( obj[prop] );
        }
    }
    return arr;
}

function extractString(obj) {
    var arr = [];
    for (var prop in obj){
        if ( typeof obj[prop] == 'string'){
            arr.push( obj[prop] );
        }
    }
    return arr;
}

console.log( extractNumber(obj) );
console.log( extractString(obj) );
