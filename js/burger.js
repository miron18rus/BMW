const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');


const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humburgerElem.classList.toggle('hamburger-menu-active');
};


humburgerElem.addEventListener('click', toggleMenu)
