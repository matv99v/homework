// Description:
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or
// 5 below the number passed in.
//


function solution(number){
    var sum = 0;

    for (number--; number > 0; number--){

        if ( number % 5 == 0 || number % 3 == 0 ) {
            sum += number;
        }

        console.log( 'num=' + number,
                    //  'div3=' + !(number % 3),
                    //  'div5=' + !(number % 5),
                     !(number % 3) || !(number % 5),
                     'sum='+sum
                    );

    }

    return sum;


}

console.log( solution(10) );
