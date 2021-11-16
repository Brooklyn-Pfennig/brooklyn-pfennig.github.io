var today = new Date();
var dayNow = today.getDay();
var greeting;

var agenda = [
    "<li><b>10:30 am - Church</b>",
    "<li><b>9:00 am - PHED 1001</b><li><b>11:00 am - HON 1013</b><li><b>2:00 pm - SOCI 1223</b>",
    "<li><b>8:00 am - CIS 3623</b><li><b>9:30 am - MATH 1163</b><li><b>11:00 am - HON 1013</b>",
    "<li><b>9:00 am - PHED 1001</b><li><b>10:00 am - Chapel</b><li><b>11:00 am - HON 1013</b><li><b>2:00 pm - SOCI 1223</b>",
    "<li><b>8:00 am - CIS 3623</b><li><b>9:30 am - MATH 1163</b><li><b>11:00 am - HON 1013</b>",
    "<li><b>11:00 am - HON 1013</b><li><b>2:00 pm - SOCI 1223</b>",
    "<li><b>Nothing</b>"
]

console.log("Initializing agenda for day " + dayNow);

document.write("<ul>")
document.write(agenda[dayNow + 1])
document.write("</ul>")
