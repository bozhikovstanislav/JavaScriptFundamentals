//*Write a function that finds the youngest person in a given array of people and prints his/hers full name
//	Each person has properties firstname, lastname and age.
//
var peopel=[
    {firstname: 'Gosho',lastname:'Petrov',age:23},
    {firstname: 'Pesho',lastname:'Ivanov',age:16},
    {firstname: 'Maria',lastname:'Panajotova',age:45},
    {firstname: 'Hristo',lastname:'Sokerov',age:15},
];

function findYangest(arr){
    var minage=arr[0].age;

    for(var i= 0,len=arr.length;i<len;i+=1){
        var count=0;
       if(minage> arr[i].age){
           minage=arr[i].age;
            count=i;
       }
    }
    return arr[count];
}
var minage=findYangest(peopel);
console.log(minage);