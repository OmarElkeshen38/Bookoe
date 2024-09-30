// Countdown Function
function startCountdown(durationInDays) {
  // Countdown logic will go here
}

window.onload = () => {
  startCountdown(3);
};


const toggleButton = document.getElementById('toggle-button');
const slideBar = document.getElementById('slide-bar');
const closeButton = document.getElementById('close-button');
const overlay = document.getElementById('overlay');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const arrows = document.querySelectorAll('.arrow');
const backButtons = document.querySelectorAll('.back-button');

toggleButton.addEventListener('click', () => {
    slideBar.classList.toggle('open');
    overlay.style.display = slideBar.classList.contains('open') ? 'block' : 'none';
});

closeButton.addEventListener('click', () => {
    slideBar.classList.remove('open');
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    slideBar.classList.remove('open');
    overlay.style.display = 'none';
});

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');

        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Open subTab when any arrow is clicked
arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        const targetId = arrow.getAttribute('data-target');

        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Show Tab 1 but activate the corresponding sub-tab
        document.querySelector('.tab[data-tab="tab1"]').classList.add('active');
        document.getElementById(targetId).classList.add('active');
    });
});

// Back button functionality for all sub-tabs
backButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        document.querySelector('.tab[data-tab="tab1"]').classList.add('active');
        document.getElementById('tab1').classList.add('active');
    });
});




// Toggle Book Display (Row or Table)
function toggleDisplay(view) {
  const bookInRow = document.querySelector('.bookInRow');
  const bookInTables = document.querySelector('.bookInTables');
  const labelForRow = document.querySelector('.labelForRow');
  const labelForTables = document.querySelector('.labelForTables');

  bookInRow.classList.remove('visible');
  bookInTables.classList.remove('visible');
  labelForRow.classList.remove('inputSelected');
  labelForTables.classList.remove('inputSelected');

  if (view === 'row') {
    bookInRow.classList.add('visible');
    labelForRow.classList.add('inputSelected');
  } else if (view === 'table') {
    bookInTables.classList.add('visible');
    labelForTables.classList.add('inputSelected');
  }
}

// Toggle Product Details or Reviews
function detailsDisplay(show) {
  const dtailsProduct = document.querySelector('.dtailsProduct');
  const custReview = document.querySelector('.custReview');
  const detProductBtn = document.querySelector('.detProductBtn');
  const revProductBtn = document.querySelector('.revProductBtn');

  dtailsProduct.classList.remove('visible');
  custReview.classList.remove('visible');
  detProductBtn.classList.remove('btnSelected');
  revProductBtn.classList.remove('btnSelected');

  if (show === 'details') {
    dtailsProduct.classList.add('visible');
    detProductBtn.classList.add('btnSelected');
  } else if (show === 'reviews') {
    custReview.classList.add('visible');
    revProductBtn.classList.add('btnSelected');
  }
}

// Counter for Product Quantity
const increaseBtn = document.querySelector('.fa-plus');
const decreaseBtn = document.querySelector('.fa-minus');
const counterElement = document.getElementById('counter');

// Check if buttons exist to avoid null errors
if (increaseBtn && decreaseBtn && counterElement) {
  increaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(counterElement.textContent);
    counterElement.textContent = currentValue + 1;
  });

  decreaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(counterElement.textContent);
    if (currentValue > 0) {
      counterElement.textContent = currentValue - 1;
    }
  });
}

// Initialize Swipers After DOM is Loaded
document.addEventListener('DOMContentLoaded', function () {
  // Swiper for mySwiper1
  new Swiper('.mySwiper1', {
    slidesPerView: 3,
    spaceBetween: 10,
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      988: { slidesPerView: 3, spaceBetween: 20 },
      767: { slidesPerView: 2, spaceBetween: 20 },
      200: { slidesPerView: 1, spaceBetween: 10 },
    },
    autoplay: true,
    pagination: { el: '.swiper-pagination' },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: { el: '.swiper-scrollbar' },
  });

  // Swiper for flashSaleSwiper
  new Swiper('.flashSaleSwiper', {
    slidesPerView: 6,
    spaceBetween: 10,
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      988: { slidesPerView: 6, spaceBetween: 20 },
      767: { slidesPerView: 3, spaceBetween: 20 },
      200: { slidesPerView: 2, spaceBetween: 18 },
    },
    autoplay: true,
    pagination: { el: '.flashSaleSwiperPaginatiion' },
    scrollbar: { el: '.flashSaleSwiperScrollbar' },
  });

  // Swiper for mySwiper2
  new Swiper('.mySwiper2', {
    slidesPerView: 6,
    spaceBetween: 10,
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      988: { slidesPerView: 6, spaceBetween: 20 },
      767: { slidesPerView: 3, spaceBetween: 30 },
      200: { slidesPerView: 2, spaceBetween: 30 },
    },
    pagination: { el: '.swiper2Paginatiion' },
    navigation: {
      nextEl: '.nextBtn',
      prevEl: '.prevBtn',
    },
    scrollbar: { el: '.swiper-scrollbar' },
  });

  // Swiper for testimonialSwiper
  new Swiper('.testimonialSwiper', {
    breakpoints: {
      988: { slidesPerView: 3, spaceBetween: 25 },
      767: { slidesPerView: 2, spaceBetween: 30 },
      300: { slidesPerView: 1, spaceBetween: 30 },
    },
    loop: true,
    autoplay: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
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
});
