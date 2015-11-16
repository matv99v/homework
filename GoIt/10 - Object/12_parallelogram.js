// Description:
//
// Task:
//
// You have to write a function pattern which returns the following Pattern(See Examples)
// upto n rows, where n is parameter.
//
// Rules/Note:
//
// If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
// The length of each line = (2n-1).
// Range of n is (-∞,100]
// Examples:
//
// pattern(5):
//
//     12345
//    12345
//   12345
//  12345
// 12345

'use strict';

function pattern(n){

	var output = '';

	if (n > 0)  {
		var nums = [],
		 	spaces = [],
		 	copyArr = [];

		for (var i = 0; i < n; i++ ) {
			nums.push((i + 1) % 10 );
			spaces.push(' ');
		}

		i--;

		for ( ; i > -1; i--){
			copyArr = spaces.slice();
			copyArr[i] = nums.join('');
			output += copyArr.join('') + '\n';
		}
	}
	return output.slice(0, -1);
}

console.log(pattern(3));
