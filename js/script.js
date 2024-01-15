// Menu Hamburger Klik
const navbarNav = document.querySelector(".rizki_navbar-nav");

document.querySelector("#rizki_hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#rizki_hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// slideshow otomatis

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("rizki_mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // 2 detik ganti
}

// JavaScript Search
function search_responsive() {
  let input = document.getElementById("rizki_searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("rizki_responsive");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}

// pop up
function openForm() {
  document.getElementById("rizki_myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("rizki_myForm").style.display = "none";
}
