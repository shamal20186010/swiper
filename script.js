var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  gragCursor: 'true',
  speed: 500,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev" ,
  },

  breakpoints :{
  0: {
    slidesPerView: 1,
  },
      520: {
    slidesPerView: 2,
  },
      950: {
    slidesPerView: 3,
  },
}
  });