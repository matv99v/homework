'use strict';

function sumArgs() {
  var arr = [].slice.call(arguments);
  return arr.reduce( function(a,b) {return a+b;} )
}

console.log( sumArgs(1,2,3) );
