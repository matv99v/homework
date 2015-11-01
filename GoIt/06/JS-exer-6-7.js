//Задание 7 (Анаграммы)
//Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:
//воз - зов киборг - гробик корсет - костер - сектор Напишите функцию anClean(arr), которая возвращает массив слов, очищенный
// от анаграмм.
//var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
//console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
//Из каждой группы анаграмм должно остаться только одно слово, не важно какое.


'use strict';

function isAnagram(arg, chkArg){
    if (arg == chkArg){
        return true;
    }
    if (arg.length != chkArg.length){
        return false;
    }

    arg = arg.toLowerCase();
    chkArg = chkArg.toLowerCase();
    var isGeneral = true;

    for (var pos in arg){
        //console.log(arg[pos], '-------------');

        var isSymb = false;
        for (var num in chkArg){
            if (arg[pos].indexOf(chkArg[num]) > -1){
                isSymb = true;
            }
            //console.log(chkArg[num],
            //            arg[pos].indexOf(chkArg[num]) > -1,
            //            isSymb);
        }
        isGeneral = isGeneral && isSymb;
        //console.log(isGeneral);
    }
    return isGeneral;
}





function anClean(argArr) {
    var resultArr = [];
    resultArr.push(argArr[0]);

    for (var a in argArr){
        var copyResultArr =resultArr.slice();

        var flag = true;
        for (var c in copyResultArr){
            flag = flag && !isAnagram( argArr[a], copyResultArr[c] );
            //console.log( argArr[a] + '-in', 'VS' , copyResultArr,
            //             isAnagram( argArr[a], copyResultArr[c] ),
            //             ': ',
            //             resultArr,
            //             flag);
        }
        if (flag){
            resultArr.push( argArr[a] );
        }
    }
    return resultArr;
}







var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'