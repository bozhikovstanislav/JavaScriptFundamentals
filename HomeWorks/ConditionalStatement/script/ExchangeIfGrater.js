var a='6.98',
    b='4.87',
    tmp;
a=+a;
b=+b;
console.log('a b '+a+' '+b);
if(a>b){
    tmp=b;
    b=a;
    a=tmp;
    console.log('a b '+a+' '+b);
}