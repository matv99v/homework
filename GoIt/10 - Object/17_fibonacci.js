// Description:
//
// The function 'fibonacci' should return an array of fibonacci numbers.
// The function takes a number as an argument to decide how many no. of elements
// to produce. If the argument is less than or equal to 0 then return empty array
//
// Example:
//
// fibonacci(4); // should return [0,1,1,2]
// fibonacci(-1); // should return []


'use strict';

function fibonacci(n) {
    if ( n <= 0 ) {return []}
    if (n == 1) {return [0]}

    var ind = 2;
    var fibos = [0,1];

    for (; ind<n; ind++) {
        fibos.push( fibos[ind-2] + fibos[ind-1] );
    }

    return fibos;


}


console.log( fibonacci(100) );
