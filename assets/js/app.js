// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Links for socials
const linkedinButton = document.querySelector("#linkedin-button");

linkedinButton.addEventListener("click", () => {
  console.log("LinkedIn is clicked");
  window.open("https://www.linkedin.com/in/varun-teja-54a88b216/");
});

const githubButton = document.querySelector("#github-button");

githubButton.addEventListener("click", () => {
  console.log("GitHub button clicked!");
  window.open("https://github.com/varunteja32");
});

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
