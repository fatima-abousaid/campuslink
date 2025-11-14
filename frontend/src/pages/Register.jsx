import { useState } from "react";
import axiosClient from "../api/axiosClient";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosClient.post("/register", {
                name, email, password
            });
            alert("Compte créé avec succès !");
        } catch (err) {
            alert("Erreur !");
        }
    };

    return (
        <div>
            <h2>Créer un compte</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Nom" 
                       onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" 
                       onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Mot de passe"
                       onChange={(e) => setPassword(e.target.value)} />
                <button>S'inscrire</button>
            </form>
        </div>
    );
}
