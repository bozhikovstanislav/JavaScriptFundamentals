var pattern=/[ ,.]/g;
var text='This is spa spa spa ,mnogo spa';

var words=text.split(pattern).filter(function(word){
    return !!word;
});
console.log(words);

