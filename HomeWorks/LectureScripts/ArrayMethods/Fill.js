//Polifill �� fill

if(!Array.prototype.fill){
    Array.prototype.fill=function(value){
        var i,
            len;
        for(i=0,len=this.length;i<len;i+=1){
            this[i]= value;
        }
    };
}
var arr=[],
    count=5;
//arr[count-1]=undefined;
arr.length=count;
arr.fill(1);
console.log(arr);
//���� �� ���� �� �� ����� ����� arr !!! bug

//������ �� fill
arr.fill(undefined); // �� ����� ��������

console.log(arr.map(function(item){
  return 'Item: '+ item;
}));

if(!Array.prototype.fill){
    Array.prototype.fill=function(value){
        var i,
            len;
        for(i=0,len=this.length;i<len;i+=1){
            this[i]= value;
        }
        return this; // ��������� �� �� ������ � chain
    };
}