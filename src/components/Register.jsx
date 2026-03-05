export default function Register(){
    return(
        <section className="auth">

        <h2>Register</h2>

            <form>

            <label>Username</label>
            <input type="text"/>

            <label>Email</label>
            <input type="email"/>

            <label>Password</label>
            <input type="password"/>

            <button>Create Account</button>

            </form>

        </section>

    );
}