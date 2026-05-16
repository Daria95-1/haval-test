document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.car-card__image-swiper').forEach((swiperEl) => {
    const paginationEl = swiperEl
      .closest('.car-card')
      .querySelector('.car-card__pagination')
    if (!paginationEl) return

    const colors = swiperEl.dataset.bullets
      ? swiperEl.dataset.bullets.split(',')
      : []

    paginationEl.innerHTML = ''
    colors.forEach((color, index) => {
      const bullet = document.createElement('span')
      bullet.classList.add('swiper-pagination-bullet')
      bullet.style.backgroundColor = `var(--color-car-${color})`
      bullet.dataset.index = index
      paginationEl.appendChild(bullet)
    })

    const swiper = new Swiper(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
    })

    const bullets = Array.from(paginationEl.children)

    const setActiveBullet = (index) => {
      bullets.forEach((b, i) => {
        if (i === index) b.classList.add('swiper-pagination-bullet-active')
        else b.classList.remove('swiper-pagination-bullet-active')
      })
    }

    setActiveBullet(swiper.activeIndex)

    swiper.on('slideChange', () => {
      setActiveBullet(swiper.activeIndex)
    })

    bullets.forEach((bullet, idx) => {
      bullet.addEventListener('click', () => {
        swiper.slideTo(idx)
      })
    })
  })
})
