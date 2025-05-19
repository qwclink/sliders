let swiper = new Swiper(".swiper", {
  initialSlide: 3,
  centeredSlides: true,
  loop: true,
  speed: 900,
  grabCursor: true,
  allowTouchMove: true, // Включить свайпы!
  effect: "coverflow",
  coverflowEffect: {
    rotate: -10,
    stretch: -45,
    depth: 90,
    modifier: 1,
    slideShadows: true,
  },
  mousewheel: {
    thresholdDelta: 50,
    sensitivity: 1, // исправлено!
  },
  pagination: {
    el: ".swiper-pagination"
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5
    }
  }
});

// Функция для навешивания обработчика flip на кнопку активного слайда
function flipActiveSlide() {
  // Сначала снять все обработчики с кнопок (на случай повторной инициализации)
  document.querySelectorAll('.swiper-slide button').forEach(btn => {
    btn.onclick = null;
  });

  const activeSlide = document.querySelector(".swiper-slide-active");
  if (!activeSlide) return;
  const button = activeSlide.querySelector("button");
  if (button) {
    button.onclick = (event) => {
      event.stopPropagation();
      activeSlide.classList.add("flipped");
    };
  }
}

// Клик по активному слайду закрывает flip
document.querySelectorAll(".swiper-slide").forEach(slide => {
  slide.addEventListener("click", () => {
    if (slide.classList.contains("swiper-slide-active") && slide.classList.contains("flipped")) {
      slide.classList.remove("flipped");
    }
  });
});

// При смене слайда сбрасываем flip и обновляем обработчик
swiper.on("slideChangeTransitionStart", () => {
  document.querySelectorAll(".swiper-slide").forEach(slide => {
    slide.classList.remove("flipped");
  });
  flipActiveSlide();
});

// Инициализация при загрузке
flipActiveSlide();
