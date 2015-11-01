/**
 * Created by matv99v on 30.09.15.
 */
//камень, ножницы, бумага, ящерица, спок
//правила игры по ссылке
//http://www.sheldonsfans.com/img_articles/original/102.jpg



'use strict';

function wordToNum(word){
    switch (word){
        case 'rock':
            return 1;
            break;
        case 'Spock':
            return 2;
            break;
        case 'paper':
            return 3;
            break;
        case 'lizard':
            return 4;
            break;
        case 'scissors':
            return 5;
            break;
        default:
            alert('Invalid input, try agian!');
            return false;
            break;
    }
}

function numToWord(num){
    switch (+num){
        case 1:
            return 'rock';
            break;
        case 2:
            return 'Spock';
            break;
        case 3:
            return 'paper';
            break;
        case 4:
            return 'lizard';
            break;
        case 5:
            return 'scissors';
            break;
        default:
            return 'wtf';
            break;

    }
}


do {
var playerWord = prompt('Hello! This is \'rock, Spock, paper, lizard, scissors\' game. Make your choice: ');
} while (!wordToNum(playerWord));

//var playerWord ='Spock';
var playerNum = wordToNum(playerWord) - 1;
var computerNum = Math.round(Math.random() * 4);
var computerWord = numToWord(computerNum + 1);

console.log('Player: ', playerWord, playerNum);
console.log('Computer: ', computerWord, computerNum);
console.log('-----------------------------------');

var decision = (playerNum - computerNum) < 0 ? 5 - Math.abs(playerNum - computerNum) : (playerNum - computerNum);
console.log('decision', decision);

if (decision > 2){
    alert('Your choice is ' + playerWord + '. Computer chooses ' + computerWord +'. You lose!');
}
else if (decision == 0){
    alert('Your choice is ' + playerWord + '. Computer chooses ' + computerWord +'. Draw!');
}
else {
    alert('Your choice is ' + playerWord + '. Computer chooses ' + computerWord +'. You win!');
}