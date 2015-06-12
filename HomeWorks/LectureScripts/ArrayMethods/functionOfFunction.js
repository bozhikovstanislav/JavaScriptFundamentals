var numbers=[1,2,3,4,5,6,7,8];

//function inRange(number){
//    return 2< number && number <6;
//}
function inRange(from,to){
    return function(number){
        return from<number && number<to;
    };
}

var result=numbers.filter(inRange);
console.log(result);