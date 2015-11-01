//Задачка 1
//В объекте есть свойство className, которое содержит список
//«классов» – слов, разделенных пробелом.
//    Создайте функцию addClass(obj, cls), которая добавляет в
//список класс cls, но только если его там еще нет.
//    Ваша функция не должна добавлять лишних пробелов.
//    var obj = {
//    className: 'open menu'
//};
//addClass(obj, 'new'); // obj.className='open menu new'
//addClass(obj, 'open'); // без изменений
//addClass(obj, 'me'); // obj.className='open menu new me'
//console.log( obj.className ); // "open menu new me"

'use strict';

var myObj = {
    className: 'open menu'
};

function isInArray(arr, val){
    for (var ind = 0; ind < arr.length; ind++ )
            if (arr[ind] == val){
                return true;
            }
            return false;
        }



function addClass(obj, cls) {
    var words = obj.className.split(' ');

    if (!isInArray(words, cls)){
        words.push(cls);
        obj.className = words.join(' ');
        return 'changed';
    }
    return 'no changes';

}



console.log(addClass(myObj, 'open'), ';' ,myObj);
console.log(addClass(myObj, 'menu'), ';' ,myObj);
console.log(addClass(myObj, 'hello'), ';' ,myObj);
console.log(addClass(myObj, 'exit'), ';' ,myObj);
console.log(addClass(myObj, 'menu'), ';' ,myObj);



