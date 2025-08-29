import { useEffect, useState } from "react";
import "../styles/Home.css";
import ProfileCard from "../components/Profile";
import TopTracks from "../components/Tracks";
import TopArtists from "../components/Artists";

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
        };

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
      <div className="loading-screen">
        <h2>Loading your vibe...</h2>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <ProfileCard user={user} />
      <section className="data-sections">
        <TopTracks tracks={tracks} />
        <TopArtists artists={artists} />
      </section>
    </div>
  );
}
