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
// const store = document.querySelector("item-list store--item-list")
function storeitems() {
  // store.innerHTML = '';

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
      cartitems(s.id, s.name)
    }

    li.appendChild(addButton)

    store.appendChild(li)
  });
}
storeitems();

const items = document.querySelector("#items-cart")

function cartitems(id, name) {
  const li = document.createElement("li")
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
  li.appendChild(reduce)

  const span = document.createElement("span")
  span.className="quantity-text center"
  span.innerHTML="1"
  li.appendChild(span)

  const add = document.createElement("button")
  add.className="quantity-btn add-btn center"
  add.innerHTML="+"
  li.appendChild(add)

  items.appendChild(li)
}