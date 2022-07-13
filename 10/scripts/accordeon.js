const accordeonFunc = () => {
  const chItems = document.querySelectorAll('.characteristics__item')

  function closeAccordeon(arr) {
    arr.forEach((i) => {
      const chBtn = i.querySelector('.characteristics__title')
      const chContent = i.querySelector('.characteristics__description')

      chContent.style.height = ''
      chBtn.classList.remove('active')
    })
  }

  document.onload = () => closeAccordeon(chItems)

  chItems.forEach((i) => {
    const chBtn = i.querySelector('.characteristics__title')
    const chContent = i.querySelector('.characteristics__description')

    chBtn.addEventListener('click', () => {
      if (chContent.classList.contains('open')) {
        chContent.style.height = ''
      } else {
        closeAccordeon(chItems)
        chContent.style.height = chContent.scrollHeight + 'px'
      }

      chBtn.classList.toggle('active')
      chContent.classList.toggle('open')
    })
  })
}

accordeonFunc()
