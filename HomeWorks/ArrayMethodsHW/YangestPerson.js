function makePerson(firstname,lastname,age,gender){
    return{
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender
    }
}
var persons=[1,1,1,1,1,1,1].map(function(_,i){
    return makePerson('FirstName #'+i,'LastName #'+i,10+i,i%2?true:false);
});
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

function yangestMail(persons){

    var youngestMale =  persons.sort(function (a, b) {return a.age - b.age;})
        .find(function(persons) {return persons.gender===true});

    return youngestMale.firstname + ' ' + youngestMale.lastname +
        '(' + youngestMale.age + ', ' + (youngestMale.gender===true) + ')';

}
console.log(yangestMail(persons));