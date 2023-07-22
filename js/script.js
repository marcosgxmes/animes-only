// MENU HAMBURGE
const burgeBtn = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

burgeBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// CARROSEL ATÉ 600px
const container = document.getElementById('img');
const imgs = document.querySelectorAll('#img img');
const bg = document.getElementById('bcg');

let idy = 0;

 function smallCarrosel() {
        idy++;
    
        if(idy > imgs.length -1) {
            idy = 0;
        }
    
    
        container.style.transform = `translateX(${-idy * 280}px)`;
        
    
        
        if(bg.src == 'https://t4.ftcdn.net/jpg/04/06/48/21/360_F_406482145_y8lYwBqSNdi40Z7HotnzRPks1lJzNsHB.jpg') {
            bg.src = 'https://img.freepik.com/free-vector/gradient-smooth-blue-lines-background_23-2148964962.jpg'
        } else if ( bg.src == 'https://img.freepik.com/free-vector/gradient-smooth-blue-lines-background_23-2148964962.jpg') {
            bg.src = 'https://t4.ftcdn.net/jpg/04/06/48/21/360_F_406482145_y8lYwBqSNdi40Z7HotnzRPks1lJzNsHB.jpg'
        }
      
};
   
setInterval(smallCarrosel, 4300); 


//CARROSEL ATÉ 768px
const container2 = document.getElementById('img2');
const imgs2 = document.querySelectorAll('#img2 img');

function bigCarrosel() {
    idy++;

    if(idy > imgs.length -1) {
        idy = 0;
    }
    
    container2.style.transform = `translateX(${-idy * 400}px)`;  
};

setInterval(bigCarrosel, 4300); 



//BOTAO VER MAIS
const seeMoreBtn = document.querySelector('.see-more');
const hiddenOntem = document.getElementById('hidden-ontem');

seeMoreBtn.addEventListener('click', () => {
    hiddenOntem.classList.toggle('active');
    seeMoreBtn.style.display = 'none'
});

