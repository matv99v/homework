'use strict';


function work(a) { return a*a; }

function makeLogging(f, log) {
    return function(a) {
        log.push(a);
        return f.call(this, a);
    }

}


var log = [];
work = makeLogging(work, log);

console.log( work(1));
console.log( work(5));
console.log( work(13));

for (var i = 0; i < log.length; i++) {
  console.log( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}
