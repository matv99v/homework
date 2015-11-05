function Human(name, surname, gender) {

    this.gender = gender;

    function getFullName() {
        return name + ' ' + surname + ' ' + gender;
    }

    this.intorduce = function () {
        console.log( 'Hello, I am ' + getFullName.call(this) );
    }
}


var Bob = new Human('Bob', 'Dylan', 'male');
Bob.intorduce();
