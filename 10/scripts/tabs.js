const tabsFunc = () => {
  const tabs = document.querySelectorAll('.card-detail__change')
  const tabstitle = document.querySelector('.card-details__title')
  const tabsPrice = document.querySelector('.card-details__price')
  const tabsImage = document.querySelector('.card__image_item')

  const tabsOptions = [
    {
      name: 'Graphite',
      memory: '128',
      price: 60000,
      image: 'img/iPhone-graphite.webp',
    },
    {
      name: 'Silver',
      memory: '256',
      price: 65000,
      image: 'img/iPhone-silver.webp',
    },
    {
      name: 'Sierra Blue',
      memory: '512',
      price: 70000,
      image: 'img/iPhone-sierra_blue.webp',
    },
  ]

  const changeContent = (index) => {
    tabstitle.textContent = `Смартфон Apple IPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`
    tabsPrice.textContent = `${tabsOptions[index].price}₽`

    tabsImage.setAttribute('src', tabsOptions[index].image)

    document.title = tabsOptions[index].name
  }

  const changeActiveTabs = (index) => {
    tabs.forEach((tab, i) => {
      tab.classList.remove('active')
      if (index === i) {
        tab.classList.add('active')
      }
    })

    changeContent(index)
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      changeActiveTabs(i)
    })
  })

  changeContent(0)
}

tabsFunc()
