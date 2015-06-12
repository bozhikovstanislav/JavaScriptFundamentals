//sunstr  и substring

var text='hello, I am John!';
console.log('String#substr');

console.log(text.substr(7)); //Взима всичко от 7 ми символ на татака
//МОже да се подаде втори параметър който казва брой сиволи
console.log(text.substr(4,7));//start, lenght

console.log('String# substring');

console.log(text.substring(7));
console.log(text.substring(4,7));//Start end