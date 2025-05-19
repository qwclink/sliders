window.onload = function () {
  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    initialSlide: 2,
    grabCursor: true,
    centeredSlides: true,
    speed: 1100,
    spaceBetween: 40,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
    },
    mousewheel: {
      thresholdDelta: 70
    }
  });
};