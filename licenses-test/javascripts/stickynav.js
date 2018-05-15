(function($) { 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("indicator-bar");
console.log(navbar);
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

})(jQuery);