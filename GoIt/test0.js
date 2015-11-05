
function User( name, surname ) {
    var firsrName = name;
    var surname = surname;


    this.fullName = function( a, b) {
        if ( arguments.length == 0 ) {
            return firstName + ' ' + surname;
        };

        firstName = a;
        surname = b;
    }
}


var user = new User();


user.fullName('One', 'Two');
console.log( user.fullName() );
user.fullName('Kolya', 'Nikolaev');
console.log( user.fullName() );
