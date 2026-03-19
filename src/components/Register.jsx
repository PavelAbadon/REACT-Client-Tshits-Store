import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register(){
    const navigate = useNavigate();
    
    const [registerData, setRegisterData] = useState({
        username: 'John Dow',
        email: 'email@example.com',
        password: '******',
        confirmPassword: '******',
        
    }) ;

    const registerFormHandler = (e) => {
        
        setRegisterData((state) =>({
            ...state,
            [e.target.name]: e.target.value,
        }));

        //console.log(registerData); // временно да видим данните
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        // Validation password
        if (registerData.password !== registerData.confirmPassword) {
            return alert('Passwords do not match');
        }

        // API call
        try {
            
            const response = await fetch('http://localhost:3030/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: registerData.username,
                    email: registerData.email,
                    password: registerData.password,
                }),
            });

            const data = await response.json();

            // проверка за грешка
            if (!response.ok) {
                throw new Error(data.message);
            }

            console.log('Успешна регистрация:', data);
            navigate('/');

            // Запазване в LocaleStorage
            //localStorage.setItem('auth', JSON.stringify(data));

        } catch (error) {
            alert(error.message);
        }
    };
    
    
    return(
        <section className="auth">

        <h2>Register</h2>

            <form onSubmit={submitHandler}>

            <label>Username</label>
            <input value={registerData.username} id="username" name="username" onChange={registerFormHandler} type="text"/>

            <label>Email</label>
            <input value={registerData.email} id="email" name="email" onChange={registerFormHandler} type="email"/>

            <label>Password</label>
            <input value={registerData.password} id="password" name="password" onChange={registerFormHandler} type="password"/>

            <label>Repeat Password</label>
            <input value={registerData.confirmPassword} id="confirmPassword" name="confirmPassword" onChange={registerFormHandler} type="password"/>

            <button type="submit">Create Account</button>

            </form>

        </section>

    );
}