// Description:
//
// Given a string, swap the case for each of the letters.
// e.g. CodEwArs --> cODeWaRS


'use strict';

function swap(str){
	var arr = str.split('');

	return arr.map(function(char){
		if (char.toUpperCase() == char ){
			return char.toLowerCase();
		}
		else {
			return char.toUpperCase();
		}
	}).join('');

}

console.log( swap('CodeWars') )
