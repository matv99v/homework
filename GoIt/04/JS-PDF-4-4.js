//Задачка 2
//Написать функцию которая возвращает случайное число из
//интервала (min, max)

'use strict';

function randomFromInterval(min, max){
    return Math.floor(min + Math.random() * (max - min));
}


console.log(randomFromInterval(3, 7));