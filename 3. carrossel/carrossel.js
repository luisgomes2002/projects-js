const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
]

const img = document.querySelector('#img')
const author = document.querySelector('#name')
const job = document.querySelector('#job')
const info = document.querySelector('#info')

const btnL = document.querySelector('#btn-left')
const btnR = document.querySelector('#btn-rigth')
const btnRandom = document.querySelector('#btn-random')

let counter = 0

window.addEventListener('DOMContentLoaded', function () {
  showPerson(counter)
})

function showPerson() {
  const item = reviews[counter]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

btnR.addEventListener('click', () => {
  counter++
  if (counter > reviews.length - 1) {
    counter = 0
  }
  showPerson()
})

btnL.addEventListener('click', () => {
  counter--
  if (counter < 0) {
    counter = reviews.length - 1
  }
  showPerson()
})

btnRandom.addEventListener('click', () => {
  counter = numbRandom(reviews.length, counter);
  showPerson()
})

const numbRandom = (max, previousNumber) => {
  let newNumber
  do {
    newNumber = Math.floor(Math.random() * max)
  } while (newNumber === previousNumber)

  return newNumber
}
