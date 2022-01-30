
const menuIcon = document.querySelector('.menu_icon');
const navbar = document.querySelector(".navbar-collapse");

menuIcon.addEventListener("click", () => {
    if (navbar.className.includes("d-none")) {
        navbar.classList.remove("d-none");
    } else {
        navbar.classList.add("d-none");
    }
})
