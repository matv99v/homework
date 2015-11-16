var nbrOfLaps = function (x, y) {
    var max = Math.max(x, y),
        min = Math.min(x, y);

    function NOD(A) {
    var n = A.length,
        x = Math.abs(A[0]);

        for (var i = 1; i < n; i++) {
            var y = Math.abs(A[i]);
            while (x && y){
                x > y ? x %= y : y %= x;
            }
            x += y;
        }
    return x;
}

    var koef = NOD([max, min]);
    console.log( koef );

    return [ y / koef, x / koef ];

}

console.log( nbrOfLaps(5, 5) );
