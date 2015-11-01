// Создать Accumulator при помощи конструктора
// Напишите функцию-конструктор Accumulator(startingValue).
// Объекты, которые она создает, должны хранить текущую сумму и прибавлять к
// ней то, что вводит посетитель.
//
// Более формально, объект должен:
//
// Хранить текущее значение в своём свойстве value. Начальное значение свойства
// value ставится конструктором равным startingValue.
// Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввел
// посетитель при вызовах метода read(), с учетом начального значения startingValue.
//
// Ниже вы можете посмотреть работу кода:
//
// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение
//

function Accumulator(startingValue){
  this.value = startingValue;
  this.read = function(){
    this.value += +prompt('input a number', 0);
  }
}

var accum = new Accumulator(1);
accum.read();
accum.read();
alert( accum.value );
