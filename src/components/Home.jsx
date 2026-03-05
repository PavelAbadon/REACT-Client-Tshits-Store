export default function Home(){
    return(
        <>
        <section class="hero">
        <div class="hero-content">
            <h1>Premium T-Shirts for Developers</h1>
            <p>Comfortable. Stylish. Geek approved.</p>
            <a href="#" class="btn">Shop Now</a>
        </div>
        </section>
        
        <section class="products">
        <h2>Featured T-Shirts</h2>

        <div class="product-grid">

            <div class="card">
            <img src="images/shirt1.jpg"/>
            <h3>JavaScript Ninja</h3>
            <p>$29.99</p>
            <button>Add to Cart</button>
            </div>

            <div class="card">
            <img src="images/shirt2.jpg"/>
            <h3>Code Mode</h3>
            <p>$24.99</p>
            <button>Add to Cart</button>
            </div>

            <div class="card">
            <img src="images/shirt3.jpg"/>
            <h3>Bug Hunter</h3>
            <p>$26.99</p>
            <button>Add to Cart</button>
            </div>

        </div>
        </section>

        <section class="features">

        <div class="feature">
            <div class="icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>Orders over $50</p>
        </div>

        <div class="feature">
            <div class="icon">💳</div>
            <h3>Secure Payment</h3>
            <p>All major cards accepted</p>
        </div>

        <div class="feature">
            <div class="icon">⭐</div>
            <h3>Best Quality</h3>
            <p>Premium cotton</p>
        </div>

        </section>

        <section class="testimonials">

        <h2>What Our Customers Say</h2>

        <div class="testimonial">
            <p>"Best developer t-shirts I've ever bought!"</p>
            <span>- Alex</span>
        </div>

        <div class="testimonial">
            <p>"Great quality and fast delivery."</p>
            <span>- Maria</span>
        </div>

        </section>
        </>
    );
}