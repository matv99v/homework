// Description:
//
// Given an array, find the duplicates in that array, and return a new array of
//  those duplicates.
//
// Note: numbers and their corresponding string representations should not be
// treated as duplicates
// (i.e., '1' !== 1).


'use strict';

function duplicates(arr) {
	var dupls = [];

	arr.forEach(function(item, index){



		for (var ind=index+1; ind < arr.length; ind++){

			console.log( 'curr=' + item,
						 'checked=' + arr[ind],
						 'isEqual=' + ( item === arr[ind] ),
						 'isCurrInDupls=' + ( dupls.indexOf(item) )
						);
			console.log(dupls);

			if ( (item === arr[ind]) && (dupls.indexOf(item) == -1)){
				dupls.push(item);
			}
		}
		console.log('----------------------------');
	});
	return dupls;



}



var myArr = [1, 2, 4, 4, 3, 3, 1, 5, 3, '5'];
console.log( duplicates(myArr) );
