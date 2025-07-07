import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/user/login", {
        email,
        motDePasse,
      });

      alert("Connexion réussie !");
      localStorage.setItem("token", res.data.token); // si backend renvoie un token
      navigate("/"); // rediriger vers la page d'accueil

    } catch (err) {
      alert("Erreur de connexion : " + (err.response?.data?.message || "Vérifiez vos informations."));
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Connexion</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", maxWidth: 300 }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={motDePasse}
          required
          onChange={(e) => setMotDePasse(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
