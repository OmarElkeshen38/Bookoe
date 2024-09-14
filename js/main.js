function startCountdown(durationInDays) {
  
}

window.onload = () => {
  startCountdown(3);
};

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 10,
    direction: "horizontal",
    loop: true,

    breakpoints: {
      988: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      200: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },

    autoplay: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".flashSaleSwiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    direction: "horizontal",
    loop: true,

    breakpoints: {
      988: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },

    autoplay: true,

    pagination: {
      el: ".flashSaleSwiperPaginatiion",
    },

    // navigation: {
    //   nextEl: ".nextBtn",
    //   prevEl: ".prevBtn",
    // },

    scrollbar: {
      el: ".flashSaleSwiperScrollbar",
    },
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper2", {
    slidesPerView: 6,
    spaceBetween: 10,
    direction: "horizontal",
    loop: true,

    breakpoints: {
      988: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },

    // autoplay: true,

    pagination: {
      el: ".swiper2Paginatiion",
    },

    navigation: {
      nextEl: ".nextBtn",
      prevEl: ".prevBtn",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});


var swiper = new Swiper(".testimonialSwiper", {
  // slidesPerView: 3,
  // spaceBetween: 25,
  breakpoints: {
    988: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
  loop: true,
  autoplay: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      var activeSlide = this.slides[this.activeIndex];
      activeSlide.classList.add('testimonialSwiperSlideActive');
    },
    slideChange: function () {
      var allSlides = this.slides;
      for (var i = 0; i < allSlides.length; i++) {
        allSlides[i].classList.remove('testimonialSwiperSlideActive');
        allSlides[i].style.opacity = 0.4;
      }
      var activeSlide = this.slides[this.activeIndex];
      activeSlide.classList.add('testimonialSwiperSlideActive');
      activeSlide.style.opacity = 1;
    },
  },
});