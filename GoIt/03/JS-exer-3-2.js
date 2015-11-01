//Домашнее задание. JS. Урок 3. Задание 2.
//
//Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1. Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток. Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7. P.S. Код также должен легко модифицироваться для любых других интервалов.

'use strict';

var intStart = 2, intFinish = 20, isSimple, simples = [];

for (var chkNum = intStart; chkNum <= intFinish; chkNum++){
    isSimple = true;
    for (var divisor = 2; divisor <= chkNum / 2; divisor++ ) {
        isSimple = isSimple && !!(chkNum % divisor);
        console.log(chkNum + " % ", divisor, ' = ', chkNum % divisor, ' ', 'isThereRemainder: ', (!!(chkNum % divisor)));
        if (!isSimple) {
            break;
        }
    }
    if (isSimple){
        simples.push(chkNum);
    }

    console.log('------ ', chkNum, ' -----isSimple?----', isSimple, '---------------');
    console.log('\n');


}
console.log(simples);
alert(simples);