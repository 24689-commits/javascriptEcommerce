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
  var lastItemId = localStorage.getItem("lastItemId");

  // Generate a new ID based on the last stored ID
  var newItemId = lastItemId ? parseInt(lastItemId) + 1 : 1;

  // Update the lastItemId in local storage
  localStorage.setItem("lastItemId", newItemId);

  return newItemId;
}

// Function to add an item to the table and Local Storage
function addItem() {
  // Get the input values from the modal
  var itemImage = document.getElementById("itemImage").value;
  var itemDescription = document.getElementById("itemDescription").value;
  var itemPrice = document.getElementById("itemPrice").value;

  // Generate a new ID for the item
  var itemId = generateItemId();

  // Create a new table row
  var table = document.getElementById("tblAdmin");
  var newRow = table.insertRow(table.rows.length);

  // Insert cells into the new row
  var cellId = newRow.insertCell(0);
  var cellImage = newRow.insertCell(1);
  var cellDescription = newRow.insertCell(2);
  var cellPrice = newRow.insertCell(3);
  var cellAction = newRow.insertCell(4);

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
  var row = button.parentNode.parentNode;
  var cells = row.getElementsByTagName("td");

  // Get the cell values
  var itemId = cells[0].innerHTML;
  var itemImage = cells[1].innerHTML;
  var itemDescription = cells[2].innerHTML;
  var itemPrice = cells[3].innerHTML;

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
  var row = button.parentNode.parentNode;
  var itemId = row.cells[0].innerHTML;

  // Remove the row from the table
  row.parentNode.removeChild(row);

  // Remove the item data from Local Storage
  removeItemFromLocalStorage(itemId);
}

// Function to save an item to Local Storage
function saveItemToLocalStorage(itemId, itemImage, itemDescription, itemPrice) {
  // Retrieve existing item data from Local Storage
  var items = localStorage.getItem("items");
  var itemList = items ? JSON.parse(items) : [];

  // Create a new item object
  var newItem = {
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
  var items = localStorage.getItem("items");
  var itemList = items ? JSON.parse(items) : [];

  // Find the index of the item to remove
  var index = itemList.findIndex(function(item) {
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
  var items = localStorage.getItem("items");
  var itemList = items ? JSON.parse(items) : [];

  var table = document.getElementById("tblAdmin");

  // Iterate over the item list and populate the table
  itemList.forEach(function(item) {
    var newRow = table.insertRow(table.rows.length);

    // Insert cells into the new row
    var cellId = newRow.insertCell(0);
    var cellImage = newRow.insertCell(1);
    var cellDescription = newRow.insertCell(2);
    var cellPrice = newRow.insertCell(3);
    var cellAction = newRow.insertCell(4);

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
