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

// konstruktor bazowy  - trzeba go wywołać? 
// ========================================
function Circle (x,y,r) {
    Shape.call(this,x,y); // wywołanie
    this.r = r;
}

Circle.prototype = Object.create(Shape.prototype); 
Circle.prototype.constructor = Circle; 

// Rozszerzanie

Circle.prototype.area = function() {
    return Math.PI * this.r * this.r;
}

// Tworzymy obiekt
var aCircle = new Circle(20,30,2);
console.log(aCircle.area());


// początek innego przykładu -  z dziedziczeniem? 
var lib = {}

lib.module = (function(){
    var c = 0; 
    var priv2 = "Hello";
    return {
        message: priv2 + "World",
        counter: function () {
            return ++c;
        },
        sayHello: function(name) {
        return "Hello " + name;
        }
    };
})();