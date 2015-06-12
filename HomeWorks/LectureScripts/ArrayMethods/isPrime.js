var arr=[1,2,3,4,5,6,7,8,9,10];

function isPrime(number){
    var divisor,
        maxDivisor=Math.sqrt(number);
    for(divisor =2; divisor<=maxDivisor;divisor+=1){
        if(!(number%divisor)){
            return false;
        }
    }
    return true;
}
var result=arr.filter(isPrime);
console.log(result);