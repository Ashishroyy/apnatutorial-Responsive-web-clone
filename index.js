// reposive
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rigth-nav')

burger.addEventListener('click', ()=> {
    navlist.classList.toggle('v-class');
    rightnav.classList.toggle('v-class')
    navbar.classList.toggle('h-nav');

})


