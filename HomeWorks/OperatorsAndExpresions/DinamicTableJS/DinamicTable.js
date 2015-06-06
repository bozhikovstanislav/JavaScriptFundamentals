function addRoWoddEven(){
    var myName =  document.getElementById("n");
    var bool =checkdOdd(myName.value);
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var x = document.getElementById("myTableData").rows.length;
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= myName.value;
    row.insertCell(2).innerHTML= bool;
    //manipulate rows
    manipulatingRow(x, row);
}
function addRow(){
    var myName =  document.getElementById("n");
    //check devition of 5 or 7
    var bool =isDevideBy7or5(myName.value);
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var x = document.getElementById("myTableData").rows.length;
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= myName.value;
    row.insertCell(2).innerHTML= bool;
    //manipulate rows
    manipulatingRow(x, row);
}
function addArea(){
    var A =  document.getElementById("a");
    var B =  document.getElementById("b");
    //check devition of 5 or 7
    var Area =calculateArea(A.value, B.value);
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var x = document.getElementById("myTableData").rows.length;
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= A.value;
    row.insertCell(2).innerHTML= B.value;
    row.insertCell(3).innerHTML=Area;
    //manipulate rows
    manipulatingRow(x, row);
}
function addThirdDigit(){
    var B =  document.getElementById("b");
    //check devition of 5 or 7
    var bool =thirdDigit(B.value);
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var x = document.getElementById("myTableData").rows.length;
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= B.value;
    row.insertCell(2).innerHTML= bool;
    //manipulate rows
    manipulatingRow(x, row);
}
function addThirdBit(){
    var B =  document.getElementById("b");
    var binari=getBinariRepresentation(b.value);
    var bool =getThirdBit(B.value);
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var x = document.getElementById("myTableData").rows.length;
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= B.value;
    row.insertCell(2).innerHTML= binari;
    row.insertCell(3).innerHTML= bool;
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