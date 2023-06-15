// checkout.js
let cart = JSON.parse(localStorage.getItem('checkout-list')) 
let checkoutBody = document.getElementById('checkout-body');
let totalDescription = document.getElementById('total-description');
let totalPrice = 0;
console.log(cart);
cart.forEach((item) => {
    // let { id, name, price } = item;
   
    totalPrice += parseFloat(item.price);
    console.log(totalPrice);
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
    `;
    checkoutBody.appendChild(row);
});

totalDescription.textContent = `Total: R${totalPrice.toFixed(2)}`;





