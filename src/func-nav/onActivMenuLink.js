
const onActivMenuLink = (e) => {
    // console.log(e.currentTarget);
    const menuHomePage = document.querySelectorAll('#menu-home > li')
    menuHomePage.forEach( (el, i) => {
        if(e.currentTarget === el) {
            document.querySelectorAll('#nav > li')[i].classList.add('active');
        }
    })
     
}

export default onActivMenuLink