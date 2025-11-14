import { useContext, useState } from "react";
import axiosClient from "../api/axiosClient";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
    const { setUser } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosClient.post("/login", {
                email,
                password,
            });

            setUser(res.data.user);
            localStorage.setItem("token", res.data.token);

            alert("Login successful! 🎉");
        } catch (error) {
            alert("Login failed ❌");
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
        </form>
    );
}
