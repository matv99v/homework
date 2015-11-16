// Задание 3
//
// Write a JavaScript function that returns a passed string with letters in
// alphabetical order. Go to the editor
//
// Example string: webmaster
//
// Expected Output: abeemrstw
//
// Assume punctuation and numbers symbols are not included in the passed string.


'use strict';

function alpa(str) {
    var arr = str.split('');
    return arr.sort(function(pc, cc) {
        return pc > cc;
    }).join('');


}

console.log(alpa('webmaster'));
