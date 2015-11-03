// Description:
//
// You must create a function, spread, that takes a function and a list
// of arguments to be applied to that function. You must make this
// function return the result of calling the given function/lambda
// with the given arguments.
//
// eg:
//
// spread(someFunction, [1, true, "Foo", "bar"] )
// // is the same as...
// someFunction(1, true, "Foo", "bar")


'use strict';

function someFunction(){
    var args = [].slice.apply(arguments);
    return args.join('-->');
}

function spread( func, args ){
    return func.apply( this, args );
}

console.log ( spread (someFunction, [ 'a', 'b', 'c', 1, 5, true, {} ] ) );
