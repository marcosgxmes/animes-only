const burgeBtn = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

burgeBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let idy = 0;

function carrosel() {
    idy++;
    if(idy > img.length -1) {
        idy = 0;
    }
    imgs.style.transform = `translateX(${-idy * 280}px)`;
}

setInterval(carrosel, 3300);