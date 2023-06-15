let addProductModal = new bootstrap.Modal(document.getElementById("modal"));
let productName = document.querySelector("#itemName");
let productDescription = document.querySelector("#itemDescription");
let productPrice = document.querySelector("#itemPrice");
let image = document.querySelector("#itemImage");
let productList = document.querySelector("#tblAdmin tbody");
let productData = JSON.parse(localStorage.getItem("product-list"))?JSON.parse(localStorage.getItem("product-list")): [ {
  id: 1,
  name: 'DECAF',
  image: 'https://i.postimg.cc/1tLCmqcQ/Alesso-Platinum-Coffee-Beans-1kg-Decaf.webp',
  description: 'Nutty, Caramel Round Body',
  price: 170.99
},
{
  id: 2,
  name: 'ARABICA',
  image: 'https://i.postimg.cc/t4C5HkQ6/1kg-Brazil-Medium-Dark-Roast-Beans.jpg',
  description: '100% Arabica coffee',
  price: 109.99
},
{
  id: 3,
  name : 'Strictly coffee',
  image: 'https://i.postimg.cc/cLG18tHF/Strictly-Coffee-Jackson-Brown-Blend-Ground-1kg.jpg',
  description: '1KG Jackson Brown',
  price: 209.99
},
{
  id: 4,
  name : 'ARABICA',
  image: 'https://i.postimg.cc/pLGBVjR6/1kg-Brazil-Medium-Roast-Beans.jpg',
  description: 'Italiano Espresso',
  price: 199.99
},
{
  id: 5,
  name : 'Strictly coffee',
  image: 'https://i.postimg.cc/kMZgqpd3/Strictly-Coffee-Jackson-Brown-Blend-Ground-1kg-Uganda.jpg',
  description: '1KG Jackson Brown',
  price: 209.99
},
{
  id: 6,
  name : 'ARGENTO',
  image: 'https://i.postimg.cc/PJjWVzQP/Alesso-Platinum-Coffee-Beans-1-kg-Argento-Italian-Espresso.webp',
  description: 'Cherry, Juicy, Creamy',
  price: 279.99
},
{
  id: 7,
  name : 'Strictly coffee',
  image: 'https://i.postimg.cc/kMZgqpd3/Strictly-Coffee-Jackson-Brown-Blend-Ground-1kg-Uganda.jpg',
  description: '1KG Jackson Brown',
  price: 209.99
},
{
  id: 8,
  name : 'ARGENTO',
  image: 'https://i.postimg.cc/PJjWVzQP/Alesso-Platinum-Coffee-Beans-1-kg-Argento-Italian-Espresso.webp',
  description: 'Medium to dark, Roast beans',
  price: 279.99
},
{
  id: 9,
  name : 'ARABICA',
  image: 'https://i.postimg.cc/MKYD444x/1kg-Home-Blend-Coffee-Medium-Roast-Beans.jpg',
  description: 'Home Roast',
  price: 199.99
}];
let itemId = productData.length > 0 ? productData[productData.length - 1].id + 1 : 1;

function addProduct() {
  if (productName.value && productDescription.value && productPrice.value && image.value ) {
    const existingIds = productData.map(item => item.id);
    let newId = 1;
    while (existingIds.includes(newId)) {
      newId++;
    }

    productData.push(
      new Product(newId,productName.value, image.value, productDescription.value, productPrice.value, new Date())
    );
    localStorage.setItem("product-list", JSON.stringify(productData));

    clearForm();
    displayProducts();
    closeModal();
  } else {
    alert("Please fill in all fields");
  }
}

function sortTableById() {
  productData.sort((a, b) => a.id - b.id);
  displayProducts();
}

function Product(idItem, name, img, desc, price, dt) {
  this.id = idItem;
  this.name = name;
  this.image = img;
  this.description = desc;
  this.price = price;
  this.date = dt;
}

function clearForm() {
  productName.value = "";
  productDescription.value = "";
  productPrice.value = "";
  image.value = "";
}

function displayProducts() {
  productList.innerHTML = "";

  productData.forEach((item) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td><img src="${item.image}" alt="Product Image" width="50"></td>
      <td>${item.description}</td>
      <td>${item.price}</td>
      <td>
        <button class="btn btn-primary btn-edit" data-id="${item.id}">Edit</button>
        <button class="btn btn-danger btn-delete" data-id="${item.id}">Delete</button>
      </td>
    `;
    productList.appendChild(row);
  });

  attachEventListeners();
}

function attachEventListeners() {
  let deleteButtons = document.querySelectorAll(".btn-delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.id);
      deleteProduct(productId);
    });
  });

  let editButtons = document.querySelectorAll(".btn-edit");
  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.id);
      editProduct(productId);
    });
  });
}

function deleteProduct(productId) {
  let index = productData.findIndex((item) => item.id === productId);
  if (index !== -1) {
    productData.splice(index, 1);
    localStorage.setItem("product-list", JSON.stringify(productData));
    displayProducts();
  }
}

function editProduct(productId) {
  let product = productData.find((item) => item.id === productId);
  if (product) {

    itemId = product.id;
    productName.value = product.name;
    image.value = product.image;
    productDescription.value = product.description;
    productPrice.value = product.price;
    addProductModal.show();
  }
}

function closeModal() {
  addProductModal.hide();
}

displayProducts();
