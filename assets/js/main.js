document.querySelector('#btn-menuBurger-open').addEventListener('click', function(e) {
    // console.log('Click !');
    let menuMobile = document.querySelector('.menu-mobile')

    menuMobile.classList.add('active');
});

document.querySelector('#btn-menuBurger-close').addEventListener('click', function(e) {
    // console.log('Click !');
    let menuMobile = document.querySelector('.menu-mobile')

    menuMobile.classList.remove('active');
});