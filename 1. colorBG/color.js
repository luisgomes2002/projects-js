const back = document.querySelector('.button')
const h1 = document.querySelector('.h1')

const setbtn = () => {
  const randNum = Math.floor(Math.random() * 16777215).toString(16)
  console.log(randNum)
  document.body.style.backgroundColor = '#' + randNum
  h1.textContent = 'Color: #' + randNum
}

back.addEventListener('click', setbtn)