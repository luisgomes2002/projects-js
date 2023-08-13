const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/10/Monkey-D.-Luffy.webp?fit=1200%2C800&ssl=1",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/10/Monkey-D.-Luffy.webp?fit=1200%2C800&ssl=1",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/10/Monkey-D.-Luffy.webp?fit=1200%2C800&ssl=1",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/10/Monkey-D.-Luffy.webp?fit=1200%2C800&ssl=1",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/10/Monkey-D.-Luffy.webp?fit=1200%2C800&ssl=1",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/10/Monkey-D.-Luffy.webp?fit=1200%2C800&ssl=1",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/10/Monkey-D.-Luffy.webp?fit=1200%2C800&ssl=1",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/10/Monkey-D.-Luffy.webp?fit=1200%2C800&ssl=1",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/10/Monkey-D.-Luffy.webp?fit=1200%2C800&ssl=1",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/10/Monkey-D.-Luffy.webp?fit=1200%2C800&ssl=1",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]

const sectionCenter = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')


window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu)
  displayMenuButtons()
})

const displayMenuItems = (menuItem) =>{
  const displayMenu = menuItem.map(
    (item) => {
      return ` <article class="menu-item">
      <img src=${item.img} alt="menu item" class="photo" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
      </div>
    </article>`
    }
  ).join('')

  sectionCenter.innerHTML = displayMenu
}

const displayMenuButtons = () => {
  const categories = menu.reduce(
    (values, item) => {
      if(!values.includes(item.category)){
        values.push(item.category)
      }
      return values
    }, ['all']
  )

  const categoryBtns = categories.map(
    (category) => {
      return `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`
    }
  ).join('')

  btnContainer.innerHTML = categoryBtns
  const filterBtn = btnContainer.querySelectorAll('.filter-btn')

  filterBtn.forEach((btns) => {
    btns.addEventListener('click', (e) => {     
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter((menuItem) => {
        if(menuItem.category === category){
          return menuItem
        }
    })
  
       if(category === 'all') {
        displayMenuItems(menu)
       }else {
        displayMenuItems(menuCategory)
       }
      })
  })
}

