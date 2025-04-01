const navList = document.querySelector(".nav-list");
const burger = document.querySelector(".mobile-menu-button");

const initMobileMenu = () => {

    if (!navList || !burger) return;

    burger.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
}

export { initMobileMenu };