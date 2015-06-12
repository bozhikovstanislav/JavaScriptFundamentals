var numbers=[1,2,3,4,5,6,7];
//намиране на подържане на чрез прототип

if(!Array.prototype.find){
    Array.prototype.find=function(callback){
        var i,
            len;
        for(i=0,len=this.length;i<len;i+=1){
            if(callback(this[i],i,this)){
               return this[i];
            }
        }
        return undefined;
    };
}
if(!Array.prototype.findeIndex){
    array.prototype.findeIndex=function(callback){
        var i,
            len;
        for(i=0,len=this.length;i<len;i+=1){
            if(callback(this[i],i,this)){
                return i; //  връща индекса
            }
        }
        return -1;
    };
}
var result=numbers.find(function(number,index){
    return index>5&&!(number%2);
});