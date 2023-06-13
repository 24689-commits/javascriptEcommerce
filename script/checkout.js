document.addEventListener("DOMContentLoaded", function() {
    // Get the table body element
    let tableBody = document.querySelector("table tbody");
  
    // Get all the rows in the table
    let rows = tableBody.getElementsByTagName("tr");
  
    // Calculate the total
    let total = 0;
  
    // Iterate through each row and calculate the total
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      let priceCell = row.cells[1];
      let price = parseFloat(priceCell.innerText.replace("$", ""));
      total += price;
    }
  
    // Update the total in the table footer
    let totalCell = document.querySelector("table tfoot tr th:last-child");
    totalCell.innerText = "$" + total.toFixed(2);
  });
  