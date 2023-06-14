let productList = document.querySelector("#tblAdmin tbody");
let productData = JSON.parse(localStorage.getItem("product-list")) || [];
let itemId = productData.length > 0 ? productData[productData.length - 1].id + 1 : 1;

function addProduct() {
  let productDescription = document.querySelector("#itemDescription");
  let productContent = document.querySelector("#itemContent");
  let image = document.querySelector("#itemImage");

  if (productDescription.value && productContent.value && image.value) {
    productData.push(
      new Product(itemId, image.value, productDescription.value, productContent.value, new Date())
    );
    localStorage.setItem("product-list", JSON.stringify(productData));

    clearForm();
    displayProducts();
    itemId++;
  } else {
    alert("Please fill in all fields");
  }
}

function Product(idItem, img, desc, cont, dt) {
  this.id = idItem;
  this.image = img;
  this.description = desc;
  this.content = cont;
  this.date = dt;
}

function clearForm() {
  let productDescription = document.querySelector("#itemDescription");
  let productContent = document.querySelector("#itemContent");
  let image = document.querySelector("#itemImage");

  productDescription.value = "";
  productContent.value = "";
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
      <td>${item.content}</td>
      <td>
        <button class="btn btn-primary btn-edit" data-id="${item.id}" onclick="editProduct(${item.id})">Edit</button>
        <button class="btn btn-danger btn-delete" data-id="${item.id}" onclick="deleteProduct(${item.id})">Delete</button>
      </td>
    `;
    productList.appendChild(row);
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
    let productDescription = document.querySelector("#itemDescription");
    let productContent = document.querySelector("#itemContent");
    let image = document.querySelector("#itemImage");

    productDescription.value = product.description;
    productContent.value = product.content;
    image.value = product.image;
    itemId = product.id;
  }
}

displayProducts();
