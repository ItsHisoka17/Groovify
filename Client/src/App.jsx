// src/App.jsx
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Logo from "./components/Logo";
import "./styles/App.css";

const API_BASE = "https://groovify.space";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function checkSession() {
      try {
        const res = await fetch(`${API_BASE}/api/validate_session`, {
          credentials: "include",
          mode: "cors",
        });
        if (!mounted) return;
        setLoggedIn(res.status === 200);
      } catch (err) {
        if (!mounted) return;
        console.error("Session validation failed:", err);
        setLoggedIn(false);
      } finally {
        if (!mounted) setLoading(false);
        else setTimeout(() => setLoading(false), 300);
      }
    }
    checkSession();
    return () => { mounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="app-canvas" aria-busy="true" aria-live="polite">
        <div className="ambient-layer" />
        <div className="center-card">
          <Logo small />
          <p className="loading-copy">Booting neural soundscape...</p>

          <div className="holo-loader" role="status" aria-label="Loading">
            <svg className="holo-ring" viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="var(--accent-2)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
              </defs>
              <circle cx="60" cy="60" r="42" stroke="url(#g1)" strokeWidth="8" fill="none" strokeLinecap="round" />
            </svg>
            <div className="holo-pulse" />
          </div>

          <div className="micro-copy">Connecting to your sound identity...</div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={loggedIn ? "/home" : "/login"} />} />
      </Routes>
    </Router>
  );
}
