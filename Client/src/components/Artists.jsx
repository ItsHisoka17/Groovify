import React from "react";
import "../styles/Artists.css";

export default function Artists({ artists }) {
  if (!artists) return null;

  return (
    <div className="artists-board-content">
      <div className="row top">
        {artists.slice(0,1).map((a, i) => (
          <a href={a.url} key={i} target="_blank" rel="noreferrer" className="artist-card">
            <img src={a.image} alt={a.name} />
            <h4>{a.name}</h4>
          </a>
        ))}
      </div>
      <div className="row middle">
        {artists.slice(1,3).map((a, i) => (
          <a href={a.url} key={i} target="_blank" rel="noreferrer" className="artist-card">
            <img src={a.image} alt={a.name} />
            <h4>{a.name}</h4>
          </a>
        ))}
      </div>
      <div className="row bottom">
        {artists.slice(3,6).map((a, i) => (
          <a href={a.url} key={i} target="_blank" rel="noreferrer" className="artist-card">
            <img src={a.image} alt={a.name} />
            <h4>{a.name}</h4>
          </a>
        ))}
      </div>
    </div>
  );
}
