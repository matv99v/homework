// Задание 6
//
// Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean,
// function, number, string, and undefined.


'use strict';

function getType(arg) {
	var toString = {}.toString;

	return toString.call(arg).slice(8, -1);
}

var month = new Date();

var check = [ {'a': 1},
			  [1,2,3],
			  56,
			  'hello',
			  '03.15.07',
			  month

];



check.forEach( function(a) {
	console.log( a + ' ' + getType(a) );
});
