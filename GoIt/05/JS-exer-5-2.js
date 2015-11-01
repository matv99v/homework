//Задание 2 (Изменение численных свойств)
//
//Напишите функцию multiplyNumeric которая принимает на вход объект и возвращает объект в котором все числовые значения у свойств умножены на 2.

'use strict';

function multiplyNumeric(obj){

    for (var key in obj){
        if (typeof(obj[key]) == 'number'){
            obj[key] = obj[key] * 2;
        }
    }

    return obj;


}

var image = {
    width: 100,
    height: 400,
    dimension: 20,
    title: 'Cool image'
};

console.log(multiplyNumeric(image));