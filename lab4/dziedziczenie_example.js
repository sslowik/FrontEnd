function Shape (x,y) {
    this.x = x;
    this.y = y;
}

Shape.prototype = {
    getX: function () {
        return this.x;
    },
    getY: function () {
        return this.y;
    }
}

Shape.prototype.getY = function () {
    return this.y;
}

Shape.prototype.message = function () {
    console.log("Hello from message.");
}

Shape.prototype.move = function (deltaX, deltaY) {
    this.x += deltaX;
    thisY += deltaY;
}

// ========================================
function Circle (x,y,r) {
    Shape.call(this,x,y); // wywołanie
    this.r = r;
}

Circle.prototype = Object.create(Shape.prototype); 
Circle.prototype.constructor = Circle; 


// początek innego przykładu
var lib = {}

lib.module = (function(){
    var c = 0; 
    var priv2 = "Hello";
    return 
})