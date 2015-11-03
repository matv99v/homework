'use strict';

function sumArgs() {
  return arguments.reduce( function(a,b) {return a+b;} )
}

console.log( sumArgs(1,2,3) );
