function startCountdown(durationInDays) {
  const now = new Date();
  const targetDate = new Date(
    now.getTime() + durationInDays * 24 * 60 * 60 * 1000
  );

  const countdownInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const distance = targetDate - currentTime;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").innerText = String(seconds).padStart(
      2,
      "0"
    );

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.querySelector(".countdown").innerHTML = "Countdown Finished!";
    }
  }, 1000);
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

// const emblaNode = document.querySelector(".embla");
// const options = { loop: true };
// const emblaApi = EmblaCarousel(emblaNode, options);
