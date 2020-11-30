function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location = document.querySelector(#location).value = 'Ann Arbor';

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format = document.querySelector(#fahrenheit).value = 'imperial';

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query = 'api.openweathermap.org/data/2.5/weather?q='+location+'&units='+format+'&appid=3eb43ddbfe8c125b381e410b1f9aaf13';
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, highs and lows, 
    //the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.

    });
}
