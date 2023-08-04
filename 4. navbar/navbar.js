const button = document.querySelector('#toggle');
const sectionTwo = document.querySelector('.section-two');
const icon = document.querySelector('#icon')
let toggle = false

button.addEventListener('click', () => {
  sectionTwo.classList.toggle('visible');
  toggle = !toggle


  if (toggle) {
    icon.classList.remove('fa-solid', 'fa-bars')
    icon.classList.add('fa-solid', 'fa-xmark')
  } else {
    icon.classList.remove('fa-solid', 'fa-xmark')
    icon.classList.add('fa-solid', 'fa-bars')
  }
});