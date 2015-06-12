//Polifill за fill

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
//Мапа не може да се прави върху arr !!! bug

//ползва се fill
arr.fill(undefined); // не връща резултат

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
        return this; // позволява да се ползва в chain
    };
}