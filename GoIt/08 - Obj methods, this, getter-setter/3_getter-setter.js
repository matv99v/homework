'use strict';

function User(fullName) {
  this.fullName = fullName;
}

var vasya = new User("Василий Попкин");
Object.defineProperty( vasya, 'firstName', {

    configurable: true,

    get: function() {
      return this.fullName.split(' ')[0];
    },

    set: function(arg) {
      this.firstName = arg;
    }
});

Object.defineProperty( vasya, 'lastName', {

    get: function() {
      return this.fullName.split(' ')[1];
    }
});



console.log(vasya.fullName);
console.log(vasya.firstName);
console.log(vasya.lastName);
var vasya.firstName = 'Andrey';
