$(document).ready(function() {
    console.log("Ready!");
});
    //Display current date and time (Moment.js)
    let now = moment().format("dddd, MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = now;
    let currentHour = moment().format("HH");

    