// ���������� ���� ����� ��� ������ �� ������ � ������ ������

var text='JavaScript is grate';

var result=text.indexOf('is'); //����� ------------->

//������ ������ �� 11 ������


console.log(result);

var text2='is1,is2,is3,is4,is6';

var index=text2.indexOf('is');
while(index>=0){
    console.log('Found at '+index);
    index=text2.indexOf('is',index+1);// �� ����� ������ �� ����� .������� ����� ����� ������� 'is// '
}
//������ 6 'is' �� ����������� �������

//��� ������ �� � �������� ���������� -1
//�� �������� �� ���� �� ������� ��������  ...

//�� ����� � �� �� ������� ����� � ���� ������ ���� ��� ���� ������
//if(text2[index-1]===' '|| text[index-1]==='.') � �� ������� Index+length+1
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

//lastIndexOF ����� ��������� �� ����� �� ���� .. ����� <-------
var text4='Gosho eeeeeeee pich'
var index3=text4.lastIndexOf('e',8); //����� ����� � �� ����� �� ���� � ���� ������ �� �����


