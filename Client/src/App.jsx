// src/App.jsx
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Logo from "./components/Logo";
import "./styles/App.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function checkSession() {
      try {
        const res = await fetch("https://groovify.space/api/validate_session", {
          credentials: "include",
          mode: "cors"
        });
        if (!mounted) return;
        setLoggedIn(res.status === 200);
      } catch (err) {
        if (!mounted) return;
        setLoggedIn(false);
        console.error("Session check failed:", err);
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    }
    checkSession();
    return () => { mounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="app-container">
        <div className="app-overlay">
          <Logo small />
          <p className="loading-tag">Warming the forest — gathering your songs…</p>
          <div className="loader">
            <span className="log-bar" style={{ '--i': 0 }} />
            <span className="log-bar" style={{ '--i': 1 }} />
            <span className="log-bar" style={{ '--i': 2 }} />
            <span className="log-bar" style={{ '--i': 3 }} />
            <span className="log-bar" style={{ '--i': 4 }} />
          </div>
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
