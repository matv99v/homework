function f(x) {
  return Math.random() * x;
}

function makeCaching(f) {
    var journal = {};

    return function(arg){
        var result = f.call(this, arg);

        if ( !(arg in journal) ) {
            journal[arg] = result;
            }

        return journal[arg];
        }
    }

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log( a == b ); // true (значение закешировано)

b = f(2);
console.log( a == b ); // false, другой аргумент => другое значение
