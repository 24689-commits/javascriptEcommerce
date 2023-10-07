
    
    

let products = JSON.parse(localStorage.getItem("product-list")) ?
    JSON.parse(localStorage.getItem("product-list")) :
    localStorage.setItem('product-list', JSON.stringify(
        [
            {
                id: 1,
                name: 'DECAF',
                image: 'https://i.postimg.cc/1tLCmqcQ/Alesso-Platinum-Coffee-Beans-1kg-Decaf.webp',
                description: 'Nutty, Caramel Round Body',
                price: 170.99
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
                price: 209.99
            },
            {
                id: 4,
                name : 'ARABICA',
                image: 'https://i.postimg.cc/pLGBVjR6/1kg-Brazil-Medium-Roast-Beans.jpg',
                description: 'Italiano Espresso',
                price: 199.99
            },
            {
                id: 5,
                name : 'Strictly coffee',
                image: 'https://i.postimg.cc/kMZgqpd3/Strictly-Coffee-Jackson-Brown-Blend-Ground-1kg-Uganda.jpg',
                description: '1KG Jackson Brown',
                price: 209.99
            },
            {
                id: 6,
                name : 'ARGENTO',
                image: 'https://i.postimg.cc/PJjWVzQP/Alesso-Platinum-Coffee-Beans-1-kg-Argento-Italian-Espresso.webp',
                description: 'Cherry, Juicy, Creamy',
                price: 279.99
            },
            {
                id: 7,
                name : 'Strictly coffee',
                image: 'https://i.postimg.cc/kMZgqpd3/Strictly-Coffee-Jackson-Brown-Blend-Ground-1kg-Uganda.jpg',
                description: '1KG Jackson Brown',
                price: 209.99
            },
            {
                id: 8,
                name : 'ARGENTO',
                image: 'https://i.postimg.cc/PJjWVzQP/Alesso-Platinum-Coffee-Beans-1-kg-Argento-Italian-Espresso.webp',
                description: 'Medium to dark, Roast beans',
                price: 279.99
            },
            {
                id: 9,
                name : 'ARABICA',
                image: 'https://i.postimg.cc/MKYD444x/1kg-Home-Blend-Coffee-Medium-Roast-Beans.jpg',
                description: 'Home Roast',
                price: 199.99
            }
        ]));
// products.js
let cart = []; 

const prod = document.getElementById("prod");
prod.innerHTML = '';
localStorage.setItem('checkout-list', JSON.stringify(cart));

function displayProducts(products) {
    try {
        products.forEach((product) => {
            prod.innerHTML += `
                <div class="card text-center" style="width: 100%;">
                    <img src="${product.image}" class="card-img-top" alt="Product Image" loading='lazy'>
                    <div class="card-body">
                        <h5 class="card-title text-center">${product.name}</h5>
                        <p class="card-text text-center">${product.description}</p>
                        <p class="card-text text-center">Price: R${product.price}</p>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#checkoutModal" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
                    </div>
                </div>`;
                // cart.push(product)
                // localStorage.setItem('checkout-list', JSON.stringify(cart))
        });
    } catch (e) {
        location.reload();
    }
}


document.addEventListener("DOMContentLoaded", function () {
    displayProducts(products);

    const filterButton = document.getElementById("filterButton");
    filterButton.addEventListener("click", function () {
        const maxPrice = 200;
        const filteredProducts = products.filter(product => product.price < maxPrice);
        displayProducts(filteredProducts);
    });
});

function addToCart(item) {
    cart.push(item)
    console.log(cart);
    localStorage.setItem('checkout-list', JSON.stringify(cart))
    alert('You have successfully added the item to cart')
}

