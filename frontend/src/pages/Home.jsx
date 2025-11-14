import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

export default function Home() {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        axiosClient.get("/announcements")
            .then(res => setAnnouncements(res.data));
    }, []);

    return (
        <div>
            <h2>Liste des annonces</h2>
            {announcements.map(a => (
                <div key={a.id}>
                    <h3>{a.titre}</h3>
                    <p>{a.description}</p>
                </div>
            ))}
        </div>
    );
}
