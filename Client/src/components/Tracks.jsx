import React from "react";
import "../styles/Tracks.css";

export default function Tracks({ tracks }) {
  if (!tracks || tracks.length === 0) {
    return (
      <div className="tracks-container">
        <h3>Your Top Tracks</h3>
        <div className="track-list">
          <div className="track-item placeholder" />
          <div className="track-item placeholder" />
          <div className="track-item placeholder" />
        </div>
      </div>
    );
  }

  return (
    <div className="tracks-container">
      <h3>Your Top Tracks</h3>
      <div className="track-list">
        {tracks.map((t, i) => (
          <a key={i} href={t.url} target="_blank" rel="noreferrer" className="track-item">
            <div className="track-thumb">
              <img src={t.image} alt={t.name} />
            </div>
            <div className="track-meta">
              <h4>{t.name}</h4>
              <p>{Array.isArray(t.artists) ? t.artists.join(", ") : t.artists}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
