const btns = document.querySelectorAll('.btn')
const h2 = document.querySelector('.Counter')

let counter = 0

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const style = e.currentTarget.classList
    if (style.contains('mais')) {
      counter++
    } else if (style.contains('menos')) {
      counter--
    } else {
      counter = 0
    }
    h2.textContent = counter
  })
})