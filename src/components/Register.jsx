import { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../contexts/UserContext";
import useForm from "../hooks/useForm";

export default function Register(){
    const navigate = useNavigate();
    const { onRegister } = useContext(UserContext);

    const registerHandler = async (values) => {
        const { username, email, password, confirmPassword } = values;

        // validation
        if (password !== confirmPassword) {
            return alert('Passwords do not match');
        }

        try {
            const response = await fetch('http://localhost:3030/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            onRegister(data);

            navigate('/');

        } catch (error) {
            alert(error.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }, registerHandler);

    return(
        <section className="auth">

            <h2>Register</h2>

            <form onSubmit={submitHandler}>

                <label>Username</label>
                <input 
                    name="username"
                    value={values.username}
                    onChange={changeHandler}
                    type="text"
                />

                <label>Email</label>
                <input 
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                    type="email"
                />

                <label>Password</label>
                <input 
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                    type="password"
                />

                <label>Repeat Password</label>
                <input 
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={changeHandler}
                    type="password"
                />

                <button type="submit">Create Account</button>

            </form>

        </section>
    );
}