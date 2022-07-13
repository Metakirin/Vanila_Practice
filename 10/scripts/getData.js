const getData = () => {
  const list = document.querySelector('.cross-sell__list')
  const btn = document.querySelector('.cross-sell__add')

  let stack = 4
  let count = 1

  const render = (data) => {
    list.innerHTML = ''

    data.forEach((i) => {
      list.insertAdjacentHTML(
        'beforeend',
        `
            <li>
                <article class="cross-sell__item">
                <img
                    class="cross-sell__image"
                    src="./${i.photo}"
                    alt="${i.id}"
                />
                <h3 class="cross-sell__title">
                    ${i.name}
                </h3>
                <p class="cross-sell__price">${i.price}₽</p>
                <button
                    type="button"
                    class="button button_buy cross-sell__button"
                >
                    Купить
                </button>
                </article>
            </li>
        `
      )
    })
  }

  const sliceArr = (data, index) => {
    return data.slice(0, index)
  }

  const changeData = (data) => {
    const newStack = stack * count

    render(sliceArr(data, newStack))

    if (data.length > newStack) {
      count++
    } else {
      btn.style.display = 'none'
    }
  }

  const getGoods = () => {
    fetch('https://iphone13promopage-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => changeData(data))
      .catch((e) => console.error(e.message))
  }

  btn.addEventListener('click', getGoods)

  getGoods()
}

getData()
