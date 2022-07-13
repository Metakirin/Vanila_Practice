const sendForm = () => {
  const form = document.querySelector('.card-details__button_delivery')
  const cardDetails = document.querySelector('.card-details__title')
  const modal = document.querySelector('.modal')
  const modalTitle = modal.querySelector('.modal__title')
  const modalClose = modal.querySelector('.modal__close')
  const modalForm = modal.querySelector('form')

  form.addEventListener('click', () => {
    modal.style.display = 'flex'
    modalTitle.textContent = cardDetails.textContent
  })

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
  })

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const labels = modal.querySelectorAll('.modal__label')
    const sendMsg = {}

    labels.forEach((l) => {
      const span = l.querySelector('span')
      const input = l.querySelector('input')

      sendMsg[span.textContent] = input.value

      input.value = ''
      modal.style.display = 'none'
    })

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(sendMsg),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => console.log(res))
  })
}

sendForm()
