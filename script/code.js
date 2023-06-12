let landElement = document.getElementById("land");

// Landing page
let content = `
<section class="bg-light d-flex align-items-center justify-content-center" style="background-image: url('https://i.postimg.cc/jqyXpq8p/background-kofu.jpg'); background-size: cover; background-position: center;">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center">
                <h1>KwaKofu</h1>
                <p class="lead">Cinga into eCatchy bra oyhini</p>
                <p class="lead">Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet.</p>
                <p class="lead">Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet.</p>
                <p><a href="#products" class="btn btn-primary shadow mr-2">Shop Now!!</a></p>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 d-flex justify-content-center align-items-center">
                <img src="https://i.postimg.cc/pLFtvHzg/Coffee-1.jpg" alt="landing image" class="img-fluid">
            </div>
        </div>
    </div>
</section>


<!-- About and featured -->


<h1  class="text-center">About Us</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit soluta doloribus consectetur quasi, asperiores atque consequuntur minima corrupti sequi voluptatibus, at inventore deleniti eveniet vitae sit voluptatum mollitia accusantium earum.</p>
<h1 id="products" class="text-center">Featured</h1>
<div class="row mt-5">
    <div class="col-lg-4 text-center">
        <img src="https://i.postimg.cc/1tLCmqcQ/Alesso-Platinum-Coffee-Beans-1kg-Decaf.webp" alt="item image" class="img-fluid">
        <h3>Item Title</h3>
        <p>Item Description</p>
        <p class="text-primary">R285.00</p>
    </div>
    
    <div class="col-lg-4 text-center">
        <img src="https://i.postimg.cc/2y74sb0T/Alesso-Platinum-Coffee-Beans-1-kg-Argento-Italian-Espresso.webp" alt="item image" class="img-fluid">
        <h3>Item Title</h3>
        <p>Item Description</p>
        <p class="text-primary">R269.00</p>
    </div>
    
    <div class="col-lg-4 text-center">
        <img src="https://i.postimg.cc/PJjWVzQP/Alesso-Platinum-Coffee-Beans-1-kg-Argento-Italian-Espresso.webp" class="img-fluid">
        <h3>Item Title</h3>
        <p>Item Description</p>
        <p class="text-primary">R310.00</p>
    </div>
</div>



`;
landElement.innerHTML = content;