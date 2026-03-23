import { createContext } from "react";

const UserContext = createContext({
    user: {}, 
    onLogin () {}, 
    isAuthenticated: false,
    isAdmin: false,
    onLogout (){}
});

export default UserContext;