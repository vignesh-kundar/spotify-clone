var greet

var mydate = new Date();
var hours = mydate.getHours();

if (hours <= 4)
    greet = "So jaao Bete ";
else if (hours >= 4 && hours < 12)
    greet = 'Good morning';
else if (hours >= 12 && hours <= 17)
    greet = 'Good afternoon';
else if (hours >= 17 && hours <= 24)
    greet = 'Good evening';

document.getElementById("greeting ").innerHTML = greet;