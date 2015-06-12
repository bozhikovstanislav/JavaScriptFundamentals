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
console.log(persons);
function averageAgeF(persons) {
    var females = persons.filter(function (persons) {
            return persons.gender === false;
        }),
        sum = females.reduce(function (sum, persons) {
            return sum + persons.age;
        }, 0)
    return avg = sum / females.length;

    return avg;
}

console.log(averageAgeF(persons));
