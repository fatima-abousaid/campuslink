import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/add">Ajouter annonce</Link>
            <Link to="/login">Connexion</Link>
        </nav>
    );
}
