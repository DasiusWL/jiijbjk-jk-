const menu = document.querySelector('#mobile')
const menuLink = document.querySelector('.topbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLink.classList.toggle('active') 
})