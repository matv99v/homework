// Фильтрация через функцию
// Создайте функцию filter(arr, func), которая получает массив arr и
// возвращает новый, в который входят только те элементы arr, для которых
// func возвращает true.
// Создайте набор «готовых фильтров»: inBetween(a,b) — «между a,b»,
// inArray([...]) — «в массиве [...]». Использование должно быть таким:
// filter(arr, inBetween(3,6)) — выберет только числа от 3 до 6,
// filter(arr, inArray([1,2,3])) — выберет только элементы, совпадающие с
 // одним из значений массива.

 function filter ( arr, func ) {
    return arr.filter ( func );
 }

 function inBetween (a, b) {
 }


 var arr = [1, 2, 3, 4, 5, 6, 7];

 console.log( filter(arr, function(a) { return a % 2 == 0 }) );
 console.log( filter(arr, inBetween(3, 6)) );
