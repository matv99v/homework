// Задание 4
//
// Write a JavaScript function that accepts a string as a parameter and converts
// the first letter of each word of the string in upper case. Go to the editor
//
// Example string: the quick brown fox
//
// Expected Output: The Quick Brown Fox


'use strict';


function firstCharToUppercase(str) {
    var arr = str.split(' ');
    var processedArr = [];
    arr.forEach(function(word){
        processedArr.push( word.charAt(0).toUpperCase() +  word.substr(1) );
    })
    return processedArr.join(' ');

}

console.log( firstCharToUppercase('the quick brown fox') );
