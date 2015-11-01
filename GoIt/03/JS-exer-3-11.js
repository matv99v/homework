//Домашнее задание. JS. Урок 3. Задание 11.
//
//Complete the bool_to_word (Javascript: boolToWord ) method. Given: a boolean value. Return: a 'Yes' string for true and a 'No' string for false.
//    function boolToWord( bool ){
//        //...
//    }

'use strict';
function boolToWord( arg ){
    if (arg) {
        return 'yes';
    }
    else {
        return 'no';
    }

}


var bool = false;
alert(boolToWord(bool));