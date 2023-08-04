const buttonOpen = document.querySelectorAll('#button')
const sidebar = document.querySelector('.sidebar')

buttonOpen.forEach(button => {
  button.addEventListener('click', () => {
    sidebar.classList.toggle('visivel')
  })
})
