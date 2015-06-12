var numbers=[1,2,3,4,5,6,7];

numbers.filter(function(item){
    return !(item%2);
}).map(function(item){
    return'Item: '+ item;
}).forEach(function(item){
   console.log(item);
});
