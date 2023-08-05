const button = document.querySelector('#button')
const closeButton = document.querySelector('#closeButton')
const modal = document.querySelector('.modal')
const background = document.querySelector('.background')

button.addEventListener('click', () => {
  modal.classList.toggle('openModal')
  background.classList.toggle('modal-open')
  background.classList.add('filter')
})

closeButton.addEventListener('click', () => {
  modal.classList.remove('openModal')
  background.classList.remove('modal-open')
  background.classList.remove('filter')
})
