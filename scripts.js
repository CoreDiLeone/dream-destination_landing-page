const btnClose = document.getElementById("btn-close-menu");
const dropdownMenu = document.getElementById("dropdown-menu");
const btnMenu = document.getElementById("btn-menu");


btnClose.addEventListener("click", function(){
    dropdownMenu.classList.toggle("show")
})
btnMenu.addEventListener("click", function(){
   dropdownMenu.classList.toggle("show")
})


/*Javascript for Scroll event */
const navbar = document.getElementById('scrolled-nav');

const handlerScroll = () =>{

    const scrollPosition = window.scrollY;
   
    if(scrollPosition > 0){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
 }
}
window.addEventListener('scroll', handlerScroll);
document.addEventListener('DOMContentLoaded', handlerScroll);