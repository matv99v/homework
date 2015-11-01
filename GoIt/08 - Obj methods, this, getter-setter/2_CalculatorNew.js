// Напишите конструктор Calculator, который создаёт расширяемые
// объекты-калькуляторы.
//
// Эта задача состоит из двух частей, которые можно решать одна за другой.
//
// Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2»,
// с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг
//   операции), и возвращает результат. Понимает плюс + и минус -.
// Пример использования:
//
// var calc = new Calculator;
//
// alert( calc.calculate("3 + 7") ); // 10
// Второй шаг — добавить калькулятору метод addMethod(name, func),
// который учит калькулятор новой операции. Он получает имя операции name и
// функцию от двух аргументов func(a,b), которая должна её реализовывать.
// Например, добавим операции умножить *, поделить / и возвести в степень **:
//
// var powerCalc = new Calculator;
// powerCalc.addMethod("*", function(a, b) {
//   return a * b;
// });
// powerCalc.addMethod("/", function(a, b) {
//   return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });
//
// var result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Поддержка скобок и сложных математических выражений в этой задаче не
// требуется.
// Числа и операции могут состоять из нескольких символов. Между ними ровно
// один пробел.
// Предусмотрите обработку ошибок. Какая она должна быть – решите сами.


function Calculator() {
  this.calculate = function(str){

    var arr = str.split(' ');
    if (!errors(arr)) {return '!!!invalid input!!!'};

    var operandOne = +arr[0],
        operator = arr[1],
        operandTwo = +arr[2];

    return methods[operator](operandOne, operandTwo);
  }

  errors = function(arr) {
    arr[0] = +arr[0];
    arr[2] = +arr[2];

    var flag = true;

    flag = flag && arr.length == 3;
    flag = flag && (!isNaN( arr[0] ) );
    flag = flag && (!isNaN( arr[2] ) );
    flag = flag && ( arr[1] in methods );

    return flag;
  }

  methods = {
    '+' : function(x, y) {
      return x + y; },
    '-' : function(x, y) {
      return x - y; }
  }

  this.addMethod = function( name, func ) {
    methods[name] = func;
  }
}

var myCalc = new Calculator();
console.log( myCalc.calculate("3 + 7") );
console.log( myCalc.calculate("3 - 7") );
myCalc.addMethod("*", function(a, b) {
  return a * b;
});
console.log( myCalc.calculate("3 * 7") );
console.log( myCalc.calculate("5 -- 7") );
