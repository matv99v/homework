function AbstractVehicle(make, model) {
    this.make = make;
    this.model = model;
}

AbstractVehicle.prototype.drive = function() {
    console.log( this.make + ' ' + this.model + ' drives' );
};

function Bike(make, model) {
    AbstractVehicle.apply(this, arguments);
}

Bike.prototype = Object.create(AbstractVehicle.prototype);
console.log('Lost constructor ->', Bike.prototype.constructor);
Bike.prototype.constructor = Bike;

Bike.prototype.wheelee = function(){
    console.log( this.make + ' ' + this.model + ' does wheelee!!' );
};

var Yamaha = new Bike('yamaha', 'R1');
Yamaha.drive();
Yamaha.wheelee();

var Suzuki = new Yamaha.constructor('Suzuki', 'GSX');
Suzuki.drive();
Suzuki.wheelee();

function Car(make, model) {
    AbstractVehicle.apply(this, arguments);
}

Car.prototype = Object.create(AbstractVehicle.prototype);
Car.prototype.constructor = Car;

var Mazda = new Car('Mazda', '6');
Mazda.drive();
