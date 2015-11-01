// Поиск элементов
// важность: 4решение
// Ниже находится документ с таблицей и формой.
//
// Найдите (получите в переменную) в нём:
//
// Все элементы label внутри таблицы. Должно быть 3 элемента.
// Первую ячейку таблицы (со словом "Возраст").
// Вторую форму в документе.
// Форму с именем search, без использования её позиции в документе.
// Элемент input в форме с именем search. Если их несколько, то нужен первый.
// Элемент с именем info[0], без точного знания его позиции в документе.
// Элемент с именем info[0], внутри формы с именем search-person.
// Используйте для этого консоль браузера, открыв страницу table.html в отдельном окне.

var labels = document.querySelectorAll(' table label ');
var tdAge = document.querySelector(' table td ');
var form = document.getElementsByName( 'search-person' );
var formTwo = document.querySelector('form');
var inp = document.querySelector( ' form[name="search"] input');
var elemOne = document.querySelectorAll(' [name="info[0]"] ')
var elemTwo = document.querySelectorAll(' form[name="search-person"] [name="info[0]"] ')
