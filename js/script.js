const burgeBtn = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

burgeBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})