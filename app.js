window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
// var hr = document.getElementById("hr");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// var stickytwo = hr.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    // hr.classList.add("stickytwo")
  } else {
    navbar.classList.remove("sticky");

    
  }
} 
