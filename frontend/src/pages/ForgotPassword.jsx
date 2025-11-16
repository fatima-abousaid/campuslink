import { useState } from "react";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Un lien de réinitialisation sera envoyé à votre email.");
  };

  return (
    <div className="forgot-container">
      <img src="/logo.png" alt="CampusLink" className="logo" />
      <h2>Réinitialiser le mot de passe</h2>

      <p className="text">
        Entrez votre email académique pour recevoir un lien de réinitialisation.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email académique"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Envoyer le lien</button>
      </form>

      <p className="back">
        <a href="/login">← Retour à la connexion</a>
      </p>
    </div>
  );
}
