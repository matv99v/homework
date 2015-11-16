// Задание 7
//
// Write a function suffle(arr) to shuffle an array.

'use strict';
function shuffle(arr){
	return arr.sort(function(a,b) {
		return Math.random() - 0.5;
	})

}

var myArray = 'abcdefg'.split('');

console.log(shuffle(myArray));
