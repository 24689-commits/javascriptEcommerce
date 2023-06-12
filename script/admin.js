// Function to open the modal
function openModal() {
    document.getElementById("modal").style.display = "block";
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // Function to add an item to the table
  function addItem() {
    // Get the input values from the modal
    let itemId = document.getElementById("itemId").value;
    let itemImage = document.getElementById("itemImage").value;
    let itemDescription = document.getElementById("itemDescription").value;
    let itemPrice = document.getElementById("itemPrice").value;
  
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
  
    // Clear the input fields
    document.getElementById("itemId").value = "";
    document.getElementById("itemImage").value = "";
    document.getElementById("itemDescription").value = "";
    document.getElementById("itemPrice").value = "";
  
    // Close the modal
    closeModal();
  
    // Save the item to local storage
    saveItemToLocalStorage(itemId, itemImage, itemDescription, itemPrice);
  }
  
  // Function to save an item to local storage
  function saveItemToLocalStorage(itemId, itemImage, itemDescription, itemPrice) {
    // Get existing items from local storage
    let items = JSON.parse(localStorage.getItem("items")) || [];
  
    // Create a new item object
    let newItem = {
      itemId: itemId,
      itemImage: itemImage,
      itemDescription: itemDescription,
      itemPrice: itemPrice
    };
  
    // Add the new item to the array
    items.push(newItem);
  
    // Store the updated items in local storage
    localStorage.setItem("items", JSON.stringify(items));
  }
  
  // Function to edit an item in the table
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
  
  // Function to delete an item from the table
  function deleteItem(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  // Load items from local storage on page load
  function loadItemsFromLocalStorage() {
    let items = JSON.parse(localStorage.getItem("items")) || [];
  
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
  
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
      cellId.innerHTML = item.itemId;
      cellImage.innerHTML = "<img src='" + item.itemImage + "' alt='Item Image' width='100'>";
      cellDescription.innerHTML = item.itemDescription;
      cellPrice.innerHTML = item.itemPrice;
      cellAction.innerHTML = "<button onclick='editItem(this)'>Edit</button> <button onclick='deleteItem(this)'>Delete</button>";
    }
  }
  
  // Call the function to load items from local storage on page load
  loadItemsFromLocalStorage();
  