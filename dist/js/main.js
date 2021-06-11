"use strict";

if (location.pathname === '/') {
  var mySwiper = new Swiper('.main-visual__swiper', {
    // autoplay:{
    //     delay:8000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    // 	reverseDirection: false
    // },
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    shortSwipes: false,
    longSwipes: false,
    navigation: {
      nextEl: '.next01',
      prevEl: '.prev01'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  var mySwiper02 = new Swiper('.student__swiper01', {
    spaceBetween: 26,
    initialSlide: 1,
    slidesPerView: 'auto',
    speed: 500,
    loop: true,
    // shortSwipes: false,
    // longSwipes: false,
    navigation: {
      nextEl: '.next02',
      prevEl: '.prev02'
    }
  });
  var mySwiper03 = new Swiper('.student__swiper02', {
    spaceBetween: 26,
    initialSlide: 1,
    slidesPerView: 'auto',
    speed: 500,
    loop: true,
    // shortSwipes: false,
    // longSwipes: false,
    navigation: {
      nextEl: '.next03',
      prevEl: '.prev03'
    }
  });
  var mySwiper04 = new Swiper('.student__swiper03', {
    spaceBetween: 26,
    initialSlide: 1,
    slidesPerView: 'auto',
    speed: 500,
    loop: true,
    // shortSwipes: false,
    // longSwipes: false,
    navigation: {
      nextEl: '.next04',
      prevEl: '.prev04'
    }
  });
}
/**
 * 
 * menu-open
 * 
 */


var humberger = document.querySelector('.humberger');
var menuToggle = document.querySelector('.global-navi');
humberger.addEventListener('click', function () {
  humberger.classList.toggle('menu-active');

  if (humberger.classList.contains('menu-active')) {
    menuToggle.classList.add('menu-open');
  } else {
    menuToggle.classList.remove('menu-open');
  }
});
/**
 * 
 * ソート部分反転
 * 
 */

jQuery('.js-sort').click(function () {
  jQuery(this).find('.js-sort-icon').toggleClass('sort-reverse');
});