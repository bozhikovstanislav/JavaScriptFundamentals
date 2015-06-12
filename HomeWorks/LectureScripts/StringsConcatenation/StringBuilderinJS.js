//var result=[].push('1','2','3').join('');

//za IE6 работи бързо

//Проверка за бързина на код
var resultArray,
    resultPlus;
    count=1000;
//Taimer
var start,end,i;

start=new Date();
for(i=0;i<count;i+=1) {
    result = [];
    result.push('1', '2', '3');
    result = result.join('');
}
end=new Date();
console.log(end-start);


start=new Date();
for(i=0;i<count;i+=1) {
    resultPlus = '1' + '2' + '3';
}
end=new Date();

console.log(end-start);
