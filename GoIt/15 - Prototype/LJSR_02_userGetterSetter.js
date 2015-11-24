// Написать объект с геттерами и сеттерами
// Напишите конструктор User для создания объектов:
//
// С приватными свойствами имя firstName и фамилия surname.
// С сеттерами для этих свойств.
// С геттером getFullName(), который возвращает полное имя.
// Должен работать так:
//
// function User() {
//   /* ваш код */
// }
//
// var user = new User();
// user.setFirstName("Петя");
// user.setSurname("Иванов");
//
// alert( user.getFullName() ); // Петя Иванов


'use strict';

function User() {
    var firstName, surname;

    this.setFirstName = function(arg) {
        firstName = arg ;
    }

    this.setSurname = function(arg) {
        surname = arg;
    }

    this.getFullName = function() {
        return firstName + ' ' + surname;
    }
}

var person = new User();
person.setFirstName('Petya');
person.setSurname('Ivanov');

console.log( person.getFullName() );
