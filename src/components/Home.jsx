export default function Home(){
    return(
        <>
        <section className="hero">
        <div className="hero-content">
            <h1>Premium T-Shirts for Developers</h1>
            <p>Comfortable. Stylish. Geek approved.</p>
            <a href="#" className="btn">Shop Now</a>
        </div>
        </section>
        
        <section className="products">
        <h2>Featured T-Shirts</h2>

        <div className="product-grid">

            <div className="card">
            <img src="images/shirt1.jpg"/>
            <h3>JavaScript Ninja</h3>
            <p>$29.99</p>
            <button>Add to Cart</button>
            </div>

            <div className="card">
            <img src="images/shirt2.jpg"/>
            <h3>Code Mode</h3>
            <p>$24.99</p>
            <button>Add to Cart</button>
            </div>

            <div className="card">
            <img src="images/shirt3.jpg"/>
            <h3>Bug Hunter</h3>
            <p>$26.99</p>
            <button>Add to Cart</button>
            </div>

        </div>
        </section>

        <section className="features">

        <div className="feature">
            <div className="icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>Orders over $50</p>
        </div>

        <div className="feature">
            <div className="icon">💳</div>
            <h3>Secure Payment</h3>
            <p>All major cards accepted</p>
        </div>

        <div className="feature">
            <div className="icon">⭐</div>
            <h3>Best Quality</h3>
            <p>Premium cotton</p>
        </div>

        </section>

        <section className="testimonials">

        <h2>What Our Customers Say</h2>

        <div className="testimonial">
            <p>"Best developer t-shirts I've ever bought!"</p>
            <span>- Alex</span>
        </div>

        <div className="testimonial">
            <p>"Great quality and fast delivery."</p>
            <span>- Maria</span>
        </div>

        </section>
        </>
    );
}