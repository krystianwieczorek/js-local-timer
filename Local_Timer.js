function timer(){
    
    var today = new Date();
    
    var day = today.getDay();
        if(day === 1) day = "Monday";
        if(day === 2) day = "Thuasday";
        if(day === 3) day = "Wendesday";
        if(day === 4) day = "Thursday";
        if(day === sd5) day = "Friday";
        if(day === 6) day = "Saturday";
        if(day === 7) day = "Sunday";
    var which = today.getDate();
    var month = today.getMonth()+1;
        if(month === 1) month = "January";
        if(month === 2) month = "February";
        if(month === 3) month = "March";
        if(month === 4) month = "April";
        if(month === 5) month = "May";
        if(month === 6) month = "June";
        if(month === 7) month = "July";
        if(month === 8) month = "August";
        if(month === 9) month = "September";
        if(month === 10) month = "October";
        if(month === 11) month = "November";
        if(month === 12) month = "December";
    var year = today.getFullYear();
    
    var hours = today.getHours();
    if(hours<10) hours = "0"+hours;
    var minutes = today.getMinutes();
    if(minutes<10) minutes = "0"+minutes;
    var seconds = today.getSeconds();
    if(seconds<10) seconds = "0"+seconds;
    
    document.getElementById("clock").innerHTML =
        day+" "+which+"/"+month+"/"+year+"  |  "+hours+":"+minutes+":"+seconds;
    
    setTimeout("timer()",1000);
    
}