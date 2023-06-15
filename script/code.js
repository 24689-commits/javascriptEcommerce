let landElement = document.getElementById("land");

// Landing page
let content = `
<section class="bg-light d-flex align-items-center justify-content-center" style="background-image: url('https://i.postimg.cc/d1tKBZgW/images.jpg'); background-size: cover; background-position: center; loading='lazy' ">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center">
                <h1 id='grains'>AP Grains</h1>
                <p class="lead" id='lead'>Awaken your senses at our cozy coffee haven,</p>
                <p class="lead" id='lead'>where aromatic brews and delightful flavors blend to create a caffeine-infused paradise</p>
                <p><a href="#about" class="btn btn-primary shadow mr-2">About Us</a></p>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 d-flex justify-content-center align-items-center">
                <img src="https://i.postimg.cc/pLFtvHzg/Coffee-1.jpg" alt="landing image" class="img-fluid">
            </div>
        </div>
    </div>
</section>


<!-- About and featured -->


<h1  class="text-center" id='about'>About Us</h1>
<p>Our coffee shop is dedicated to providing the highest quality coffee experience to our customers. We source our coffee beans from the finest coffee-growing regions around the world and carefully roast them to bring out their unique flavors and aromas. <br> <br>

At our coffee shop, we believe in the art of coffee-making. Our skilled baristas are passionate about their craft and strive to create the perfect cup of coffee every time. Whether you prefer a rich and bold espresso or a smooth and creamy cappuccino, we have a wide selection of specialty coffee beverages to satisfy your cravings.<br> <br>

But it's not just about the coffee. We also take pride in creating a welcoming and cozy atmosphere for our customers. Our coffee shop is designed to be a gathering place for coffee lovers, where you can relax, socialize, or catch up on work while enjoying your favorite brew.<br> <br>

Join us at our coffee shop and embark on a journey of taste and discovery. Experience the warmth of our hospitality, the aroma of freshly brewed coffee, and the joy of a truly exceptional coffee experience.</p>
<h1 id="products" class="text-center">Featured</h1>
<div class="row mt-5">
    <div class="col-lg-4 text-center">
        <img src="https://i.postimg.cc/1tLCmqcQ/Alesso-Platinum-Coffee-Beans-1kg-Decaf.webp" alt="item image" class="img-fluid">
        <h3>DECAF</h3>
        <p>Nutty, caramel Round Body</p>
        <p class="text-primary">R285.00</p>
    </div>
    
    <div class="col-lg-4 text-center">
        <img src="https://i.postimg.cc/2y74sb0T/Alesso-Platinum-Coffee-Beans-1-kg-Argento-Italian-Espresso.webp" alt="item image" class="img-fluid">
        <h3>ARGENTO</h3>
        <p>Cherry, Juicy, Creamy, Cocoa, Nutty</p>
        <p class="text-primary">R269.00</p>
    </div>
    
    <div class="col-lg-4 text-center">
        <img src="https://i.postimg.cc/PJjWVzQP/Alesso-Platinum-Coffee-Beans-1-kg-Argento-Italian-Espresso.webp" class="img-fluid">
        <h3>ARGENTO Expresso</h3>
        <p>Cherry, Juicy, Creamy, Cocoa, Nutty</p>
        <p class="text-primary">R310.00</p>
    </div>
</div>





`;
landElement.innerHTML = content;
