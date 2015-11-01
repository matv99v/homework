'use strict';

function makeBuffer() {
  var buff = '';
  return function innerFunc (val) {
    if (arguments.length > 0) { buff += val }
    innerFunc.clear = function() { buff = 'cc'; };
    return buff
  }
}

var buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer.clear();
buffer(' Нужно!');
console.log( buffer() );
