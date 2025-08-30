import { useEffect, useState } from "react";
import "../styles/Home.css";
import Profile from "../components/Profile";
import Tracks from "../components/Tracks";
import Artists from "../components/Artists";
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
          fetch("https://groovify.space/api?data=user_data"),
          fetch("https://groovify.space/api?data=top_tracks"),
          fetch("https://groovify.space/api?data=top_artists"),
        ]);

        if (userRes.status !== 200) {
          window.location.href = "/login";
          return;
        }

        const userData = await userRes.json();
        const trackData = await tracksRes.json();
        const artistData = await artistsRes.json();

        setUser(userData);
        setTracks(trackData);
        setArtists(artistData);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="home-loading">
        <Logo spinning />
        <h2>Loading your woodsy vibe...</h2>
      </div>
    );
  }

  return (
    <div className="home-container">
      <Profile user={user} />
      <div className="boards">
        <Tracks tracks={tracks} />
        <Artists artists={artists} />
      </div>
    </div>
  );
}
