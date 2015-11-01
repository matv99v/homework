'use strict';
var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

function sortProxy(userSortFunc) {
  if (userSortFunc && !(userSortFunc instanceof Function)) {
    throw new SyntaxError('Sort parameter MUST be a function');
  }

  console.log('sortStart');
  var result = [].sort.call(this, userSortFunc)
  console.log('SortEnd');
  return result;
}
users.sort = sortProxy;

function byField(field) {
  console.log('byFieldCall');
  return function(a,b) {
    console.log('anonymusFuncCall');
    return  a[field] > b[field] ? 1 : -1;
  }
}

console.log ( '===before sort===' );
console.log ( users );
console.log('-------------------');
users.sort( byField('age'));
console.log ( '===after sort===' );
console.log ( users );
