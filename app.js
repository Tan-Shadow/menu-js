const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/food1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/food2.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/food3.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/food4.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/food5.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/food6.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/food7.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/food8.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/food9.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

const sectionCenter = document.querySelector('.section-center')
const filterBtns = document.querySelectorAll('.filter-btn')

// load all items
// here we are displaying all the items on the load
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu)
})

// filter items
// now here we are taking each btn fron filter btns
// and adding an eventListener to it 
// we will see the dataset id of the btn that we have clicked
// then we will filter out the elements from the menu by
// looking if they have the category similar to the
// dataset id of the btn we have clicked
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id
        const categorizedItems = menu.filter(function (menuItem){
            if (menuItem.category === category){
                return menuItem
            }
        })


        // if the btn we clicked has the dataset id of all
        // then we willl call displaymenuitems with all the items
        // there are in the menu item array  
        if (category === 'all') {
            displayMenuItems(menu)
        }

        // else call the displaymenuitems function with only
        // the categorized items that we have filtered
        // through that have the same dataset id and category property 
        else {
            displayMenuItems(categorizedItems)
        }
        // console.log(categorizedItems)
    })
})

// this is takin an array and setts the markup to some html  
function displayMenuItems(menuItems) {

    // maps over the menuItems array 
    // makes a markup and replaces certain things with
    // certain things
    let displayMenu = menuItems.map( item => {
        return `<atricle class="menu-item">
                    <img src="${item.img}" class="photo" alt="${item.title}" />
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </header>
                        <p class="item-text">
                            ${item.desc}
                        </p>
                    </div>
                </atricle>`
    })
    // now here we are taking the display menu array and joing it
    // as we dont need those commas and  in our markup
    displayMenu = displayMenu.join('')
    // we will add that html to our markup
    sectionCenter.innerHTML = displayMenu
}