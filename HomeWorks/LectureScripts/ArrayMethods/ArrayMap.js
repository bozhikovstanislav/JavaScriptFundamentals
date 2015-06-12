var str='1 2 3 4 5 6 7 8';
//да получим
var numbers=[1,2,3,4,5,6,7,8];
//прави се така
var numbers1=str.split(' ').map(Number);

console.log(numbers1);
var numbersRandom=[1,2,11,1,1,1,1,1].map(function(){
    return Math.random();
});
console.log(numbersRandom);

var numbers=[1,2,3,4,5].map(function(item){
    return item%3;
});  //1,2,0,1,2
//ћќже да се вземе и индекса
var numbers=[1,2,3,4,5].map(function(item,index){
    return 'numbers['+ index +']='+item;
});  //1,2,0,1,2


function makePerson(name,age){
    return{
        name: name,
        age:age
    };
}
var people=[1,1,1,1,1,1].map(function(_,i){
    return makePerson('Person #'+i,10+i);
});