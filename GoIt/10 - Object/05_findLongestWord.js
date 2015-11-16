// Задание 5
//
// Write a JavaScript function that accepts a string as a parameter and find the
// longest word within the string. Go to the editor
//
// Example string: Web Development Tutorial
//
// Expected Output: Development


'use strict';

function findLongestWord(str) {
    var arr = str.split(' ');
    var newArr = arr.map(function(word) {
        return word.length;
    })
    return Math.max.apply(null, newArr);





console.log( findLongestWord('Web Development Tutorial') );
