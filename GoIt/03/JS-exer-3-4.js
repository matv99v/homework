//Домашнее задание. JS. Урок 3. Задание 4.
//
//Исправьте 1ю задачу так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.

'use strict';

for (var num = 1; num < 101; num++){
    if (num % 3 === 0 || num % 5 === 0){
        console.log('FizzBuzz');
    }
    else{
        console.log(num);
    }
}

