const inventory = {
  shoes: [
    {
      name: "Sneaker",
      price: 100,
      colors: ["blue", "black"],
      sizes: [40, 42, 44, 46],
    },
    {
      name: "Running Shoes",
      price: 120,
      colors: ["red", "gray", "black"],
      sizes: [38, 40, 42, 44, 46],
    },
    {
      name: "Loafers",
      price: 90,
      colors: ["brown", "black"],
      sizes: [39, 41, 43, 45],
    },
    {
      name: "Boots",
      price: 150,
      colors: ["tan", "black"],
      sizes: [40, 42, 44, 46, 48],
    },
    {
      name: "Sandals",
      price: 60,
      colors: ["white", "black", "blue"],
      sizes: [39, 41, 43, 45, 47],
    },
    {
      name: "High-Tops",
      price: 110,
      colors: ["black", "white", "green"],
      sizes: [40, 41, 42, 44, 46],
    },
  ],
  pants: [
    {
      name: "Jeans",
      price: 50,
      colors: ["blue", "black"],
      sizes: [32, 34, 36],
    },
    {
      name: "Chinos",
      price: 55,
      colors: ["beige", "navy", "olive"],
      sizes: [30, 32, 34, 36, 38],
    },
    {
      name: "Joggers",
      price: 45,
      colors: ["gray", "black", "green"],
      sizes: [28, 30, 32, 34, 36],
    },
    {
      name: "Cargo Pants",
      price: 65,
      colors: ["black", "khaki", "green"],
      sizes: [30, 32, 34, 36, 38, 40],
    },
    {
      name: "Slim Fit Trousers",
      price: 70,
      colors: ["gray", "black", "navy"],
      sizes: [30, 32, 34, 36, 38],
    },
    {
      name: "Sweatpants",
      price: 40,
      colors: ["black", "gray", "navy"],
      sizes: [28, 30, 32, 34, 36],
    },
  ],
};

// dynamic element creation: tagName and content provided
function el(tagName, children) {
  const element = document.createElement(tagName);

  if (Array.isArray(children)) {
    element.append(...children);
  } else if (children) {
    element.append(children);
  }

  return element;
}

//
function renderedArticle(item) {
  const name = el("h2", item.name);
  const price = el("p", `$${item.price}`);
  const cartButton = el("button", "Add to cart");
  cartButton.classList.add("add-to-cart");
  cartButton.dataset.item = JSON.stringify({
    name: item.name,
    price: item.price,
  });

  return el("article", [name, price, cartButton]); // Create article
}

const cart = [];
const container = document.getElementById("container");

// container.innerHTML = '<script>alert("hi!")</script>'; //will not be parsed, browser protects
// container.innerHTML = '<img src="wasdas" onerror="alert(`hi!`)" />';

const search = el("input");
search.classList.add("search");
search.placeholder = "Search";
container.append(search);

const itemsContainer = el("div");
itemsContainer.classList.add("items-container");
container.appendChild(itemsContainer);

const items = [...inventory.pants, ...inventory.shoes];
itemsContainer.replaceChildren(...items.map(renderedArticle));

itemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const itemData = JSON.parse(e.target.dataset.item);
    cart.push(itemData);
    console.log("Cart:", cart);
  }
});

function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

search.addEventListener(
  "input",
  debounce((e) => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    itemsContainer.replaceChildren(...filteredItems.map(renderedArticle));
  }, 500)
);

// Homework
// - dispatch custom event to add items to cart
// - add checkout form to html, with a shipping address and submit button
//     - add validation so that the form is not submitted if there are validation errors
