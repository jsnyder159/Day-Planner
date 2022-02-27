

let today = moment().format('dddd, MMM Do YYYY');

// Gives current Day, Month, Date, Year to main header.  Above is how the current moment is defined
$("#currentDay").text(today);


// Function for save button
$(document).ready(function () {

    // on click saves the text with associated time to local storage
    $(".saveBtn").on("click", function() {

    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

// Function for colorization of day planner.
function timeTracker() { 
    let timeNow = moment().hour();
    $(".time-block").each(function () {
        let blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // If time has pasted from the current time (timeNow) will color the box as grey.
        if(blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }

        // If time block is the same time as current time (timeNow) will color the box red.
        else if (blockTime === timeNow) {
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");
        }

        // If time block is a future time from the current time (timeNow) will color the box green.
        else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
    })
}

// Displays the input given to the description area that was saved to local storage. 
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

timeTracker();
})
