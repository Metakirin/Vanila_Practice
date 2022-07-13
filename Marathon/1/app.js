const slider = (active = 0) => {
  const slides = document.querySelectorAll('.slide')

  slides[active].classList.add('active')

  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      clearClass()

      slide.classList.add('active')
    })
  })

  function clearClass() {
    slides.forEach((slide) => {
      slide.classList.remove('active')
    })
  }
}

slider(0)
