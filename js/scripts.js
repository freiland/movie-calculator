// Business logic for Tickets //

function Tickets() {
  this.price = [];
//}


// Business logic for Price //

function Ticket (age, movieTitle, timeOfDay) {
  this.age = age;
  this.movieTitle = movieTitle;
  this.timeOfDay = timeOfDay;
  
}

let movieTitlePrice = {
  indianaJones: 8.5,
  terminator: 9,
  adAstra: 11,
  onceUpon: 12,
  1917: 12.5

}

let ageAdjust = {
   child: 2.25,
   adult: 0,
   senior: 3
}

let timeAdjust = {
  morning: 1.75,
  earlyAfternoon: 1.25,
  lateAfternoon: 2.75,
  evening: 0.75,
  lateNight: 1.25
}

 

Ticket.prototype.calculatePrice = function() {
  return 
}

Ticket.prototype.timeAdjust = function() {

}

Indiana Jones = 7.50
terminator = 5.5
ad astra = 9.0
"1917" = 11.0
once upon a time in HW = 12.0

if age > 65 then movie price - 3.25

if age < 6 then movie price - 2.50

if time of day = "morning" then movie price - 2.00

if time of day = "afternoon" then movie price + 3.00

if time of day = "night" then movie price + 1.50 






//UI Interface//

$(document).ready(function() {
  //attachContactListeners();
  $("form#question").submit(function(event) {
    event.preventDefault();
    const ageInt = parseInt($("input#age").val());
  })
});