function startCountdown(durationInDays) {}

window.onload = () => {
  startCountdown(3);
};

function toggleDisplay(view) {
  document.querySelector(".bookInRow").classList.remove("visible");
  document.querySelector(".bookInTables").classList.remove("visible");
  document.querySelector(".labelForRow").classList.remove("inputSelected");
  document.querySelector(".labelForTables").classList.remove("inputSelected");

  if (view === "row") {
    document.querySelector(".bookInRow").classList.add("visible");
    document.querySelector(".labelForRow").classList.add("inputSelected");
  } else if (view === "table") {
    document.querySelector(".bookInTables").classList.add("visible");
    document.querySelector(".labelForTables").classList.add("inputSelected");
  }
}

function detailsDisplay(show) {
  document.querySelector(".dtailsProduct").classList.remove("visible");
  document.querySelector(".custReview").classList.remove("visible");
  document.querySelector(".detProductBtn").classList.remove("btnSelected");
  document.querySelector(".revProductBtn").classList.remove("btnSelected");

  if (show === "details") {
    document.querySelector(".dtailsProduct").classList.add("visible");
    document.querySelector(".detProductBtn").classList.add("btnSelected");
  } else if (show === "reviews") {
    document.querySelector(".custReview").classList.add("visible");
    document.querySelector(".revProductBtn").classList.add("btnSelected");
  }
}

const increaseBtn = document.querySelector(".fa-plus");
const decreaseBtn = document.querySelector(".fa-minus");
const counterElement = document.getElementById("counter");

increaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(counterElement.textContent);
  counterElement.textContent = currentValue + 1;
});

decreaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(counterElement.textContent);
  if (currentValue > 0) {
    counterElement.textContent = currentValue - 1;
  }
});

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
        spaceBetween: 20,
      },
      200: {
        slidesPerView: 1,
        spaceBetween: 10,
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
        spaceBetween: 20,
      },
      200: {
        slidesPerView: 2,
        spaceBetween: 18,
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
      activeSlide.classList.add("testimonialSwiperSlideActive");
    },
    slideChange: function () {
      var allSlides = this.slides;
      for (var i = 0; i < allSlides.length; i++) {
        allSlides[i].classList.remove("testimonialSwiperSlideActive");
        allSlides[i].style.opacity = 0.4;
      }
      var activeSlide = this.slides[this.activeIndex];
      activeSlide.classList.add("testimonialSwiperSlideActive");
      activeSlide.style.opacity = 1;
    },
  },
});
