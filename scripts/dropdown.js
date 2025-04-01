const navList = document.querySelector(".nav-list");
const burger = document.querySelector(".mobile-menu-button");

const initMobileMenu = () => {

    if (!navList || !burger) return;

    burger.addEventListener("click", () => {
        navList.classList.toggle("open");
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1146) {
            navList.classList.remove("open");
        }
    });
}

export { initMobileMenu };