//сорта променя масива .. сортира стрингове

var numbers=[2,11,5,2,8,5,12];

numbers.sort(function(x,y){
    if(x<y){
        return 1;
    }else{
        return -1;
    }
});
numbers.sort(function(x,y){
return x-y;  //работи и с стрингове
});
//рандом сорт

numbers.sort(function(x,y){
    return Math.random()-0.5; //различно ги сортира
});