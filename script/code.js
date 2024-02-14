document.addEventListener("DOMContentLoaded", function() {
let landElement = document.getElementById("land");

// Landing page
let content = `
<section class="hero-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center">
                <h1 class="hero-title">Welcome to AP Grains</h1>
                <p class="hero-description">Indulge in the finest selection of coffee and grains</p>
                <p class="hero-description">Experience the perfect blend of aroma and flavor</p>
            </div>
            <div class="col-lg-6 d-flex justify-content-center">
                <img src="https://i.ibb.co/d6cX259/ae188b259dfd8742412a6ad4aefb729d-removebg-preview.png" alt="coffee image" class="img-fluid">
            </div>
        </div>
    </div>
</section>



<!-- About and featured -->


<section class="about-section">
    <div class="container">
        <h1 class="text-center" id="about">About Us</h1>
        <p>Our coffee shop is dedicated to providing the highest quality coffee experience to our customers. We source our coffee beans from the finest coffee-growing regions around the world and carefully roast them to bring out their unique flavors and aromas.</p>
        <p>At our coffee shop, we believe in the art of coffee-making. Our skilled baristas are passionate about their craft and strive to create the perfect cup of coffee every time. Whether you prefer a rich and bold espresso or a smooth and creamy cappuccino, we have a wide selection of specialty coffee beverages to satisfy your cravings.</p>
        <p>But it's not just about the coffee. We also take pride in creating a welcoming and cozy atmosphere for our customers. Our coffee shop is designed to be a gathering place for coffee lovers, where you can relax, socialize, or catch up on work while enjoying your favorite brew.</p>
        <p>Join us at our coffee shop and embark on a journey of taste and discovery. Experience the warmth of our hospitality, the aroma of freshly brewed coffee, and the joy of a truly exceptional coffee experience.</p>
    </div>
</section>

<section id="products" class="text-center">
    <h1>Featured</h1>
    <div class="row mt-5">
        <div class="col-lg-4 product-item">
            <img src="https://i.ibb.co/GTCCsZq/QhooN19.jpg" alt="item image" class="img-fluid">
            <h3>NOMADIC</h3>
            <p>Dark Roast</p>
            <p class="text-primary">R285.00</p>
        </div>

        <div class="col-lg-4 product-item">
            <img src="https://i.ibb.co/Npmt8nV/guJpm10.jpg" alt="item image" class="img-fluid">
            <h3>LONE LIGHT</h3>
            <p>Dark Roast</p>
            <p class="text-primary">R269.00</p>
        </div>

        <div class="col-lg-4 product-item">
            <img src="https://i.ibb.co/mqsbrn1/DCrpZ2x.jpg" class="img-fluid">
            <h3>PUBLIC GOODS COFFEE</h3>
            <p>100% Arabica Blend</p>
            <p class="text-primary">R310.00</p>
        </div>
    </div>
</section>







`;
landElement.innerHTML = content;
let aboutButton = document.querySelector('a[href="#about"]');
let aboutButtonParent = aboutButton.parentElement;

let contactButton = document.createElement("a");
contactButton.classList.add("btn", "btn-primary", "shadow", "mr-2", "ml-2");
contactButton.setAttribute("data-bs-toggle", "modal");
contactButton.setAttribute("data-bs-target", "#exampleModal");
contactButton.setAttribute("data-bs-whatever", "@mdo");
contactButton.textContent = "Contact Us";


aboutButtonParent.insertBefore(contactButton, aboutButton.nextSibling);

let contactModal = new bootstrap.Modal(document.getElementById("exampleModal"));
contactButton.addEventListener("click", function() {
  contactModal.show();
});
});




  