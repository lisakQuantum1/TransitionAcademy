function validateAndAdd() {
    var theNewWord = document.forms["myForm"]["newWord"].value;
    var theNewNumber = document.forms["myForm"]["newNumber"].value;

    if (theNewWord == "") {
        alert("Please enter a word to check.");
        return false;
    }
    else if ((theNewNumber != 1) && (theNewNumber != 2) && (theNewNumber != 3) && (theNewNumber != 4)) {
        alert("Please enter a valid number.");
        document.forms["myForm"]["newNumber"].value = "";
    }
    else {
   
        if (theNewNumber == 1) {
            var tableRef = document.getElementById("myListCookie");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + checkAndUpdateWordList(theNewWord);
            // var tableData = document.getElementsById("listOfWords");
            // (tableData.updateCell(tableData.rows.value=theNewWord).innerHTML = str.strike(theNewWord))
        }
        else if (theNewNumber == 2) {
            var tableRef = document.getElementById("myListDrink");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + checkAndUpdateWordList(theNewWord);
        }
        else if (theNewNumber == 3) {
            var tableRef = document.getElementById("myListCandy");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + checkAndUpdateWordList(theNewWord);
        }
        else {
            var tableRef = document.getElementById("myListVeggie");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + checkAndUpdateWordList(theNewWord);
        }
    }
}
function clearListCookie() {
    var tableRef = document.getElementById("myListCookie");
    tableRef.innerHTML = " ";
}
function clearListDrink() {
    var tableRef = document.getElementById("myListDrink");
    tableRef.innerHTML = " ";
}
function clearListCandy() {
    var tableRef = document.getElementById("myListCandy");
    tableRef.innerHTML = " ";
} 
function clearListVeggie() {
    var tableRef = document.getElementById("myListVeggie");
    tableRef.innerHTML = " ";
}

function checkAndUpdateWordList() {
    var listWord = document.getElementById("listOfWords");

    //i=1 starts reviewing after header row, which is 0
    for (i=1; i < listWord.rows.length; i++) {
        var cellData = listWord.rows.item(i).cells;

        if (cellData == listWord) {
            var tableRef = document.getElementById("listOfWords");
            tableRef.updateCell(tableData.rows.value=theNewWord).innerHTML = listWord.strike();
        }
        else {
            alert("Word entered is not on the word list.")
        }
    }

    // var theNewWord = document.forms["myForm"]["newWord"].value;
    // document.getElementById("listOfWords").innerHTML = document.getElementById("listOfWords").innerHTML.replaceAll(theNewWord, theNewWord.strike());
}