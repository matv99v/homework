//Задание 3 (Калькулятор)
//
//Напишите код, который:
//Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
//    Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
//При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
//    Выводит сумму всех значений массива когда ввод прекращен.

'use strict';

function isInputOk(argStr){
        return !(typeof argStr == 'object' || isNaN(+argStr) || argStr == '')
}

var myArr = [],
    sum = 0;

do {
    var myInput = prompt('Input a number');
    if (isInputOk(myInput)) {
        myArr.push(+myInput);
        sum += +myInput;
    }

} while (isInputOk(myInput));

console.log(myArr, sum);

