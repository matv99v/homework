  function Machine(power) {
    this._enabled = false;

    this.enable = function() {
      this._enabled = true;
    };

    this.disable = function() {
      this._enabled = false;
    };
  }

  function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;
    var timerId;

    this.setWaterAmount = function(amount) {
      waterAmount = amount;
    };

    function onReady() {
        if (this._enabled) {
            console.log('Кофе готов!');
        }
    }

    this.run = function() {
        if (this._enabled) {
            timerId = setTimeout(onReady, 1000);
        }
        else {
            console.log('cofee machine is off')
        }

    };

  }


  var coffeeMachine = new CoffeeMachine(10000);
  coffeeMachine.enable();
  coffeeMachine.run();
  coffeeMachine.disable();
