//Задание 4 (Object sort)
//
//Напишите код, который отсортирует массив объектов people по полю age.
//
//    Например:
//
//var vasya = { name: 'Вася', age: 23 };
//var masha = { name: 'Маша', age: 18 };
//var vovochka = { name: 'Вовочка', age: 6 };
//
//var people = [ vasya , masha , vovochka ];
//
//... ваш код ...
//
//// теперь people: [vovochka, masha, vasya]
//    console.log(people[0].age) // 6
//Выведите список имён в массиве после сортировки.

'use strict';
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };
var people = [ vasya , masha , vovochka ];


people.sort(function(objA, objB){
    return objA.age - objB.age;
});

for (var ind in people){
    console.log(people[ind].name, people[ind].age);
}