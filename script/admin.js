let addProductModal = new bootstrap.Modal(document.getElementById("modal"));
let productDescription = document.querySelector("#itemDescription");
let productPrice = document.querySelector("#itemPrice");
let image = document.querySelector("#itemImage");
let productList = document.querySelector("#tblAdmin tbody");
let productData = JSON.parse(localStorage.getItem("product-list")) || [];
let itemId = productData.length > 0 ? productData[productData.length - 1].id + 1 : 1;

function addProduct() {
  if (productDescription.value && productPrice.value && image.value ) {
    const existingIds = productData.map(item => item.id);
    let newId = 1;
    while (existingIds.includes(newId)) {
      newId++;
    }

    productData.push(
      new Product(newId, image.value, productDescription.value, productPrice.value, new Date())
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

function Product(idItem, img, desc, price, dt) {
  this.id = idItem;
  this.image = img;
  this.description = desc;
  this.price = price;
  this.date = dt;
}

function clearForm() {
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
