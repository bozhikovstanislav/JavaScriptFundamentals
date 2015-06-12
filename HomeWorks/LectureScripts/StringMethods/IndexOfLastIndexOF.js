// Проверяват дали даден под стринг се намира в нашият стринг

var text='JavaScript is grate';

var result=text.indexOf('is'); //Търси ------------->

//Намира думата на 11 индекс


console.log(result);

var text2='is1,is2,is3,is4,is6';

var index=text2.indexOf('is');
while(index>=0){
    console.log('Found at '+index);
    index=text2.indexOf('is',index+1);// от даден индекс на дясно .Тъесиме точно двата символа 'is// '
}
//Намира 6 'is' на съответните позиции

//Ако думата не е намерена получаваме -1
//За търсемне на дума си слагаме спейсове  ...

//По лесно е да се провери преди и след думата дали има друг символ
//if(text2[index-1]===' '|| text[index-1]==='.') и на позиция Index+length+1
var word='is',
     index=text.indexOf(word),
     separators=[' ',',','.'],
     isWord=true,
     len,
     i;

for(i=0,len=separators.length;i<len;i+=1){
    if(i !==0 &&(text[index-1]!==separators[i]||text[index+word.length+1]!==separators[i])){
        isWord=false;
        break;
    }
}

//lastIndexOF търси индексите от Дясно на ляво .. проси <-------
var text4='Gosho eeeeeeee pich'
var index3=text4.lastIndexOf('e',8); //търси осмия и от дясно на ляво и чете думата на дясно


