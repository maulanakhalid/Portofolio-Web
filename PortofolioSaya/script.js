const navItems = document.querySelectorAll("#nav");

function changeBlack(event) {
  event.target.style.color = "red";
}

function changeToWhite(event) {
  event.target.style.color = "white";
}

navItems.forEach((navItem) => {
  navItem.addEventListener("mouseenter", changeBlack);
  navItem.addEventListener("mouseleave", changeToWhite);
});
