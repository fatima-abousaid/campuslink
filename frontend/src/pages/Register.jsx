import "./Register.css";
import { useState, useContext } from "react";
import axiosClient from "../api/axiosClient";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const { setUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    password_confirmation: "",
    accept: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.accept) {
      alert("Vous devez accepter les conditions !");
      return;
    }

    if (form.password !== form.password_confirmation) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      const res = await axiosClient.post("/register", form);

      setUser(res.data.user);
      alert("Compte créé avec succès !");
    } catch (err) {
      alert("Erreur lors de l'inscription !");
    }
  };

  return (
    <div className="register-container">

      {/* LOGO */}
      <img src="/logo.png" alt="CampusLink" className="logo" />

      <h2>Créer un compte</h2>

      <form onSubmit={handleSubmit}>

        <div className="row">
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={form.nom}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            value={form.prenom}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email académique"
          value={form.email}
          onChange={handleChange}
          required
        />

        {/* PASSWORD */}
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Mot de passe"
            value={form.password}
            onChange={handleChange}
            required
          />

          <span className="eye" onClick={() => setShowPassword(!showPassword)}>
            👁️
          </span>
        </div>

        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirmer le mot de passe"
          value={form.password_confirmation}
          onChange={handleChange}
          required
        />

        {/* CONDITIONS */}
        <label className="conditions">
          <input
            type="checkbox"
            name="accept"
            checked={form.accept}
            onChange={handleChange}
          />
          J’accepte les conditions d’utilisation
        </label>

        <button type="submit">Créer un compte</button>
      </form>

      <div className="divider">
        <span>Ou</span>
      </div>

      <p className="login-link">
        Vous avez déjà un compte ?
        <a href="/login"> Se connecter </a>
      </p>
    </div>
  );
}
