//Description:
//
//    Fellow code warrior, we need your help! We seem to have lost one of our array elements, and we need your help
// to retrieve it! Our array, superImportantArray, was supposed to contain all of the integers from 0 to 9
// (in no particular order), but one of them seems to be missing.
//
//    Write a function called getMissingElement that accepts an array of unique integers between 0 and 9 (inclusive),
// and returns the missing element.
//
//    Examples:
//
//getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] ) // returns 8
//getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] ) // returns 3

'use strict';

function getMissingElement(inArr){
    if (inArr.indexOf(0) > -1) {
        return 45 - inArr.reduce(function (a, b) {
                return a + b
            })
    }
    else {
        return 0;
    }
}






getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] ); // returns 8
//getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] ); // returns 3
//getMissingElement( [1, 2, 3, 4, 5, 6, 7, 8, 9] ); // returns 3