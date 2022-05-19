async function getDogInfo() {
    var apiString = "https://dog.ceo/api/";

    var dogInfoFun = document.getElementById("learnSelections").value;
    
    if (dogInfoFun == 1) {
        apiString = apiString + "breeds/list/all";
        alert(apiString); 
  
        var response = await fetch(apiString);
        document.getElementById("dogInfo").innerHTML = "";

        var jsonData = await response.json();
    
        document.getElementById("dogInfo").innerHTML = JSON.stringify(jsonData);

        // let jsObj = JSON.parse(jsonData);
        // var dogBreeds = document.getElementById("dogInfo");
        //     jsObj.message.forEach(function(element) {
        //         dogBreeds.insertAdjacentHTML( 'beforeend',"<li>" + element + " </li>");
        //   });

   
        // for (var message in jsonData) {   
        //     document.getElementById("dogInfo").innerHTML += "<p>" + jsonData[message] + "</p>";
        // }
  
        // return true;
    }
    else if (dogInfoFun == 2) {
        apiString = apiString + "breeds/image/random";
        alert(apiString); 
  
        var response = await fetch(apiString);
        document.getElementById("dogInfo").innerHTML = "";

        var jsonData = await response.json();
    
        document.getElementById("dogInfo").innerHTML = JSON.stringify(jsonData);

    
        // function(data) {
        //     var returnData = jQuery.parseJSON(data);           
        //     $("#picture").append("<img src=\" + returnData.img_url + "\" />");
        //  });
   
        // for (var message in jsonData) {   
        //     document.getElementById("dogInfo").innerHTML += "<p>" + JSON.stringify(message) + "</p>";
        // }
  
        // return true;

    }
    else if (dogInfoFun == 3) {
        apiString = apiString + "breed/" + breed + "/images";
        alert(apiString); 
  
        var response = await fetch(apiString);
        document.getElementById("dogInfo").innerHTML = "";

        var jsonData = await response.json();
    
        document.getElementById("dogInfo").innerHTML = JSON.stringify(jsonData);
   
        for (var message in jsonData) {   
            document.getElementById("dogInfo").innerHTML += "<p>" + jsonData[message] + "</p>";
        }
  
        return true;

    }
    else {
        apiString = apiString + "breed/" + breed + "/list";
        alert(apiString); 
  
        var response = await fetch(apiString);
        document.getElementById("dogInfo").innerHTML = "";

        var jsonData = await response.json();
    
        document.getElementById("dogInfo").innerHTML = JSON.stringify(jsonData);
   
        for (var message in jsonData) {   
            document.getElementById("dogInfo").innerHTML += "<p>" + jsonData[message] + "</p>";
        }
  
        return true;
        
    }
}