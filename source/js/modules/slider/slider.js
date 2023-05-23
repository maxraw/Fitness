export function initSlider() {
  new Swiper('.trainers__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 33,
    grabCursor: true,
    navigation: {
      nextEl: '.trainers__button-next',
      prevEl: '.trainers__button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },
      1220: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  new Swiper('.reviews__slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 33,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
  });
}
