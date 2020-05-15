console.log("Welcome");

// setting the minimun date of calender as current date
// as the deadlines can't be assigned from the past dates
var current_date = new Date();

//date to YMD(YYYY-MM-DD) format
function ymd(date){
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return y + "-" + (m<=9 ? '0'+m : m) + "-" + (d<=9 ? '0'+d : d);
}

var date = document.querySelector("#calendar input");
date.setAttribute("min", ymd(current_date));


