export default function Header(){
    return (
        
        <header class="header">
        <div class="container nav">
            <div class="logo">T-Shirt Store</div>

            <nav>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">My Account</a></li>
            </ul>
            </nav>

            <div class="auth-links">
            <a href="/register">Register</a>
            <a href="/login">Login</a>
            <a href="#">Logout</a>
            </div>
        </div>
        </header>
        
    )
}