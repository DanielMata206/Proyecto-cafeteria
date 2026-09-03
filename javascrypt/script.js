

const nav = document.querySelector('.nav-container');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

window.addEventListener('scroll',function(){
    if(window.scrollY > 50){
        nav.classList.add('scrolled');
    }else
    {
        nav.classList.remove('scrolled');
    }
});
/*
const navMain = document.querySelector('.nav-main');

window.addEventListener('scroll',()=>){
    console.log(window.scrollY);
}
*/
/* OPACIDAD*/

const navIMG = document.querySelector('.main-presentacion')
const distanciaDesvanecimiento = 7000;



window.addEventListener('scroll',function(){
        let opacidad = 1 -(window.scrollY/distanciaDesvanecimiento);
        opacidad = Math.max(0,Math.min(1,opacidad));
        navIMG.style.opacity = opacidad;}
    );


/*=================================*/ 
    /*TARJETAS y TITULO */
/*=================================*/ 

const tarjetas = document.querySelectorAll('.menu-item, .menuTitle')

const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
        else
        {
            entry.target.classList.remove('visible');
        }
    });
});


tarjetas.forEach(function(tarjeta) {
    observer.observe(tarjeta);
});







