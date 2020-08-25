// Business logic for Tickets //



// Business logic for Price //

function Ticket (age, movieTitle, timeOfDay) {
  this.age = age;
  this.movieTitle = movieTitle;
  this.timeOfDay = timeOfDay;
  
}

let movieTitlePrice = {
  0: 8.5,
  1: 9,
  2: 11,
  3: 12,
  4: 12.5

}

let ageAdjust = {
   child: -2.25,
   adult: 0,
   senior: -3
}

let timeAdjust = {
  0: -1.75,
  1: 1.25,
  2: 2.75,
  3: 0.75,
  4: -1.25
}

 

Ticket.prototype.calculatePrice = function() {
  return movieTitlePrice[this.movieTitle] + ageAdjust[this.age] + timeAdjust[this.timeOfDay]; 
}



// //Indiana Jones = 7.50
// terminator = 5.5
// ad astra = 9.0
// "1917" = 11.0
// once upon a time in HW = 12.0

// if age > 65 then movie price - 3.25

// if age < 6 then movie price - 2.50

// if time of day = "morning" then movie price - 2.00

// if time of day = "afternoon" then movie price + 3.00

// if time of day = "night" then movie price + 1.50 






//UI Interface//
function ageAssign(age) {
  if (age < 12) {
    return "child"
  }
  else if ( age > 65) {
    return "senior"
  }
  else {
    return "adult"
  }
};


$(document).ready(function() {
  //attachContactListeners();
  $("form#question").submit(function(event) {
    event.preventDefault();
    const inputAgeInt = parseInt($("input#age").val());
    const inputMovieTitle = $("#movie").val();
    const inputTime = $("#time").val();

  
    let ageBracket = ageAssign(inputAgeInt);
  
    let newTicket = new Ticket (ageBracket, inputMovieTitle, inputTime);
  
    let price = newTicket.calculatePrice();
  
    $(".answer").text(price);
  });
});