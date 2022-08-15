
//Display today's date in header
var todayDate = moment().format('MMM Do YYYY');
$("#currentDay").html(todayDate);



$(document).ready(function() {

    $(".saveBtn").on("click", function(event){
        // define the time and description variables 
        var text = $(this).siblings("description").val();

        var time = $(this).parent().attr("id");

        //save to localStorage 
        localStorage.setItem(text, time);

    });
    
})

function timeTracker(){

    var timeNow = moment().hours();

    //loop over time blocks until
    $(".time-block").each(function() {

        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        if( timeNow > blockTIme) {
            $(this).removeClass("future")
        }

    }); // if else time is less than time 
    //using if else if else statements to comapre the times
    //well be using moment js 
    //well be using the id hours of 
    //were using past present future for requirements
}
