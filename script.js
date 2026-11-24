const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.focus();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
