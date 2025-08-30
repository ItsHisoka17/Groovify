import { useEffect, useState } from "react";
import "../styles/Home.css";
import ProfileCard from "../components/Profile";
import TopTracks from "../components/Tracks";
import TopArtists from "../components/Artists";
import Logo from "../components/Logo";

export default function Home() {
  const [user, setUser] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userRes, tracksRes, artistsRes] = await Promise.all([
          fetch("https://groovify.space/api?data=user_data", { credentials: "include" }),
          fetch("https://groovify.space/api?data=top_tracks", { credentials: "include" }),
          fetch("https://groovify.space/api?data=top_artists", { credentials: "include" }),
        ]);

        if (userRes.status !== 200) {
          window.location.href = "/login";
          return;
        }

        const userData = await userRes.json();
        const trackData = await tracksRes.json();
        const artistData = await artistsRes.json();

        setUser(userData);
        setTracks(trackData.slice(0, 5));
        setArtists(artistData.slice(0, 5));
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="home-loading">
        <Logo />
        <p className="loading-text">Curating your woodsy vibe...</p>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <Logo />
      <div className="boards-container">
        <div className="board">
          <ProfileCard user={user} />
        </div>
        <div className="board">
          <TopTracks tracks={tracks} />
        </div>
        <div className="board">
          <TopArtists artists={artists} />
        </div>
      </div>
    </div>
  );
}
