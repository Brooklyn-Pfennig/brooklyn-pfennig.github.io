var today = new Date();
var hourNow = today.getHours();
var minuteNow = today.getMinutes();
var timeNow = today.getTime();
var greeting;

console.log("Initializing greeting")

if (hourNow > 20) {
    greeting = "Hey there, night owl!";
} else if (hourNow > 12) {
    greeting = "Hello, there!";
} else if (hourNow > 0) {
    greeting = "Hello, early bird!";
} else {
    greeting = "Welcome!";
}

document.write("<h2>" + greeting + "</h2>");
document.write("<ul>");
document.write("<li>Hour: " + hourNow);
document.write("<li>Minutes: " + minuteNow);
document.write("</ul>");
