var userName = prompt("What is your full name?", "I forgot");
var userAge = prompt("How old are you?", "Guess");
var userGender = prompt("What your gender?", "Male");
var userJob = prompt("What your current job?", "Homeless :(");
var userHobby = prompt("What hobby do you have?", "JS");

var nameList = document.getElementById("name");
nameList.innerText = userName;

var age = document.getElementById("age");
age.innerText = userAge;

var gender = document.getElementById("gender");
gender.innerText = userGender;

var job = document.getElementById("job");
job.innerText = userJob;

var hobby = document.getElementById("hobby");
hobby.innerText = userHobby;