import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.car-card__image-swiper').forEach((swiperEl) => {
//     const paginationEl =
//       swiperEl.parentElement.querySelector('.swiper-pagination')

//     new Swiper(swiperEl, {
//       slidesPerView: 1,
//       spaceBetween: 0,
//       loop: true,
//       pagination: {
//         el: paginationEl,
//         clickable: true,
//       },
//     })
//   })
// })

document.querySelectorAll('.car-card__image-swiper').forEach((swiperEl) => {
  const paginationEl = swiperEl
    .closest('.car-card')
    .querySelector('.car-card__pagination')

  new Swiper(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: paginationEl,
      clickable: true,
    },
  })
})
