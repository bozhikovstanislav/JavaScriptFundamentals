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
            wordCount[word]=0; //��� ��������� ������ wrod
        }
        wordCount[word]+=1;
    }
    return wordCount;
}
//��������� �� �����
function Person(name,age,hairlenght,haircolor){
    this.name=name;
    this.age=age;
    this.hair={
        color: haircolor,
        length: hairlenght
    }
}
Person.prototype.SayHello=function(){
    return 'say hello';                      //��� �� ������ ��������� �� �� �� �� ������
                                            // ����� ��� ��� ��������� �� ������
};
var pesho=new Person('Pesho',23,3,'brown');

console.log(pesho.name);