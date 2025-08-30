import "../styles/Tracks.css";

export default function Tracks({ tracks }) {
  return (
    <div className="tracks-container">
      <h3>Your Top Tracks</h3>
      <div className="tracks-grid">
        {tracks.map((t, i) => (
          <a href={t.url} key={i} className="track-card" target="_blank" rel="noreferrer">
            <img src={t.image} alt={t.name} />
            <div className="track-info">
              <h4>{t.name}</h4>
              <p>{t.artists.join(", ")}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
