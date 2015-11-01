//Домашнее задание. JS. Урок 3. Задание 3.
//
//Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.

'use strict';
var message = '';
for (var num = 1; num < 101; num++){
    if (num % 3 === 0) {
        console.log('Fizz');
    }
    else{
        if (num % 5 === 0){
            console.log('Buzz');
        }
        else{
            console.log(num);
        }
    }
}