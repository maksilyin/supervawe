// Подключение свайпера
import Swiper from "swiper";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
Swiper.use([Navigation, Pagination, Thumbs]);

const casesSlider = new Swiper(".cases__wrapper", {
  slidesPerView: 1,
  spaceBetween: 20,
  watchSlidesVisibility: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".cases__slider-controls-next",
    prevEl: ".cases__slider-controls-prev",
  },
  pagination: {
    el: ".cases__progressbar",
    type: "progressbar",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.1,
    },
  },
});

const ourWorksSlider = new Swiper(".our-works__slider", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  watchSlidesVisibility: true,
  enabled: true,
  pagination: {
    el: ".our-works__progressbar",
    type: "progressbar",
  },
  breakpoints: {
    768: {
      enabled: false,
    },
  },
});

const teamSlider = new Swiper(".team__slider", {
  slidesPerView: 1.1,
  watchSlidesVisibility: true,
  enabled: true,
  spaceBetween: 16,
  pagination: {
    el: ".team__progressbar",
    type: "progressbar",
  },
  breakpoints: {
    576: {
      // При 576px и больше
      enabled: false, // Отключаем слайдер
      slidesPerView: "auto", // Слайды в их естественной ширине
      autoWidth: true, // Разрешаем свою ширину
      width: null, // Отключаем принудительный расчет ширины
      spaceBetween: 0,
    },
  },
});

const detailSlider = new Swiper(".detail-page__table-games-swiper", {
  slidesPerView: 1.1,
  watchSlidesVisibility: true,
  enabled: true,
  spaceBetween: 24,
  pagination: {
    el: ".detail-page__table-progressbar",
    type: "progressbar",
  },
  breakpoints: {
    768: {
      // При 576px и больше
      enabled: false, // Отключаем слайдер
      slidesPerView: "auto", // Слайды в их естественной ширине
      autoWidth: true, // Разрешаем свою ширину
      width: null, // Отключаем принудительный расчет ширины
      spaceBetween: 0,
    },
  },
});

const processAutomationSlider = new Swiper(".process-automation__slider", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".process-automation__slider-controls-next",
    prevEl: ".process-automation__slider-controls-prev",
  },
  pagination: {
    el: ".process-automation__progressbar",
    type: "progressbar",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    990: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

const equipmentSlider = new Swiper(".equipment__slider", {
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: ".equipment__slider-controls-next",
    prevEl: ".equipment__slider-controls-prev",
  },
});
