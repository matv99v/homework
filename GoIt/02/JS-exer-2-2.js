//Домашнее задание. JS. Урок 2. Задание 2.
//
//Используя конструкцию if..else, напишите код, который будет спрашивать: 'Введите любое целое число?' Затем выведите alert: 1, если значение больше нуля, -1, если значение меньше нуля, 0, если значение равно нулю.


var num = prompt('Введите число: ');

if (num > 0) {
    alert(1);
}
else if (num == 0){
    alert(0);
}
else{
    alert(-1);
}