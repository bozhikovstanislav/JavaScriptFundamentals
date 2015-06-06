function thirdDigit(number){
    var numberN=number.length;
    if(numberN<3){
        return false;
    }else{
        return (Math.floor(number / 100) % 10) === 7;
    }

}
