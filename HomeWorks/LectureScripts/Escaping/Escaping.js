//Заменяне на резерирани символи с техни еквиваленти
if(!String.prototype.htmlEscape) {
    String.prototype.htmlEscape = function () {
        var escapedStr = String(this).replace(/&/g, '&amp;');
        escapedStr = escapedStr.replace(/</g, '&lt;');
        escapedStr = escapedStr.replace(/>/g, '&gt;');
        escapedStr = escapedStr.replace(/"/g, '&quot;');
        escapedStr = escapedStr.replace(/'/g, '&#39');
        return escapedStr;
    };
}
/[ ,]/g
//закача се htmlEscape.

//text.htmlEscape()..
$
function func1() {
 var string=string.replace(/[ ,]g/);
}
