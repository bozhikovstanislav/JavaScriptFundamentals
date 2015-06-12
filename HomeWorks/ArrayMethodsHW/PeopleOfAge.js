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
function makePerson(firstname,lastname,age,gender){
    return{
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender
    }
}
var persons=[1,1,1,1,1,1,1].map(function(_,i){

    return makePerson('FirstName #'+i,'LastName #'+i,16+i,i % 2 === 0? true : false);

});
//console.log(persons);

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

var resultpersons=persons.filter(function(persons){
    return persons.age>18;
});
console.log(resultpersons);