import Image from '../../components/image/image.jsx';
import './authPage.css'
import {useState} from "react";
import apiRequest from "../../utils/apiRequest.js";
import {useNavigate} from "react-router";

const AuthPage = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData)
        try {
            const res = await apiRequest.post(`/users/auth/${isRegister ? "register" : "login"}`, data)
            navigate('/');
        } catch (e) {
            setError(e.response.data.message)
        }
    }

    return (
        <div className="authPage">
            <div className="authContainer">
                <Image
                    src="/general/logo.png"
                    alt="logo"
                    width={36}
                    height={36}
                />
                <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
                {isRegister ? (
                    <form
                        key="registerForm"
                        onSubmit={handleSubmit}
                    >
                        <div className="formGroup">
                            <label htmlFor="username">Username</label>
                            <input
                                type="username"
                                placeholder="Username"
                                id="username"
                                name="username"
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="displayName">Name</label>
                            <input
                                type="displayName"
                                placeholder="displayName"
                                id="displayName"
                                name="displayName"
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="Passowrd"
                                id="password"
                                name="password"
                                required
                                minLength="8"
                            />
                        </div>
                        <button type="submit">Register</button>
                        <p>
                            Do you have an account? <strong onClick={() => setIsRegister(false)}>Login</strong>
                        </p>
                        {error && <p className="error">{error}</p>}
                    </form>
                ) : (
                    <form
                        key="loginForm"
                        onSubmit={handleSubmit}
                    >
                        <div className="formGroup">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="Email"
                                id="password"
                                name="password"
                                required
                            />
                        </div>
                        <button type="submit">Login</button>
                        <p>
                            Don&apos;t have an account? <strong onClick={() => setIsRegister(true)}>Register</strong>
                        </p>
                        {error && <p className="error">{error}</p>}
                    </form>
                )}
            </div>
        </div>
    )
}
export default AuthPage
