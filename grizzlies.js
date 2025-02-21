/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.top = "0";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.top = "-100%";
  }

var nav = "closed";
/* NAV ICON */
function toggleClass() {
    document.getElementById("btn__menu").classList.toggle('open');

    if(nav == "closed") {
        openNav();
        nav = "open";
    } else {
        closeNav();
        nav = "closed";
    }
  }
  

  /* Back to top button */
  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}