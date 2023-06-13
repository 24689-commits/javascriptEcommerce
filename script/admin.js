// Function to open the modal
function openModal() {
  document.getElementById("modal").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Function to generate a new ID for an item
function generateItemId() {
  // Retrieve the last stored ID from local storage
  let lastItemId = localStorage.getItem("lastItemId");

  // Generate a new ID based on the last stored ID
  let newItemId = lastItemId ? parseInt(lastItemId) + 1 : 1;

  // Update the lastItemId in local storage
  localStorage.setItem("lastItemId", newItemId);

  return newItemId;
}

// Function to add an item to the table and Local Storage
function addItem() {
  // Get the input values from the modal
  let itemImage = document.getElementById("itemImage").value;
  let itemDescription = document.getElementById("itemDescription").value;
  let itemPrice = document.getElementById("itemPrice").value;

  // Generate a new ID for the item
  let itemId = generateItemId();

  // Create a new table row
  let table = document.getElementById("tblAdmin");
  let newRow = table.insertRow(table.rows.length);

  // Insert cells into the new row
  let cellId = newRow.insertCell(0);
  let cellImage = newRow.insertCell(1);
  let cellDescription = newRow.insertCell(2);
  let cellPrice = newRow.insertCell(3);
  let cellAction = newRow.insertCell(4);

  // Set the cell values
  cellId.innerHTML = itemId;
  cellImage.innerHTML = "<img src='" + itemImage + "' alt='Item Image' width='100'>";
  cellDescription.innerHTML = itemDescription;
  cellPrice.innerHTML = itemPrice;
  cellAction.innerHTML = "<button onclick='editItem(this)'>Edit</button> <button onclick='deleteItem(this)'>Delete</button>";

  // Save the item data to Local Storage
  saveItemToLocalStorage(itemId, itemImage, itemDescription, itemPrice);

  // Clear the input fields
  document.getElementById("itemImage").value = "";
  document.getElementById("itemDescription").value = "";
  document.getElementById("itemPrice").value = "";

  // Close the modal
  closeModal();
}

// Function to edit an item in the table and Local Storage
function editItem(button) {
  let row = button.parentNode.parentNode;
  let cells = row.getElementsByTagName("td");

  // Get the cell values
  let itemId = cells[0].innerHTML;
  let itemImage = cells[1].innerHTML;
  let itemDescription = cells[2].innerHTML;
  let itemPrice = cells[3].innerHTML;

  // Set the input values in the modal
  document.getElementById("itemId").value = itemId;
  document.getElementById("itemImage").value = itemImage;
  document.getElementById("itemDescription").value = itemDescription;
  document.getElementById("itemPrice").value = itemPrice;

  // Remove the row from the table
  row.parentNode.removeChild(row);

  // Open the modal for editing
  openModal();
}

// Function to delete an item from the table and Local Storage
function deleteItem(button) {
  let row = button.parentNode.parentNode;
  let itemId = row.cells[0].innerHTML;

  // Remove the row from the table
  row.parentNode.removeChild(row);

  // Remove the item data from Local Storage
  removeItemFromLocalStorage(itemId);
}

// Function to save an item to Local Storage
function saveItemToLocalStorage(itemId, itemImage, itemDescription, itemPrice) {
  // Retrieve existing item data from Local Storage
  let items = localStorage.getItem("items");
  let itemList = items ? JSON.parse(items) : [];

  // Create a new item object
  let newItem = {
    itemId: itemId,
    itemImage: itemImage,
    itemDescription: itemDescription,
    itemPrice: itemPrice
  };

  // Add the new item to the item list
  itemList.push(newItem);

  // Update the items data in Local Storage
  localStorage.setItem("items", JSON.stringify(itemList));
}

// Function to remove an item from Local Storage
function removeItemFromLocalStorage(itemId) {
  // Retrieve existing item data from Local Storage
  let items = localStorage.getItem("items");
  let itemList = items ? JSON.parse(items) : [];

  // Find the index of the item to remove
  let index = itemList.findIndex(function(item) {
    return item.itemId === itemId;
  });

  // Remove the item from the item list
  if (index !== -1) {
    itemList.splice(index, 1);
  }

  // Update the items data in Local Storage
  localStorage.setItem("items", JSON.stringify(itemList));
}

// Function to initialize the table with items from Local Storage
function initializeTable() {
  // Retrieve existing item data from Local Storage
  let items = localStorage.getItem("items");
  let itemList = items ? JSON.parse(items) : [];

  let table = document.getElementById("tblAdmin");

  // Iterate over the item list and populate the table
  itemList.forEach(function(item) {
    let newRow = table.insertRow(table.rows.length);

    // Insert cells into the new row
    let cellId = newRow.insertCell(0);
    let cellImage = newRow.insertCell(1);
    let cellDescription = newRow.insertCell(2);
    let cellPrice = newRow.insertCell(3);
    let cellAction = newRow.insertCell(4);

    // Set the cell values
    cellId.innerHTML = item.itemId;
    cellImage.innerHTML = "<img src='" + item.itemImage + "' alt='Item Image' width='100'>";
    cellDescription.innerHTML = item.itemDescription;
    cellPrice.innerHTML = item.itemPrice;
    cellAction.innerHTML = "<button onclick='editItem(this)'>Edit</button> <button onclick='deleteItem(this)'>Delete</button>";
  });
}

// Initialize the table when the page loads
initializeTable();
