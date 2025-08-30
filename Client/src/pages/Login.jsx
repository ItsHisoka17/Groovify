import React from "react";
import "../styles/Login.css";

export default function Login() {
  const handleLogin = () => {
    window.location.href = "https://groovify.space/authorize";
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Groovify</h1>
        <p className="login-subtitle">Step into the woods and find your rhythm</p>
        <button className="login-button" onClick={handleLogin}>
          Log in with Spotify
        </button>
      </div>
    </div>
  );
}
