var pattern=/(\w+) (\w+)/g;
var text ='Telerik Academy';
var words=text.replace(pattern,'$2 $1 ');
console.log(words);

