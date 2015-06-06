function getThirdBit(number){

    var numberbit=getBinariRepresentation(number);
    return (number >> 3) & 1;
}
function getBinariRepresentation(number){
    for (var nFlag = 0, nShifted = number, sMask = ""; nFlag < 32;
         nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
    return sMask;
}