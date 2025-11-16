import "./Login.css";
import { useContext, useState } from "react";
import axiosClient from "../api/axiosClient";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {

  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosClient.post("/login", { email, password });
      setUser(res.data.user);
      alert("Connexion réussie !");
    } catch (err) {
      alert("Email ou mot de passe incorrect !");
    }
  };

  return (
    <div className="login-container">

      {/* LOGO */}
      <img src="/logo.png" alt="CampusLink" className="logo" />

      <h2>Connexion</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email académique"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD FIELD */}
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            👁️
          </span>
        </div>

        {/* OPTIONS */}
        <div className="login-options">
          <label className="remember-me">
            <input type="checkbox" />
            Se souvenir de moi
          </label>

          {/* 👉 رابط mot de passe oublié */}
          <Link to="/forgot-password" className="forgot-password">
            Mot de passe oublié ?
          </Link>
        </div>

        <button type="submit">Se connecter</button>
      </form>

      {/* DIVIDER */}
      <div className="divider">
        <span>Ou</span>
      </div>

      {/* REGISTER LINK */}
      <p className="register">
        Pas de compte ?  
        <Link to="/register"> Créer un compte </Link>
      </p>

    </div>
  );
}
