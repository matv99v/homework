// Description:
//
// You have to create a function named reverseIt.
//
// Write your function so that in the case a string or a number is passed in as
// the data , you will return the data in reverse order. If the data is any other
// type, return it as it is.
//
// Examples of inputs and subsequent outputs:
//
// "Hello" -> "olleH"
//
// "314159" -> "951413"
//
// [1,2,3] -> [1,2,3]

'use strict';

function reverseIt(data){

	var parsedInput = (data + '').split('').reverse().join('');

	if (typeof data == 'number') {
		return +parsedInput;
	}

	else if (typeof data == 'string') {
		return parsedInput;
	}

	else {
		return data;
	}
}

var b = 'abc';
var a = reverseIt(b);

console.log( typeof a, a );
