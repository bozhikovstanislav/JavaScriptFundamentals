function addRow(){
    var myName =  document.getElementById("n");
    var wordDigit =DigitAsWord(myName.value);
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var x = document.getElementById("myTableData").rows.length;
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= myName.value;
    row.insertCell(2).innerHTML= wordDigit;
    //manipulate rows
    manipulatingRow(x, row);
}
function addRowReversNumber(){
    var myName =  document.getElementById("n");
    var wordDigit =reversNumber(myName.value);
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var x = document.getElementById("myTableData").rows.length;
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= myName.value;
    row.insertCell(2).innerHTML= wordDigit;
    //manipulate rows
    manipulatingRow(x, row);
}
function addRowWordCount(){
    var myName =  document.getElementById("n");
    var text=document.getElementById("Text");
    var number =countOccurrence(text,myName);
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var x = document.getElementById("myTableData").rows.length;
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= myName.value;
    row.insertCell(2).innerHTML= number;
    //manipulate rows
    manipulatingRow(x, row);
}
function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
}
var manipulatingRow = function (x, row) {
    if (x % 2 == 0) {
        row.className = "odd";
    } else {
        row.className = "even";
    }
};