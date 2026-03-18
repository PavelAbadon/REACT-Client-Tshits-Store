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
            <a href="/register">Register</a>
            <a href="/login">Login</a>
            <a href="#">Logout</a>
            </div>
        </div>
        </header>
        
    )
}