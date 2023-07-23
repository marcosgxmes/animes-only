// MENU HAMBURGE
const burgeBtn = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

burgeBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


//MUDAR PLANO DE FUNDO

const bg = document.getElementById('bcg');

function changeBc() {
    if(bg.src == 'https://t4.ftcdn.net/jpg/04/06/48/21/360_F_406482145_y8lYwBqSNdi40Z7HotnzRPks1lJzNsHB.jpg') {
        bg.src = 'https://img.freepik.com/free-vector/gradient-smooth-blue-lines-background_23-2148964962.jpg'
    } else if ( bg.src == 'https://img.freepik.com/free-vector/gradient-smooth-blue-lines-background_23-2148964962.jpg') {
        bg.src = 'https://t4.ftcdn.net/jpg/04/06/48/21/360_F_406482145_y8lYwBqSNdi40Z7HotnzRPks1lJzNsHB.jpg'
    };
}

setInterval(changeBc, 4000)



// CARROSEL PARA ATÉ 600px
const container = document.getElementById('img');
const imgs = document.querySelectorAll('#img img');

let idy = 0;

 function smallCarrosel() {
        idy++;
    
        if(idy > imgs.length -1) {
            idy = 0;
        }
        container.style.transform = `translateX(${-idy * 280}px)`;
};

setInterval(smallCarrosel, 4000)



 
//CARROSEL PARA ATÉ 768px
const container2 = document.getElementById('img2');
const imgs2 = document.querySelectorAll('#img2 img');
let idx = 0;

function bigCarrosel() {
   
    idx++;

    if(idx > imgs2.length -1) {
        idx = 0;
    }
    
    container2.style.transform = `translateX(${-idy * 400}px)`;  
    
};

setInterval(bigCarrosel, 4000); 


//CARROSEL PARA ATÉ 1200px
const container3 = document.getElementById('img3');
const imgs3 = document.querySelectorAll('#img3 img');
let idz = 0;

function bigCarrosel2() {
   
    idz++;

    if(idz > imgs3.length -1) {
        idz = 0;
    }
    
    container3.style.transform = `translateX(${-idz * 800}px)`;  
    
};

setInterval(bigCarrosel2, 4000); 



//BOTAO VER MAIS
const seeMoreBtn = document.querySelector('.see-more');
const hiddenOntem = document.getElementById('hidden-ontem');

seeMoreBtn.addEventListener('click', () => {
    hiddenOntem.classList.toggle('active');
    seeMoreBtn.style.display = 'none'
});

