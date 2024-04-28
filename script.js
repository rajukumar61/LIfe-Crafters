// navbar start
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () =>
  navbar.classList.toggle("sticky", window.scrollY > 0)
);

const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document
  .querySelectorAll("menu a")
  .forEach((link) => link.addEventListener("click", toggleMenu));

// navbar end

// FAQ start
function toggleAccordion(accordionId) {
  const accordionItem = document.getElementById(accordionId);
  const answer = accordionItem.querySelector(".answer");
  const arrow = accordionItem.querySelector(".fas");
  const isActive = accordionItem.classList.toggle("active");

  answer.style.maxHeight = isActive ? answer.scrollHeight + "px" : "0";
  arrow.className = isActive ? "fas fa-minus" : "fas fa-plus";
}
// FAQ end

// TnC start
var tab_lists = document.querySelectorAll(".tabs_list ul li");
var tab_items = document.querySelectorAll(".tab_item");

tab_lists.forEach(function (list) {
  list.addEventListener("click", function () {
    var tab_data = list.getAttribute("data-tc");

    tab_lists.forEach(function (list) {
      list.classList.remove("active");
    });
    list.classList.add("active");

    tab_items.forEach(function (item) {
      var tab_class = item.getAttribute("class").split(" ");
      if (tab_class.includes(tab_data)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// TnC end

// ---------------Scroll Reveal start----------------
const sr = ScrollReveal({
  origin: "bottom",
  distance: "30px",
  duration: 1000,
  delay: 100,
  easing: "ease-in-out",
});

sr.reveal(".slogan-1");
sr.reveal(".slogan-2", { delay: 500 });

// New Arrivals Boxes reveal
sr.reveal(".new-arrivals-box:nth-child(1)");
sr.reveal(".new-arrivals-box:nth-child(2)", { delay: 300 });
sr.reveal(".new-arrivals-box:nth-child(3)", { delay: 500 });

// About reveal
sr.reveal(".about-title h1", { origin: "left" });
sr.reveal(".about-title p", { origin: "right" });
sr.reveal(".about-box");

// HOME SECTION
sr.reveal(".Home");
sr.reveal("#buildd");
sr.reveal(".Hheading");
sr.reveal(".HDesc");
sr.reveal(".Hdown");
sr.reveal(".Home-Container#Himage", { origin: "right" });

// PLATEFORM
sr.reveal(".Plateform");
sr.reveal(".Plateform h1");
sr.reveal(".Hheading");
sr.reveal(".Pbox", { origin: "left" });
sr.reveal(".icons");

// ABOUT
sr.reveal(".About");
sr.reveal(".AContainer h1");
sr.reveal(".AStatusGrid", { origin: "left" });
sr.reveal(".ASBox");

sr.reveal(".AContent-Container h1");
sr.reveal(".AValuesGrid", { origin: "left" });
sr.reveal(".AValues-box");
sr.reveal(".ADesc", { origin: "right" });

// BOOKING
sr.reveal(".BookSlot");
sr.reveal(".Bcontainer h1");
sr.reveal(".inputBox", { origin: "left" });
sr.reveal(".input");
sr.reveal(".Subbmited");


// FAQ & Footer Reveal
sr.reveal(".FAQ");
sr.reveal(".FContainer h1");
sr.reveal(".accordion-title", { origin: "left" });
sr.reveal(".answer", { origin: "right" });

// footer
sr.reveal(".footer-headline");
sr.reveal(".footer-newsletter", { origin: "left" });
sr.reveal(".link-container", { origin: "right" });
sr.reveal(".socials");

// Mentor Reveal
sr.reveal(".Mentor");
sr.reveal(".MentorImage");
sr.reveal(".Mcontent#ConHead", { origin: "left" });
sr.reveal(".Mcontent#Mpara", { origin: "left" });
sr.reveal(".Mdown");
sr.reveal(".MSocial");

// TnC Reveal
sr.reveal(".TnC");
sr.reveal(".TnC-Box");
sr.reveal(".TnC-Box h4", { origin: "left" });

// Contact page reveal
sr.reveal(".contactpage");
sr.reveal(".contactInfo h1");
sr.reveal(".info");
sr.reveal(".info li", { origin: "left" });
sr.reveal(".sci");

sr.reveal(".contactForm h1");
sr.reveal(".formBox", { origin: "left" });
sr.reveal(".inputBox");

// ---------------Scroll Reveal end----------------

// --------------------------------------------------
// <!-- click on submit button script -->

function myFunction() {
  document.getElementById("Progress").innerHTML = "Submitting Details...♻️";
  setTimeout(function () {
    Progress.innerHTML = "";
  }, 3000);
}

// <!-- from to excell script -->

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwvva_dAT-03wDi9bh-wsulVbqi1I7hWuGMxhFHevs-4mChVtzlQtEOXyuwS5H1YiSyLA/exec";
const form = document.forms["submit-to-google-sheet"];
const Success = document.getElementById("Success");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      Success.innerHTML = "Submitted Successfully ✅";
      setTimeout(function () {
        Success.innerHTML = "";
      }, 10000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
