const navMenu = document.querySelector("#nav");
const navLink = document.querySelectorAll('#nav li')

// const onActiveMenuLink = 
function menuLink() {
navMenu.addEventListener('click', (e) => {
    console.log(e.target);
    
    navLink.forEach( el => el.classList.remove('nav_active'))
    e.target.classList.add('active');
})
}
menuLink()