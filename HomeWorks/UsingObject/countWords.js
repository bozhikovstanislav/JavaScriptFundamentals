/**
 * count words in string
 */
function countWords(text){
    var words=text.split(' '),
        wordCount={},
        i,len,word;
    for(i=0,len=words.length;i<len;i+=1){
        word=words[i];
        if(!wordCount[word]){
            wordCount[word]=0; //тук създаваме прерти wrod
        }
        wordCount[word]+=1;
    }
    return wordCount;
}
//Създаване на обект
function Person(name,age,hairlenght,haircolor){
    this.name=name;
    this.age=age;
    this.hair={
        color: haircolor,
        length: hairlenght
    }
}
Person.prototype.SayHello=function(){
    return 'say hello';                      //Тук се задава функцията за да не се копира
                                            // всеки път при създаване на обекта
};
var pesho=new Person('Pesho',23,3,'brown');

console.log(pesho.name);