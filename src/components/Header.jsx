import { Link } from "react-router";

export default function Header(){
    return (
        
        <header className="header">
        <div className="container nav">
            <div className="logo">T-Shirt Store</div>

            <nav>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">My Account</a></li>
            </ul>
            </nav>

            <div className="auth-links">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="#">Logout</Link>
            </div>
        </div>
        </header>
        
    )
}