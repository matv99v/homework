
'use strict';

function makeArmy() {
  var shooters = [];

  for (var i = 0; i < 10; i++) {

    var shooter = function me() { console.log(me.i) };
    shooter.i = i;

    shooters.push(shooter);
  }

  return shooters;
}


var army = makeArmy();

army[5]();
army[0]();
army[8]();
