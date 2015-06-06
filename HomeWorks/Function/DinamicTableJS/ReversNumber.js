function reversNumber(number){
    var isNegative = number < 0,
        number = number.toString().replace('-', '').split(''),
        reversed = [];

    if (isNegative) {
        reversed.push('-');
    }
    Array.prototype.push.apply(reversed, number.reverse());
    return +(reversed.join(''));
}
