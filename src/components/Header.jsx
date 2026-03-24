import { useContext } from "react";
import { Link } from "react-router";
import UserContext from "../contexts/UserContext";

export default function Header(){
    const {isAuthenticated, user, onLogout, isAdmin} = useContext(UserContext);

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
                {!isAuthenticated 
                ?
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </>
                :
                <>
                <button onClick={onLogout}>Logout</button>
                <p>{user.username}</p>
                {isAdmin && (
                            <Link to="/adminPanel" className="admin-link">
                                Admin Panel
                            </Link>
                        )}
                
                </>
                }          
            
            </div>
            
        </div>
        </header>
        
    )
}