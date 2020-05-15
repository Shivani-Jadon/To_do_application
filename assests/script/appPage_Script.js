
// setting the minimun date of calender as current date
// as the deadlines can't be assigned from the past dates
var current_date = new Date();

//date to YMD(YYYY-MM-DD) format
function ymd(date)
{
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return y + "-" + (m<=9 ? '0'+m : m) + "-" + (d<=9 ? '0'+d : d);
}

var date = document.querySelector("#calendar input");
date.setAttribute("min", ymd(current_date));


// formatting the date to be displayed on the task-list in more readable form
var date_output = document.getElementsByClassName("date-text");
var db_date = [];

for(let i=0; i < date_output.length; i++)
{

    db_date.push(date_output[i].innerText);
    date_output[i].innerText = date_output[i].innerText.slice(0,15);
}


// highligting tasks which are past deadline or the deadline is current date
var late_task = document.getElementsByClassName("mytask-list");

for(let x=0; x < db_date.length; x++)
{

    let dd = new Date(db_date[x]);      //converting to date object

    if(dd < current_date){
        late_task[x].style.border = "2px indianred solid";
    }
}


// assiging differet styles to span of various categories
var category = document.getElementsByClassName("task-category");

// not displaying category if the user hasn't choosen any category
for(let count=0; count<category.length; count++)
{
    if(category[count].innerText == "Choose a category"){
        category[count].style.display = "None";
    }
}

//setting background color for different categories
for(let count=0; count<category.length; count++)
{
    if(category[count].innerText == "Personal"){
        category[count].style.backgroundColor = "#4caf50";
    }
}

for(let count=0; count<category.length; count++)
{
    if(category[count].innerText == "Work"){
        category[count].style.backgroundColor = "#3F51B5";
    }
}

for(let count=0; count<category.length; count++)
{
    if(category[count].innerText == "School"){
        category[count].style.backgroundColor = "#3d7f9a";
    }
}

for(let count=0; count<category.length; count++)
{
    if(category[count].innerText == "College"){
        category[count].style.backgroundColor = "coral";
    }
}

for(let count=0; count<category.length; count++)
{
    if(category[count].innerText == "Household"){
        category[count].style.backgroundColor = "palevioletred";
    }
}
// background color of other category is default color



// assiging differet styles to span of various priorities
var priority = document.getElementsByClassName("task-priority");

//not displaying priority if priority is none
for(let count=0; count<category.length; count++)
{
    if(priority[count].innerText == "none"){
        priority[count].style.display = "None";
    }
}

//setting background color if priority is low
for(let count=0; count<category.length; count++)
{
    if(priority[count].innerText == "low"){
        priority[count].style.color = "#009688";
    }
}

// background color of high priority is default color