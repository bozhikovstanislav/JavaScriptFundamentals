Array.prototype.removeElement = function(valueElement){
    for(var i = this.length - 1; i >= 0; i-=1) {
        if(this[i] === valueElement) {
            this.splice(i, 1);
        }
    }
};
var arr=[1,1,1,1,1,3,5,6,7,8,9];
arr.removeElement(1);
console.log(arr);