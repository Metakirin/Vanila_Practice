const board = document.querySelector('#board')
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink']
const SQUARES_NUMBER = 55

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(el) {
  const color = getRandomColor()

  el.style.backgroundColor = color
  el.style.boxShadow = `
  0 0 7px white,
  0 0 10px white,
  0 0 21px white,
  0 0 42px ${color},
  0 0 82px ${color},
  0 0 92px ${color},
  0 0 102px ${color},
  0 0 151px ${color}
  `
}

function removeColor(el) {
  el.style.backgroundColor = '#122150c2'
  el.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)

  return colors[index]
}
