window.addEventListener('DOMContentLoaded', function () {
  let cartItems = JSON.parse(localStorage.getItem('product-list')) || [];
  let orderSummaryTableBody = document.getElementById('orderSummaryTableBody');
  let total = 0;

  cartItems.forEach(function (item) {
    total += item.price;
    orderSummaryTableBody.innerHTML += `
    <tr>
      <td>${item.name}</td>
      <td>R${item.price}</td>
    </tr>
    `;
  });

  let totalElement = document.getElementById('total');
  totalElement.textContent = `R${total.toFixed(2)}`;
});
