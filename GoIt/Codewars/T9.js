'use strict';

function presses(phrase) {
    phrase += '';
    var phraseArr = phrase.toLowerCase().split('');
    var letters = 'abcdefghijklmnopqrstuvwxyz '.split('');
    var layout = [];
    var currLayout = [];
    var button = 1;
    var numsOfChars = 3;
    var numOfPresses = 0;


    for (var ind=0; ind<letters.length; ind+=numsOfChars) {
        button++;
        button %= 10;
        if ( button == 7 || button == 9 ) {
            numsOfChars = 4;
        }
        else if ( button == 10 ) {
            numsOfChars = 2;
        }
        else {
            numsOfChars = 3;
        }

        currLayout = letters.slice(ind, ind + numsOfChars);
        currLayout.push(button + '');
        layout.push( currLayout );
    }
    layout.push( ['1'] );
    console.log( layout );

    phraseArr.forEach(function(chkChar){
        layout.forEach(function(btnLayout){
            numOfPresses += btnLayout.indexOf(chkChar) + 1;
            // console.log(numOfPresses);
        })
    })

    return numOfPresses;
}


console.log( presses('123') );
