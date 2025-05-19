window.onload = function() {
  let swiper = new Swiper(".swiper", {
    loop: true,
    initialSlide: 2,
    grabCursor: true,
    centeredSlides: true,
    speed: 1100,
    spaceBetween: 70,
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    effect: "coverflow",
    coverflowEffect: {
      rotate: 45,
      stretch: 50,
      depth: 20,
      modifier: 1,
      slideShadows: false,
      useTransform: true
    }
  })
}