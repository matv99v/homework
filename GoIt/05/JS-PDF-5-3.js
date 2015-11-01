//Задачка 2
//Создайте функцию которая возвращает общий
//размер фонда зарплат (сумму) всего отдела.
//    var salaries = {
//    'junior': 1000,
//    'middle': 2500,
//    'senior': 3500,
//    'lead': 5000
//}

'use strict';

var salaries = {
    'junior': 1000,
    'middle': 2500,
    'senior': 3500,
    'lead': 5000
};

function sum(obj){
    var result = 0;
    for (var person in obj){
        result += obj[person];
    }
    return result;
}

console.log(sum(salaries));