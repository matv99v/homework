// Write a single function that can be invoked by either
//
// sum(2,3); //5
// //or
// sum(2)(3); //5
// Both of these examples should return the sum of the 2 numbers.


'use strict';

function sum(x,y) {
	if (arguments.length == 1) {
		return function(y){
			return x+y;
		}
	}

	else if (arguments.length == 2) {
		return x+y;
	}


}

console.log( sum(2)(3) );
