//Домашнее задание. JS. Урок 5.
//Напиште код который выведет сотрудника который выполнил больше всех задач.
//
//    Например:
//
//var tasksCompleted = {
//    'Anna': 29,
//    'Serg': 35,
//    'Elena': 1,
//    'Anton': 99
//};


'use strict';

function findMax(obj){
    var max = 0;

    for (var key in obj){
        if (obj[key] > max){
            max = obj[key];
        }
    }
    return max;

}

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99,
    'Vova': 51,
    'Evgen': 7
};

console.log(findMax(tasksCompleted));




