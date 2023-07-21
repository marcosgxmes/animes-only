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
    

    
    if(bg.src == 'https://t4.ftcdn.net/jpg/04/06/48/21/360_F_406482145_y8lYwBqSNdi40Z7HotnzRPks1lJzNsHB.jpg') {
        bg.src = 'https://img.freepik.com/free-vector/gradient-smooth-blue-lines-background_23-2148964962.jpg'
    } else if ( bg.src == 'https://img.freepik.com/free-vector/gradient-smooth-blue-lines-background_23-2148964962.jpg') {
        bg.src = 'https://t4.ftcdn.net/jpg/04/06/48/21/360_F_406482145_y8lYwBqSNdi40Z7HotnzRPks1lJzNsHB.jpg'
    }
  
}

setInterval(carrosel, 4100);


const bg = document.getElementById('bcg');

