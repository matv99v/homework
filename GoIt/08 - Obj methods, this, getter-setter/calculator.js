var calculator = {
  read : function() {
    this.argA = +prompt('input a');
    this.argB = +prompt('input b');
  },
  sum : function() {
    return this.argA + this.argB;
  },
  mul : function() {
    return this.argA * this.argB;
  }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() )
