function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function Point(x, y) {
    if (!isNumber(x) || !isNumber(y)) {
        throw  new Error('X and Y should be numbers.');
    }

    if (!(this instanceof Point)) {
        return new Point(x, y);
    }

    this.x = x;
    this.y = y;
}

Point.prototype.toString = function() {
    return 'P(' + this.x + ',' + this.y + ')';
};

function hasProperty(obj,prop){
    var proto = obj.__proto__ || obj.constructor.prototype;
    return (prop in obj) && (!(prop in proto) || proto[prop] !== obj[prop]);
}
var pointA=new Point(2,4);
var hasproperty=hasProperty(pointA,'y');
console.log(hasproperty);