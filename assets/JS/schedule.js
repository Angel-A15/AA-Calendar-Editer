
//function used to display current date
var todayDate = moment().format('MMM Do YYYY');
$("#currentDay").html(todayDate);


//function used to save added/edited content in text area
$(document).ready(function() {

    $(".saveBtn").on("click", function(event){
        // define the time and description variables 
        var text = $(this).siblings(".description").val();

        var time = $(this).parent().attr("id");
        //save to localStorage 
        localStorage.setItem(time, text);

    });
    
})

//function used to determine color for past, future, and present events
function timeTracker(){

    var timeNow = moment().hours();

    //loop over time blocks until

    $(".time-block").each(function() {
        var timeBlockId = $(this).attr("id");
        var timeBlock = parseInt(timeBlockId.split("hour")[1]);

        debugger;
        
        
        if( timeNow > timeBlock) {
            $(this).addClass("past")

        }

        if(timeNow < timeBlock) {
            $(this).addClass("future")
        }

        if(timeNow === timeBlock) {
            $(this).addClass("present")
        }

        var timeBlockText = localStorage.getItem(timeBlockId)
        
        if(timeBlockText== null) return

        console.log(timeBlockText);

        $(this).children(".description").val(timeBlockText)


    });
}

timeTracker();