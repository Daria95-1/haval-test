document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.car-card__image-swiper').forEach((swiperEl) => {
    const paginationEl = swiperEl
      .closest('.car-card')
      .querySelector('.car-card__pagination')

    if (paginationEl) {
      new Swiper(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
          el: paginationEl,
          clickable: true,
        },
      })
    }
  })
})
