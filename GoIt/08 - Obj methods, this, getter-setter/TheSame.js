var Const = { name : 'Kolya' };

function A() { return Const; }
function B() { return Const; }

var a = new A;
var b = new B;

console.log( a == b ); // true
