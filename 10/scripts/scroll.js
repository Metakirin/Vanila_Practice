const scrollFunc = () => {
  const link = document.querySelector('.header-menu__item a')
  const linkDetails = document.querySelector(
    '.card-details__link-characteristics'
  )
  const links = document.querySelectorAll('.header-menu__item a')

  const newArr = [...links, linkDetails]

  seamless.polyfill()

  newArr.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const id = link.getAttribute('href').slice(1)
      const section = document.getElementById(id)

      if (section) {
        seamless.elementScrollIntoView(section, {
          behavior: 'smooth',
          block: 'start',
        })
      } else {
        seamless.elementScrollIntoView(
          document.querySelector('#characteristics'),
          {
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          }
        )
      }
    })
  })
}

scrollFunc()
