// Description:
//
// The main idea is to count all the occuring characters(UTF-8) in string.
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
//
// What if the string is empty ? Then the result should be empty object literal { }

'use strict';

function count (string) {
    var obj = {};

    string.split('').forEach(function(char){
        obj[char] ? obj[char]++ : obj[char] = 1;
    });

   return obj;



console.log( count('aba') );
