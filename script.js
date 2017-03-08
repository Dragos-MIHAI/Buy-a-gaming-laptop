 function getGreeting(date) {
    var today = date;
    var h = today.getHours();
    if (h < 12 && h > 0) {
        message = "Good Morning!";
    }
    else if (h >= 12 && h < 18) {
        message = "Good Afternoon!";
    }
    else {
        message = "Good Night!";
    }
    return message;
}
window.onload = function() {
    var date = new Date();
    document.getElementById("greeting").innerHTML = getGreeting(date);
};








