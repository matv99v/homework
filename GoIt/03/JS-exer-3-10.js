//Домашнее задание. JS. Урок 3. Задание 10.
//
//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

'use strict';
function isLove(arg1, arg2){
    return !!((arg1 + arg2) % 2);

}

var timmyPetals = +prompt("Timmy's flower's petals"),
    sarahPetals = +prompt("Sarah's flower's petals");

alert (isLove(timmyPetals, sarahPetals));
console.log (isLove(timmyPetals, sarahPetals));

