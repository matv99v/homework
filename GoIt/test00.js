function AbstractAnimal(legs, sound){
  var self = this;
  var cS = 4;

  self.getSpeed = function(){
    return legs * cS;
  }

  self.doSound = function(){
    console.log(sound);
  }

}

function Human (legs, sound, weight, name, surname, gender) {
  AbstractAnimal.apply(this, arguments);
  var self = this;
  self.greet = function(){
    console.log('Hi, ' + 'i am ' + name + ' and i can run ' + self.getSpeed() + 'km!');
  };
  self.getWeight = function() {
    return weight;
  }
}

var Bob = new Human(2, 'Ffffuuuu!', 90, 'Bob', 'Dylan');
console.log(Bob.getWeight(), Bob.doSound());
Bob.greet();

console.log(Bob instanceof AbstractAnimal);
