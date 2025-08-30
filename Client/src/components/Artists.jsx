import React from "react";
import "../styles/Artists.css";

export default function Artists({ artists }) {
  if (!artists || artists.length === 0) {
    return (
      <div className="artists-container">
        <h3>Your Top Artists</h3>
        <div className="artists-grid">
          <div className="artist-tile placeholder" />
          <div className="artist-tile placeholder" />
          <div className="artist-tile placeholder" />
        </div>
      </div>
    );
  }

  return (
    <div className="artists-container">
      <h3>Your Top Artists</h3>
      <div className="artists-grid">
        {artists.map((a, i) => (
          <a key={i} href={a.url} target="_blank" rel="noreferrer" className="artist-tile">
            <div className="artist-thumb">
              <img src={a.image} alt={a.name} />
            </div>
            <div className="artist-meta">
              <h4>{a.name}</h4>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
