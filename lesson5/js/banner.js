// determine the day of the week
let thedate = new Date();
//console.log(thedate.getDay());
// if day is friday display block
if (thedate.getDay() == 2) {
    document.querySelector(".banner").style.display = "block";
    aside.style.removeProperty("display");
}