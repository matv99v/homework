//Домашнее задание. JS. Урок 3. Задание 8.
//
//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him lightly different. She added a special case to her function, but she made a mistake. Can you help her?' +
//
//function greet(name){
//        return "Hello, " + name + "!";
//        if(name === "Johnny")
//        return "Hello, my love!";
//    }

    'use strict';
function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!";
    }

    return "Hello, " + name + "!";
}

console.log(greet("Jim"));
console.log(greet("Jane"));
console.log(greet("Johnny"));


