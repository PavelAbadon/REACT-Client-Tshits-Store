import { useEffect, useState } from "react";
import TshirtCard from "./TshirtCard";

export default function Home(){
    const [tshirts, setTshirts] = useState([]);

    //Get all tshirts 
    useEffect(() =>{
        (async ()=>{
            const response = await fetch('http://localhost:3030/data/catalog');
            const result = await response.json();
            setTshirts(Object.values(result));
        })();
    },[]);

    // това тук е само да видя дали мога да взема тениските по този начин по който си мисля. Мога сега трябва да измисля признак по който да се показват препоръчаните тениски
    const featuredTShirts = tshirts

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
            {featuredTShirts.map(tshirt => (<TshirtCard key={tshirt._id} {...tshirt } /> ))}
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