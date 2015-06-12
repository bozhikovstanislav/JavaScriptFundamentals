function makePerson(firstname,lastname,age,gender){
    return{
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender
    }
}
var persons;
persons = [1, 1, 1, 1].map(function (_, i) {
    return makePerson('AirstName #' + i, 'BastName #' + i, 10 + i, i % 2 ? true : false),
        makePerson('Bfirst#' + i, 'Sname #' + i, 10 + i, i % 2 ? true : false)
});

function groupByLetter(persons){
    var groups = persons.reduce(function (gr, persons) {
        var letter = persons.firstname[0];
        if (gr[letter]) {
            gr[letter].push(persons);
        } else {
            gr[letter] = [persons];
        }
        return gr;
    }, {});
    return groups;
}

console.log(groupByLetter(persons));
