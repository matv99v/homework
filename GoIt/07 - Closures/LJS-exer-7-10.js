'use strict';

function createFunctions(n) {
  var callbacks = [];

  for (var i=0; i<n; i++) {

      var shooter = function me() { return me.i };
      shooter.i = i;
      callbacks.push( shooter);

    };
  return callbacks;
}

var army = createFunctions(10);
console.log( army[5]() );
