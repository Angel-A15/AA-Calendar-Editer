

//fcurrent date function
function renderDate(){
    var myDate = new Date();
    var year = myDate.getYear();
        if(year<1000){
            year += 1900
        }

    var day = myDate.getDay();
    var month= myDate.getMonth();
    var dayM = myDate.getDate();
    var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var montharray = new Array("Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec.");
    
    /*kept in, not sure if this is needed to update the date
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if(h == 24){
            h = 0;
        } else if(h > 12){
            h = h - 0;
        }

        if(h < 10){
            h="0" + h;
        }
        
        if(m < 10){
            m="0" + m;
        }
        
        if(s < 10){
            s="0" + s;
        }*/ //commented out to see if date will work without time
        

    var dateDis = document.getElementById("currentDate");
    dateDis.textContent = "" +dayarray[day]+ " " +montharray[month]+ " " +dayM+ ", " +year;
    dateDis.innerText = "" +dayarray[day]+ " " +montharray[month]+ " " +dayM+ ", " +year;

    setTimeout("renderDate()", 1000);

}

renderDate();
//current date function


/*short date function
$( ".currentDate" ).datepicker({
    dateFormat: "yy-mm-dd"
});
  
// Getter
var dateFormat = $( ".currentDate" ).datepicker( "option", "dateFormat" );
 
// Setter
$( ".currentDate" ).datepicker( "option", "dateFormat", "yy-mm-dd" );*/