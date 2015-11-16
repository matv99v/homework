// Description:
//
// Let's build a calculator that can calculate the average for an arbitrary number
// of arguments.
//
// The test expects you to provide a Calculator object with an average method:
//
// Calculator.average()
// The test also expects that when you pass no arguments, it returns 0. The arguments
// are expected to be integers.
//
// It expects Calculator.average(3,4,5) to return 4.


var Calculator = {
    average: function() {
        return ( [].reduce.call( arguments, function(a,b){
            return a+b;
        }, 0)) / arguments.length || 0 ;
    }
};


var sum = Calculator.average(1, 2, 3);

console.log( sum );
