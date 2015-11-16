// Type checking in JavaScript
//
// Sometimes it could be a good thing to check if an object is of a type T.
// Lets see this example:
//
// function doStuff(thing) {
//   return thing.map(function(item) {
//     return item * 2;
//   });
// }
// If we call this function with an array, we get the expected result
//
// doStuff([1,2,3]) //Array [ 2, 4, 6 ]
// But if someone calls doStuff (ruby do_stuff) with a different type of argument, it will throw an exception, because most likely the argument object won't have a method map defined on it.
//
// doStuff(3) //TypeError: thing.map is not a function
// Apart from this, having methods like isArray (ruby Typer.is_array? obj),
// or isString (ruby Typer.is_string? obj) can rise readability when validating
// input arguments, and clears things up for fellow co-workers.
//
// Your task will be to create a basic type-checker "framework/api" for JavaScript
// (or for Ruby). Let's call it typer.js (ruby Typer class). Your API must contain
// the following methods:
//
// isNumber (ruby is_number?)
// isString (ruby is_string?)
// isArray (ruby is_array?)
// isFunction (ruby do not implement this)
// isDate (ruby is_time?)
// isRegExp (ruby is_regexp?)
// isBoolean (ruby is_boolean?)
// isError (ruby is_exception?)
// isNull (ruby is_nil?)
// isUndefined (ruby is_nil?)
// Create these utility methods for input validation. For example, if the argument
// is a number, then isNumber called with this argument should return true.
//
// Example
//
// assert.equal(typer.isNumber(5), true);
// assert.equal(typer.isString({}), false);

'use strict';

var typer = (function(input) {

    function getType(arg) {
        return {}.toString.call(arg).slice(8, -1);
    }

  return {
    isNumber: function(a) {return !isNaN(a) && getType(a) == 'Number'},
    isString: function(a) {return getType(a) == 'String'},
    isArray: function(a) {return getType(a) == 'Array'},
    isFunction: function(a) {return getType(a) == 'Function'},
    isDate: function(a) {return getType(a) == 'Date'},
    isRegExp: function(a) {return getType(a) == 'RegExp'},
    isBoolean: function(a) {return getType(a) == 'Boolean'},
    isError: function(a) {return getType(a) == 'Error'},
    isNull: function(a) {return getType(a) == 'Null'},
    isUndefined: function(a) {return getType(a) == 'Undefined'}
  };
}(null));


console.log( typer.isNumber( NaN ));
