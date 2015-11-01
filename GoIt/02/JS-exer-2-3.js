//Домашнее задание. JS. Урок 2. Задание 3.
//
//Напишите код, который будет запрашивать логин пользователя (prompt). Если посетитель вводит 'admin', то спрашивать пароль, если нажал отмена (escape) — выводить 'Canceled', если вводит что-то другое — 'Access denied'. Пароль проверять так. Если введён пароль 'passw0rd', то выводить 'Welcome home!', иначе — 'Wrong password', при отмене — 'Canceled'.

'use strict';
var myLogin = prompt('Enter login');
if (myLogin == 'admin'){
    var myPassword = prompt('Password?');
    if (myPassword == 'passw0rd'){
        alert('Welcome home!');
    }
    else {
        alert('Wrong password');
    }

}
else if (myLogin == undefined) {
    alert('Canceled');
}

else{
    alert('Access denied');
}