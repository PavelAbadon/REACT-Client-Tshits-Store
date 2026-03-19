import { useNavigate } from "react-router";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const [ loginData, setLoginData ] = useState({
        username: 'John Dow',
        password: ''
    });

    const submitHandler = async (e) =>{
        e.preventDefault();

        //тук трбява да има валидация

        //API Call
        try {
            
            const response = await fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: loginData.username,
                    password: loginData.password,
                }),
            });

            const data = await response.json();

            // проверка за грешка
            if (!response.ok) {
                throw new Error(data.message);
            }

            console.log('Успешен вход:', data);
            navigate('/');

            // Запазване в LocaleStorage
            //localStorage.setItem('auth', JSON.stringify(data));

        } catch (error) {
            alert(error.message);
        }
    }

    const loginFormHandler = (e) =>{
        
        setLoginData((state) =>({
            ...state,
            [e.target.name]: e.target.value,
        }));
        // временно да видим данните
        console.log(loginData); 
    };

    return (
        <section className="auth">

            <h2>Login</h2>

            <form onSubmit={submitHandler}>

                <label>Username</label>
                <input name="username" id="username" value={loginData.username} onChange={loginFormHandler} type="text" />

                <label>Password</label>
                <input name="password" id="password" value={loginData.password}onChange={loginFormHandler} type="password" />

                <button>Login</button>

            </form>

        </section>
    );
}