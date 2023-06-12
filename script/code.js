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


<!-- Products section -->



<h1 id="products" class="text-center">Products</h1>
<div class="row mt-5">
    <div class="col-lg-4">
        <img src="path_to_your_image" alt="item image" class="img-fluid">
        <h3>Item Title</h3>
        <p>Item Description</p>
        <p class="text-primary">$9.99</p>
    </div>
    
    <div class="col-lg-4">
        <img src="path_to_your_image" alt="item image" class="img-fluid">
        <h3>Item Title</h3>
        <p>Item Description</p>
        <p class="text-primary">$14.99</p>
    </div>
    
    <div class="col-lg-4">
        <img src="path_to_your_image" alt="item image" class="img-fluid">
        <h3>Item Title</h3>
        <p>Item Description</p>
        <p class="text-primary">$19.99</p>
    </div>
</div>

<div class="row mt-5">
    <div class="col-lg-4">
        <img src="path_to_your_image" alt="item image" class="img-fluid">
        <h3>Item Title</h3>
        <p>Item Description</p>
        <p class="text-primary">$9.99</p>
    </div>
    
    <div class="col-lg-4">
        <img src="path_to_your_image" alt="item image" class="img-fluid">
        <h3>Item Title</h3>
        <p>Item Description</p>
        <p class="text-primary">$14.99</p>
    </div>
    
    <div class="col-lg-4">
        <img src="path_to_your_image" alt="item image" class="img-fluid">
        <h3>Item Title</h3>
        <p>Item Description</p>
        <p class="text-primary">$19.99</p>
    </div>
</div>

<div class="row mt-5">
    <div class="col-lg-4">
        <img src="path_to_your_image" alt="item image" class="img-fluid">
        <h3>Item Title</h3>
        <p>Item Description</p>
        <p class="text-primary">$9.99</p>
    </div>
    
    <div class="col-lg-4">
        <img src="path_to_your_image" alt="item image" class="img-fluid">
        <h3>Item Title</h3>
        <p>Item Description</p>
        <p class="text-primary">$14.99</p>
    </div>
    
    <div class="col-lg-4">
        <img src="path_to_your_image" alt="item image" class="img-fluid">
        <h3>Item Title</h3>
        <p>Item Description</p>
        <p class="text-primary">$19.99</p>
    </div>
</div>

`;
landElement.innerHTML = content;