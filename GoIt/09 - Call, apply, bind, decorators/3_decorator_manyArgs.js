'use strict';


function work(a, b) { return a + b; }

function makeLogging(f, log) {
    return function(a,b) {
        if (arguments.length != 2) return 'error! function accepts two arguments';
        log.push( [].slice.call( arguments) );
        return f.apply(this, arguments);
    }

}

var log = [];
work = makeLogging(work, log);

console.log( work(1, 2) ); // 3
console.log( work(4, 5) ); // 9

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // массив из аргументов i-го вызова
  console.log( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}
