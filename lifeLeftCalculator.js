function lifeInDays(age) {
    var Age = (90-age);
    var days = (Age*365);
    var weeks = (Age*52);
    var months = (Age*12);
    alert("You have "+days+" Days, "+weeks+" Weeks and "+months+" Months left until you are 90 years old.");
}

var age = prompt("Enter your Age: ");
lifeInDays(age);