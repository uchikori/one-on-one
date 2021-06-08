"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mySwiper = new Swiper('.main-visual__swiper', {
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  },
  speed: 1000,
  loop: true,
  shortSwipes: false,
  longSwipes: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: false,
    renderFraction: function renderFraction(currentClass, totalClass) {
      return '0' + '<span class="' + currentClass + '"></span>' + '<span class="swiper-pagination-border"></span>' + '0' + '<span class="' + totalClass + '"></span>';
    }
  }
});
var mySwiper02 = new Swiper('.text-place-swiper02', _defineProperty({
  loop: true,
  slideToClickedSlide: true,
  controller: {
    control: mySwiper,
    inverse: false,
    by: 'slide'
  },
  slidesPerView: 1
}, "slideToClickedSlide", true));
mySwiper.controller.control = mySwiper02;
/**
 * 
 * menu-open
 * 
 */

var humberger = document.querySelector('.header__humberger');
var menuToggle = document.querySelector('.header__global-navi');
humberger.addEventListener('click', function () {
  humberger.classList.toggle('js-menu-active');

  if (humberger.classList.contains('js-menu-active')) {
    menuToggle.classList.add('js-open');
  } else {
    menuToggle.classList.remove('js-open');
  }
});