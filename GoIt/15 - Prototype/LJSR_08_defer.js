'use strict';

function f(a, b) {
  alert( a + b );
}

Function.prototype.defer = function(){
	console.log(arguments, this);
	return setTimeout(function(){
		return this;
	},1000);

}

f.defer(1000)(1+2); 

