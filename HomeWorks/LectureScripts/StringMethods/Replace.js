var text='Telerik Telerik Telerik Telerik Telerik';

var result=text.replace('Telerik','T'); //заменя само първата срещната дума
//Ползват се регулярни изрази
var result2=text.replace(/Telerik/g,'T');
console.log(result);
console.log(result2);
//Може да се направи и
while(result=result.indexOf('Telerik')>=0){
    result=result.replace('Telerik','T');
}