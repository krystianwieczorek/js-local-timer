function timer(){
    
    let today = new Date();
    
    let day = today.getDay();
    let days = ['Poniedziałek', 'Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'];
    let which = today.getDate();
    let month = today.getMonth();
    let months = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'];
    let year = today.getFullYear();
    
    let hours = today.getHours();
    if(hours<10) hours = "0"+hours;
    let minutes = today.getMinutes();
    if(minutes<10) minutes = "0"+minutes;
    let seconds = today.getSeconds();
    if(seconds<10) seconds = "0"+seconds;
    
    document.getElementById("clock").innerHTML =
        days[day-1]+" "+which+"/"+months[month]+"/"+year+"  |  "+hours+":"+minutes+":"+seconds;
    
    setTimeout("timer()",1000);
    
}