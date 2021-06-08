let mySwiper = new Swiper('.main-visual__swiper',{
    autoplay:{
        delay:3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
		reverseDirection: false
    },
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
        type:'bullet',
    }
});
let mySwiper02 = new Swiper('.text-place-swiper02',{
    loop:true,
    slideToClickedSlide: true,
    controller:{
        control: mySwiper,
        inverse: false,
        by: 'slide'
    },
    slidesPerView:1,
    slideToClickedSlide: true,
});
mySwiper.controller.control = mySwiper02;


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
