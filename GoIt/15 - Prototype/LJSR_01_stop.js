// Улучшите готовый код кофеварки, который дан ниже:
// добавьте в кофеварку публичный метод stop(), который будет
// останавливать кипячение (через clearTimeout).

function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;
  var timerId;
  var self = this;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    console.log( 'Кофе готово!' );
  }

  this.run = function() {
    timerId = setTimeout(onReady, getBoilTime());
  };

  this.stop = function() {
      clearTimeout( timerId );
      console.log('timer stopped');

  }


}


var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет
