// nav button 

const navBtn = document.getElementById('bars-btn')
const navMenu = document.querySelector('.nav-menu')

navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_active')
})