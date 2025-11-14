import "./Login.css";
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
      alert("Connexion réussie !");
    } catch (err) {
      alert("Email ou mot de passe incorrect !");
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
