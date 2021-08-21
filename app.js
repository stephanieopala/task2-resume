const toggleBtn = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const navItem = document.querySelectorAll(".menu__item");

toggleBtn.addEventListener("click", mobileMenu);
navItem.forEach(item => item.addEventListener("click", mobileMenu) )
function mobileMenu() {
    toggleBtn.classList.toggle("active");
    menu.classList.toggle("active");
}