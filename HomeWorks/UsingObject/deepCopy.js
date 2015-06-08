/**
 * Problem 3. Deep copy
 */
function clone(obj){
    if (typeof obj !== 'object') {
        return obj;
    }
    var cloned = {};
    for (var prop in obj) {
        cloned[prop] = clone(obj[prop]);
    }
    return cloned;
}
console.log(clone(5));
console.log(clone({name: 'Ninja', age: Infinity}));

var number1=7;
var numbercloned=clone(number1);
console.log(clone(number1));
number1=10;
console.log(number1);
console.log(numbercloned);