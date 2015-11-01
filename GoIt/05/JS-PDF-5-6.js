//Задачка 3
//1. Создайте массив fruits с элементами «apple», «orange».
//2. Добавьте в конец значение «kiwi»
//3. Замените предпоследнее значение с конца на «pear». Код
//замены предпоследнего значения должен работать для
//массивов любой длины.
//4. Удалите первое значение массива и выведите его console.
//5. Добавьте в начало значения «apricot» и «peach».

'use strict';

var fruits = ['apple', 'orange'];
fruits.push('kiwi');
console.log(fruits);


fruits[fruits.length - 1] = 'pear';
console.log(fruits[fruits.length - 1]);

console.log(fruits.shift());
console.log(fruits);


fruits.unshift('apricot', 'peach');
console.log(fruits);

