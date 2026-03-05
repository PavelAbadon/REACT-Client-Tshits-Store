export default function Login() {
    return (
        <section className="auth">

            <h2>Login</h2>

            <form>

                <label>Email or Username</label>
                <input type="text" />

                <label>Password</label>
                <input type="password" />

                <button>Login</button>

            </form>

        </section>
    );
}