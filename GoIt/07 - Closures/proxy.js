function sortProxy(userSortFunc) {

  if (userSortFunc && !(userSortFunc instanceof Function)) {
    throw new SyntaxError('Sort parameter MUST be a function');
  }

  console.log('Start');
  var result = [].sort.call(this, userSortFunc)
  console.log('End');
  return result;

}


var arr = [1,2,3,4];
arr.sort = sortProxy;

console.log(arr.sort());
