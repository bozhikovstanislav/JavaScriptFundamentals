function countOccurrence(text, word){
        text = text.split(' ');
        var textLen = text.length,
            wordCount = 0;
        for (var i = 0; i < textLen; i++) {
            if(text[i] === word){
                wordCount +=1;
            }
        }
       console.log(wordCount);
}
countOccurrence("Ab Ab Ab Ab ",'Ab');