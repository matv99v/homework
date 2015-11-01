// There's no such thing as private properties on a javascript object! But, maybe there are?
//
// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods
//
// getSecret() which returns the secret
// setSecret() which sets the secret
// var obj = createSecretHolder(5);
// obj.getSecret(); // returns 5
// obj.setSecret(2);
// obj.getSecret(); // returns 2

'use strct';

(createSecretHolder = function (secret) {
  var stored = secret;
  return {
    getSecret : function() { return stored; },
    setSecret : function(val) { stored = val; }
  }
})();

var obj = createSecretHolder(13);
console.log( obj.getSecret() );
obj.setSecret(20);
console.log( obj.getSecret() );

var obj2 = createSecretHolder(103);
console.log( obj2.getSecret() );
obj2.setSecret(7050);
console.log( obj2.getSecret() );
