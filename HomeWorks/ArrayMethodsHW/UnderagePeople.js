function makePerson(firstname,lastname,age,gender){
    return{
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender

    }
}
var persons=[1,1,1,1,1,1,1].map(function(_,i){

    return makePerson('FirstName #'+i,'LastName #'+i,10+i,i % 2 === 0? true : false);

});
persons.filter(function(persons){
    return persons.age<14;
}).forEach(function(persons){
    console.log((persons))
});
