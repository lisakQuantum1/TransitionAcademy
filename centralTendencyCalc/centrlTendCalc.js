function validateAndAdd() {
    var theNewMin = document.forms["myForm"]["minValue"].value;
    var theNewMax = document.forms["myForm"]["maxValue"].value;
    var theNewNumber = document.forms["myForm"]["newNumber"].value;

    if (theNewMin == "") {
        alert("Please enter a minimum value.");
        return false;
    }
    else if (theNewMax == "") {
        alert("Please enter a maximum value.");
        return false;
    }
    else if (parseInt(theNewMax) <= parseInt(theNewMin)) {
        alert("The max value must be larger than the min value.");
        return false;
    }
    else if (theNewNumber == "") {
        alert("Please enter a number to add to list.");
        return false;
    }
    else if ((parseInt(theNewNumber) < parseInt(theNewMin)) || (parseInt(theNewNumber) > (parseInt(theNewMax)))) {
        alert("Please enter a value in the range");
        document.forms["myForm"]["newNumber"].value = "";
        return false;
    }
    else {
  
        var tableRef = document.getElementById("numberList"); //create variable and set equal to the table that will house the numbers
        (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewNumber;

        var sum = 0; 
        var count = tableRef.rows.length 
        for (aRow = 0; aRow < count; aRow++){ 
          sum += parseInt(((tableRef.rows[aRow]).innerHTML)); 
        }
        var theAverage = sum/count; 
        var labelRef1 = document.getElementById("isMean");    
        labelRef1.innerHTML = theAverage.toFixed(5); 

        var theNumbers = [];
        for (aRow = 0; aRow < count; aRow++){    
          theNumbers.push(parseInt(((tableRef.rows[aRow]).innerHTML)));  
        }
       
        theNumbers.sort((function(a, b){return a - b}));
        var theMiddle=Math.trunc(count/2);
     
        if (count%2==1){      
          var theNewMedian = theNumbers[theMiddle];     
          var labelRef1 = document.getElementById("isMedian");    
          labelRef1.innerHTML = theNewMedian.toFixed(5);  
        }
        else{                 
          var theNewMedian = (theNumbers[theMiddle-1] + theNumbers[theMiddle])/2;    
          var labelRef1 = document.getElementById("isMedian");    
          labelRef1.innerHTML = theNewMedian.toFixed(5); 
        }

      

        var modes = []; 
        var count = []; 
        var number;      
        var maxCount = 0; 
 
        for (aRow = 0; aRow < theNumbers.length; aRow++) {
            number = theNumbers[aRow];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxCount) {
                maxCount = count[number];
            }
        }
     
        for (aRow in count)
            if (count.hasOwnProperty(aRow)) {
                if (count[aRow] === maxCount) {
                    modes.push(Number(aRow));
                }
            }

        var labelRef1 = document.getElementById("isMode");    
        labelRef1.innerHTML = modes;  
          
        document.forms["myForm"]["newNumber"].value = "";

        document.forms["myForm"]["minValue"].disabled = true;
        document.forms["myForm"]["maxValue"].disabled = true;

        return true;
    }
  }

function clearAllLists() {
    var tableRef = document.getElementById("numberList");
    tableRef.innerHTML = " ";

    var tableRef1 = document.getElementById("isMean");
    tableRef1.innerHTML = "n/a";
 
    var tableRef2 = document.getElementById("isMedian");
    tableRef2.innerHTML = "n/a";

    var tableRef3 = document.getElementById("isMode");
    tableRef3.innerHTML = "n/a";

    document.forms["myForm"]["minValue"].value = "";
    document.forms["myForm"]["minValue"].disabled = false;
    document.forms["myForm"]["maxValue"].value = "";
    document.forms["myForm"]["maxValue"].disabled = false;
    document.forms["myForm"]["newNumber"].value = "";

}