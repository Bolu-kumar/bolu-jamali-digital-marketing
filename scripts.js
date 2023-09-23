// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%"; // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%"; // IE10
    elements[i].style.flex = "50%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

// ---------------------------contact-us Forms ------------------------
const form = document.getElementById("contactForm");
const alert = document.querySelector(".alert");

const firebaseConfig = {
  apiKey: "AIzaSyCDiLnTpFqRT5pqHTpRlynUsCywXo3DaD4",
  authDomain: "mansasugar-f5fdc.firebaseapp.com",
  databaseURL: "https://mansasugar-f5fdc-default-rtdb.firebaseio.com",
  projectId: "mansasugar-f5fdc",
  storageBucket: "mansasugar-f5fdc.appspot.com",
  messagingSenderId: "722406848335",
  appId: "1:722406848335:web:d931c6e2ca80eb5bce373a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const ref = database.ref("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  // const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const message = document.getElementById("message").value;



  ref.push({
    name: name,
    // email: email,
    phone: phone,
    message: message,
    timestamp: firebase.database.ServerValue.TIMESTAMP,

  });



  alert.style.display = "block";

  setTimeout(() => {
    alert.style.display = "none"; // Hide the alert after a delay
    form.reset(); // Reset the form after the delay
  }, 2000);
});
