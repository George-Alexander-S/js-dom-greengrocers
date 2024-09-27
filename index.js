const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};

const store = document.querySelector("#store-list");

function storeitems() {

  state.items.map((s) => {
    console.log(s)
    const li = document.createElement("li")

    const img = document.createElement("img")
    let imgstring = `/assets/icons/${s.id}.svg`
    img.src = imgstring
    li.appendChild(img)

    const addButton = document.createElement("button")
    addButton.innerHTML = "Add to cart"
    addButton.onclick = function () {
      cartitems(s.id, s.name, s.price)
    }

    li.appendChild(addButton)

    store.appendChild(li)
  });
}
storeitems();

const items = document.querySelector("#items-cart")


function cartitems(id, name, price) {
  //Check cart array
  
  let product = state.cart.find(c => c.id === id)
  if (!product) {
    let newobject = {
      id: id,
      name: name,
      price: price,
      quantity: 1
    }
    state.cart.push(newobject);
  }
  else {
    product.quantity ++
  }

 render()

}

function renderCart(id, name, quantity) {
  const li = document.createElement("li")
  li.className=`${id}`
  const img = document.createElement("img")
  let imgstring = `/assets/icons/${id}.svg`
  img.src = imgstring
  li.appendChild(img)

  const p = document.createElement("p")
  p.innerHTML = name
  li.appendChild(p)

  const reduce = document.createElement("button")
  reduce.className="quantity-btn remove-btn center"
  reduce.innerHTML="-"
  reduce.onclick = function () {
    reduceCount(id);
  }
  li.appendChild(reduce)

  const span = document.createElement("span")
  span.className="quantity-text center"
  span.innerHTML=quantity
  li.appendChild(span)

  const add = document.createElement("button")
  add.className="quantity-btn add-btn center"
  add.innerHTML="+"
  add.onclick = function () {
    increaseCount(id);
  }
  li.appendChild(add)

  items.appendChild(li)
}

function reduceCount(id) {
  let found = state.cart.find(c => c.id === id)
  if (found) {
    if (found.quantity > 0) {
      found.quantity --;
      render()
    }
    // else if (found.quantity === 1) {
    //   found.quantity --;
    //   const element = document.getElementsByClassName(id);
    //   while (element.length > 0) {
    //     element[0].parentNode.removeChild(element[0]);
    //   }
    //   render()
    // }
    if (found.quantity === 0) {
      state.cart.splice(state.cart.indexOf(found))
      render()
    }
  }
  console.log(state.cart)
}

function increaseCount(id) {
  let found = state.cart.find(c => c.id === id)
  if (found) {
    found.quantity ++;
    render()
  }
}

function render () {
  items.innerHTML = ''

  let totalspan = document.querySelector(".total-number")
  let total = 0

  state.cart.map((c) => {
    if (c.quantity > 0) {
      renderCart(c.id, c.name, c.quantity)
      total += c.price * c.quantity
    }
  });
  console.log(state.cart)
  totalspan.innerHTML = (Math.round(total * 100) / 100).toFixed(2);
}