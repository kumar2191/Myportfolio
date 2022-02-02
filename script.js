// for nav barr color change
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 0);
});

function newtoggle(){
    var toggleMenu = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');	
    menu.classList.toggle('active');
    
}
