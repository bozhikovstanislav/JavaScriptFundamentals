var arr=[4,3,4,56,1,9,7],
    i,
    min,
    max;
min=arr[0];
max=arr[0];
for(i=0;i<=arr.length;i+=1){

    if(min>arr[i]){
        min=arr[i];
    }
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log('Min number is '+''+min);
console.log('Max number is '+''+max);
