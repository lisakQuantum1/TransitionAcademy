function validateAndAdd() {
    var theNewWord = document.forms["myForm"]["newWord"].value;

    if (theNewWord == "") {
    alert("Please enter a to-do item.");
        return false;
    }
    // else if (theNewWord ==)
    else {
        let tableRef = (document.getElementById("myToDos")) as HTMLTableElement;
        let tableRow = (tableRef.insertRow(tableRef.rows.length));
        (tableRow.insertCell(tableRow.cells.length)).innerHTML = theNewWord;
        document.forms["myForm"]["newWord"].value = ""
    }
}
// function makeItemCheckbox() {
//     var theNewWord = document.forms["myForm"]["newWord"].value;
//     document.getElementById("myToDos").innerHTML = document.getElementById("myToDos").innerHTML.replace(theNewWord, theNewWord.setAttribute("type", "checkbox"));
// }
function clearToDos() {
    var tableRef = document.getElementById("myToDos");
    tableRef.innerHTML = " ";
}
function completeToDo() {
    var completeWord = document.forms["myForm"]["completeWord"].value;
    // let tableRef = (document.getElementById("myToDos")) as HTMLTableElement;
    document.getElementById("myToDos").innerHTML = document.getElementById("myToDos").innerHTML.replace(completeWord, completeWord.strike());
    document.forms["myForm"]["completeWord"].value = ""
}
// function validateAndDelete() {
//     var removeWord = document.forms["myForm"]["removeWord"].value;

//     if (removeWord == "") {
//     alert("Please enter a word to remove.");
//         return false;
//     }
//     // else {
//     //     let tableRef = (document.getElementById("myToDos")) as HTMLTableElement;
//     //     (tableRef.deleteRow(tableRef.rows.length)).innerHTML = removeWord;
//     //     document.forms["myForm"]["removeWord"].value = ""
//     // }
// }
function removeToDo() {
    var removeWord = document.forms["myForm"]["removeWord"].value;
    document.getElementById("myToDos").innerHTML = document.getElementById("myToDos").innerHTML.replace(removeWord, "");
    document.forms["myForm"]["removeWord"].value = ""
}
