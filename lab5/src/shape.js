class Shape {
    constructor(x, y, name) {
        this._x = x;
        this._y = y; 
        this._name = name;
    }

    move(delta, deltaY = 0 ) {
        this._x += delta;
        this._y += deltaY;
    }

    set name(value) {
        this._name = value.toUpperCase()
    }

    set x(value) {
        this._x = value;
    }

    get x() {
        return this._x;
    }

    get name() {
        return this._name;
    }
}

const aShape = new Shape(3, 2, "Kwadrat");

console.log(aShape.x);
aShape.name = 'Kwadrat';

aShape.move(3);