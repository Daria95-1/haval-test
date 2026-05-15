document.addEventListener('DOMContentLoaded', () => {
  if (!window.Fancybox) {
    console.error('Fancybox не загружен!')
    return
  }

  Fancybox.bind('[data-fancybox]', {
    dragToClose: true,
    animated: true,
    showClass: 'fancybox-zoomIn',
    hideClass: 'fancybox-zoomOut',
  })

  document.querySelectorAll('.popup-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const phone = form.querySelector('input[name="phone"]').value
      if (!phone.trim()) {
        alert('Введите номер телефона')
        return
      }
      alert(`Ваш номер ${phone} отправлен!`)
      Fancybox.close()
      form.reset()
    })
  })
})
