import React from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Déconnecté !");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <Link className="navbar-brand" to="/">SUNU METEO</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          {!isLoggedIn && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Connexion</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Inscription</Link>
              </li>
            </>
          )}
        </ul>
        {isLoggedIn && (
          <button className="btn btn-outline-light" onClick={handleLogout}>Déconnexion</button>
        )}
      </div>
    </nav>
  );
}
