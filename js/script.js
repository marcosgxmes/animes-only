// MENU HAMBURGE
const burgeBtn = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

burgeBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// CARROSEL
const container = document.getElementById('img');
const imgs = document.querySelectorAll('#img img');
const bg = document.getElementById('bcg');

let idy = 0;

if(`${screen.width < 600}`){
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
}




if(screen.width > 600){
clearInterval(smallCarrosel)
}



function bigCarrosel() {
    idy++;

    if(idy > imgs.length -1) {
        idy = 0;
    }


    container.style.transform = `translateX(${-idy * 400}px)`;
    
    
    if(bg.src == 'https://t4.ftcdn.net/jpg/04/06/48/21/360_F_406482145_y8lYwBqSNdi40Z7HotnzRPks1lJzNsHB.jpg') {
        bg.src = 'https://img.freepik.com/free-vector/gradient-smooth-blue-lines-background_23-2148964962.jpg'
    } else if ( bg.src == 'https://img.freepik.com/free-vector/gradient-smooth-blue-lines-background_23-2148964962.jpg') {
        bg.src = 'https://t4.ftcdn.net/jpg/04/06/48/21/360_F_406482145_y8lYwBqSNdi40Z7HotnzRPks1lJzNsHB.jpg'
    }
  
};




//BOTAO VER MAIS
const seeMoreBtn = document.querySelector('.see-more');
const hiddenOntem = document.getElementById('hidden-ontem');

seeMoreBtn.addEventListener('click', () => {
    hiddenOntem.classList.toggle('active');
    seeMoreBtn.style.display = 'none'
});

