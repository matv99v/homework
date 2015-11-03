// Задание 3 (get/set свойства)
// У вас есть объект User, который хранит имя и фамилию в свойстве this.fullName:
// function User(fullName) {
//   this.fullName = fullName;
// }
// var vasya = new User('Александр Пушкин');
// Имя и фамилия всегда разделяются пробелом.
//
// Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:
//
// var vasya = new User('Александр Пушкин');
//
// // чтение firstName/lastName
// console.log( vasya.firstName ); // Александр
// console.log( vasya.lastName ); // Пушкин
//
// // запись в lastName
// vasya.lastName = 'Толстой';
//
// console.log( vasya.fullName ); // Александр Толстой
// Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName —
// реализованы через get/set. Лишнее дублирование здесь ни к чему.


function User(fullName) {
  this.fullName = fullName;

  Object.defineProperties( this, {
    firstName: {
      get: function() { return fullName.split(' ')[0]; },
      set: function(val) { this.fullName = val + ' ' + this.lastName; }
    },
    lastName: { get: function() { return fullName.split(' ')[1]; },
      set: function(val) { this.fullName = this.firstName + ' ' + val; }
    }
  });
}



var vasya = new User("Василий Попкин");

vasya.firstName = 'Maria';
vasya.lastName = 'Matveeva';
vasya.firstName = 'Anna';
console.log( '****log object -->', vasya.fullName );
