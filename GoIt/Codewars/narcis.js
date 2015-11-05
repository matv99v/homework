'use strict';

function narcissistic( value ) {
    var len = (value + '').length;
    var arr = (value + '').split('');
    var result = 0;

    arr.forEach( function(a) {
        result += Math.pow(a, len);
    });

    console.log(result);



    return result == value;
}

console.log( narcissistic(371) ) ;
