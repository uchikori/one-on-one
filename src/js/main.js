let mySwiper = new Swiper('.main-visual__swiper',{
    // autoplay:{
    //     delay:8000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
	// 	reverseDirection: false
    // },
    slidesPerView: 1,
    speed:1000,
    loop:true,
    shortSwipes: false,
    longSwipes: false,
    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
    pagination:{
        el:'.swiper-pagination',
        type:'bullets',
        clickable: true
    }
});


/**
 * 
 * menu-open
 * 
 */
const humberger = document.querySelector('.humberger');
const menuToggle = document.querySelector('.global-navi');
humberger.addEventListener('click', function(){
    humberger.classList.toggle('menu-active');
    if(humberger.classList.contains('menu-active')){
        menuToggle.classList.add('menu-open');
    } else {
        menuToggle.classList.remove('menu-open');
    }
});