'use strict';

function makeBuffer() {
  var buff = '';
  return function(val) {
    if (arguments.length > 0) { buff += val }
    return buff
  }
}

var buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
console.log( buffer() );

var buffer2 = makeBuffer();
buffer2('Привет');
buffer2(' Вова');
buffer2(' пока!');
console.log( buffer2() );
