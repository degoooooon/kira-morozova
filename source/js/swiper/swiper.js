import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';

export function initDiplomasSwiper() {
  new Swiper('.diplomas__swiper', {
    modules: [Navigation],
    watchOverflow: true,
    spaceBetween: 30,
    wrapperClass: 'diplomas__list',
    slideClass: 'diplomas__item',
    navigation: {
      nextEl: '.diplomas__button--next',
      prevEl: '.diplomas__button--prev',
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      1440: { slidesPerView: 4, spaceBetween: 32, allowTouchMove: false },
    },
  });
}
