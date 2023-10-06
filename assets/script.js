$(document).ready(function() {
    console.log("Ready!");
});
    //Display current date and time (Moment.js)
    let now = moment().format("dddd, MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = now;
    let currentHour = moment().format("HH");

    //Past, present, and future functionality -
    //Compare timeblock time with current time to determine whether
    //activity is in the past, present, or future 
    $(".time-div").each(function() {
        var timeDiv = $(this).attr("id").split("-")[1];

        if (currentHour == timeDiv) {
            $(this).addClass("present");
            $(this).children(".description").addClass("present");
   
        } else if (currentHour < timeDiv) {
            $(this).removeClass("present");
            $(this).addClass("future");

        } else if (currentHour > timeDiv) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });

    
    //Save data to local storage
    $(".saveBtn").click(function (event) {
        event.preventDefault();