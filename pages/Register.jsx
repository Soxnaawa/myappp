import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Register() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/user/register", {
        nom,
        email,
        motDePasse,
      });

      alert("Inscription réussie !");
      navigate("/login");

    } catch (err) {
      alert("Erreur d'inscription : " + (err.response?.data?.message || "Veuillez réessayer."));
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Inscription</h2>
      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", maxWidth: 300 }}>
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          required
          onChange={(e) => setNom(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />
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
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}
