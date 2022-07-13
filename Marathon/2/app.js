const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')

items.forEach((i) => i.addEventListener('dragstart', dragStart))
items.forEach((i) => i.addEventListener('dragend', dragEnd))

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
}

function dragStart(event) {
  if (localStorage.getItem('kingdoom') == true) {
    localStorage.setItem('kingdoom', event.target.dataset.id)
  } else {
    localStorage.setItem('kingdoom', event.target.dataset.id)
  }

  event.target.classList.add('hold')
  setTimeout(() => {
    event.target.classList.add('hide')
  }, 0)
}
function dragEnd(event) {
  event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
  event.preventDefault()
}
function dragenter(event) {
  event.target.classList.add('hovered')
}
function dragleave(event) {
  event.target.classList.remove('hovered')
}
function dragdrop(event) {
  event.target.classList.remove('hovered')

  const kingdoom = localStorage.getItem('kingdoom')

  const searchedKingdoom = Array.from(items).find(
    (i) => i.dataset.id === kingdoom
  )

  event.target.append(searchedKingdoom)
}
