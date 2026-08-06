import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        email: "",
        password: ""

    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await axios.post(
                "http://localhost:8080/api/auth/login",
                form
            );

            if (response.data) {

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data)
                );

                navigate("/dashboard");

            } else {

                alert("Invalid Credentials");

            }

        } catch {

            alert("Login Failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="login-page">

            <div className="login-left">

                <div>

                    <h1>FlowLeave</h1>

                    <h2>Smart Leave Management for Modern Workplaces</h2>

                    <p>

                        A premium enterprise leave management platform
                        built using Spring Boot and React.

                    </p>

                </div>

            </div>

            <div className="login-right">

                <form
                    className="login-card"
                    onSubmit={handleSubmit}
                >

                    <h2>Welcome Back</h2>

                    <p>Sign in to continue</p>

                    <input

                        type="email"

                        name="email"

                        placeholder="Email"

                        value={form.email}

                        onChange={handleChange}

                        required

                    />

                    <input

                        type="password"

                        name="password"

                        placeholder="Password"

                        value={form.password}

                        onChange={handleChange}

                        required

                    />

                    <button
                        type="submit"
                    >

                        {

                            loading

                                ? "Signing In..."

                                : "Login"

                        }

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;