import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import useForm from "../hooks/useForm"
import { useNavigate } from "react-router";

export default function Login(){
    const {onLogin} = useContext(UserContext);
    const navigate = useNavigate();
    
    const loginHandler = async (values) =>{
        //console.log(values);
        const {username, password} = values;

        const response = await fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password}),
            });

            
        const result = await response.json();
        console.log(result);
        if (!response.ok) {
            throw new Error(result.message);
        }
                
        onLogin(result);
        navigate('/');

    }
    const {values, changeHandler, submitHandler} = useForm({
        username: '',
        password: ''
    },
    loginHandler
    );

    return(
        <section className="auth">

            <h2>Login</h2>

            <form onSubmit={submitHandler}>

                <label>Username</label>
                <input name="username" id="username" value={values.username} onChange={changeHandler} type="text" />

                <label>Password</label>
                <input name="password" id="password" value={values.password} onChange={changeHandler} type="password" />

                <button>Login</button>

            </form>

        </section>
    )
}