// var day:number = 15;
// var month:number = 1;
// var year:number = 1995;
// var dateOfBirth= day + "-" + month + "-" + year
// console.log(dateOfBirth)
var date = new Date("January 1 1995");
console.log(date);
var d = new Date();
var dateOfBirth = d.setFullYear(1995, 0, 15);
var today = Date.now();
// console.log(today)
var ageinsec = today - dateOfBirth;
// console.log(ageinsec)
var ageinhour = ageinsec / (1000 * 60 * 60);
console.log("I have survived for " + ageinhour + " hours");
// console.log(dateOfBirth)
