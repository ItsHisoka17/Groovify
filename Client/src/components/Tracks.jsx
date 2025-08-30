import React from "react";
import "../styles/Tracks.css";

export default function Tracks({ tracks }) {
  if (!tracks) return null;

  return (
    <div className="tracks-board-content">
      <div className="row top">
        {tracks.slice(0,1).map((t,i)=>(
          <a href={t.url} key={i} target="_blank" rel="noreferrer" className="track-card">
            <img src={t.image} alt={t.name}/>
            <h4>{t.name}</h4>
          </a>
        ))}
      </div>
      <div className="row middle">
        {tracks.slice(1,3).map((t,i)=>(
          <a href={t.url} key={i} target="_blank" rel="noreferrer" className="track-card">
            <img src={t.image} alt={t.name}/>
            <h4>{t.name}</h4>
          </a>
        ))}
      </div>
      <div className="row bottom">
        {tracks.slice(3,6).map((t,i)=>(
          <a href={t.url} key={i} target="_blank" rel="noreferrer" className="track-card">
            <img src={t.image} alt={t.name}/>
            <h4>{t.name}</h4>
          </a>
        ))}
      </div>
    </div>
  );
}
