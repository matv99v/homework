'use strict';

// function sortProxy(userSortFunc) {
//   if (userSortFunc && !(userSortFunc instanceof Function)) {
//     throw new SyntaxError('Sort parameter MUST be a function');
//   }
//
//   console.log('sortStart');
//   var result = [].sort.call(this, userSortFunc)
//   console.log('SortEnd');
//   return result;
// }
// users.sort = sortProxy;

function filter(arr, fuc){
  console.log('***filterStart***', 'arguments:', arguments);
  var newArr = [];

  arr.forEach( function (elem) {
    if ( fuc (elem) ) { newArr.push( elem ) };
  });
  console.log('***filterEnd***', 'arguments:', arguments);
  return newArr;
}

function inBeetween(a, b) {
  console.log('***inBeetweenCall***', 'arguments:', arguments, 'return: anonymusFunction');
  return function (elem) {
    console.log('***inBeetweenAnonymusCall***', 'arguments:', arguments, 'return:', elem >= a && elem <= b  );
    return elem >= a && elem <= b;
  }
}

function inArray(arr){
  return function(elem) {
    return arr.indexOf(elem) > -1;
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(filter(arr, function(a) {
//   return a % 2 == 0
// }));

console.log( filter(arr, inBeetween(3, 5) ));
// console.log( filter(arr, inArray([1, 2, 10])) );
