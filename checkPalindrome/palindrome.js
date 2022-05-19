function validateAndAdd() {
    var theNewWord = document.forms["myForm"]["newWord"].value;
    var theNewNumber = document.forms["myForm"]["newNumber"].value;

    if (theNewWord == "") {
        alert("Please enter a word to check.");
        return false;
    }
    else if ((theNewNumber != 1) && (theNewNumber != 2)) {
        alert("Please enter a valid number.");
        document.forms["myForm"]["newNumber"].value = "";
    }
    else {
   
        if (theNewNumber == 1) {
            var tableRef = document.getElementById("myList1");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + ': ' + PalindromeCheck1(theNewWord);
        }
        else {
            var tableRef = document.getElementById("myList2");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + ': ' + PalindromeCheck2(theNewWord);
        }

        document.forms["myForm"]["newWord"].value = "";
        document.forms["myForm"]["newNumber"].value = "";
        return true;
    }
}

function clearList1() {
    var tableRef = document.getElementById("myList1");
    tableRef.innerHTML = " ";
}
function clearList2() {
    var tableRef = document.getElementById("myList2");
    tableRef.innerHTML = " ";
}

function PalindromeCheck1 (theword) {
    var reverseword = theword.split("").reverse().join("");
    return theword === reverseword;
}

function PalindromeCheck2 (theword) {
    var palindrome = true;

    var middle = theword.length/2;
    for (i=0; i <= middle; i++) {
        if (theword[i] !=theword[theword.length - i - 1])
            palindrome = false;
    }
    return palindrome;
}