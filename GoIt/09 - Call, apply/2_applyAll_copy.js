'use strict';


function applyAll() {
    return arguments[0].apply( this, [].slice.call( arguments, 1 ) );
}

function sum() {
    return [].reduce.call(arguments, function(a, b) {
    return a + b;
    });
}

console.log( applyAll(sum, 1, 2, 3, 50) );
