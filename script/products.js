document.addEventListener("DOMContentLoaded", function() {
        let prod = document.getElementById("prod");
        let products = [
            {
                id: 1,
                image: 'https://i.postimg.cc/t4C5HkQ6/1kg-Brazil-Medium-Dark-Roast-Beans.jpg',
                description: 'Product 1 description',
                price: 9.99
            },
            {
                id: 2,
                image: 'https://i.postimg.cc/t4C5HkQ6/1kg-Brazil-Medium-Dark-Roast-Beans.jpg',
                description: 'Product 2 description',
                price: 109.99
            },
            // ... add more products here ...
        ];
    
        products.forEach((product) => {
            prod.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="Product Image">
                <div class="card-body">
                    <h5 class="card-title">Product ${product.id}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">Price: $${product.price}</p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#checkoutModal">Add to Cart</button>
                </div>
            </div>`;
        });
    
        // Get the modal element
        let checkoutModal = document.getElementById("checkoutModal");
    
        // Handle the Add to Cart button click event
        let addToCartButtons = document.querySelectorAll(".btn.btn-primary[data-bs-toggle='modal']");
        addToCartButtons.forEach((button) => {
            button.addEventListener("click", function() {
                // Perform the checkout logic here
                // You can show a success message, update the cart, etc.
    
                // Close the modal after checkout
                let modalInstance = bootstrap.Modal.getInstance(checkoutModal);
                modalInstance.hide();
            });
        });
    });
    