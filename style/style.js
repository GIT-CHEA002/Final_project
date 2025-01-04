// Design dark and light theme for google map
const map = document.getElementById("map");
const mode = document.getElementById("mode");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
// Set initial state: dark mode is enabled when the page loads
map.style.filter = "invert(100%)";
mode.classList.add("btn-dark");
dark.classList.add("d-none");
light.classList.remove("d-none");
// Add an event listener for the button
mode.addEventListener("click", () => {
  if (mode.classList.contains("btn-dark")) {
    // Switch to light mode
    map.style.filter = null;
    mode.classList.replace("btn-dark", "btn-light");
    mode.classList.replace("border-light", "border-dark");
    dark.classList.remove("d-none");
    light.classList.add("d-none");
  } else {
    // Switch to dark mode
    map.style.filter = "invert(100%)";
    mode.classList.replace("btn-light", "btn-dark");
    mode.classList.replace("border-dark", "border-light");
    dark.classList.add("d-none");
    light.classList.remove("d-none");
  }
});

/*----------------------------------------------------*/
// navbar-behavior
let lastScrollPosition = 0;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;
  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down: hide navbar
    navbar.classList.add("hidden");
  } else {
    // Scrolling up or near the top: show navbar
    navbar.classList.remove("hidden");
  }

  lastScrollPosition = currentScrollPosition;
});

// Set padding excepte the navbar height
// Ensure the navbar element exists
if (navbar) {
  const sections = ["About", "Order", "Contact"];
  // Iterate over each section id
  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.style.paddingTop = navbar.offsetHeight + "px";
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  });
} else {
  console.error("Navbar element not found.");
}
