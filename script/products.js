
    
    

let products = JSON.parse(localStorage.getItem("product-list")) ?
    JSON.parse(localStorage.getItem("product-list")) :
    localStorage.setItem('product-list', JSON.stringify(
        [
            {
                id: 1,
                name: 'LONE LIGHT',
                image: 'https://i.ibb.co/Npmt8nV/guJpm10.jpg',
                description: 'Dark Roast',
                price: 170.99
            },
            {
                id: 2,
                name: 'NOMADIC',
                image: 'https://i.ibb.co/GTCCsZq/QhooN19.jpg',
                description: 'Dark Roast',
                price: 109.99
            },
            {
                id: 3,
                name : 'PUBLIC GOODS COFFEE',
                image: 'https://i.ibb.co/mqsbrn1/DCrpZ2x.jpg',
                description: '100% Arabica Blend',
                price: 209.99
            },
            {
                id: 4,
                name : 'FIVE WATT',
                image: 'https://i.ibb.co/xSPdfsC/1ZuDWS5.jpg',
                description: 'House Blend',
                price: 199.99
            },
            {
                id: 5,
                name : 'ESPRESSO',
                image: 'https://i.ibb.co/ggTgtLW/1VsTpQX.jpg',
                description: '1Medium Roast',
                price: 209.99
            },
            {
                id: 6,
                name : 'BOHEMIAN',
                image: 'https://i.ibb.co/FbR50Sb/xuE4Khm.jpg',
                description: 'Indonesia Sumatra',
                price: 279.99
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

