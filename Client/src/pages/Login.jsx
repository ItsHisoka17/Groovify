import React from "react";
import Logo from "../components/Logo";
import "../styles/Login.css";

const API_BASE = "https://groovify.space";

export default function Login() {
  const handleLogin = () => {
    window.location.href = `${API_BASE}/authorize`;
  };

  return (
    <div className="login-canvas" role="main">
      <div className="login-ambient" aria-hidden="true" />
      <div className="signin-card" aria-labelledby="signin-title">
        <Logo small />
        <h1 id="signin-title" className="signin-title">Groovify</h1>
        <p className="signin-sub">Sign in to unlock your sonic profile</p>

        <button className="spotify-button" onClick={handleLogin} aria-label="Connect with Spotify">
          <svg className="spotify-icon" viewBox="0 0 168 168" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M84 0a84 84 0 1 0 84 84A84 84 0 0 0 84 0Zm38.4 121.9a5.5 5.5 0 0 1-7.6 1.8c-20.8-12.7-47-15.6-77.7-8.7a5.5 5.5 0 1 1-2.4-10.7c33.5-7.5 62.5-4.1 85.6 10 2.6 1.6 3.4 5 2 7.6Zm10.8-24.5a6.8 6.8 0 0 1-9.2 2.2c-23.8-14.6-60.1-18.9-88.3-10.6a6.8 6.8 0 1 1-3.8-13.1c31.7-9.2 71.8-4.4 99.1 12.3a6.8 6.8 0 0 1 2.2 9.2Zm1-25.9c-28.6-17-76.2-18.6-103.6-10.4a8.1 8.1 0 0 1-4.7-15.6c30.8-9.2 83.4-7.4 116.3 12 3.8 2.2 5.1 7 2.9 10.8a7.9 7.9 0 0 1-11 3.2Z"/>
          </svg>
          Connect with Spotify
        </button>

        <div className="signin-foot">We only request the permissions needed to visualize your listening.</div>
      </div>
    </div>
  );
}
