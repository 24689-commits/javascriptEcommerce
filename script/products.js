let products = JSON.parse(localStorage.getItem("product-list")) ? 
JSON.parse(localStorage.getItem("product-list")) : 
localStorage.setItem('product-list', JSON.stringify(
     [
           //Sample item listings
            {
                id: 1,
                name: 'DECAF',
                image: 'https://i.postimg.cc/1tLCmqcQ/Alesso-Platinum-Coffee-Beans-1kg-Decaf.webp',
                description: 'Nutty, Caramel Round Body',
                price: 9.99
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
                price: 109.99
            },
            {
                id: 4,
                name : 'ARABICA',
                image: 'https://i.postimg.cc/pLGBVjR6/1kg-Brazil-Medium-Roast-Beans.jpg',
                description: 'Italiano Espresso',
                price: 109.99
            },
            {
                id: 5,
                name : 'Strictly coffee',
                image: 'https://i.postimg.cc/kMZgqpd3/Strictly-Coffee-Jackson-Brown-Blend-Ground-1kg-Uganda.jpg',
                description: '1KG Jackson Brown',
                price: 109.99
            },
            {
                id: 6,
                name : 'ARGENTO',
                image: 'https://i.postimg.cc/PJjWVzQP/Alesso-Platinum-Coffee-Beans-1-kg-Argento-Italian-Espresso.webp',
                description: 'Cherry, Juicy, Creamy',
                price: 109.99
            },
            {
                id: 7,
                name : 'Strictly coffee',
                image: 'https://i.postimg.cc/kMZgqpd3/Strictly-Coffee-Jackson-Brown-Blend-Ground-1kg-Uganda.jpg',
                description: '1KG Jackson Brown',
                price: 109.99
            },
            {
                id: 8,
                name : 'ARGENTO',
                image: 'https://i.postimg.cc/PJjWVzQP/Alesso-Platinum-Coffee-Beans-1-kg-Argento-Italian-Espresso.webp',
                description: 'Medium to dark, Roast beans',
                price: 109.99
            },
            {
                id: 9,
                name : 'ARABICA',
                image: 'https://i.postimg.cc/MKYD444x/1kg-Home-Blend-Coffee-Medium-Roast-Beans.jpg',
                description: 'Home Roast',
                price: 109.99
            }
            
            
            
        ]));
    
        products.forEach((product) => {
            prod.innerHTML += `
            <div class="card text-center" style="width: 100%;">
                <img src="${product.image}" class="card-img-top" alt="Product Image" loading='lazy'>
                <div class="card-body">
                    <h5 class="card-title text-center"> ${product.name}</h5>
                    <p class="card-text text-center">${product.description}</p>
                    <p class="card-text text-center">Price: R${product.price}</p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#checkoutModal">Add to Cart</button>
                </div>
            </div>`;
        });
    
        // Get the modal element
        let checkoutModal = document.getElementById("checkoutModal");
    
        // Add to Cart button
        let addToCartButtons = document.querySelectorAll(".btn.btn-primary[data-bs-toggle='modal']");
        addToCartButtons.forEach((button) => {
            button.addEventListener("click", function() {
                
    
                // Closing modal after checkout
                let modalInstance = bootstrap.Modal.getInstance(checkoutModal);
                modalInstance.hide();
            });
        });
    ;
    
    



// let products = JSON.parse(localStorage.getItem("product-list")) ? 
// JSON.parse(localStorage.getItem("product-list")) : 
// localStorage.setItem('product-list', JSON.stringify(
//   [
//     {
//                         id: 1,
//                         name: 'DECAF',
//                         image: 'https://i.postimg.cc/1tLCmqcQ/Alesso-Platinum-Coffee-Beans-1kg-Decaf.webp',
//                         description: 'Nutty, Caramel Round Body',
//                         price: 9.99
//                     },
//                     {
//                         id: 2,
//                         name: 'ARABICA',
//                         image: 'https://i.postimg.cc/t4C5HkQ6/1kg-Brazil-Medium-Dark-Roast-Beans.jpg',
//                         description: '100% Arabica coffee',
//                         price: 109.99
//                     },
//                     {
//                         id: 3,
//                         name : 'Strictly coffee',
//                         image: 'https://i.postimg.cc/cLG18tHF/Strictly-Coffee-Jackson-Brown-Blend-Ground-1kg.jpg',
//                         description: '1KG Jackson Brown',
//                         price: 109.99
//                     },
//                     {
//                         id: 4,
//                         name : 'ARABICA',
//                         image: 'https://i.postimg.cc/pLGBVjR6/1kg-Brazil-Medium-Roast-Beans.jpg',
//                         description: 'Italiano Espresso',
//                         price: 109.99
//                     },
//                     {
//                         id: 5,
//                         name : 'Strictly coffee',
//                         image: 'https://i.postimg.cc/kMZgqpd3/Strictly-Coffee-Jackson-Brown-Blend-Ground-1kg-Uganda.jpg',
//                         description: '1KG Jackson Brown',
//                         price: 109.99
//                     },
//                     {
//                         id: 6,
//                         name : 'ARGENTO',
//                         image: 'https://i.postimg.cc/PJjWVzQP/Alesso-Platinum-Coffee-Beans-1-kg-Argento-Italian-Espresso.webp',
//                         description: 'Cherry, Juicy, Creamy',
//                         price: 109.99
//                     },
//                     {
//                         id: 7,
//                         name : 'Strictly coffee',
//                         image: 'https://i.postimg.cc/kMZgqpd3/Strictly-Coffee-Jackson-Brown-Blend-Ground-1kg-Uganda.jpg',
//                         description: '1KG Jackson Brown',
//                         price: 109.99
//                     },
//                     {
//                         id: 8,
//                         name : 'ARGENTO',
//                         image: 'https://i.postimg.cc/PJjWVzQP/Alesso-Platinum-Coffee-Beans-1-kg-Argento-Italian-Espresso.webp',
//                         description: 'Medium to dark, Roast beans',
//                         price: 109.99
//                     },
//                     {
//                         id: 9,
//                         name : 'ARABICA',
//                         image: 'https://i.postimg.cc/MKYD444x/1kg-Home-Blend-Coffee-Medium-Roast-Beans.jpg',
//                         description: 'Home Roast',
//                         price: 109.99
//                     }
//   ]
// ))
// let cardContainer = document.getElementById("product-list");
// for (let i = 0; i < products.length; i++) {
//   let post = products[i];
//   let card = document.createElement("div");
//   card.className = "card";
//   let image = document.createElement("img");
//   image.src = post.imageUrl;
//   card.appendChild(image);
//   let price = document.createElement("p");
//   price.innerHTML = post.description;
//   card.appendChild(price);
//   let addToCartButton = document.createElement("button");
//   addToCartButton.textContent = "Add to Cart";
//   addToCartButton.addEventListener("click", () => {
//     console.log(`Added post with ID ${post.id} to cart.`);
//   });
//   card.appendChild(addToCartButton);
//   cardContainer.appendChild(card);
// }
// function goToCheckoutPage() {
//   window.location.href = "./html/checkout.html";
// }