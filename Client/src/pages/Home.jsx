import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Profile from "../components/Profile";
import TopTracks from "../components/Tracks";
import TopArtists from "../components/Artists";
import "../styles/Home.css";

const API_BASE = import.meta.env.VITE_API_BASE || "https://groovify.space";

export default function Home() {
  const [user, setUser] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchAll() {
      try {
        const [uRes, tRes, aRes] = await Promise.all([
          fetch(`${API_BASE}/api?data=user_data`, { credentials: "include", mode: "cors" }),
          fetch(`${API_BASE}/api?data=top_tracks`, { credentials: "include", mode: "cors" }),
          fetch(`${API_BASE}/api?data=top_artists`, { credentials: "include", mode: "cors" }),
        ]);

        if (uRes.status !== 200) {
          if (!cancelled) window.location.href = "/login";
          return;
        }

        const u = await uRes.json();
        const t = await tRes.json();
        const a = await aRes.json();

        if (!cancelled) {
          setUser(u);
          setTracks(Array.isArray(t) ? t.slice(0, 5) : []);
          setArtists(Array.isArray(a) ? a.slice(0, 5) : []);
        }
      } catch (e) {
        if (!cancelled) {
          setErr("Failed to load your profile. Try refreshing.");
          console.error(e);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchAll();
    return () => { cancelled = true; };
  }, []);

  if (loading) {
    return (
      <div className="home-loading">
        <Logo small />
        <div className="home-loader">
          <svg className="holo-ring" viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r="42" stroke="url(#g1)" strokeWidth="6" fill="none" strokeLinecap="round" />
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.95" />
                <stop offset="60%" stopColor="var(--accent-2)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="loader-copy">assembling your sonic mirror...</div>
        </div>
      </div>
    );
  }

  return (
    <main className="home-root">
      <div className="home-top">
        <Logo />
        <div className="home-actions">
          <button className="ghost-btn" onClick={() => window.location.href = "/api/logout"}>Sign out</button>
        </div>
      </div>

      {err && <div className="home-error">{err}</div>}

      <section className="home-grid">
        <aside className="panel profile-panel">
          <Profile user={user} />
        </aside>

        <section className="panel tracks-panel">
          <TopTracks tracks={tracks} />
        </section>

        <section className="panel artists-panel">
          <TopArtists artists={artists} />
        </section>
      </section>
    </main>
  );
}
